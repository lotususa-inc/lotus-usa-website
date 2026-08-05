import { CERTIFICATIONS } from "@/data/site";
import { Reveal, Overline, PrimaryButton, GhostButton, Icon } from "@/components/common";

export function CertMarquee() {
  const row = [...CERTIFICATIONS, ...CERTIFICATIONS];
  return (
    <div className="relative overflow-hidden border-y border-slate-200/70 bg-white py-6" data-testid="cert-marquee">
      <div className="flex w-max animate-marquee gap-4">
        {row.map((c, i) => (
          <div key={i} className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 shrink-0">
            <span className="font-mono text-xs font-semibold text-royal">{c.code}</span>
            <span className="h-3 w-px bg-slate-300" />
            <span className="text-xs font-medium text-slate-600 whitespace-nowrap">{c.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CTABanner({ title, sub, primary = "Request Consultation", primaryTo = "/contact" }) {
  return (
    <section className="relative overflow-hidden bg-navy text-white grain" data-testid="cta-banner">
      <div className="absolute inset-0 grid-lines opacity-50" />
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-royal/30 blur-[100px]" />
      <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-royal/20 blur-[110px]" />
      <div className="relative mx-auto max-w-5xl px-5 py-20 text-center lg:py-28 lg:px-8">
        <Reveal><Overline light>Ready when you are</Overline></Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05] tracking-tight">{title}</h2>
        </Reveal>
        {sub && <Reveal delay={0.1}><p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70">{sub}</p></Reveal>}
        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <PrimaryButton to={primaryTo} data-testid="cta-banner-primary">{primary}</PrimaryButton>
            <GhostButton to="/services/compliance-as-a-service" light data-testid="cta-banner-secondary">Explore Compliance</GhostButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FeatureCard({ icon, title, desc, index }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-[transform,box-shadow,border-color] duration-400 hover:-translate-y-1 hover:shadow-hover hover:border-royal/30">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-colors duration-300 group-hover:bg-royal">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      {typeof index === "number" && <span className="absolute right-6 top-6 font-mono text-xs text-slate-300">0{index + 1}</span>}
      <h3 className="mt-6 font-display text-xl font-bold text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>
    </div>
  );
}
