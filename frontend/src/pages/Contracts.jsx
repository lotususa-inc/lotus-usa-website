import React from "react";

const procurementAwards = [
  {
    agency: "DLA Land and Maritime",
    title: "SPE8E925P0528 # GUARD, AIRCRAFT GROUND",
    value: "$51,360.00",
  },
  {
    agency: "Space Base Delta",
    title: "Digital Patch Panels",
    value: "$26,436.69",
  },
  {
    agency: "LADWP",
    title:
      "Water Control Center Air Conditioner and Hot Aisle Containment",
    value: "$148,300.00",
  },
  {
    agency: "Department of the Air Force",
    title: "USAF Band Practice Room Modules",
    value: "$240,917.79",
  },
  {
    agency: "NASA",
    title: "Rockwell Collins Radios 721S",
    value: "$137,457.00",
  },
  {
    agency: "Long Beach Transit",
    title:
      "Dell Precision 3430 Small Form Factor, OptiPlex 7760, Dell UltraSharp 49 Curved Monitor",
    value: "$157,417.75",
  },
  {
    agency: "U.S. Department of Transportation",
    title: "MPV LED Integrated Ice Buoy Lanterns",
    value: "$244,920.00",
  },
  {
    agency: "Los Angeles County",
    title: "Cisco VOIP",
    value: "$168,064.31",
  },
  {
    agency: "Department of the Air Force",
    title: "TacMed Mannequins",
    value: "$329,315.55",
  },
  {
    agency: "U.S. Army Engineer District, Detroit",
    title:
      "Rental equipment supporting work in and around a lock and dam structure at temperatures as low as -20°F",
    value: "$369,170.91",
  },
  {
    agency: "MICC-Fort Buchanan",
    title: "225KVA Uninterruptible Power Supply",
    value: "$196,480.00",
  },
  {
    agency: "Western Area Power Administration",
    title: "Medium-Voltage and High-Voltage Dead-Tank Circuit",
    value: "$153,241.92",
  },
];

const professionalServiceAwards = [
  {
    agency: "Social Security Administration",
    title: "Medical Consultant Services",
    value: "$2,224,604.00",
  },
  {
    agency: "Internal Revenue Service / U.S. Department of the Treasury",
    title: "Main Treasury Preventative Maintenance and Repairs UPS Units",
    value: "$171,389.77",
  },
  {
    agency: "California Department of General Services",
    title: "Pre-Employment Medical Evaluation",
    value: "$168,478.00",
  },
  {
    agency: "California Department of Veterans Affairs",
    title: "Pre-Employment / Annual Physicals Service",
    value: "$69,086.00",
  },
  {
    agency: "Department of Navy, NSWC PCD",
    title: "100M Internet Services at Plattsmouth, Nebraska",
    value: "$59,790.00",
  },
  {
    agency: "Social Security Administration",
    title: "Regional Medical Consultant",
    value: "$1,280,562.00",
  },
  {
    agency: "Department of the Army",
    title: "CYS Bus Services at Fort McCoy, WI",
    value: "$512,249.04",
  },
  {
    agency: "Bureau of Land Management",
    title: "Rock Hauling for Highway, Street, and Bridge Construction",
    value: "$431,285.25",
  },
  {
    agency: "California Department of Veterans Affairs",
    title: "Skilled Nursing Administrator",
    value: "$228,758.40",
  },
  {
    agency: "DHCS-POCB Clinical Section, California",
    title: "Licensed Psychiatrists",
    value: "$120,000.00",
  },
  {
    agency: "Department of the Army",
    title: "NTC 25-06 Tents, HVAC, Generators, and Lights",
    value: "$465,200.75",
  },
  {
    agency: "Department of Defense",
    title: "Islamic Spiritual Guide",
    value: "$319,125.60",
  },
  {
    agency: "U.S. Army Soldier Support Institute",
    title: "Command History Office — Archival Support Services",
    value: "$140,970.00",
  },
  {
    agency: "MICC - Fort Carson",
    title: "Professional Office Support",
    value: "$62,416.89",
  },
];

