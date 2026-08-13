import { Link } from "react-router-dom";
import {
  ArrowRight,
  Plane,
  ShieldCheck,
  Settings,
  Wrench,
} from "lucide-react";

const PRODUCTS = [
  {
    name: "Airport Rotating Beacon (LED)",
    model: "L-801/L-802",
    image: "/assets/aviation/airport-rotating-beacon-led.png",
    description:
      "LED airport rotating beacon for airport identification and long-distance visibility.",
    features: [
      "FAA L-801/L-802A and ICAO Annex 14",
      "Visibility up to 40 miles",
      "Electronically controlled automatic lamp change",
      "10â€“18 rpm adjustable or 12 rpm fixed",
      "Aviation orange coated steel body",
    ],
  },
  {
    name: "Elevated Heliport Flood Light",
    model: "STM.861.HEL.01 (W) White",
    image: "/assets/aviation/elevated-heliport-flood-light-led.png",
    description:
      "LED elevated heliport flood light for reliable illumination of heliport environments.",
    features: [
      "ICAO Annex 14 Volume 2",
      "LED life up to 60,000 hours",
      "Narrow-angle 30Â° LED lenses",
      "Surge protection device",
      "Protection Degree: IP67",
    ],
  },
  {
    name: "Elevated Omnidirectional Medium Intensity Light",
    model: "STM.860.MIL.01(W) White",
    image:
      "/assets/aviation/elevated-omnidirectional-medium-intensity-light-led.png",
    description:
      "Elevated omnidirectional LED light for airport lighting applications.",
    features: [
      "ICAO Annex 14 Volume 1",
      "FAA AC 150/5345-46",
      "LED life up to 50,000 hours",
      "Omnidirectional application",
      "Protection Degree: IP67",
    ],
  },
  {
    name: "Aviation Signal Light Gun",
    model: "LED (ALDIS) â€” STM.620.SLG.01",
    image: "/assets/aviation/aviation-signal-light-gun-led-aldis.png",
    description:
      "LED aviation signal light gun for visual aircraft signaling from the ground.",
    features: [
      "LED life up to 60,000 hours",
      "Red, white and green color selection",
      "Visibility up to 4.1 miles / 6.6 km in clear daylight",
      "Morse code or continuous use",
      "Protection Degree: IP34",
    ],
  },
  {
    name: "Runway Guard Light",
    model: "RGL",
    image: "/assets/aviation/runway-guard-light-rgl.png",
    description:
      "High-intensity runway guard lighting for airport environments.",
    features: [
      "ICAO Annex 14",
      "LED life up to 60,000 hours",
      "L-852 / L-852D style",
      "High intensity LED",
      "Protection Degree: IP67",
    ],
  },
  {
    name: "Precision Approach Path Indicator",
    model: "LED",
    image: "/assets/aviation/precision-approach-path-indicator-led.png",
    description:
      "LED precision approach path indicator for visual approach guidance.",
    features: [
      "Precision approach path indicator",
      "LED-based solution",
      "High visibility guidance",
      "Airport environment application",
    ],
  },
  {
    name: "Constant Current Regulator",
    model: "Advance 6200 â€” IGBT",
    image:
      "/assets/aviation/constant-current-regulator-advance-6200-igbt.png",
    description:
      "Constant current regulator for airport runway lighting systems.",
    features: [
      "Constant current technology",
      "IGBT based",
      "High efficiency",
      "Runway lighting application",
    ],
  },
  {
    name: "Illuminated Runway & Taxiway Guidance Sign",
    model: "",
    image:
      "/assets/aviation/illuminated-runway-taxiway-guidance-sign.png",
    description:
      "Illuminated runway and taxiway guidance signage for airport navigation.",
    features: [
      "ICAO Annex 14",
      "LED illumination",
      "High visibility",
      "Robust construction",
    ],
  },
  {
    name: "Aircraft Barrier Systems",
    model: "",
    image: "/assets/aviation/aircraft-barrier-systems.png",
    description:
      "Aircraft barrier systems for airport protection applications.",
    features: [
      "Hook Barrier",
      "Net Barrier",
      "Retractable Hook BAK14",
      "Reliable and durable construction",
    ],
  },
];

