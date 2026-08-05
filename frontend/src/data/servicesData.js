import { IMG } from "@/data/site";

export const SERVICE_PAGES = {
  "government-contracting": {
    icon: "Landmark",
    eyebrow: "Government Contracting",
    title: "Federal, state & local acquisition, delivered with discipline",
    intro: "Lotus USA Inc. helps agencies and prime contractors navigate the full acquisition lifecycle — from procurement strategy and proposal support to compliant, on-time project delivery.",
    image: IMG.capitol,
    stat: { value: "13+", label: "Certifications & set-aside designations" },
    features: [
      { icon: "FileSearch", title: "Federal Acquisition Support", desc: "End-to-end support through the FAR-driven acquisition lifecycle, from market research to award and administration." },
      { icon: "FileStack", title: "Contract Vehicles", desc: "Access through small-business set-asides and California Multiple Award Schedules (CMAS) to accelerate procurement." },
      { icon: "ClipboardCheck", title: "Procurement Strategy", desc: "Advisory that aligns requirements, budgets, and timelines to reduce risk and improve competition outcomes." },
      { icon: "PenTool", title: "Proposal Support", desc: "Capture, pricing, and compliant proposal development that clearly communicates value to evaluators." },
      { icon: "Rocket", title: "Project Delivery", desc: "Program management and technical execution measured against cost, schedule, and mission performance." },
      { icon: "ShieldCheck", title: "Compliance", desc: "Delivery grounded in FAR/DFARS, CMMC, and NIST SP 800-171 so obligations are met from day one." },
    ],
    process: [
      ["Discover", "We assess requirements, eligibility, and the best acquisition pathway for your objective."],
      ["Position", "Capture planning, teaming, and compliant proposal development to win the work."],
      ["Deliver", "Disciplined program management with transparent cost and schedule reporting."],
      ["Sustain", "Ongoing administration, compliance, and continuous improvement across the period of performance."],
    ],
    faqs: [
      { q: "Can Lotus USA help meet small-business goals?", a: "Yes. As a WOSB, HUBZone, and minority-owned small business, we help agencies and primes meet set-aside and socioeconomic goals with confidence." },
      { q: "Which vehicles do you support?", a: "We support federal, state, and local acquisitions, including California Multiple Award Schedules (CMAS), and small-business set-asides." },
    ],
  },
  "staffing-solutions": {
    icon: "Users",
    eyebrow: "Staffing Solutions",
    title: "Specialized and cleared talent, mobilized on your timeline",
    intro: "We recruit, vet, and place high-caliber professionals across IT, engineering, healthcare, and administration — for contract, contract-to-hire, and permanent placement.",
    image: IMG.team,
    stat: { value: "4", label: "Core disciplines: IT, engineering, healthcare, admin" },
    features: [
      { icon: "Cpu", title: "IT Staffing", desc: "Cloud, cybersecurity, software, and infrastructure specialists ready for mission-critical roles." },
      { icon: "Wrench", title: "Engineering", desc: "Systems, network, and DevSecOps engineers matched precisely to your technical requirements." },
      { icon: "HeartPulse", title: "Healthcare", desc: "Clinical and health-IT professionals for public health and healthcare delivery programs." },
      { icon: "ClipboardList", title: "Administrative", desc: "Program coordinators, analysts, and administrative professionals who keep operations moving." },
      { icon: "Handshake", title: "Contract & Permanent", desc: "Flexible engagement models: contract, contract-to-hire, and direct permanent placement." },
      { icon: "Wallet", title: "Payroll & Compliance", desc: "Full payroll administration and employment compliance so you can focus on the mission." },
    ],
    process: [
      ["Intake", "We define role requirements, clearance needs, and success criteria with your team."],
      ["Source", "Our vetted bench and targeted recruitment surface qualified candidates quickly."],
      ["Vet", "Rigorous screening, skills validation, and reference verification before submission."],
      ["Place", "Onboarding, payroll, and ongoing engagement management for a seamless experience."],
    ],
    faqs: [
      { q: "Do you provide cleared candidates?", a: "Yes, we recruit and place cleared and specialized talent aligned to your program's clearance and skill requirements." },
      { q: "What engagement models do you offer?", a: "Contract, contract-to-hire, and permanent placement, with full payroll and compliance administration available." },
    ],
  },
  "digital-solutions": {
    icon: "Rocket",
    eyebrow: "Digital Solutions",
    title: "Enterprise software, cloud & AI that move the mission forward",
    intro: "From modern web and mobile applications to cloud modernization, AI, and analytics, we build secure digital products that deliver measurable outcomes.",
    image: IMG.digitalAbstract,
    stat: { value: "100%", label: "Security-by-design in every build" },
    features: [
      { icon: "Globe", title: "Website & Web Apps", desc: "Accessible, high-performance websites and enterprise web applications built for scale." },
      { icon: "Smartphone", title: "Mobile Apps", desc: "Native and cross-platform mobile experiences for field, citizen, and workforce use cases." },
      { icon: "BrainCircuit", title: "AI & Automation", desc: "Practical AI, intelligent automation, and workflow modernization that reduce manual effort." },
      { icon: "CloudCog", title: "Cloud Migration", desc: "Secure migration and modernization on Azure, AWS, and Microsoft GCC High environments." },
      { icon: "Database", title: "CRM, ERP & BI", desc: "Platform implementation and integration for CRM, ERP, and business intelligence." },
      { icon: "LineChart", title: "Data Analytics", desc: "Data platforms and dashboards that turn operational data into confident decisions." },
    ],
    process: [
      ["Discover", "Stakeholder alignment, technical discovery, and a clear definition of value."],
      ["Design", "UX/UI design and architecture grounded in accessibility and security."],
      ["Build", "DevSecOps delivery with automated testing, security, and compliance gates."],
      ["Scale", "Managed operations, analytics, and continuous improvement post-launch."],
    ],
    faqs: [
      { q: "Do you build in regulated cloud environments?", a: "Yes. We design and deploy into Azure, AWS, and Microsoft GCC High with Zero Trust and DevSecOps practices." },
      { q: "Can you modernize legacy systems?", a: "Absolutely. We assess, rehost, replatform, or refactor legacy applications while protecting mission continuity." },
    ],
  },
};
