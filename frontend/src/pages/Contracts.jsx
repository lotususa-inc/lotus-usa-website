import { Download, FileCheck2, Building2, Award, FolderKanban } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { IMG } from "@/data/site";
import { Reveal, Overline, SectionHeading, PrimaryButton, GhostButton, Icon } from "@/components/common";
import { CTABanner } from "@/components/sections";
import { useCapability } from "@/context/CapabilityContext";

const PORTFOLIO = [
  { icon: "PackageSearch", title: "Government Procurement", desc: "IT, medical, industrial, and defense equipment procurement and systems integration." },
  { icon: "Server", title: "Enterprise Technology", desc: "Cloud, networking, data center, and unified communications delivery." },
  { icon: "Users", title: "Staffing & Professional Services", desc: "IT and healthcare staffing, engineering, and program management support." },
  { icon: "MonitorSmartphone", title: "Digital Solutions", desc: "Website, application development, and workflow automation programs." },
];

export default function Contracts() {
  const { agencies, registration, pdf } = useCapability();
  useSEO({ title: "Contracts & Past Performance", description: "Lotus USA, Inc. contract portfolio and past performance across Federal, State, and Local government and commercial enterprises since 2014.", image: IMG.capitolAlt, path: "/contracts" });
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[74px] text-white">
        <div className="absolute inset-0"><img src={IMG.capitolAlt} alt="" className="h-full w-full object-cover opacity-25" /><div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" /></div>
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <Reveal><Overline light>Contracts & Past Performance</Overline></Reveal>
          <Reveal delay={0.06}><h1 className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">A proven record of government & enterprise delivery</h1></Reveal>
          <Reveal delay={0.12}><p className="mt-6 max-w-2xl text-lg text-white/70">Since 2014, Lotus USA has executed 2,300+ government contracts across procurement, enterprise technology, staffing, and professional services. Detailed references are available to contracting officers on request.</p></Reveal>
          <Reveal delay={0.18}><div className="mt-9 flex flex-wrap gap-4"><PrimaryButton to="/contact">Request a Quote</PrimaryButton><GhostButton href={pdf} download light><Download className="h-4 w-4" />Download Capability Statement</GhostButton></div></Reveal>
        </div>
      </section>

      {/* Portfolio */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading overline="Contract Portfolio" title="Where we deliver" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PORTFOLIO.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-8 transition-[transform,box-shadow] duration-400 hover:-translate-y-1 hover:shadow-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white"><Icon name={p.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-6 font-display text-lg font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Agencies */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading overline="Agencies & Clients" title="Organizations we have supported" sub="A selection of the federal, state, local, and commercial organizations Lotus USA has served." />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {agencies.map((a, i) => (
              <Reveal key={a} delay={(i % 4) * 0.04}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-royal"><Building2 className="h-4 w-4" /></span>
                  <span className="text-sm font-medium leading-tight text-navy">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards + Case studies placeholders */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold"><Award className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">Major Awards</h3>
                <p className="mt-3 text-sm text-slate-600">Award highlights and contract vehicle details will be published here. Verified information is available to contracting officers on request.</p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-royal/10 text-royal"><FolderKanban className="h-6 w-6" /></span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy">Past Performance Case Studies</h3>
                <p className="mt-3 text-sm text-slate-600">Detailed case studies are being prepared. Contact our team to request specific past-performance references relevant to your acquisition.</p>
                <div className="mt-6"><GhostButton to="/contact">Request references</GhostButton></div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-navy p-8 text-white lg:p-10">
              <div className="flex items-center gap-3"><FileCheck2 className="h-5 w-5 text-gold-light" /><span className="overline text-gold-light">Federal Registration</span></div>
              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
                {registration.map((r) => (
                  <div key={r.label}><dt className="font-mono text-xs uppercase tracking-widest text-white/40">{r.label}</dt><dd className="mt-1 font-display text-base font-bold">{r.value}</dd></div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner title="Ready to put our past performance to work?" sub="Request a quote and our team will respond within one business day." primary="Request a Quote" />
    </>
  );
}
