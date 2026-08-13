import { IMG } from "@/data/site";

const cap = (title) => ({ title });

export const SERVICE_PAGES = {
  "government-procurement": {
    icon: "PackageSearch",
    eyebrow: "Government Procurement",
    title: "Procurement",
    intro: "Lotus  sources and delivers IT, medical, industrial, and mission-support equipment with full integration and reliable schedule compliance.",
    image: IMG.capitol,
    features: [
      { icon: "Cpu", title: "IT Hardware & Software", desc: "Sourcing and delivery of enterprise hardware, software, and licensing at competitive schedule pricing." },
      { icon: "HeartPulse", title: "Medical Equipment", desc: "Procurement of medical and diagnostic equipment for healthcare and public health programs." },
      { icon: "Factory", title: "Industrial Equipment", desc: "Industrial and operational equipment for infrastructure, utilities, and manufacturing." },
      { icon: "Network", title: "System Integration", desc: "End-to-end integration so procured technology works together and deploys smoothly." },
      { icon: "Boxes", title: "Rental Equipment", desc: "Flexible rental options for short-term, project-based, and surge equipment needs." },
    ],
    process: [
      ["Requirements", "We confirm specifications, quantities, timelines, and contract vehicle eligibility."],
      ["Sourcing", "We source through approved schedules and vetted supplier networks for best value."],
      ["Delivery", "Logistics, delivery, and installation coordinated to your site and schedule."],
      ["Support", "Ongoing integration, warranty coordination, and lifecycle support."],
    ],
    faqs: [
      { q: "Which vehicles can we buy through?", a: "We support GSA MAS, VA Schedule, CMAS, and small-business set-asides across federal, state, and local acquisitions." },
      { q: "Do you handle installation and integration?", a: "Yes â€” we provide full systems integration, delivery, and post-deployment support." },
    ],
  },
  "enterprise-solutions": {
    icon: "Server",
    eyebrow: "Enterprise Solutions",
    title: "Enterprise technology built to scale",
    intro: "From cloud infrastructure and networking to data center and unified communications, we design, deploy, and operate the technology that runs modern organizations.",
    image: IMG.serverRack,
    features: [
      { icon: "CloudCog", title: "Cloud Infrastructure", desc: "Design and migration to Azure, AWS, and hybrid environments with resilience built in." },
      { icon: "Network", title: "Networking", desc: "High-performance, secure networking for campus, branch, and remote operations." },
      { icon: "Lock", title: "Cybersecurity", desc: "Layered security, identity, and monitoring to protect critical systems and data." },
      { icon: "Server", title: "Data Center", desc: "Data center design, modernization, and managed operations." },
      { icon: "PhoneCall", title: "Unified Communications", desc: "Voice, video, and collaboration platforms that keep teams connected." },
      { icon: "Rocket", title: "Digital Transformation", desc: "Modernization roadmaps that turn legacy estates into agile platforms." },
    ],
    process: [
      ["Assess", "We map your current environment, priorities, and constraints."],
      ["Architect", "We design a secure, scalable architecture aligned to your mission."],
      ["Deploy", "We implement with disciplined change management and testing."],
      ["Operate", "We provide managed operations and continuous improvement."],
    ],
    faqs: [
      { q: "Do you support hybrid and multi-cloud?", a: "Yes. We design and operate across Azure, AWS, and on-premise environments." },
      { q: "Can you manage operations after deployment?", a: "Absolutely â€” we offer managed services, monitoring, and help desk support." },
    ],
  },
  "professional-services": {
    icon: "Briefcase",
    eyebrow: "Professional Services",
    title: "Expertise that moves programs forward",
    intro: "Our consultants, engineers, and program managers help organizations plan, execute, and sustain complex initiatives with confidence.",
    image: IMG.teamMeeting,
    features: [
      { icon: "ClipboardCheck", title: "Management Consulting", desc: "Strategy, operations, and organizational advisory grounded in measurable outcomes." },
      { icon: "Wrench", title: "Engineering", desc: "Systems, network, and infrastructure engineering for demanding environments." },
      { icon: "Kanban", title: "Program Management", desc: "PMO leadership that keeps cost, schedule, and scope aligned to the mission." },
      { icon: "Lightbulb", title: "Technology Consulting", desc: "Independent guidance on modernization, tooling, and technical roadmaps." },
      { icon: "Gauge", title: "Calibration Services", desc: "Precision calibration services supporting compliance and quality requirements." },
    ],
    process: [
      ["Discover", "We align on objectives, stakeholders, and success criteria."],
      ["Plan", "We build a clear roadmap with milestones and governance."],
      ["Execute", "We deliver with transparent reporting and disciplined management."],
      ["Sustain", "We transition knowledge and support continuous improvement."],
    ],
    faqs: [
      { q: "Do you provide program management for federal programs?", a: "Yes â€” we lead PMOs and provide program, project, and technical management across sectors." },
      { q: "What is calibration services?", a: "We provide precision calibration supporting quality, compliance, and operational reliability." },
    ],
  },
  "staffing": {
    icon: "Users",
    eyebrow: "Staffing",
    title: "Specialized talent, mobilized on your timeline",
    intro: "We recruit, vet, and place high-caliber IT and healthcare professionals for contract, direct hire, and Statement of Work engagements.",
    image: IMG.team,
    split: {
      overline: "Two dedicated practices",
      title: "IT & Technical and Healthcare staffing",
      sub: "Our staffing practice is organized into two distinct, specialized teams so every placement is matched by recruiters who know the discipline.",
      groups: [
        {
          icon: "Cpu",
          name: "IT / Technical Staffing",
          roles: [
            "Software / Application Developers",
            "Cloud & DevOps Engineers",
            "Network & Security Engineers",
            "Database Administrators",
            "Desktop / Technical Support",
            "Business Analysts",
            "Project Managers",
            "SAP / Oracle / ERP Consultants",
            "Data / AI / Analytics Specialists",
          ],
        },
        {
          icon: "HeartPulse",
          name: "Healthcare Staffing",
          roles: [
            "Physicians",
            "Physician Assistants",
            "Registered Nurses",
            "Dentists",
            "Dental Hygienists",
            "Medical Laboratory Technicians",
            "Radiology / MRI Technicians",
            "Therapy Services",
            "Medical Consultants",
            "Healthcare Administrative Support",
          ],
        },
      ],
    },
    features: [
      { icon: "Cpu", title: "IT Staffing", desc: "Cloud, cybersecurity, software, and infrastructure specialists for critical roles." },
      { icon: "HeartPulse", title: "Healthcare Staffing", desc: "Clinical and health-IT professionals for public health and healthcare programs." },
      { icon: "Clock", title: "Contract Staffing", desc: "Flexible contract resources scaled to project and surge demands." },
      { icon: "UserCheck", title: "Direct Hire", desc: "Permanent placement of vetted professionals matched to your needs." },
      // Statement of Work feature preserved but concise description removed per request
    ],
    process: [
      ["Intake", "We define role requirements, clearances, and success criteria."],
      ["Source", "Our vetted bench and targeted recruiting surface qualified candidates fast."],
      ["Vet", "Rigorous screening, skills validation, and reference checks."],
      ["Place", "Onboarding, payroll, and ongoing engagement management."],
    ],
    faqs: [
      { q: "What roles do you staff?", a: "Primarily IT and healthcare, across contract, contract-to-hire, direct hire, and SOW models." },
      { q: "Can you deliver outcome-based SOW work?", a: "Yes â€” we structure and deliver Statement of Work engagements with clear deliverables." },
    ],
  },
  "digital-solutions": {
    icon: "MonitorSmartphone",
    eyebrow: "Digital Solutions",
    title: "Websites, apps, and automation that deliver",
    intro: "We design and build modern websites, custom applications, and AI-driven automation that improve how organizations serve their users.",
    image: IMG.handshake,
    features: [
      { icon: "Globe", title: "Website Design & Revamp", desc: "Accessible, high-performance websites and full redesigns for public and private sectors." },
      { icon: "Code", title: "Custom Web Applications", desc: "Secure, scalable web applications tailored to your workflows." },
      { icon: "Smartphone", title: "Mobile App Development", desc: "Native and cross-platform mobile apps for field, citizen, and workforce use." },
      { icon: "BrainCircuit", title: "AI Solutions", desc: "Practical AI that automates work and surfaces better decisions." },
      { icon: "Workflow", title: "Workflow Automation", desc: "Automation that removes manual effort and accelerates delivery." },
      { icon: "CloudCog", title: "Cloud Applications", desc: "Cloud-native applications engineered for reliability and scale." },
    ],
    process: [
      ["Discover", "Stakeholder alignment, discovery, and a clear definition of value."],
      ["Design", "UX/UI and architecture grounded in accessibility and performance."],
      ["Build", "Iterative delivery with automated testing and quality gates."],
      ["Scale", "Managed operations, analytics, and continuous improvement."],
    ],
    faqs: [
      { q: "Do you redesign existing websites?", a: "Yes â€” website design and revamp is a core offering, including accessibility and performance." },
      { q: "Can you build custom applications and mobile apps?", a: "Absolutely â€” we build custom web and mobile applications and cloud-native solutions." },
    ],
  },
};


