"""Backend API tests for Lotus USA Inc. site."""
import os
import time
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
if not BASE_URL:
    # fallback: read from frontend/.env
    try:
        with open('/app/frontend/.env') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
    except Exception:
        pass

API = f"{BASE_URL}/api"
ADMIN_EMAIL = "admin@lotususainc.com"
ADMIN_PASSWORD = "LotusAdmin2026!"


@pytest.fixture(scope="session")
def session():
    return requests.Session()


@pytest.fixture(scope="session")
def admin_session(session):
    r = session.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD})
    assert r.status_code == 200, f"login failed: {r.status_code} {r.text}"
    data = r.json()
    assert data["email"] == ADMIN_EMAIL
    assert data.get("role") == "admin"
    return session


# ---------- Root / health ----------
def test_root():
    r = requests.get(f"{API}/")
    assert r.status_code == 200
    assert "Lotus" in r.json().get("message", "")


# ---------- Auth ----------
def test_login_invalid():
    r = requests.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": "wrong"})
    assert r.status_code == 401


def test_login_success_and_me(admin_session):
    r = admin_session.get(f"{API}/auth/me")
    assert r.status_code == 200
    assert r.json()["email"] == ADMIN_EMAIL


def test_contacts_requires_auth():
    r = requests.get(f"{API}/contacts")
    assert r.status_code == 401


# ---------- Contact create + lead persistence + email ----------
CREATED_CONTACT_ID = None

def test_create_contact_and_persist(admin_session):
    global CREATED_CONTACT_ID
    payload = {
        "name": "TEST_John Doe",
        "email": "test_lead@example.com",
        "phone": "555-0100",
        "company": "TEST Corp",
        "service": "Compliance as a Service",
        "message": "This is a TEST lead from backend_test.",
    }
    r = requests.post(f"{API}/contacts", json=payload)
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["ok"] is True
    assert "id" in body
    CREATED_CONTACT_ID = body["id"]

    # verify GET (admin) contains our lead
    time.sleep(0.5)
    r2 = admin_session.get(f"{API}/contacts")
    assert r2.status_code == 200
    items = r2.json()
    found = [x for x in items if x.get("id") == CREATED_CONTACT_ID]
    assert found, "created contact not found in list"
    assert found[0]["email"] == payload["email"]
    assert found[0]["name"] == payload["name"]


def test_contact_email_sent_to_emergent_proxy():
    """Check backend log for the 202 Accepted from Emergent email proxy after contact submit."""
    # Trigger a fresh contact
    requests.post(f"{API}/contacts", json={
        "name": "TEST_EmailProbe",
        "email": "test_email_probe@example.com",
        "message": "Trigger email probe",
    })
    time.sleep(2)
    log_content = ""
    for path in ["/var/log/supervisor/backend.err.log", "/var/log/supervisor/backend.out.log"]:
        try:
            with open(path) as f:
                log_content += f.read()[-20000:]
        except Exception:
            pass
    assert "integrations.emergentagent.com/api/v1/email/send" in log_content, \
        "Backend logs should include Emergent email proxy request"
    assert "202 Accepted" in log_content or '"HTTP/1.1 202' in log_content, \
        "Backend logs should show 202 Accepted from email proxy"


def test_delete_contact(admin_session):
    global CREATED_CONTACT_ID
    if not CREATED_CONTACT_ID:
        pytest.skip("no contact created")
    r = admin_session.delete(f"{API}/contacts/{CREATED_CONTACT_ID}")
    assert r.status_code == 200


# ---------- Newsletter ----------
def test_newsletter_and_duplicate():
    email = f"test_news_{int(time.time())}@example.com"
    r = requests.post(f"{API}/newsletter", json={"email": email})
    assert r.status_code == 200
    assert r.json()["ok"] is True
    # duplicate
    r2 = requests.post(f"{API}/newsletter", json={"email": email})
    assert r2.status_code == 200
    body = r2.json()
    assert body.get("ok") is True
    assert body.get("already") is True


def test_newsletter_list_requires_auth(admin_session):
    r_public = requests.get(f"{API}/newsletter")
    assert r_public.status_code == 401
    r = admin_session.get(f"{API}/newsletter")
    assert r.status_code == 200
    assert isinstance(r.json(), list)


# ---------- Blog CRUD ----------
CREATED_BLOG_ID = None
CREATED_BLOG_SLUG = None

def test_blog_list_public():
    r = requests.get(f"{API}/blog")
    assert r.status_code == 200
    assert isinstance(r.json(), list)


def test_blog_create_update_delete(admin_session):
    global CREATED_BLOG_ID, CREATED_BLOG_SLUG
    payload = {
        "title": f"TEST Post {int(time.time())}",
        "excerpt": "test excerpt",
        "content": "test content body",
        "category": "Insights",
        "cover_image": "",
        "author": "TEST",
        "published": True,
    }
    r = admin_session.post(f"{API}/blog", json=payload)
    assert r.status_code == 200, r.text
    body = r.json()
    CREATED_BLOG_ID = body["id"]
    CREATED_BLOG_SLUG = body["slug"]
    assert body["title"] == payload["title"]

    # GET by slug (public)
    r2 = requests.get(f"{API}/blog/{CREATED_BLOG_SLUG}")
    assert r2.status_code == 200
    assert r2.json()["title"] == payload["title"]

    # Update
    upd = dict(payload, title=payload["title"] + " (updated)")
    r3 = admin_session.put(f"{API}/blog/{CREATED_BLOG_ID}", json=upd)
    assert r3.status_code == 200
    assert "updated" in r3.json()["title"]

    # Delete
    r4 = admin_session.delete(f"{API}/blog/{CREATED_BLOG_ID}")
    assert r4.status_code == 200


def test_blog_write_requires_auth():
    r = requests.post(f"{API}/blog", json={"title": "x", "excerpt": "x", "content": "x"})
    assert r.status_code == 401
