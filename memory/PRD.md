# Lotus USA Inc. — Corporate Website PRD

## Original Problem Statement
Build a world-class, enterprise-grade premium corporate website for Lotus USA Inc. (federal + commercial technology contractor) competing with Accenture Federal, Booz Allen, Leidos, CACI, etc. Tagline: "Secure. Compliant. Mission Ready." Luxury enterprise UI (navy #0B1F4D, royal blue #0F62FE), glassmorphism, micro-animations, award-worthy motion. Pages: Home, Government Contracting, Staffing, Compliance as a Service (flagship), Digital Solutions, Industries, About, Contact + blog & admin. SEO, WCAG, mobile-first, no fictional content.

## Architecture
- **Frontend**: React 19 + React Router 7, Tailwind, framer-motion (scroll reveals, kinetic hero), sonner toasts. Fonts: Cabinet Grotesk (display), Manrope (body), JetBrains Mono (mono). Native smooth scrolling (lenis removed — it broke wheel scroll & keyboard a11y).
- **Backend**: FastAPI + MongoDB (motor). JWT httpOnly-cookie admin auth (bcrypt). Collections: users, contacts, newsletter, blog.
- **Content data**: `src/data/site.js`, `src/data/servicesData.js`.

## User Personas
- Government/agency decision-makers evaluating contractors
- Fortune 500 / commercial enterprise buyers
- Defense contractors needing CMMC compliance
- Job/staffing prospects
- Admin (Lotus staff) managing leads & blog

## Implemented (2026-06)
- Home: kinetic hero (line-by-line reveal), animated stats counters, Why Lotus, services overview, industries, certifications grid + marquee, latest insights, CTA. 
- Service pages: Government Contracting, Staffing Solutions, Digital Solutions (data-driven template with capabilities, process, FAQ).
- Compliance as a Service — flagship page with cybersecurity visual, pillars, 8-step lifecycle, managed-compliance section, FAQ.
- Industries, About (mission/vision/values/why/leadership-coming-soon/capabilities), Contact (form + Google Map embed + details).
- Insights blog list + individual post pages (3 seeded professional articles).
- Admin: secure login + dashboard (leads, subscribers, blog CRUD).
- Global: sticky glass header + mega menu, mobile nav, dark footer, floating contact widget, back-to-top, newsletter.
- SEO: dynamic per-page titles/meta/OG/Twitter, schema.org Organization JSON-LD, sitemap.xml, robots.txt. Lazy-loaded images.
- Custom Lotus USA logo (trimmed + white variant) used throughout. No Emergent branding.

## Verified
- Backend endpoints via curl: auth login/me, contacts POST+GET(auth), newsletter, blog list. All pass.
- Full homepage render (all sections) via crawl. Contact / service / compliance / industries / login pages via screenshots.

## Refinement Iteration (2026-06)
- Company data corrected; homepage "Why Lotus USA" now 6 items (2,300+ contracts, Fed/State/Local, Procurement & SI, Secure Cloud & Compliance, Staffing, Modernization).
- Added Past Performance section + Federal Registration (UEI JBKGG25MLPM9, CAGE 771V6, DUNS 079599348, Tax ID 47-1943686, SAM, CMMC L2 Self-Assessment S200046896) on Home + Contact.
- Certifications updated to real set incl. SAM Registered, CMMC Level 2 Ready, BBB Accredited (removed "Small Business Concern").
- Email notifications ENABLED: new contact lead → Resend (Emergent-managed) email to info@lotususainc.com. Verified 202 Accepted.
- Silenced guest 401 console noise (session probe only on /admin,/login). Cleared all test leads/subscribers.
- Verified by testing_agent: backend 100% (12/12), frontend 100% (35/35). deployment_agent: PASS/deployable.
- PENDING client uploads: past-performance agency names sheet; final one-page Capabilities PDF for download.

## Capability Statement Iteration (2026-06)
- Hosted PDF at /assets/Lotus-USA-Capability-Statement.pdf; "Download Capability Statement" button on Home, About, Contact.
- Searchable NAICS section on About (19 codes from statement). "Trusted By" text-card section on Home (25 real agencies from statement — no logos).
- Newsletter subscriptions now also email info@lotususainc.com (Resend proxy, verified 202); contact form already did.
- Cleaned all test data (0 leads / 0 subscribers at launch). testing_agent iteration_2: backend 100%, frontend 100%. Services healthy, deployment config unchanged (prior deployment_agent = PASS).

## Client-Directed Revamp (2026-06)
- Repositioned from CMMC/cyber to diversified "Government & Enterprise Solutions Partner Since 2014". Official client logo (teal lotus) now used site-wide (Header/Footer/Login/Admin/favicon); removed the previously generated logo.
- New light, non-cyber hero (headline + six-pillar eyebrow + Request a Quote / Download Capability Statement). 5 credibility stats. Prominent 16-cert wall (CMMC = one badge). Blue/white palette + subtle gold accents.
- SIX services: Government Procurement, Enterprise Solutions, Professional Services, Staffing, CMMC as a Service, Digital Solutions (slugs updated; ServicePage routes cmmc-as-a-service -> Compliance page, de-flagshipped).
- New nav (Home, Services mega, Contracts, Industries, About, Contact). New /contracts (Contracts & Past Performance) page. Industries expanded to 12; About adds Company History + Community Involvement.
- Preserved ALL backend/admin: contact+newsletter (email 202 to info@), capability upload/parse, blog CRUD, JWT auth. testing_agent iteration_4: backend 16/16, frontend 100%, zero issues. Clean launch data.

## Admin Credentials
See `/app/memory/test_credentials.md` (admin@lotususainc.com).

## Backlog / Remaining (P1/P2)
- P1: Real testimonials & client logos (left as optional per client instruction — populate from real references).
- P1: Real leadership bios (currently "coming soon" per client instruction).
- P1: Spam/bot protection on public forms — no CAPTCHA/honeypot/rate-limiting yet (server-side Pydantic validation only). Recommend reCAPTCHA v3 or honeypot + rate limit.
- P2: Email notifications on new leads (Resend) [DONE], blog categories/pagination, staffing job-board.

## V3 Final QA + Correction Pass (2026-07)
- Phone number updated site-wide to **213-298-7100** (header, footer, contact, floating widget, schema.org, input placeholder). Old 707 number fully removed. Fax remains absent.
- **Cookie Consent (real enforcement)**: new `ConsentContext` + `CookieConsent` banner/modal. Categories detected & implemented: Strictly Necessary (always on), Analytics/Performance (PostHog), Functional (Google Maps embed). No advertising/marketing tech exists → category omitted. PostHog init changed to `opt_out_capturing_by_default`, `opt_out_persistence_by_default`, `disable_session_recording`; ConsentContext opts in only on Analytics consent. Verified via clean-session Playwright: before consent optedIn=false/0 cookies; Reject keeps blocked & persists; Accept All → optedIn=true/1 cookie. Google Maps only loads with Functional consent (placeholder otherwise). Footer "Cookie Preferences" reopens modal.
- **Legal pages**: `/privacy-policy` + `/cookie-policy` created; linked from banner, footer, and forms. Legacy `/cookies-policy` → `/cookie-policy`.
- **Contact form**: privacy notice added below submit with working Privacy Policy link. Area of Interest dropdown retained (6 services + Other). Backend delivery verified (POST /api/contacts → ok:true, Resend email).
- **Staffing split**: dedicated IT/Technical vs Healthcare sections with full V3 role categories on `/services/staffing`.
- **Admin exposure removed**: footer Admin link deleted; no public admin links in header/nav/footer. `/admin` + `/login` still functional and disallowed in robots.txt.
- **Legacy URL redirects** (App.js): /services→/, /procurement & /services/government-contracting→/services/government-procurement, /services/staffing-solutions→/services/staffing, /services/compliance-as-a-service & /cmmc-compliance→/services/cmmc-as-a-service, /shop-all→/, /cmas→/contracts, /cookies-policy→/cookie-policy; trailing-slash normalizer for legacy WP URLs.
- **SEO**: sitemap.xml corrected to current slugs + new legal pages; 404 page now emits `noindex,nofollow`; canonical + robots meta per page via useSEO.
- Platform limitations (not app-controllable): true HTTP 404 status (SPA serves 200 + client 404), security response headers (CSP/HSTS), separate staging environment, hosting/DNS/backups — all managed by Emergent platform/deployment layer.