const featuredAwards = [
  {
    agency: "Social Security Administration",
    title: "Medical Consultant Services",
    value: "$2,224,604.00",
  },
  {
    agency: "Social Security Administration",
    title: "Regional Medical Consultant",
    value: "$1,280,562.00",
  },
  {
    agency: "National Institute of Standards and Technology",
    title: "Whole Body Contamination Monitors",
    value: "$705,601.32",
  },
  {
    agency: "Department of Defense",
    title:
      "Motorola VESTA R7 Emergency System Upgrade, Andersen AFB",
    value: "$669,599.00",
  },
  {
    agency: "Department of the Army",
    title: "CYS Bus Services at Fort McCoy, WI",
    value: "$512,249.04",
  },
  {
    agency: "Department of Defense",
    title: "Transformers, Stainless Steel (KVA)",
    value: "$507,683.23",
  },
];

const agenciesServed = [
  "Department of Defense",
  "The Pentagon",
  "Department of the Army",
  "Department of the Navy (NSWC PCD)",
  "Department of the Air Force",
  "Space Base Delta",
  "DLA Land and Maritime",
  "U.S. Army Engineer District, Detroit",
  "U.S. Army Sergeants Major Academy",
  "U.S. Army Soldier Support Institute (USASSI)",
  "MICC – Fort Buchanan",
  "MICC – Fort Carson",
  "NASA",
  "National Institute of Standards and Technology (NIST)",
  "Internal Revenue Service (U.S. Treasury)",
  "Social Security Administration",
  "U.S. Department of Transportation",
  "Bureau of Land Management",
  "Western Area Power Administration (WAPA)",
  "California Department of General Services",
  "California Department of Veterans Affairs",
  "County of Los Angeles",
  "City of Los Angeles",
  "Los Angeles Department of Water and Power (LADWP)",
  "Long Beach Transit",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#062b5c] sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

function AwardTable({ awards }) {
  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead className="bg-[#062b5c] text-white">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold">
                Agency
              </th>

              <th className="px-6 py-4 text-sm font-semibold">
                Contract / Requirement
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold">
                Contract Value
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200">
            {awards.map((award, index) => (
              <tr
                key={`${award.agency}-${index}`}
                className="transition-colors hover:bg-slate-50"
              >
                <td className="px-6 py-5 align-top text-sm font-semibold text-[#062b5c]">
                  {award.agency}
                </td>

                <td className="px-6 py-5 align-top text-sm leading-6 text-slate-600">
                  {award.title}
                </td>

                <td className="whitespace-nowrap px-6 py-5 text-right align-top text-sm font-bold text-[#062b5c]">
                  {award.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AgencyCard({ agency, index }) {
  return (
    <div className="group flex min-h-[96px] items-center gap-4 rounded-xl border border-slate-200 bg-white px-5 py-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#062b5c] text-xs font-bold text-white">
        {String(index + 1).padStart(2, "0")}
      </div>

      <span className="text-sm font-semibold leading-5 text-[#062b5c]">
        {agency}
      </span>
    </div>
  );
}

export default function Contracts() {
  return (
    <main className="min-h-screen bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#062b5c] px-6 py-24 sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contracts & Past Performance
            </p>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Proven Government
              <br />
              Contracting Experience
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
              Lotus USA, Inc. brings a diversified record of procurement,
              systems integration, enterprise technology, professional
              services, staffing, and digital solutions to government and
              commercial organizations.
            </p>

            <div className="mt-8">
              <a
                href="/assets/Lotus-USA-Capability-Statement.pdf"
                download="Lotus-USA-Capability-Statement.pdf"
                className="inline-flex items-center gap-3 rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#062b5c]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                  />
                </svg>

                Download Capability Statement
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          TOP COMPANY FACTS
      ========================================================= */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">

          <div className="px-6 py-8 text-center sm:px-8">
            <div className="text-3xl font-bold text-[#062b5c]">
              2014
            </div>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Operations Established
            </p>
          </div>

          <div className="px-6 py-8 text-center sm:px-8">
            <div className="text-3xl font-bold text-[#062b5c]">
              Federal
            </div>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Government Contracting
            </p>
          </div>

          <div className="px-6 py-8 text-center sm:px-8">
            <div className="text-3xl font-bold text-[#062b5c]">
              Nationwide
            </div>

            <p className="mt-2 text-sm font-medium text-slate-500">
              Government & Enterprise Delivery
            </p>
          </div>

        </div>
      </section>
            {/* =========================================================
          PAST PERFORMANCE
      ========================================================= */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                Past Performance
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#062b5c] sm:text-4xl">
                A demonstrated record of delivery
              </h2>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Lotus USA has executed contracts across federal, state, local,
                and commercial environments, supporting requirements spanning
                procurement, equipment, technology, healthcare, professional
                services, infrastructure, and specialized support.
              </p>

              <p className="mt-6 max-w-3xl text-base leading-7 text-slate-600">
                The representative awards below provide examples of the scope and
                dollar value of Lotus USA's documented contracting experience.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-80" />

              <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl">

                <div className="bg-[#062b5c] px-7 py-6 sm:px-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    Coverage
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2">

                  <div className="border-b border-slate-200 p-6 sm:border-r">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#062b5c]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6M7 8h10"
                        />
                      </svg>
                    </div>

                    <h4 className="mt-4 font-bold text-[#062b5c]">
                      Federal
                    </h4>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      Federal agencies and defense organizations
                    </p>
                  </div>

                  <div className="border-b border-slate-200 p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#062b5c]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                    </div>

                    <h4 className="mt-4 font-bold text-[#062b5c]">
                      State
                    </h4>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      State agencies and public-sector organizations
                    </p>
                  </div>

                  <div className="border-b border-slate-200 p-6 sm:border-b-0 sm:border-r">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#062b5c]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 21h16M6 21V9h12v12M9 9V5h6v4M8 13h2M14 13h2M8 17h2M14 17h2"
                        />
                      </svg>
                    </div>

                    <h4 className="mt-4 font-bold text-[#062b5c]">
                      Local
                    </h4>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      Cities, counties, transit, and utilities
                    </p>
                  </div>

                  <div className="p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#062b5c]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-6 w-6"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 21h18M5 21V8h14v13M8 8V4h8v4M8 12h2M14 12h2M8 16h2M14 16h2"
                        />
                      </svg>
                    </div>

                    <h4 className="mt-4 font-bold text-[#062b5c]">
                      Commercial
                    </h4>

                    <p className="mt-1 text-sm leading-5 text-slate-500">
                      Enterprise organizations and commercial requirements
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTRACTING SNAPSHOT
      ========================================================= */}
{/* =========================================================
          CONTRACTING SNAPSHOT
      ========================================================= */}
      <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
              Contracting Snapshot
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#062b5c] sm:text-4xl">
              Government Contracting at a Glance
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              A snapshot of Lotus USA's documented government contracting
              experience, agency reach, and representative award value.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Contracts Executed */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl font-bold tracking-tight text-[#062b5c] sm:text-5xl">
                2,300+
              </div>

              <div className="mt-3 text-lg font-semibold text-slate-800">
                Contracts Executed
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Documented government and commercial contracting experience.
              </p>
            </div>

            {/* Agencies Served */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl font-bold tracking-tight text-[#062b5c] sm:text-5xl">
                25+
              </div>

              <div className="mt-3 text-lg font-semibold text-slate-800">
                Agencies Served
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Federal, state, local, and public-sector organizations.
              </p>
            </div>

            {/* Largest Representative Award */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="text-4xl font-bold tracking-tight text-[#062b5c] sm:text-5xl">
                $2.2M+
              </div>

              <div className="mt-3 text-lg font-semibold text-slate-800">
                Largest Representative Award
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Representative Social Security Administration award documented
                in the Capability Statement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          AGENCIES SERVED
      ========================================================= */}
      <section
        id="agencies-served"
        className="bg-white px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Agencies Served"
            title="Government organizations we have supported"
            description="Lotus has executed contracts with federal agencies, state governments, municipalities, the City of Los Angeles, Los Angeles County, LADWP, and major cities throughout the United States."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {agenciesServed.map((agency, index) => (
              <AgencyCard
                key={agency}
                agency={agency}
                index={index}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          GOVERNMENT PROCUREMENT
      ========================================================= */}
      <section
        id="contract-values"
        className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Government Procurement"
            title="Representative Procurement Contracts"
            description="Selected procurement awards demonstrate Lotus USA's experience supplying technology, equipment, infrastructure, defense-related products, and specialized systems to government organizations."
          />

          <AwardTable awards={procurementAwards} />

          <p className="mt-5 text-xs leading-6 text-slate-500">
            Representative contract information and values are based on the
            Lotus USA Capability Statement.
          </p>

        </div>
      </section>

      {/* =========================================================
          PROFESSIONAL SERVICES
      ========================================================= */}
      <section className="bg-white px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Professional Services"
            title="Representative Professional Services Contracts"
            description="Lotus USA has supported government organizations through healthcare, consulting, infrastructure, staffing, technical, and specialized professional service requirements."
          />

          <AwardTable awards={professionalServiceAwards} />

          <p className="mt-5 text-xs leading-6 text-slate-500">
            Representative contract information and values are based on the
            Lotus USA Capability Statement.
          </p>

        </div>
      </section>

      {/* =========================================================
          MAJOR AWARDS
      ========================================================= */}
      <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <SectionHeading
            eyebrow="Major Awards"
            title="Selected Contract Highlights"
            description="Selected documented awards illustrating the range and scale of Lotus USA's government contracting experience."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {featuredAwards.map((award, index) => (
              <article
                key={`${award.agency}-${index}`}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#062b5c] text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span className="rounded-full bg-cyan-50 px-3 py-1.5 text-sm font-bold text-cyan-800">
                    {award.value}
                  </span>

                </div>

                <p className="mt-6 text-sm font-semibold text-cyan-700">
                  {award.agency}
                </p>

                <h3 className="mt-2 text-lg font-bold leading-7 text-[#062b5c]">
                  {award.title}
                </h3>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          CONTRACTING CAPABILITIES
      ========================================================= */}
      <section
        id="contracting-capabilities"
        className="bg-[#062b5c] px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Contracting Capabilities
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built for government requirements
            </h2>

            <p className="mt-5 text-lg leading-8 text-blue-100">
              Lotus USA combines procurement execution, systems integration,
              enterprise technology, professional services, staffing, and
              specialized government support.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">
                Procurement
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Equipment, technology, industrial products, and specialized
                government requirements.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">
                Systems Integration
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Technology, networking, communications, infrastructure, and
                enterprise solutions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">
                Professional Services
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Consulting, healthcare, engineering, program support, and
                specialized services.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white">
                Staffing
              </h3>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                IT, healthcare, contract, direct-hire, and Statement of Work
                delivery.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-50 px-8 py-12 text-center sm:px-12">

          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
            Government & Enterprise
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#062b5c] sm:text-4xl">
            Ready to work with Lotus USA?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Connect with our team to discuss procurement requirements,
            professional services, technology solutions, staffing, and
            government contracting opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#062b5c] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-[#083d7a]"
            >
              Contact Our Team
            </a>

            <a
              href="/assets/Lotus-USA-Capability-Statement.pdf"
              download="Lotus-USA-Capability-Statement.pdf"
              className="inline-flex items-center justify-center rounded-lg border border-[#062b5c] px-7 py-3.5 text-sm font-semibold text-[#062b5c] transition hover:bg-[#062b5c] hover:text-white"
            >
              Download Capability Statement
            </a>

          </div>

        </div>
      </section>

      {/* =========================================================
          DISCLAIMER
      ========================================================= */}
      <section className="border-t border-slate-200 bg-white px-6 py-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs leading-6 text-slate-500">
            Contract examples and values shown on this page are representative
            awards documented in Lotus USA, Inc.'s Capability Statement. They
            do not represent the complete population or total value of all
            contracts executed by Lotus USA.
          </p>

        </div>
      </section>

    </main>
  );
}