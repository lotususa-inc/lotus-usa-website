import { useSEO } from "@/hooks/useSEO";
import { IMG, WHY, CAPABILITIES, CAP_STATEMENT_URL, COMPANY } from "@/data/site";
import { Reveal, Overline, SectionHeading, Icon, PrimaryButton } from "@/components/common";
import { CTABanner, FeatureCard } from "@/components/sections";
import { NaicsSearch } from "@/components/NaicsSearch";

const VALUES = [
  { icon: "Target", t: "Mission First", d: "Every decision is measured against the outcomes our clients are accountable for delivering." },
  { icon: "ShieldCheck", t: "Security Always", d: "We treat security and compliance as non-negotiable foundations, not optional add-ons." },
  { icon: "Handshake", t: "Integrity", d: "Transparent communication, honest timelines, and delivery you can stake a reputation on." },
  { icon: "Sparkles", t: "Excellence", d: "We hold our work to a standard worthy of the agencies and enterprises that rely on it." },
];

export default function About() {
  useSEO({ title: "About Us", description: "Lotus USA Inc. is a diverse small business delivering secure, compliant technology, staffing, and CMMC compliance to government and commercial organizations.", image: IMG.teamMeeting, path: "/about" });
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[74px] text-white grain">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-royal/25 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal><Overline light>About Lotus USA Inc.</Overline></Reveal>
          <Reveal delay={0.06}><h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">A diversified Government & Enterprise Solutions partner since 2014</h1></Reveal>
          <Reveal delay={0.12}><p className="mt-6 max-w-2xl text-lg text-white/70">Lotus USA, Inc. commenced its operations in September 2014, dedicated to delivering top-notch services that yield remarkable results and ensure the highest Return on Investment (ROI) for our clients. Our core expertise lies in crafting and incorporating cutting-edge business solutions, offering comprehensive management consulting services, and acting as a premier procurement system integrator for essential equipment across prominent technology sectors. These include networking hardware, software solutions, telecommunications equipment, construction materials, and heavy-duty rental equipment, along with technology services tailored for both Public Sector and Enterprise clientele. Over the years, Lotus has successfully executed a staggering 2300 contracts with federal agencies, state governments, municipalities, the City of Los Angeles, Los Angeles County, the Los Angeles Department of Water and Power (LADWP) and major cities</p></Reveal>
          <Reveal delay={0.18}>
            <a href={CAP_STATEMENT_URL} download className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-navy transition-colors duration-300 hover:bg-royal hover:text-white" data-testid="download-capability-about">
              <Icon name="Download" className="h-4 w-4" /> Download Capability Statement
            </a>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-2 lg:px-8">
          {[["Our Mission", "To help government and commercial organizations succeed by delivering trusted procurement, enterprise technology, professional services, staffing, and digital solutions with integrity and excellence."],
            ["Our Vision", "To be the diversified small-business partner that Federal, State, Local Government, and enterprise clients rely on for dependable, end-to-end solutions."]].map(([t, d], i) => (
            <Reveal key={t} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-10">
                <Overline>{t}</Overline>
                <p className="mt-5 font-display text-2xl font-bold leading-snug text-navy">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Company History */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal><div className="overflow-hidden rounded-3xl border border-slate-200 shadow-hover"><img src={IMG.handshake} alt="Lotus USA partnership" className="h-full w-full object-cover" loading="lazy" /></div></Reveal>
          <div>
            <SectionHeading overline="Company History" title="Built on trust since September 2014" sub="Founded in 2014, Lotus USA, Inc. has grown into a diversified Government & Enterprise Solutions company with 2,300+ government contracts executed. From procurement and systems integration to staffing and digital solutions, we have earned the trust of agencies and enterprises through dependable, mission-focused delivery nationwide." />
            <Reveal delay={0.15}><div className="mt-8 grid grid-cols-3 gap-4">
              {[["2014", "Founded"], ["2,300+", "Contracts"], ["Nationwide", "Operations"]].map(([b, l]) => (
                <div key={l} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center"><div className="font-display text-xl font-extrabold text-navy">{b}</div><div className="mt-1 text-xs text-slate-500">{l}</div></div>
              ))}
            </div></Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading overline="Our Values" title="The principles behind every engagement" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (<Reveal key={v.t} delay={i * 0.07}><FeatureCard icon={v.icon} title={v.t} desc={v.d} /></Reveal>))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal><div className="overflow-hidden rounded-3xl border border-slate-200 shadow-hover"><img src={IMG.teamMeeting} alt="Lotus USA team collaboration" className="h-full w-full object-cover" loading="lazy" /></div></Reveal>
          <div>
            <SectionHeading overline="Why Choose Lotus USA" title="Enterprise capability. Small-business agility." />
            <div className="mt-8 space-y-4">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.06}>
                  <div className="flex items-start gap-4"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-white"><Icon name={w.icon} className="h-5 w-5" /></span><div><p className="font-display font-bold text-navy">{w.title}</p><p className="mt-1 text-sm text-slate-600">{w.desc}</p></div></div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership coming soon */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <Reveal><Overline className="justify-center">Leadership</Overline></Reveal>
          <Reveal delay={0.06}><h2 className="mt-5 font-display text-3xl font-extrabold text-navy lg:text-4xl">Leadership information coming soon</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-5 text-slate-600">We're preparing detailed profiles of the leaders driving Lotus USA Inc. In the meantime, our team is ready to discuss how our capabilities and certifications can support your mission.</p></Reveal>
          <Reveal delay={0.14}><div className="mt-8 flex justify-center"><PrimaryButton to="/contact">Connect with our team</PrimaryButton></div></Reveal>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center lg:px-8">
          <Reveal><Overline className="justify-center">Community Involvement</Overline></Reveal>
          <Reveal delay={0.06}><h2 className="mt-5 font-display text-3xl font-extrabold text-navy lg:text-4xl">Committed to the communities we serve</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-5 text-slate-600">As a HUBZone and diverse small business, Lotus USA is invested in the communities and public institutions we support. Details of our community programs and partnerships will be shared here as they are finalized.</p></Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading center overline="Full Capability Set" title="Everything we bring to the table" />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c} delay={(i % 8) * 0.02}>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:border-royal/40 hover:bg-white">{c}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <NaicsSearch />

      <CTABanner title="Partner with a team that owns the outcome." />
    </>
  );
}
