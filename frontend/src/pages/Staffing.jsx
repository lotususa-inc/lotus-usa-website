import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Reveal, Overline, Icon } from "@/components/common";

const IT_ROLES = [
  "Developers",
  "Cloud / DevOps",
  "Network / Security",
  "Database",
  "Desktop / Support",
  "Business Analysts / Project Managers",
  "SAP / Oracle / ERP",
  "Data / AI",
];

const HEALTHCARE_ROLES = [
  "Physicians",
  "Nurses",
  "Allied Health",
  "Medical / Lab / Radiology",
  "Administrative Support",
];

const STAFFING_MODELS = [
  {
    icon: "Clock3",
    title: "Contract Staffing",
    description:
      "Flexible staffing support for defined assignments, project requirements, and workforce needs.",
  },
  {
    icon: "UserCheck",
    title: "Direct Hire",
    description:
      "Support for organizations seeking qualified professionals for direct employment opportunities.",
  },
  {
    icon: "FileText",
    title: "Statement of Work",
    description:
      "Structured staffing and professional support aligned with defined scopes, deliverables, and requirements.",
  },
];

const DELIVERY_STEPS = [
  {
    number: "01",
    title: "Understand",
    description:
      "We review the role, skill requirements, location, schedule, and engagement model.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify professionals aligned with the required technical, clinical, or operational capabilities.",
  },
  {
    number: "03",
    title: "Screen",
    description:
      "Candidates are evaluated against the requirements before being presented for consideration.",
  },
  {
    number: "04",
    title: "Deploy",
    description:
      "Selected professionals are placed according to the agreed staffing model and requirements.",
  },
];

function StaffingHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#071B33] pt-[74px] text-white"
      data-testid="staffing-hero"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071B33] via-[#0B2A4A] to-[#123E69]" />

        <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#1769E0]/20 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-[320px] w-[320px] rounded-full bg-[#62C7D9]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">

          <Reveal>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769E0]">
                <Icon
                  name="UsersRound"
                  className="h-6 w-6"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              IT & Healthcare Staffing
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
              Lotus provides staffing support across technology and
              healthcare requirements, with flexible engagement models for
              government and commercial organizations.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function StaffingTracks() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      data-testid="staffing-tracks"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-3xl text-left">
          <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
            <span aria-hidden="true" className="h-1 w-12 rounded-full bg-[#1769E0]" />
            <span>Staffing Capabilities</span>
          </div>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#071B33] sm:text-5xl">
              Two focused staffing tracks
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-7 text-[#52667A] sm:text-lg">
              Technology and healthcare organizations have different workforce requirements. Lotus USA presents each staffing capability separately.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* IT STAFFING */}

          <Reveal>
            <div className="flex h-full flex-col rounded-[28px] border border-[#D9E3EE] bg-[#F8FBFF] p-8 lg:p-10">

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2A4A] text-white">
                  <Icon
                    name="Laptop2"
                    className="h-6 w-6"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1769E0]">
                    Technology
                  </p>

                  <h2 className="mt-1 font-display text-2xl font-bold text-[#071B33]">
                    IT Staffing
                  </h2>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-[#52667A]">
                Technology staffing support across development,
                infrastructure, security, enterprise applications, and
                data-focused roles.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {IT_ROLES.map((role) => (
                  <div
                    key={role}
                    className="flex items-start gap-3 rounded-xl bg-white p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1769E0]" />

                    <span className="text-sm font-medium text-[#071B33]">
                      {role}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1769E0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1258BD]"
                >
                  Discuss IT Staffing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>
          </Reveal>

          {/* HEALTHCARE STAFFING */}

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col rounded-[28px] border border-[#D9E3EE] bg-[#F8FBFF] p-8 lg:p-10">

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2A4A] text-white">
                  <Icon
                    name="HeartPulse"
                    className="h-6 w-6"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1769E0]">
                    Healthcare
                  </p>

                  <h2 className="mt-1 font-display text-2xl font-bold text-[#071B33]">
                    Healthcare Staffing
                  </h2>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-[#52667A]">
                Healthcare staffing support across clinical, allied health,
                medical, laboratory, radiology, and administrative requirements.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {HEALTHCARE_ROLES.map((role) => (
                  <div
                    key={role}
                    className="flex items-start gap-3 rounded-xl bg-white p-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1769E0]" />

                    <span className="text-sm font-medium text-[#071B33]">
                      {role}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#1769E0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1258BD]"
                >
                  Discuss Healthcare Staffing
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function StaffingModels() {
  return (
    <section
      className="bg-[#EAF4FC] py-20 lg:py-28"
      data-testid="staffing-models"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-3xl text-left">
          <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
            <span aria-hidden="true" className="h-1 w-12 rounded-full bg-[#1769E0]" />
            <span>Engagement Models</span>
          </div>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#071B33] sm:text-5xl">
              Flexible staffing models
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-7 text-[#52667A] sm:text-lg">
              Choose the workforce model that best matches your organization's requirements.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {STAFFING_MODELS.map((model, index) => (
            <Reveal
              key={model.title}
              delay={index * 0.06}
            >
              <div className="flex h-full flex-col rounded-[24px] border border-[#D4E1EC] bg-white p-7">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2A4A] text-white">
                  <Icon
                    name={model.icon}
                    className="h-6 w-6"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-[#071B33]">
                  {model.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#52667A]">
                  {model.description}
                </p>

              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}

function StaffingProcess() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      data-testid="staffing-process"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-3xl text-left">
          <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
            <span aria-hidden="true" className="h-1 w-12 rounded-full bg-[#1769E0]" />
            <span>How We Engage</span>
          </div>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#071B33] sm:text-5xl">
              A structured staffing process
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-7 text-[#52667A] sm:text-lg">
              A clear process helps align workforce requirements with the appropriate staffing solution.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {DELIVERY_STEPS.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.06}
            >
              <div className="h-full rounded-[24px] border border-[#D9E3EE] bg-[#F9FBFF] p-7">

                <span className="font-mono text-sm font-bold text-[#1769E0]">
                  {step.number}
                </span>

                <h3 className="mt-4 font-display text-xl font-bold text-[#071B33]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#52667A]">
                  {step.description}
                </p>

              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}

function WhyLotus() {
  return (
    <section
      className="bg-[#071B33] py-20 text-white lg:py-28"
      data-testid="why-lotus-staffing"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-3xl">

          <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#62C7D9] sm:text-xl">
            <span aria-hidden="true" className="h-1 w-12 rounded-full bg-[#62C7D9]" />
            <span>WHY LOTUS</span>
          </div>

          <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Workforce support across technology and healthcare.
          </h2>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            Lotus brings IT and healthcare staffing together with flexible
            engagement models designed around government and commercial
            workforce requirements.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-7">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769E0]">
              <Icon
                name="UsersRound"
                className="h-5 w-5"
              />
            </div>

            <h3 className="mt-6 font-display text-xl font-bold">
              Specialized Tracks
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/65">
              Separate IT and healthcare staffing capabilities aligned to the
              needs of each workforce.
            </p>

          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-7">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769E0]">
              <Icon
                name="Layers3"
                className="h-5 w-5"
              />
            </div>

            <h3 className="mt-6 font-display text-xl font-bold">
              Flexible Engagement
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/65">
              Contract staffing, direct hire, and Statement of Work models
              provide flexibility around workforce requirements.
            </p>

          </div>

          <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-7">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769E0]">
              <Icon
                name="Workflow"
                className="h-5 w-5"
              />
            </div>

            <h3 className="mt-6 font-display text-xl font-bold">
              Integrated Support
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/65">
              Staffing is part of Lotus USA&apos;s broader Government &
              Enterprise Solutions portfolio.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default function Staffing() {
  useSEO({
    title: "IT & Healthcare Staffing",
    description:
      "Lotus provides IT and healthcare staffing support for government and commercial organizations, including contract staffing, direct hire, and Statement of Work engagements.",
    path: "/services/staffing",
  });

  return (
    <>
      <StaffingHero />

      <StaffingTracks />

      <StaffingModels />

      <StaffingProcess />

      <WhyLotus />
    </>
  );
}