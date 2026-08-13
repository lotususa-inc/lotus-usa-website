import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Reveal, Icon } from "@/components/common";
import { FeatureCard } from "@/components/sections";

/*
|--------------------------------------------------------------------------
| UNIVERSAL HOME-PAGE ASSET LOOKUP
|--------------------------------------------------------------------------
|
| Searches:
|   /assets/
|   /assets/logos/
|
| Supported:
|   .svg .png .jpg .jpeg .webp .gif
|
|--------------------------------------------------------------------------
*/

const ASSET_LOCATIONS = [
  "/assets",
  "/assets/logos",
];

const ASSET_EXTENSIONS = [
  "svg",
  "png",
  "jpg",
  "jpeg",
  "webp",
  "gif",
];

function buildAssetCandidates(name, aliases = []) {
  const names = [name, ...aliases].filter(Boolean);
  const candidates = [];

  names.forEach((fileName) => {
    ASSET_LOCATIONS.forEach((location) => {
      ASSET_EXTENSIONS.forEach((extension) => {
        candidates.push(
          `${location}/${fileName}.${extension}`
        );
      });
    });
  });

  return candidates;
}

function AssetImage({
  name,
  aliases = [],
  alt = "",
  className = "",
  fallback = null,
}) {
  const candidates = buildAssetCandidates(
    name,
    aliases
  );

  const [index, setIndex] = useState(0);

  if (
    !candidates.length ||
    index >= candidates.length
  ) {
    return fallback;
  }

  return (
    <img
      src={candidates[index]}
      alt={alt}
      className={className}
      onError={() => {
        setIndex((current) => current + 1);
      }}
    />
  );
}

/*
|--------------------------------------------------------------------------
| HERO
|--------------------------------------------------------------------------
*/

const HERO_IMAGE = "/assets/home-hero-banner.png";

/*
|--------------------------------------------------------------------------
| CERTIFICATIONS
|--------------------------------------------------------------------------
| Original 4-column visual layout preserved.
|--------------------------------------------------------------------------
*/

const CERTIFICATIONS = [
  {
    title: "HUBZone",
    description: "HUBZone Certified",
    asset: "HUBZone",
    aliases: ["hubzone"],
  },
  {
    title: "WOSB",
    description: "Women-Owned Small Business",
    asset: "wosb",
    aliases: ["WOSB"],
  },
  {
    title: "EDWOSB",
    description: "Economically Disadvantaged WOSB",
    asset: "edwosb",
    aliases: ["EDWOSB"],
  },
  {
    title: "Small Business",
    description: "Small Business Certified",
    asset: "Small Business",
    aliases: [
      "small-business",
      "small_business",
      "smallbusiness",
    ],
  },
  {
    title: "GSA MAS",
    description: "GSA Multiple Award Schedule",
    asset: "GSA",
    aliases: ["gsa", "gsa-mas", "GSA-MAS"],
  },
  {
    title: "CMAS",
    description: "California Multiple Award Schedule",
    asset: "cmas",
    aliases: ["CMAS"],
  },
  {
    title: "JCP",
    description: "Joint Certification Program",
    asset: "jcp",
    aliases: ["JCP"],
  },
  {
    title: "CMMC Level 2 Ready",
    description: "CMMC Level 2 Audit Ready",
    asset: "cmmc-l2",
    aliases: [
      "CMMC-L2",
      "cmmc",
      "CMMC",
    ],
  },
];

/*
|--------------------------------------------------------------------------
| SERVICES
|--------------------------------------------------------------------------
*/

const SERVICES = [
  {
    slug: "government-procurement",
    title: "Government Procurement",
    icon: "PackageCheck",
    short:
      "IT hardware and software, medical equipment, industrial equipment, defense procurement, rentals, and systems integration.",
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    icon: "BriefcaseBusiness",
    short:
      "Management consulting, engineering, program management, technology consulting, and calibration services.",
  },
  {
    slug: "staffing",
    title: "IT & Healthcare Staffing",
    icon: "Users",
    short:
      "IT and healthcare talent supporting approved government and commercial workforce requirements.",
  },
  {
    slug: "cmmc-as-a-service",
    title: "CMMC as a Service",
    icon: "ShieldCheck",
    short:
      "CMMC Level 1 & 2, NIST SP 800-171, Microsoft GCC High, policies, assessments, and training.",
  },
  {
    slug: "digital-solutions",
    title: "Digital Solutions",
    icon: "Code2",
    short:
      "Website design and revamp, custom web applications, mobile apps, AI solutions, workflow automation, and cloud applications.",
  },
];

