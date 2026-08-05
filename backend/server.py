from dotenv import load_dotenv
from pathlib import Path
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

import os
import io
import re
import logging
from datetime import datetime, timezone, timedelta
from typing import List, Optional, Annotated

import bcrypt
import jwt
import httpx
from pypdf import PdfReader
from bson import ObjectId
from fastapi import FastAPI, APIRouter, HTTPException, Request, Response, Depends, UploadFile, File
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field, EmailStr, BeforeValidator

# ---------------- DB ----------------
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

JWT_SECRET = os.environ['JWT_SECRET']
JWT_ALGORITHM = "HS256"

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY", "")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Lotus USA Inc.")
LEAD_NOTIFY_EMAIL = os.environ.get("LEAD_NOTIFY_EMAIL", "info@lotususainc.com")


async def send_lead_email(lead: dict):
    if not EMAIL_KEY:
        return
    html = f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;color:#0B1F4D">
      <tr><td style="padding:16px 0"><h2 style="margin:0;color:#0B1F4D">New Consultation Request</h2></td></tr>
      <tr><td><table cellpadding="6" style="font-size:14px">
        <tr><td style="color:#4B5563">Name</td><td><strong>{lead.get('name','')}</strong></td></tr>
        <tr><td style="color:#4B5563">Email</td><td>{lead.get('email','')}</td></tr>
        <tr><td style="color:#4B5563">Phone</td><td>{lead.get('phone','') or '—'}</td></tr>
        <tr><td style="color:#4B5563">Organization</td><td>{lead.get('company','') or '—'}</td></tr>
        <tr><td style="color:#4B5563">Service</td><td>{lead.get('service','') or '—'}</td></tr>
        <tr><td style="color:#4B5563;vertical-align:top">Message</td><td>{lead.get('message','')}</td></tr>
      </table></td></tr>
      <tr><td style="padding-top:16px;color:#9CA3AF;font-size:12px">Submitted via lotususainc.com</td></tr>
    </table>"""
    payload = {
        "to": [LEAD_NOTIFY_EMAIL],
        "subject": f"New Lead: {lead.get('name','')} — {lead.get('service') or 'General Inquiry'}",
        "html": html,
        "from_name": EMAIL_FROM_NAME,
        "contact_email": lead.get("email"),
    }
    try:
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(f"{EMAIL_BASE_URL}/api/v1/email/send",
                                     headers={"X-Email-Key": EMAIL_KEY}, json=payload)
        resp.raise_for_status()
    except Exception as e:
        logger.error(f"Lead email failed: {e}")


async def send_newsletter_email(email: str):
    if not EMAIL_KEY:
        return
    html = f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;color:#0B1F4D">
      <tr><td style="padding:16px 0"><h2 style="margin:0;color:#0B1F4D">New Newsletter Subscriber</h2></td></tr>
      <tr><td style="font-size:14px">A new subscriber joined the Lotus USA newsletter:</td></tr>
      <tr><td style="padding-top:8px;font-size:16px"><strong>{email}</strong></td></tr>
      <tr><td style="padding-top:16px;color:#9CA3AF;font-size:12px">Submitted via lotususainc.com</td></tr>
    </table>"""
    payload = {
        "to": [LEAD_NOTIFY_EMAIL],
        "subject": "New Newsletter Subscriber",
        "html": html,
        "from_name": EMAIL_FROM_NAME,
        "contact_email": email,
    }
    try:
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(f"{EMAIL_BASE_URL}/api/v1/email/send",
                                     headers={"X-Email-Key": EMAIL_KEY}, json=payload)
        resp.raise_for_status()
    except Exception as e:
        logger.error(f"Newsletter email failed: {e}")

app = FastAPI(title="Lotus USA Inc. API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger("lotus")

PyObjectId = Annotated[str, BeforeValidator(str)]


def now_iso():
    return datetime.now(timezone.utc).isoformat()


def slugify(text: str) -> str:
    s = re.sub(r'[^a-zA-Z0-9\s-]', '', text or '').strip().lower()
    s = re.sub(r'[\s_-]+', '-', s)
    return s or "post"


# ---------------- Auth helpers ----------------
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))


def create_access_token(user_id: str, email: str) -> str:
    payload = {"sub": user_id, "email": email,
               "exp": datetime.now(timezone.utc) + timedelta(hours=12), "type": "access"}
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


