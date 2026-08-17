import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Reveal, Icon } from "@/components/common";

/*
|--------------------------------------------------------------------------
| GOVERNMENT PROCUREMENT
|--------------------------------------------------------------------------
*/

const PROCUREMENT_CATEGORIES = [
  {
    icon: "Monitor",
    title: "IT Hardware, Peripherals & Software",
    description:
      "Procurement of IT hardware, peripherals, software, and related technology requirements.",
  },
  {
    icon: "Network",
    title: "Networking & Telecommunications",
    description:
      "Networking infrastructure and telecommunications equipment for government and enterprise requirements.",
  },
  {
    icon: "HeartPulse",
    title: "Medical, Telehealth & Laboratory Equipment",
    description:
      "Medical, diagnostic, laboratory, and telehealth equipment procurement support.",
  },
  {
    icon: "Radio",
    title: "Radio & Communications Equipment",
    description:
      "Radio, communications, and mission-support equipment for operational requirements.",
  },
  {
    icon: "Cable",
    title: "Sensors, Cables, Electrical & Power",
    description:
      "Sensors, cabling, electrical components, and power-related equipment.",
  },
  {
    icon: "BatteryCharging",
    title: "UPS, Generators & Batteries",
    description:
      "Power continuity, backup power, UPS systems, generators, and battery requirements.",
  },
  {
    icon: "Construction",
    title: "Industrial & Construction Equipment",
    description:
      "Industrial and construction equipment, including sale and rental requirements.",
  },
  {
    icon: "Truck",
    title: "Strategic Sourcing & Logistics",
    description:
      "Strategic sourcing, supplier coordination, logistics, fulfillment, and delivery.",
  },
  {
    icon: "Network",
    title: "System Integration & Unified Communications",
    description:
      "Integration of procured equipment and technology with operational and communications environments.",
  },
];

/*
|--------------------------------------------------------------------------
| DELIVERY PROCESS
|--------------------------------------------------------------------------
*/

const DELIVERY_PROCESS = [
  {
    number: "01",
    title: "Requirement Review",
    description:
      "Review specifications, quantities, delivery requirements, and procurement objectives.",
  },
  {
    number: "02",
    title: "Strategic Sourcing",
    description:
      "Identify qualified suppliers and source products based on specification, availability, and requirements.",
  },
  {
    number: "03",
    title: "Quote & Procurement",
    description:
      "Coordinate supplier quotations, pricing, procurement execution, and order management.",
  },
  {
    number: "04",
    title: "Logistics & Delivery",
    description:
      "Coordinate fulfillment, shipping, delivery, and schedule requirements.",
  },
  {
    number: "05",
    title: "Integration",
    description:
      "Support equipment integration, systems coordination, and deployment where required.",
  },
];

/*
|--------------------------------------------------------------------------
| REPRESENTATIVE PROCUREMENT AWARDS
|--------------------------------------------------------------------------
*/

const PROCUREMENT_AWARDS = [
  {
    agency: "National Institute of Standards and Technology",
    title: "Whole Body Contamination Monitors",
    value: "$705,601.32",
    category: "Government Procurement",
  },
  {
    agency: "Department of Defense",
    title: "Motorola VESTA R7 Emergency System Upgrade",
    value: "$669,599.00",
    category: "Emergency Communications",
  },
  {
    agency: "Defense Logistics Agency",
    title: "Defense-Related Hardware",
    value: "$1,100,789.41",
    category: "Defense Procurement",
  },
  {
    agency: "Department of Defense",
    title: "Transformers, Stainless Steel (KVA)",
    value: "$507,683.23",
    category: "Industrial / Electrical",
  },
  {
    agency: "NASA",
    title: "Rockwell Collins Radios 721S",
    value: "$137,457.00",
    category: "Communications Equipment",
  },
  {
    agency: "Los Angeles County",
    title: "Cisco VOIP",
    value: "$168,064.31",
    category: "Technology / Communications",
  },
];

/*
|--------------------------------------------------------------------------
| PROCUREMENT PROOF
|--------------------------------------------------------------------------
*/

const PROCUREMENT_PROOF = [
  {
    icon: "Award",
    title: "2,300+ Contracts",
    description:
      "More than 2,300 government contracts executed across federal, state, and local requirements.",
  },
  {
    icon: "Boxes",
    title: "Multi-Category Procurement",
    description:
      "Procurement experience spanning technology, medical, industrial, communications, power, and defense-related equipment.",
  },
  {
    icon: "Building2",
    title: "Government & Commercial",
    description:
      "Capabilities supporting government agencies as well as commercial organizations.",
  },
  {
    icon: "Truck",
    title: "End-to-End Fulfillment",
    description:
      "Sourcing, procurement, supplier coordination, logistics, delivery, and integration support.",
  },
];

/*
|--------------------------------------------------------------------------
| HERO
|--------------------------------------------------------------------------
|
| NO CTA BUTTON
|
|--------------------------------------------------------------------------
*/

function ProcurementHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#071B33] pt-[74px]"
      data-testid="procurement-hero"
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
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769E0] text-white">
                <Icon
                  name="PackageCheck"
                  className="h-6 w-6"
                />
              </div>

              {/* Removed "Government Procurement" overline */}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-7 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Government Procurement &amp; Systems Integration
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
              Lotus provides procurement, sourcing, logistics, equipment
              delivery, and systems integration support for government and
              commercial requirements.
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| PROCUREMENT CAPABILITIES
|--------------------------------------------------------------------------
*/