/*
|--------------------------------------------------------------------------
| WHY LOTUS
|--------------------------------------------------------------------------
*/

const WHY_LOTUS = [
  {
    icon: "Award",
    title: "2,300+ Contracts Executed",
    desc:
      "A proven delivery record across federal, state, local government, and commercial engagements since 2014.",
  },
  {
    icon: "PackageCheck",
    title: "Procurement & Integration",
    desc:
      "End-to-end procurement of IT, medical, industrial, and defense equipment with full systems integration.",
  },
  {
    icon: "Server",
    title: "Enterprise Technology",
    desc:
      "Cloud, networking, data center, and unified communications delivered at enterprise scale.",
  },
  {
    icon: "Users",
    title: "Specialized Staffing",
    desc:
      "IT and healthcare talent supporting approved government and commercial requirements.",
  },
  {
    icon: "BadgeCheck",
    title: "Diverse Small Business",
    desc:
      "HUBZone, WOSB/EDWOSB, GSA MAS, VA Schedule, and other qualifications supporting agency goals.",
  },
  {
    icon: "Globe2",
    title: "Nationwide Operations",
    desc:
      "Responsive delivery across the country for government and commercial clients.",
  },
];

/*
|--------------------------------------------------------------------------
| PARTNERS
|--------------------------------------------------------------------------
|
| Actual current assets:
| /assets/aws.png
| /assets/cisco.png
| /assets/dell.png
| /assets/hp.png
| /assets/lenovo.png
| /assets/oracle.png
| /assets/SAP.png
|
|--------------------------------------------------------------------------
*/

const PARTNERS = [
  {
    name: "Amazon Web Services",
    shortName: "AWS",
    asset: "aws",
    credential: "Technology Ecosystem",
  },
  {
    name: "Cisco Systems",
    shortName: "Cisco",
    asset: "cisco",
    credential: "Select Partner",
  },
  {
    name: "Oracle",
    shortName: "Oracle",
    asset: "oracle",
    credential: "Oracle Partner Network",
  },
  {
    name: "SAP",
    shortName: "SAP",
    asset: "SAP",
    aliases: ["sap"],
    credential: "Certified Consultants",
  },
  {
    name: "Dell",
    shortName: "Dell",
    asset: "dell",
    credential: "Procurement Ecosystem",
  },
  {
    name: "HP",
    shortName: "HP",
    asset: "hp",
    aliases: ["HPE", "hpe"],
    credential: "Procurement Ecosystem",
  },
  {
    name: "Lenovo",
    shortName: "Lenovo",
    asset: "lenovo",
    credential: "Procurement Ecosystem",
  },
];

/*
|--------------------------------------------------------------------------
| HERO
|--------------------------------------------------------------------------
*/

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#071B33] pt-[74px]"
      data-testid="hero"
    >
      <div className="flex w-full items-center justify-center overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Lotus USA, Inc."
          className="
            block
            h-auto
            w-full
            max-h-[calc(100svh-74px)]
            object-contain
            object-center
          "
        />
      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| CERTIFICATIONS
|--------------------------------------------------------------------------
*/

