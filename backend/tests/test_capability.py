"""Tests for Capability Statement endpoints (GET/POST /api/capability)."""
import os
import requests
import pytest

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')
if not BASE_URL:
    with open('/app/frontend/.env') as f:
        for line in f:
            if line.startswith('REACT_APP_BACKEND_URL='):
                BASE_URL = line.split('=', 1)[1].strip().rstrip('/')
API = f"{BASE_URL}/api"
ADMIN_EMAIL = "admin@lotususainc.com"
ADMIN_PASSWORD = "LotusAdmin2026!"
PDF_PATH = "/app/frontend/public/assets/Lotus-USA-Capability-Statement.pdf"


@pytest.fixture(scope="module")
def admin_session():
    s = requests.Session()
    r = s.post(f"{API}/auth/login", json={"email": ADMIN_EMAIL, "password": ADMIN_PASSWORD})
    assert r.status_code == 200, r.text
    return s


def test_capability_get_defaults():
    r = requests.get(f"{API}/capability")
    assert r.status_code == 200
    data = r.json()
    assert "naics" in data and isinstance(data["naics"], list)
    assert len(data["naics"]) >= 19, f"expected >=19 NAICS, got {len(data['naics'])}"
    for n in data["naics"]:
        assert "code" in n and "desc" in n
    assert len(data.get("registration", [])) == 6
    assert len(data.get("agencies", [])) >= 25
    assert data.get("pdf") == "/assets/Lotus-USA-Capability-Statement.pdf"


def test_capability_upload_requires_auth():
    with open(PDF_PATH, "rb") as f:
        r = requests.post(f"{API}/capability/upload",
                          files={"file": ("cap.pdf", f, "application/pdf")})
    assert r.status_code == 401


def test_capability_upload_admin(admin_session):
    with open(PDF_PATH, "rb") as f:
        r = admin_session.post(f"{API}/capability/upload",
                               files={"file": ("cap.pdf", f, "application/pdf")})
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["ok"] is True
    assert body["extracted"]["naics"] == 19, f"expected 19 naics, got {body['extracted']}"

    # Follow-up GET must return the registration values
    r2 = requests.get(f"{API}/capability")
    assert r2.status_code == 200
    data = r2.json()
    reg = {r["label"]: r["value"] for r in data["registration"]}
    assert reg["UEI"] == "JBKGG25MLPM9", reg
    assert reg["CAGE Code"] == "771V6", reg
    assert reg["DUNS"] == "079599348", reg
    assert reg["Federal Tax ID"] == "47-1943686", reg


def test_capability_upload_rejects_non_pdf(admin_session):
    r = admin_session.post(f"{API}/capability/upload",
                           files={"file": ("cap.txt", b"not a pdf", "text/plain")})
    assert r.status_code == 400