function ProcurementCapabilities() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      data-testid="procurement-capabilities"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
            <span
              aria-hidden="true"
              className="h-1 w-12 rounded-full bg-[#1769E0]"
            />
            <span>Procurement Capabilities</span>
          </div>

          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#071B33] sm:text-5xl">
              Equipment & Procurement Solutions
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-7 text-[#52667A] sm:text-lg">
              Procurement capabilities organized around the equipment and support requirements government and commercial buyers need to fulfill.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {PROCUREMENT_CATEGORIES.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 3) * 0.06}
            >
              <div className="group flex h-full flex-col rounded-[24px] border border-[#D9E3EE] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#BFD5EA] hover:shadow-[0_20px_50px_rgba(7,27,51,0.10)]">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B2A4A] text-white transition duration-300 group-hover:bg-[#1769E0]">
                  <Icon
                    name={item.icon}
                    className="h-6 w-6"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-[#071B33]">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#52667A]">
                  {item.description}
                </p>

              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| HOW WE DELIVER
|--------------------------------------------------------------------------
*/

function DeliveryProcess() {
  return (
    <section
      className="bg-[#EAF4FC] py-20 lg:py-28"
      data-testid="procurement-process"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
            <span
              aria-hidden="true"
              className="h-1 w-12 rounded-full bg-[#1769E0]"
            />
            <span>How We Deliver</span>
          </div>

          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#071B33] sm:text-5xl">
              From Requirement to Delivery
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-7 text-[#52667A] sm:text-lg">
              A structured procurement process designed to keep requirements, sourcing, fulfillment, and delivery aligned.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">

          {DELIVERY_PROCESS.map((step, index) => (
            <Reveal
              key={step.number}
              delay={index * 0.06}
            >
              <div className="relative h-full rounded-[24px] border border-[#D4E1EC] bg-white p-7">

                <span className="font-mono text-sm font-bold text-[#1769E0]">
                  {step.number}
                </span>

                <h3 className="mt-4 font-display text-xl font-bold text-[#071B33]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#52667A]">
                  {step.description}
                </p>

                {index < DELIVERY_PROCESS.length - 1 && (
                  <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D4E1EC] bg-white">
                      <ChevronRight className="h-4 w-4 text-[#1769E0]" />
                    </div>
                  </div>
                )}

              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| REPRESENTATIVE PROCUREMENT AWARDS
|--------------------------------------------------------------------------
*/

function ProcurementAwards() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      data-testid="procurement-awards"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
            <span
              aria-hidden="true"
              className="h-1 w-12 rounded-full bg-[#1769E0]"
            />
            <span>Representative Experience</span>
          </div>

          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#071B33] sm:text-5xl">
              Procurement Awards
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-7 text-[#52667A] sm:text-lg">
              Selected examples of procurement work represented in Lotus USA capability materials.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {PROCUREMENT_AWARDS.map((award, index) => (
            <Reveal
              key={`${award.agency}-${award.title}`}
              delay={(index % 3) * 0.06}
            >
              <div className="flex h-full flex-col rounded-[24px] border border-[#D9E3EE] bg-[#F9FBFF] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(7,27,51,0.10)]">

                <div className="flex items-center justify-between gap-4">

                  <span className="rounded-full bg-[#E6F0FB] px-3 py-1 text-xs font-semibold text-[#1769E0]">
                    {award.category}
                  </span>

                  <span className="text-lg font-bold text-[#071B33]">
                    {award.value}
                  </span>

                </div>

                <h3 className="mt-7 font-display text-xl font-bold leading-tight text-[#071B33]">
                  {award.title}
                </h3>

                <p className="mt-3 flex-1 text-sm font-medium text-[#52667A]">
                  {award.agency}
                </p>

              </div>
            </Reveal>
          ))}

        </div>

        <div className="mt-10 text-center">
          <Link
            to="/contracts"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1769E0] transition hover:text-[#0B4FA8]"
          >
            View Contracts &amp; Past Performance
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| WHY LOTUS
|--------------------------------------------------------------------------
*/

function WhyLotusProcurement() {
  return (
    <section
      className="bg-[#071B33] py-20 text-white lg:py-28"
      data-testid="why-lotus-procurement"
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
            Procurement backed by proven delivery.
          </h2>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            Lotus combines procurement capability with supplier coordination,
            logistics, delivery, and systems integration to support
            mission-critical requirements.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {PROCUREMENT_PROOF.map((item, index) => (
            <Reveal
              key={item.title}
              delay={(index % 4) * 0.06}
            >
              <div className="h-full rounded-[24px] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1769E0] text-white">
                  <Icon
                    name={item.icon}
                    className="h-5 w-5"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/65">
                  {item.description}
                </p>

              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| PAGE
|--------------------------------------------------------------------------
*/

export default function GovernmentProcurement() {
  useSEO({
    title: "Government Procurement & Systems Integration",
    description:
      "Lotus provides government procurement, strategic sourcing, logistics, equipment delivery, and systems integration support for government and commercial requirements.",
    path: "/services/government-procurement",
  });

  return (
    <>
      <ProcurementHero />

      <ProcurementCapabilities />

      <DeliveryProcess />

      <ProcurementAwards />

      <WhyLotusProcurement />
    </>
  );
}