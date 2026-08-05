import { useSEO } from "@/hooks/useSEO";
import { INDUSTRIES, IMG } from "@/data/site";
import { Reveal, Overline, SectionHeading, Icon, PrimaryButton, GhostButton } from "@/components/common";
import { CTABanner } from "@/components/sections";

export default function Industries() {
  useSEO({ title: "Industries", description: "Lotus USA Inc. delivers secure technology, staffing, and compliance across government, defense, healthcare, energy, education, and commercial sectors.", image: IMG.capitolAlt, path: "/industries" });
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[74px] text-white grain">
        <div className="absolute inset-0"><img src={IMG.capitolAlt} alt="" className="h-full w-full object-cover opacity-25" /><div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" /></div>
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal><Overline light>Industries</Overline></Reveal>
          <Reveal delay={0.06}><h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">Secure outcomes for the sectors where the stakes are highest</h1></Reveal>
          <Reveal delay={0.12}><p className="mt-6 max-w-2xl text-lg text-white/70">We tailor our security, compliance, staffing, and modernization capabilities to the unique regulatory and mission demands of each industry we serve.</p></Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name + i} delay={(i % 3) * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-[transform,box-shadow,border-color] duration-400 hover:-translate-y-1 hover:border-royal/30 hover:shadow-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-royal"><Icon name={ind.icon} className="h-6 w-6" /></div>
                  <h3 className="mt-6 font-display text-xl font-bold text-navy">{ind.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Let's align our capabilities to your mission." sub="Tell us about your sector and objectives — we'll bring the right team and the right compliance posture." />
    </>
  );
}
