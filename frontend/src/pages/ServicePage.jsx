import { useParams } from "react-router-dom";
import { SERVICE_PAGES } from "@/data/servicesData";
import { useSEO } from "@/hooks/useSEO";
import { Icon } from "@/components/common";

export default function ServicePage() {
  const { slug } = useParams();

  const normalizedSlug = decodeURIComponent(slug || "")
    .trim()
    .replace(/^\/+|\/+$/g, "")
    .toLowerCase();

  // CMMC has its own dedicated page.
  if (normalizedSlug === "cmmc-as-a-service") {
    const Compliance = require("@/pages/Compliance").default;
    return <Compliance />;
  }

  const service = SERVICE_PAGES[normalizedSlug];

  if (!service) {
    const NotFound = require("@/pages/NotFound").default;
    return <NotFound />;
  }

  return <GenericService service={service} slug={normalizedSlug} />;
}

function GenericService({ service, slug }) {
  const isDigitalSolutions = slug === "digital-solutions";

  useSEO({
    title: isDigitalSolutions
      ? "Digital Solutions & Web Development"
      : service.eyebrow || service.title,
    description: isDigitalSolutions
      ? "Lotus USA provides digital solutions including website development, custom web applications, mobile apps, AI solutions, workflow automation, and cloud applications."
      : service.intro,
    image: service.image,
    path: `/services/${slug}`,
  });

  return (
    <main className="min-h-screen bg-white">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative isolate overflow-hidden bg-[#062b5c] text-white">

        {service.image && (
          <div className="absolute inset-0 -z-10">

            <img
              src={service.image}
              alt=""
              className="h-full w-full object-cover opacity-20"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#062b5c] via-[#062b5c]/95 to-[#062b5c]/75" />

          </div>
        )}

        <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">

          <div className="max-w-4xl">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600 text-white">
                <Icon
                  name={service.icon || "BriefcaseBusiness"}
                  className="h-6 w-6"
                />
              </div>

              <span className="font-display text-lg font-extrabold uppercase tracking-[0.14em] text-cyan-300 sm:text-xl">
                {isDigitalSolutions ? "Digital Solutions" : service.eyebrow}
              </span>

            </div>

            <h1 className="mt-7 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              {isDigitalSolutions
                ? "Digital Solutions That Deliver"
                : service.title}
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-blue-100 sm:text-xl">
              {isDigitalSolutions
                ? "Lotus USA designs and builds modern websites, custom applications, mobile experiences, AI-driven solutions, workflow automation, and cloud applications that improve how organizations serve their users."
                : service.intro}
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          CAPABILITIES
      ========================================================= */}
      <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl text-left">

            <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
              <span
                aria-hidden="true"
                className="h-1 w-12 rounded-full bg-[#1769E0]"
              />
              <span>CAPABILITIES</span>
            </div>

            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#062b5c] sm:text-5xl">
              What we deliver
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
              Digital solutions designed around practical requirements,
              measurable outcomes, security, reliability, and long-term
              support.
            </p>

          </div>


          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {(service.features || []).map((feature, index) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#062b5c]">
                  <Icon
                    name={feature.icon || "CheckCircle2"}
                    className="h-6 w-6"
                  />
                </div>

                <div className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-cyan-700">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-2 text-xl font-bold text-[#062b5c]">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.desc}
                </p>

              </article>
            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          DELIVERY APPROACH
      ========================================================= */}
      {service.process?.length > 0 && (
        <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl text-left">

              <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
                <span
                  aria-hidden="true"
                  className="h-1 w-12 rounded-full bg-[#1769E0]"
                />
                <span>DELIVERY APPROACH</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#062b5c] sm:text-5xl">
                A clear path from requirement to delivery
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                A structured approach designed to move from discovery through
                implementation, deployment, and continuous improvement.
              </p>

            </div>


            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {service.process.map(([title, description], index) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#062b5c] text-xs font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
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
      )}


      {/* =========================================================
          ADDITIONAL SERVICE CONTENT
      ========================================================= */}
      {service.split && (
        <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

          <div className="mx-auto max-w-7xl">

            <div className="max-w-3xl text-left">

              <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
                <span
                  aria-hidden="true"
                  className="h-1 w-12 rounded-full bg-[#1769E0]"
                />
                <span>{service.split.overline}</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#062b5c] sm:text-5xl">
                {service.split.title}
              </h2>

              {service.split.sub && (
                <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                  {service.split.sub}
                </p>
              )}

            </div>


            {service.split.groups && (
              <div className="mt-12 grid gap-6 lg:grid-cols-2">

                {service.split.groups.map((group) => (
                  <div
                    key={group.name}
                    className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                  >

                    <h3 className="text-xl font-bold text-[#062b5c]">
                      {group.name}
                    </h3>

                    {group.roles?.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">

                        {group.roles.map((role) => (
                          <span
                            key={role}
                            className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                          >
                            {role}
                          </span>
                        ))}

                      </div>
                    )}

                  </div>
                ))}

              </div>
            )}

          </div>

        </section>
      )}


      {/* =========================================================
          WHY LOTUS — DIGITAL SOLUTIONS
      ========================================================= */}
      {isDigitalSolutions && (
        <section className="px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl text-left">
              <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
                <span
                  aria-hidden="true"
                  className="h-1 w-12 rounded-full bg-[#1769E0]"
                />
                <span>WHY LOTUS</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#062b5c] sm:text-5xl">
                Digital solutions built around practical requirements
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
                We combine website development, application engineering,
                automation, AI, and cloud capabilities to create digital
                solutions focused on usability, performance, security,
                reliability, and long-term support.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* =========================================================
          FAQ
      ========================================================= */}
      {service.faqs?.length > 0 && (
        <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-12 lg:py-24">

          <div className="mx-auto max-w-4xl">

            <div className="max-w-3xl text-left">

              <div className="mb-6 inline-flex items-center gap-4 font-display text-lg font-extrabold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xl">
                <span
                  aria-hidden="true"
                  className="h-1 w-12 rounded-full bg-[#1769E0]"
                />
                <span>FAQ</span>
              </div>

              <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-[#062b5c] sm:text-5xl">
                Frequently asked questions
              </h2>

            </div>


            <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">

              {service.faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group p-6"
                >

                  <summary className="cursor-pointer list-none pr-8 text-lg font-semibold text-[#062b5c]">
                    {faq.q}
                  </summary>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {faq.a}
                  </p>

                </details>
              ))}

            </div>

          </div>

        </section>
      )}

    </main>
  );
}