async def get_current_user(request: Request) -> dict:
    token = request.cookies.get("access_token")
    if not token:
        auth = request.headers.get("Authorization", "")
        if auth.startswith("Bearer "):
            token = auth[7:]
    if not token:
        raise HTTPException(status_code=401, detail="Not authenticated")
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        user = await db.users.find_one({"_id": ObjectId(payload["sub"])})
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        user["_id"] = str(user["_id"])
        user.pop("password_hash", None)
        return user
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


# ---------------- Models ----------------
class LoginInput(BaseModel):
    email: EmailStr
    password: str


class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = ""
    company: Optional[str] = ""
    service: Optional[str] = ""
    message: str


class NewsletterCreate(BaseModel):
    email: EmailStr


class BlogInput(BaseModel):
    title: str
    excerpt: str
    content: str
    category: str = "Insights"
    cover_image: Optional[str] = ""
    author: str = "Lotus USA Inc."
    published: bool = True


# ---------------- Auth routes ----------------
@api_router.post("/auth/login")
async def login(payload: LoginInput, response: Response):
    email = payload.email.lower()
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(payload.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    token = create_access_token(str(user["_id"]), email)
    response.set_cookie("access_token", token, httponly=True, secure=True,
                        samesite="none", max_age=43200, path="/")
    return {"id": str(user["_id"]), "email": email, "name": user.get("name", "Admin"), "role": user.get("role", "admin")}


@api_router.post("/auth/logout")
async def logout(response: Response):
    response.delete_cookie("access_token", path="/")
    return {"ok": True}


@api_router.get("/auth/me")
async def me(user: dict = Depends(get_current_user)):
    return {"id": user["_id"], "email": user["email"], "name": user.get("name", "Admin"), "role": user.get("role", "admin")}


# ---------------- Contact / Leads ----------------
@api_router.post("/contacts")
async def create_contact(payload: ContactCreate):
    doc = payload.model_dump()
    doc["created_at"] = now_iso()
    doc["status"] = "new"
    res = await db.contacts.insert_one(doc)
    doc["id"] = str(res.inserted_id)
    doc.pop("_id", None)
    await send_lead_email(doc)
    return {"ok": True, "id": doc["id"]}


@api_router.get("/contacts")
async def list_contacts(user: dict = Depends(get_current_user)):
    items = await db.contacts.find().sort("created_at", -1).to_list(1000)
    for it in items:
        it["id"] = str(it.pop("_id"))
    return items


@api_router.delete("/contacts/{cid}")
async def delete_contact(cid: str, user: dict = Depends(get_current_user)):
    await db.contacts.delete_one({"_id": ObjectId(cid)})
    return {"ok": True}


# ---------------- Newsletter ----------------
@api_router.post("/newsletter")
async def subscribe(payload: NewsletterCreate):
    email = payload.email.lower()
    existing = await db.newsletter.find_one({"email": email})
    if existing:
        return {"ok": True, "already": True}
    await db.newsletter.insert_one({"email": email, "created_at": now_iso()})
    await send_newsletter_email(email)
    return {"ok": True}


@api_router.get("/newsletter")
async def list_newsletter(user: dict = Depends(get_current_user)):
    items = await db.newsletter.find().sort("created_at", -1).to_list(2000)
    for it in items:
        it["id"] = str(it.pop("_id"))
    return items


# ---------------- Blog ----------------
@api_router.get("/blog")
async def list_blog(all: bool = False, user_admin: bool = False):
    query = {} if all else {"published": True}
    items = await db.blog.find(query).sort("created_at", -1).to_list(500)
    for it in items:
        it["id"] = str(it.pop("_id"))
    return items


@api_router.get("/blog/{slug}")
async def get_blog(slug: str):
    doc = await db.blog.find_one({"slug": slug})
    if not doc:
        raise HTTPException(status_code=404, detail="Post not found")
    doc["id"] = str(doc.pop("_id"))
    return doc


@api_router.post("/blog")
async def create_blog(payload: BlogInput, user: dict = Depends(get_current_user)):
    doc = payload.model_dump()
    base = slugify(doc["title"])
    slug = base
    i = 1
    while await db.blog.find_one({"slug": slug}):
        i += 1
        slug = f"{base}-{i}"
    doc["slug"] = slug
    doc["created_at"] = now_iso()
    doc["updated_at"] = now_iso()
    res = await db.blog.insert_one(doc)
    doc["id"] = str(res.inserted_id)
    doc.pop("_id", None)
    return doc


@api_router.put("/blog/{bid}")
async def update_blog(bid: str, payload: BlogInput, user: dict = Depends(get_current_user)):
    upd = payload.model_dump()
    upd["updated_at"] = now_iso()
    await db.blog.update_one({"_id": ObjectId(bid)}, {"$set": upd})
    doc = await db.blog.find_one({"_id": ObjectId(bid)})
    doc["id"] = str(doc.pop("_id"))
    return doc


@api_router.delete("/blog/{bid}")
async def delete_blog(bid: str, user: dict = Depends(get_current_user)):
    await db.blog.delete_one({"_id": ObjectId(bid)})
    return {"ok": True}


@api_router.get("/")
async def root():
    return {"message": "Lotus USA Inc. API"}


# ---------------- Capability Statement (auto-refresh) ----------------
ASSETS_DIR = ROOT_DIR.parent / "frontend" / "public" / "assets"
CAP_PDF_NAME = "Lotus-USA-Capability-Statement.pdf"

NAICS_TITLES = {
    "541512": "Computer Systems Design Services",
    "541513": "Computer Facilities Management Services",
    "541511": "Custom Computer Programming Services",
    "541519": "Other Computer Related Services",
    "541611": "Administrative Management & General Management Consulting Services",
    "541618": "Other Management Consulting Services",
    "541690": "Other Scientific & Technical Consulting Services",
    "541990": "All Other Professional, Scientific & Technical Services",
    "541930": "Translation & Interpretation Services",
    "561110": "Office Administrative Services",
    "561612": "Security Guards & Patrol Services",
    "561710": "Exterminating & Pest Control Services",
    "561720": "Janitorial Services",
    "561210": "Facilities Support Services",
    "423430": "Computer & Computer Peripheral Equipment & Software (Wholesale)",
    "423450": "Medical, Dental & Hospital Equipment & Supplies (Wholesale)",
    "517911": "Telecommunications Resellers",
    "518111": "Internet Service Providers",
    "518210": "Data Processing, Hosting & Related Services",
    "532412": "Construction, Mining & Forestry Machinery & Equipment Rental & Leasing",
    "532490": "Other Commercial & Industrial Machinery & Equipment Rental & Leasing",
    "621111": "Offices of Physicians (except Mental Health Specialists)",
    "621399": "Offices of All Other Miscellaneous Health Practitioners",
    "621512": "Diagnostic Imaging Centers",
}
VALID_NAICS_SECTORS = {"11", "21", "22", "23", "31", "32", "33", "42", "44", "45",
                       "48", "49", "51", "52", "53", "54", "55", "56", "61", "62",
                       "71", "72", "81", "92"}

DEFAULT_NAICS = [{"code": c, "desc": NAICS_TITLES.get(c, f"NAICS {c}")} for c in [
    "541512", "541513", "541611", "541618", "541690", "541930", "561110", "561612",
    "561710", "561720", "423430", "423450", "517911", "518111", "532412", "532490",
    "621111", "621399", "621512"]]

DEFAULT_REGISTRATION = [
    {"label": "UEI", "value": "JBKGG25MLPM9"},
    {"label": "CAGE Code", "value": "771V6"},
    {"label": "DUNS", "value": "079599348"},
    {"label": "Federal Tax ID", "value": "47-1943686"},
    {"label": "SAM", "value": "Active / Registered"},
    {"label": "CMMC", "value": "Level 2 Self-Assessment · S200046896"},
]

DEFAULT_AGENCIES = [
    "Department of Defense", "The Pentagon", "Department of the Army",
    "Department of the Navy (NSWC PCD)", "Department of the Air Force", "Space Base Delta",
    "DLA Land and Maritime", "U.S. Army Engineer District, Detroit",
    "U.S. Army Sergeants Major Academy", "U.S. Army Soldier Support Institute (USASSI)",
    "MICC – Fort Buchanan", "MICC – Fort Carson", "NASA",
    "National Institute of Standards and Technology (NIST)",
    "Internal Revenue Service (U.S. Treasury)", "Social Security Administration",
    "U.S. Department of Transportation", "Bureau of Land Management (Lakeview, OR)",
    "Western Area Power Administration (WAPA)",
    "California Department of General Services (OHR)",
    "California Department of Veterans Affairs", "County of Los Angeles",
    "City of Los Angeles", "Los Angeles Department of Water and Power (LADWP)",
    "Long Beach Transit",
]


def parse_capability_pdf(data: bytes) -> dict:
    reader = PdfReader(io.BytesIO(data))
    text = "\n".join((page.extract_text() or "") for page in reader.pages)
    upper = text.upper()

    # NAICS
    found = []
    for m in re.findall(r"\b(\d{6})\b", text):
        if m[:2] in VALID_NAICS_SECTORS and m not in found:
            found.append(m)
    naics = [{"code": c, "desc": NAICS_TITLES.get(c, f"NAICS {c}")} for c in found]

    # Registration identifiers (fallback to defaults when not found)
    reg = {r["label"]: r["value"] for r in DEFAULT_REGISTRATION}

    def grab(pattern):
        m = re.search(pattern, upper)
        return m.group(1).strip() if m else None

    uei = grab(r"(?:UEI|UNIQUE ENTITY(?:\s*ID| IDENTIFIER)?)[:\s#]*([A-Z0-9]{12})")
    cage = grab(r"CAGE\s*(?:CODE)?[:\s#]*([A-Z0-9]{5})")
    duns = grab(r"DUNS[:\s#]*([0-9]{9})")
    tax = grab(r"(?:FEDERAL TAX ID|TAX ID|TIN|EIN)[:\s#A-Z]*([0-9]{2}-[0-9]{7})")
    if uei:
        reg["UEI"] = uei
    if cage:
        reg["CAGE Code"] = cage
    if duns:
        reg["DUNS"] = duns
    if tax:
        reg["Federal Tax ID"] = tax

    registration = [{"label": r["label"], "value": reg[r["label"]]} for r in DEFAULT_REGISTRATION]
    return {"naics": naics or DEFAULT_NAICS, "registration": registration}


async def get_capability_doc():
    doc = await db.capability.find_one({"_id": "current"})
    if not doc:
        doc = {"_id": "current", "naics": DEFAULT_NAICS, "registration": DEFAULT_REGISTRATION,
               "agencies": DEFAULT_AGENCIES, "pdf": f"/assets/{CAP_PDF_NAME}",
               "updated_at": now_iso()}
        await db.capability.insert_one(doc)
    return doc


@api_router.get("/capability")
async def capability():
    doc = await get_capability_doc()
    doc.pop("_id", None)
    return doc


@api_router.post("/capability/upload")
async def upload_capability(file: UploadFile = File(...), user: dict = Depends(get_current_user)):
    if not (file.filename or "").lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Please upload a PDF file.")
    data = await file.read()
    try:
        parsed = parse_capability_pdf(data)
    except Exception as e:
        logger.error(f"PDF parse failed: {e}")
        raise HTTPException(status_code=422, detail="Could not read the PDF. Please try another file.")
    try:
        ASSETS_DIR.mkdir(parents=True, exist_ok=True)
        (ASSETS_DIR / CAP_PDF_NAME).write_bytes(data)
    except Exception as e:
        logger.error(f"PDF save failed: {e}")
        raise HTTPException(status_code=500, detail="Could not save the PDF.")
    update = {"naics": parsed["naics"], "registration": parsed["registration"],
              "pdf": f"/assets/{CAP_PDF_NAME}", "updated_at": now_iso()}
    await db.capability.update_one({"_id": "current"}, {"$set": update}, upsert=True)
    doc = await get_capability_doc()
    doc.pop("_id", None)
    return {"ok": True, "extracted": {"naics": len(parsed["naics"]),
            "registration": len(parsed["registration"])}, "capability": doc}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


SEED_POSTS = [
    {
        "title": "Understanding CMMC Level 2: A Practical Roadmap for Defense Contractors",
        "excerpt": "CMMC 2.0 reshapes how the Defense Industrial Base handles Controlled Unclassified Information. Here is a clear, actionable roadmap to reach Level 2 readiness.",
        "category": "Compliance",
        "content": "The Cybersecurity Maturity Model Certification (CMMC) 2.0 framework establishes a unified standard for protecting Controlled Unclassified Information (CUI) across the Defense Industrial Base. For contractors handling CUI, achieving CMMC Level 2 alignment with the 110 controls of NIST SP 800-171 is now a prerequisite for eligibility on many DoD contracts.\n\nA practical roadmap begins with a scoping exercise: identify where CUI is stored, processed, and transmitted across your environment. From there, a comprehensive gap assessment measures your current posture against all 110 controls. The findings feed directly into a System Security Plan (SSP) and a Plan of Action and Milestones (POA&M) that prioritizes remediation.\n\nMany organizations accelerate readiness by migrating regulated workloads into an accredited enclave such as Microsoft GCC High, which provides the sovereignty and boundary controls the framework expects. Continuous monitoring, documented policies, and workforce training complete the picture. With disciplined execution, most mid-size contractors can reach assessment readiness within a defined engagement window.",
        "cover_image": "https://static.prod-images.emergentagent.com/jobs/a2d8cb3e-4a12-4862-a7b8-6b2e309ad286/images/1b869add842f1770095d4d2cf730e1ee687251d52d2935870ff0512a435a1f99.jpeg",
        "author": "Lotus USA Inc.",
        "published": True,
    },
    {
        "title": "Zero Trust Architecture in the Public Sector: Beyond the Buzzword",
        "excerpt": "Zero Trust is a strategy, not a product. We break down how government organizations can operationalize identity-first security across hybrid environments.",
        "category": "Cybersecurity",
        "content": "Federal mandates have accelerated Zero Trust adoption, but implementation remains uneven. At its core, Zero Trust replaces implicit network trust with continuous verification of identity, device health, and context for every access request.\n\nSuccessful programs start with identity as the control plane: strong authentication, least-privilege access, and just-in-time elevation. Micro-segmentation limits lateral movement, while endpoint management enforces device posture before granting access to sensitive resources. Telemetry and analytics tie it together, providing the visibility needed for continuous monitoring and rapid response.\n\nThe transformation is incremental. Agencies that sequence their maturity, starting with high-value assets and expanding outward, realize measurable risk reduction without disrupting mission operations.",
        "cover_image": "https://static.prod-images.emergentagent.com/jobs/a2d8cb3e-4a12-4862-a7b8-6b2e309ad286/images/452451b9bf5ddc520454f4dc37f0f1de5cc7c9f41e9a6a5b70d3295548437326.jpeg",
        "author": "Lotus USA Inc.",
        "published": True,
    },
    {
        "title": "Modernizing Legacy Systems Without Disrupting the Mission",
        "excerpt": "Infrastructure modernization is high-stakes in government. Learn how phased cloud migration and DevSecOps reduce risk while accelerating delivery.",
        "category": "Digital Transformation",
        "content": "Legacy modernization is one of the most consequential undertakings a public-sector organization can pursue. The challenge is balancing the need for innovation with the reality of mission-critical continuity.\n\nA phased approach, anchored in a clear assessment of application dependencies, allows teams to rehost, replatform, or refactor workloads based on business value and technical debt. Cloud migration to environments such as Azure and AWS provides elasticity and resilience, while DevSecOps pipelines bake security and compliance into every release.\n\nThe result is a modernized estate that lowers operating costs, improves citizen and warfighter outcomes, and positions the organization to adopt AI and data analytics capabilities with confidence.",
        "cover_image": "https://static.prod-images.emergentagent.com/jobs/a2d8cb3e-4a12-4862-a7b8-6b2e309ad286/images/36eb2607746f7c6bc4dcfc6678ec1111e2e849d2407ed6e20bfcff478b90bb1a.jpeg",
        "author": "Lotus USA Inc.",
        "published": True,
    },
]


@app.on_event("startup")
async def startup():
    await db.users.create_index("email", unique=True)
    await db.newsletter.create_index("email", unique=True)
    await db.blog.create_index("slug", unique=True)

    admin_email = os.environ.get("ADMIN_EMAIL", "admin@lotususainc.com").lower()
    admin_password = os.environ.get("ADMIN_PASSWORD", "admin123")
    existing = await db.users.find_one({"email": admin_email})
    if existing is None:
        await db.users.insert_one({
            "email": admin_email, "password_hash": hash_password(admin_password),
            "name": "Lotus Admin", "role": "admin", "created_at": now_iso(),
        })
    elif not verify_password(admin_password, existing["password_hash"]):
        await db.users.update_one({"email": admin_email},
                                  {"$set": {"password_hash": hash_password(admin_password)}})

    if await db.blog.count_documents({}) == 0:
        for p in SEED_POSTS:
            p2 = dict(p)
            p2["slug"] = slugify(p2["title"])
            p2["created_at"] = now_iso()
            p2["updated_at"] = now_iso()
            await db.blog.insert_one(p2)
    logger.info("Startup seeding complete.")


@app.on_event("shutdown")
async def shutdown():
    client.close()