function CertificationsSection() {
  return (
    <section
      className="bg-white py-20 lg:py-24"
      data-testid="certifications"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          {/* Removed standalone "Certifications" eyebrow */}

          <h2 className="font-display text-3xl font-bold text-[#071B33] sm:text-4xl">
            Certifications &amp; Authorizations
          </h2>

          <p className="mt-4 text-base leading-7 text-[#52667A]">
            Lotus holds the certifications and schedules that support
            government procurement requirements and socioeconomic goals.
          </p>

        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {CERTIFICATIONS.map((cert, i) => (
            <Reveal
              key={cert.title}
              delay={(i % 4) * 0.05}
            >
              <div
                className="
                  group
                  flex
                  h-full
                  min-h-[220px]
                  flex-col
                  overflow-hidden
                  rounded-[24px]
                  border
                  border-[#D9E3EE]
                  bg-[#F9FBFF]
                  p-5
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(7,27,51,0.10)]
                "
              >

                <div
                  className="
                    flex
                    h-[145px]
                    items-center
                    justify-center
                    rounded-[20px]
                    bg-white
                    p-5
                    shadow-sm
                  "
                >

                  <AssetImage
                    name={cert.asset}
                    aliases={cert.aliases}
                    alt={cert.title}
                    className="
                      max-h-[115px]
                      max-w-[190px]
                      object-contain
                      transition
                      duration-300
                      group-hover:scale-105
                    "
                    fallback={
                      <span
                        className="
                          text-center
                          text-sm
                          font-bold
                          text-[#071B33]
                        "
                      >
                        {cert.title}
                      </span>
                    }
                  />

                </div>

                <div className="mt-5 text-center">

                  <h3 className="text-sm font-bold text-[#071B33]">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#52667A]">
                    {cert.description}
                  </p>

                </div>

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
| WHAT WE DO
|--------------------------------------------------------------------------
*/

function WhatWeDoSection() {
  return (
    <section
      className="bg-[#EAF4FC] py-20 lg:py-24"
      data-testid="services"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1769E0]">
            What we do
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold text-[#071B33] sm:text-4xl">
            Solutions Built for Government &amp; Enterprise
          </h2>

          <p className="mt-4 text-base leading-7 text-[#52667A]">
            A diversified solutions partner across procurement, professional
            services, staffing, compliance, and digital transformation.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {SERVICES.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={(i % 3) * 0.06}
            >
              <Link
                to={`/services/${service.slug}`}
                className="
                  group
                  flex
                  h-full
                  flex-col
                  rounded-[24px]
                  border
                  border-[#D9E3EE]
                  bg-white
                  p-8
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_40px_rgba(7,27,51,0.10)]
                "
                data-testid={`service-card-${service.slug}`}
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#0B2A4A]
                    text-white
                    shadow-sm
                    transition
                    duration-300
                    group-hover:bg-[#1769E0]
                  "
                >
                  <Icon
                    name={service.icon}
                    className="h-6 w-6"
                  />
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-[#071B33]">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-[#52667A]">
                  {service.short}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1769E0]">
                  Learn more
                  <ArrowRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </span>

              </Link>
            </Reveal>
          ))}

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

function WhyLotusSection() {
  return (
    <section
      className="bg-white py-20 lg:py-24"
      data-testid="why-lotus"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1769E0]">
            Why Lotus
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold text-[#071B33] sm:text-4xl">
            Diversified Capability. Proven Delivery.
          </h2>

          <p className="mt-4 text-base leading-7 text-[#52667A]">
            A proven delivery record across government and commercial
            engagements backed by procurement, technology, staffing, and
            professional-services capabilities.
          </p>

        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {WHY_LOTUS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 3) * 0.07}
            >
              <FeatureCard
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  );
}

/*
|--------------------------------------------------------------------------
| PARTNERS
|--------------------------------------------------------------------------
*/

function PartnershipsSection() {
  return (
    <section
      className="bg-[#F7FAFD] py-20 lg:py-24"
      data-testid="partnerships"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1769E0]">
            Partners
          </p>

          <h2 className="mt-3 font-display text-3xl font-bold text-[#071B33] sm:text-4xl">
            Technology &amp; Procurement Ecosystem
          </h2>

          <p className="mt-4 text-base leading-7 text-[#52667A]">
            Technology and manufacturer relationships supporting Lotus USA
            procurement and enterprise delivery capabilities.
          </p>

        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {PARTNERS.map((partner, i) => (
            <Reveal
              key={partner.name}
              delay={(i % 4) * 0.05}
            >
              <div
                className="
                  group
                  flex
                  min-h-[155px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[24px]
                  border
                  border-[#D9E3EE]
                  bg-white
                  px-6
                  py-7
                  shadow-sm
                  transition
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_18px_40px_rgba(7,27,51,0.08)]
                "
              >

                <div className="flex h-16 w-full items-center justify-center">

                  <AssetImage
                    name={partner.asset}
                    aliases={partner.aliases}
                    alt={partner.name}
                    className="
                      max-h-12
                      max-w-[170px]
                      object-contain
                      transition
                      duration-300
                      group-hover:scale-105
                    "
                    fallback={
                      <span className="text-sm font-semibold text-[#071B33]">
                        {partner.shortName}
                      </span>
                    }
                  />

                </div>

                <p className="mt-5 text-sm font-semibold text-[#071B33]">
                  {partner.shortName}
                </p>

                <p className="mt-1 text-center text-xs text-[#52667A]">
                  {partner.credential}
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
| HOME
|--------------------------------------------------------------------------
*/

export default function Home() {
  useSEO({
    title:
      "Government & Enterprise Solutions Partner",

    description:
      "Lotus USA, Inc. delivers government procurement, professional services, IT & healthcare staffing, CMMC compliance, digital solutions, enterprise technology, and systems integration for Federal, State, Local Government, and commercial organizations.",

    image: HERO_IMAGE,

    path: "/",
  });

  return (
    <>
      <Hero />

      <CertificationsSection />

      <WhatWeDoSection />

      <WhyLotusSection />

      <PartnershipsSection />
    </>
  );
}