import { useParams } from "react-router-dom";
import { SERVICE_PAGES } from "@/data/servicesData";
import { useSEO } from "@/hooks/useSEO";
import { Reveal, Overline, PrimaryButton, GhostButton, SectionHeading, Icon } from "@/components/common";
import { CTABanner, FeatureCard } from "@/components/sections";
import { INDUSTRIES } from "@/data/site";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Compliance from "@/pages/Compliance";
import NotFound from "@/pages/NotFound";

export default function ServicePage() {
  const { slug } = useParams();
  if (slug === "compliance-as-a-service") return <Compliance />;
  const s = SERVICE_PAGES[slug];
  if (!s) return <NotFound />;
  return <GenericService s={s} slug={slug} />;
}

function GenericService({ s, slug }) {
  useSEO({ title: s.eyebrow, description: s.intro, image: s.image, path: `/services/${slug}` });
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[74px] text-white grain" data-testid="service-hero">
        <div className="absolute inset-0"><img src={s.image} alt="" className="h-full w-full object-cover opacity-30" /><div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/92 to-navy/50" /></div>
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal><div className="flex items-center gap-3"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal text-white"><Icon name={s.icon} className="h-6 w-6" /></span><Overline light>{s.eyebrow}</Overline></div></Reveal>
          <Reveal delay={0.06}><h1 className="mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">{s.title}</h1></Reveal>
          <Reveal delay={0.12}><p className="mt-6 max-w-2xl text-lg text-white/70">{s.intro}</p></Reveal>
          <Reveal delay={0.18}><div className="mt-9 flex flex-wrap gap-4"><PrimaryButton to="/contact">Request Consultation</PrimaryButton><GhostButton to="/industries" light>Industries served</GhostButton></div></Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading overline="Capabilities" title="What we deliver" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {s.features.map((f, i) => (<Reveal key={f.title} delay={(i % 3) * 0.07}><FeatureCard icon={f.icon} title={f.title} desc={f.desc} index={i} /></Reveal>))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading overline="How we engage" title="A proven, transparent process" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {s.process.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="relative rounded-2xl border border-slate-200 bg-white p-8 h-full">
                  <span className="font-mono text-sm text-royal">0{i + 1}</span>
                  <h3 className="mt-3 font-display text-xl font-bold text-navy">{t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading overline="Questions" title="Frequently asked" />
            <Reveal delay={0.1}><div className="mt-8"><PrimaryButton to="/contact">Talk to our team</PrimaryButton></div></Reveal>
          </div>
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="w-full" data-testid="service-faq">
              {s.faqs.map((f, i) => (
                <AccordionItem key={i} value={`i-${i}`} className="border-b border-slate-200">
                  <AccordionTrigger className="text-left font-display text-base font-semibold text-navy hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CTABanner title="Ready to move your mission forward?" sub="Let's discuss how Lotus USA can support your goals with secure, compliant delivery." />
    </>
  );
}
