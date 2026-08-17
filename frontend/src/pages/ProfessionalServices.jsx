import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { Reveal, Icon } from "@/components/common";

const PROFESSIONAL_SERVICES = [
  {
    icon: "BriefcaseBusiness",
    title: "Management Consulting",
    description:
      "Management consulting support aligned with organizational, operational, and program requirements.",
  },
  {
    icon: "HardHat",
    title: "Engineering",
    description:
      "Engineering support for technology, infrastructure, systems, and mission requirements.",
  },
  {
    icon: "ClipboardCheck",
    title: "Program Management",
    description:
      "Program management support focused on coordination, execution, delivery, and stakeholder requirements.",
  },
  {
    icon: "Laptop2",
    title: "Technology Consulting",
    description:
      "Technology consulting supporting modernization, systems, technology implementation, and business objectives.",
  },
  {
    icon: "Gauge",
    title: "Calibration Services",
    description:
      "Technology and equipment calibration services supporting operational accuracy and equipment requirements.",
  },
];

const ENGAGEMENT_AREAS = [
  "Management consulting",
  "Engineering support",
  "Program management",
  "Technology consulting",
  "Calibration services",
];

const DELIVERY_STEPS = [
  {
    number: "01",
    title: "Understand",
    description:
      "Review the organization's requirements, objectives, scope, and delivery expectations.",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "Define the appropriate professional services approach, resources, milestones, and responsibilities.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Deliver professional services with structured coordination and clear accountability.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "Maintain delivery coordination and support requirements through completion.",
  },
];

function ProfessionalServicesHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#071B33] pt-[74px] text-white"
      data-testid="professional-services-hero"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071B33] via-[#0B2A4A] to-[#123E69]" />

        <div className="absolute -right-32 top-0 h-[420px] w-[420px] rounded-full bg-[#1769E0]/20 blur-3xl" />

        <div className="absolute -left-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#62C7D9]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="max-w-4xl">

          <Reveal>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769E0]">
                <Icon
                  name="BriefcaseBusiness"
                  className="h-6 w-6"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
              Professional Services
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
              Lotus provides management consulting, engineering, program
              management, technology consulting, and calibration services for
              government and commercial requirements.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function ProfessionalServicesCapabilities() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      data-testid="professional-services-capabilities"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-3xl text-left">


          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#071B33] sm:text-5xl">
              Consulting, Engineering & Program Support
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-7 text-[#52667A] sm:text-lg">
              Professional services capabilities supporting government and commercial organizations across management, engineering, technology, program execution, and calibration requirements.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {PROFESSIONAL_SERVICES.map((service, index) => (
            <Reveal
              key={service.title}
              delay={(index % 3) * 0.06}
            >
              <div className="group flex h-full flex-col rounded-[24px] border border-[#D9E3EE] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#BFD5EA] hover:shadow-[0_20px_50px_rgba(7,27,51,0.10)]">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2A4A] text-white transition duration-300 group-hover:bg-[#1769E0]">
                  <Icon
                    name={service.icon}
                    className="h-6 w-6"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-[#071B33]">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#52667A]">
                  {service.description}
                </p>

              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}

function EngagementSection() {
  return (
    <section
      className="bg-[#EAF4FC] py-20 lg:py-28"
      data-testid="professional-services-engagement"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <div className="max-w-3xl text-left">
          <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
            <span
              aria-hidden="true"
              className="h-1 w-12 rounded-full bg-[#1769E0]"
            />
            <span>Service Scope</span>
          </div>

          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#071B33] sm:text-5xl">
              Professional support aligned to the requirement
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-7 text-[#52667A] sm:text-lg">
              Our professional services offering covers five core capability areas supporting government and commercial requirements.
            </p>
          </Reveal>
        </div>
          </div>

          <div className="rounded-[28px] border border-[#D4E1EC] bg-white p-8 lg:p-10">

            <div className="grid gap-4 sm:grid-cols-2">

              {ENGAGEMENT_AREAS.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1769E0]" />

                  <span className="text-sm font-semibold text-[#071B33]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

function DeliveryProcess() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      data-testid="professional-services-process"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-3xl text-left">
          <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
            <span
              aria-hidden="true"
              className="h-1 w-12 rounded-full bg-[#1769E0]"
            />
            <span>How We Engage</span>
          </div>

          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#071B33] sm:text-5xl">
              A structured approach to service delivery
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-7 text-[#52667A] sm:text-lg">
              A straightforward engagement model keeps scope, execution, and delivery aligned.
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
      data-testid="why-lotus-professional-services"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-3xl">

          <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#62C7D9] sm:text-xl">
            <span
              aria-hidden="true"
              className="h-1 w-12 rounded-full bg-[#62C7D9]"
            />
            <span>WHY LOTUS</span>
          </div>

          <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Professional services as part of a broader delivery capability.
          </h2>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            Professional Services is one of Lotus USA&apos;s core solution
            areas alongside government procurement, enterprise solutions,
            staffing, CMMC, and digital solutions.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">

          <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-7">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769E0]">
              <Icon
                name="Building2"
                className="h-5 w-5"
              />
            </div>

            <h3 className="mt-6 font-display text-xl font-bold">
              Government & Commercial
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/65">
              Professional services positioned for government and commercial
              requirements.
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
              Multi-Disciplinary
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/65">
              Consulting, engineering, program management, technology, and
              calibration capabilities under one service offering.
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
              Integrated Delivery
            </h3>

            <p className="mt-3 text-sm leading-7 text-white/65">
              Professional services can complement Lotus USA&apos;s
              procurement, technology, staffing, and systems integration
              capabilities.
            </p>

          </div>

        </div>

        <div className="mt-12">
          <Link
            to="/contracts"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#62C7D9] transition hover:text-white"
          >
            View Contracts & Past Performance
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default function ProfessionalServices() {
  useSEO({
    title: "Professional Services",
    description:
      "Lotus provides management consulting, engineering, program management, technology consulting, and calibration services for government and commercial requirements.",
    path: "/services/professional-services",
  });

  return (
    <>
      <ProfessionalServicesHero />

      <ProfessionalServicesCapabilities />

      <EngagementSection />

      <DeliveryProcess />

      <WhyLotus />
    </>
  );
}