function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#D9E3EE] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(7,27,51,0.10)]">
      <div className="flex h-[250px] items-center justify-center bg-[#F5F9FD] p-6">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <div>
          <h3 className="font-display text-xl font-bold text-[#071B33]">
            {product.name}
          </h3>

          {product.model && (
            <p className="mt-2 text-sm font-semibold text-[#1769E0]">
              {product.model}
            </p>
          )}
        </div>

        <p className="mt-4 text-sm leading-7 text-[#52667A]">
          {product.description}
        </p>

        <div className="mt-6 border-t border-[#E4EBF2] pt-5">
          <ul className="space-y-2.5">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm leading-6 text-[#52667A]"
              >
                <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-[#1769E0]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function Aviation() {
  return (
    <>
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden bg-[#071B33] pt-[74px]">
        <div className="absolute inset-x-0 top-0 h-[280px] bg-gradient-to-b from-[#0B2A4A] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#5BC7E8]">
              <Plane className="h-5 w-5" />
              Aviation Infrastructure Solutions
            </div>

            <h1 className="mt-6 font-display text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              Aviation Procurement &amp; Systems Solutions
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#DCE8F4]">
              Lotus supports government and commercial organizations with
              aviation infrastructure procurement, equipment sourcing, and
              systems integration capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1769E0]">
                Lotus USA
              </p>

              <h2 className="mt-4 font-display text-3xl font-bold text-[#071B33] sm:text-4xl">
                Aviation Procurement &amp; Integration
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#52667A]">
                Lotus supports aviation-related requirements through
                equipment procurement, infrastructure products, and systems
                integration solutions.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[20px] border border-[#D9E3EE] bg-[#F9FBFF] p-6">
                <Plane className="h-7 w-7 text-[#1769E0]" />

                <h3 className="mt-4 font-display text-lg font-bold text-[#071B33]">
                  Aviation Equipment
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#52667A]">
                  Airport lighting, approach guidance, signaling, and
                  infrastructure products.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#D9E3EE] bg-[#F9FBFF] p-6">
                <Settings className="h-7 w-7 text-[#1769E0]" />

                <h3 className="mt-4 font-display text-lg font-bold text-[#071B33]">
                  Systems Integration
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#52667A]">
                  Equipment and technology solutions aligned with operational
                  requirements.
                </p>
              </div>

              <div className="rounded-[20px] border border-[#D9E3EE] bg-[#F9FBFF] p-6">
                <Wrench className="h-7 w-7 text-[#1769E0]" />

                <h3 className="mt-4 font-display text-lg font-bold text-[#071B33]">
                  Procurement Support
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#52667A]">
                  Sourcing and fulfillment support for aviation infrastructure
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PRODUCTS
      ========================================================== */}
      <section className="bg-[#EAF4FC] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1769E0]">
              Aviation Products
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold text-[#071B33] sm:text-4xl">
              Aviation Infrastructure Equipment
            </h2>

            <p className="mt-5 text-base leading-7 text-[#52667A]">
              Products supporting airport lighting, approach guidance, runway
              and taxiway operations, signaling, and aircraft barrier
              requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((product) => (
              <ProductCard
                key={`${product.name}-${product.model}`}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STANDARDS
      ========================================================== */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1769E0]">
            Standards &amp; Applications
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold text-[#071B33] sm:text-4xl">
            Aviation Standards &amp; Applications
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#52667A]">
            The supplied aviation product materials reference ICAO, FAA, and
            IEC standards across airport lighting, runway and taxiway
            guidance, approach systems, and aviation signaling.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {["ICAO", "FAA", "IEC"].map((standard) => (
              <div
                key={standard}
                className="rounded-full border border-[#D9E3EE] bg-[#F9FBFF] px-7 py-3 text-sm font-bold text-[#071B33]"
              >
                {standard}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SINGLE CTA
      ========================================================== */}
      <section className="bg-[#071B33] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#5BC7E8]">
            Aviation Requirements
          </p>

          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Discuss an Aviation Requirement
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#DCE8F4]">
            Contact Lotus USA to discuss your aviation procurement, equipment,
            airport infrastructure, or systems integration requirement.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#1769E0] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#0F56C5]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
