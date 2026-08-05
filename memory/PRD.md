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

## Admin Credentials
See `/app/memory/test_credentials.md` (admin@lotususainc.com).

## Backlog / Remaining (P1/P2)
- P1: Real testimonials & client logos (left as optional per client instruction — populate from real references).
- P1: Real leadership bios (currently "coming soon" per client instruction).
- P2: Email notifications on new leads (Resend), reCAPTCHA on forms, blog categories/pagination, staffing job-board.
