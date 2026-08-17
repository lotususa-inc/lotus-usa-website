import { useSEO } from "@/hooks/useSEO";
import { IMG } from "@/data/site";

const PILLARS = [
  {
    title: "CMMC Level 2",
    desc: "Alignment to the security requirements applicable to organizations handling Controlled Unclassified Information.",
  },
  {
    title: "NIST SP 800-171",
    desc: "Control implementation, documentation, evidence management, and support across the 14 control families.",
  },
  {
    title: "Microsoft GCC High",
    desc: "Support for Microsoft 365 GCC High environments used for regulated workloads and CUI protection.",
  },
  {
    title: "Policies & Documentation",
    desc: "Security policies, System Security Plan, POA&M, procedures, and compliance evidence.",
  },
  {
    title: "Assessments",
    desc: "Gap assessment, readiness reviews, evidence preparation, and remediation planning.",
  },
  {
    title: "Training",
    desc: "Security awareness and role-based training supporting an organization's compliance program.",
  },
];

const LIFECYCLE = [
  [
    "01",
    "Gap Assessment",
    "Assess the current environment against applicable NIST SP 800-171 requirements and identify gaps.",
  ],
  [
    "02",
    "System Security Plan",
    "Document how required controls are implemented across the defined environment.",
  ],
  [
    "03",
    "POA&M",
    "Prioritize outstanding remediation activities by risk, effort, and business impact.",
  ],
  [
    "04",
    "Remediation",
    "Implement required security, identity, endpoint, cloud, policy, and access-control improvements.",
  ],
  [
    "05",
    "Training",
    "Provide security awareness and role-based training aligned to the organization's compliance responsibilities.",
  ],
  [
    "06",
    "Assessment Readiness",
    "Prepare evidence, documentation, and operational processes for an independent assessment.",
  ],
  [
    "07",
    "Monitoring",
    "Maintain visibility into security posture, vulnerabilities, controls, and remediation status.",
  ],
  [
    "08",
    "Managed Compliance",
    "Maintain the compliance program through ongoing security and compliance support.",
  ],
];

export default function Compliance() {
  useSEO({
    title: "CMMC Compliance & Audit Readiness Services",
    description:
      "Lotus USA helps organizations become CMMC audit-ready with CMMC Level 1 and Level 2 support, NIST SP 800-171 implementation, documentation, evidence preparation, remediation, training, and Microsoft GCC High support.",
    image: IMG.cmmcShield,
    path: "/services/cmmc-as-a-service",
  });

  return (
    <main className="min-h-screen bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#050e26] text-white">

        <div className="absolute inset-0 -z-10">
          <img
            src={IMG.cmmcShield}
            alt=""
            className="h-full w-full object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#050e26] via-[#050e26]/90 to-[#050e26]/60" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="max-w-4xl">

            <p className="inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-cyan-300 sm:text-xl">
              <span
                aria-hidden="true"
                className="h-1 w-12 rounded-full bg-cyan-300"
              />
              CMMC Compliance &amp; Audit Readiness
            </p>

            <h1 className="mt-5 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              CMMC Compliance &amp; Audit Readiness
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
              Lotus helps organizations prepare for CMMC assessments through
              structured compliance implementation, documentation, evidence
              preparation, remediation, training, and ongoing support across
              CMMC Level 1 and Level 2 environments.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

          {/* LEFT */}
          <div>

            <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
              <span
                aria-hidden="true"
                className="h-1 w-12 rounded-full bg-[#1769E0]"
              />
              <span>COMPLIANCE SUPPORT</span>
            </div>

            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#062b5c] sm:text-5xl">
              From gap assessment to sustained readiness
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg">
              CMMC preparation requires more than purchasing software or
              changing a few settings. Organizations need defined scope,
              implemented controls, documentation, evidence, operational
              processes, and ongoing maintenance.
            </p>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Lotus can support the implementation and management activities
              required to move an organization toward a structured,
              evidence-driven compliance program.
            </p>

          </div>


          {/* RIGHT */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-700">
              CMMC Focus
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">

              {[
                "CMMC Level 1",
                "CMMC Level 2",
                "NIST SP 800-171",
                "Microsoft GCC High",
                "Policies",
                "Assessments",
                "Training",
                "Ongoing Support",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white px-4 py-4 text-sm font-semibold text-[#062b5c] ring-1 ring-slate-200"
                >
                  {item}
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CORE CAPABILITIES
      ========================================================= */}
      <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl text-left">

            <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
              <span
                aria-hidden="true"
                className="h-1 w-12 rounded-full bg-[#1769E0]"
              />
              <span>SERVICE SCOPE</span>
            </div>

            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#062b5c] sm:text-5xl">
              Core CMMC capabilities
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Support across the compliance activities needed to establish,
              document, operate, and maintain a security program.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {PILLARS.map((pillar, index) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="text-sm font-bold text-cyan-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-4 text-xl font-bold text-[#062b5c]">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {pillar.desc}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          COMPLIANCE LIFECYCLE
      ========================================================= */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl text-left">

            <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
              <span
                aria-hidden="true"
                className="h-1 w-12 rounded-full bg-[#1769E0]"
              />
              <span>COMPLIANCE LIFECYCLE</span>
            </div>

            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#062b5c] sm:text-5xl">
              A structured path to audit readiness
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              A practical lifecycle that takes an organization from current
              posture assessment through remediation, evidence preparation,
              monitoring, and managed compliance.
            </p>

          </div>


          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {LIFECYCLE.map(([number, title, description]) => (
              <article
                key={number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#062b5c] text-xs font-bold text-white">
                  {number}
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#062b5c]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}