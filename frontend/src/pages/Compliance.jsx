import { motion } from "framer-motion";
import { useSEO } from "@/hooks/useSEO";
import { IMG } from "@/data/site";
import { Reveal, Overline, PrimaryButton, GhostButton, SectionHeading, Icon, Counter } from "@/components/common";
import { CTABanner } from "@/components/sections";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const PILLARS = [
  { icon: "ShieldCheck", title: "CMMC Level 2", desc: "Full alignment to the 110 controls required for organizations handling Controlled Unclassified Information." },
  { icon: "FileCheck2", title: "NIST SP 800-171", desc: "Control implementation, documentation, and evidence management across all 14 control families." },
  { icon: "Cloud", title: "Microsoft GCC High", desc: "Accredited sovereign cloud enclave for CUI, ITAR, and DFARS-regulated workloads." },
  { icon: "Scale", title: "DFARS", desc: "DFARS 252.204-7012 compliance including incident reporting and flow-down requirements." },
  { icon: "Lock", title: "Zero Trust", desc: "Identity-first architecture with least privilege, micro-segmentation, and continuous verification." },
  { icon: "Activity", title: "Continuous Monitoring", desc: "24/7 telemetry, alerting, and posture management to keep you audit-ready year-round." },
];

const LIFECYCLE = [
  { n: "01", t: "Gap Assessment", d: "A control-by-control assessment against NIST SP 800-171 to establish your current posture and score." },
  { n: "02", t: "System Security Plan", d: "A comprehensive SSP documenting how each control is implemented across your environment." },
  { n: "03", t: "POA&M", d: "A prioritized Plan of Action & Milestones that sequences remediation by risk and effort." },
  { n: "04", t: "Remediation", d: "Hands-on implementation — from GCC High migration to policy, tooling, and access controls." },
  { n: "05", t: "Training", d: "Role-based security awareness and insider-threat training to satisfy control requirements." },
  { n: "06", t: "Assessment & Audit Readiness", d: "Mock assessments and evidence packaging so you walk into a C3PAO review with confidence." },
  { n: "07", t: "Compliance Monitoring", d: "Continuous monitoring and reporting that maintain your posture between assessments." },
  { n: "08", t: "Managed Compliance", d: "Ongoing managed compliance so your team stays focused on the mission, not the paperwork." },
];

export default function Compliance() {
  useSEO({ title: "CMMC as a Service", description: "CMMC Level 1 & 2, NIST SP 800-171, Microsoft GCC High, policies, assessments, and training — delivered as a managed service by Lotus USA, Inc.", image: IMG.cmmcShield, path: "/services/cmmc-as-a-service" });
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#050e26] pt-[74px] text-white grain" data-testid="compliance-hero">
        <div className="absolute inset-0"><img src={IMG.cmmcShield} alt="" className="h-full w-full object-cover opacity-45" /><div className="absolute inset-0 bg-gradient-to-r from-[#050e26] via-[#050e26]/85 to-[#050e26]/30" /><div className="absolute inset-0 grid-lines opacity-30" /></div>
        <div className="absolute right-10 top-1/4 h-96 w-96 rounded-full bg-royal/30 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-36">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-royal/40 bg-royal/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-royal-light animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-royal-light">One of Our Six Service Areas</span>
            </div>
          </Reveal>
          <Reveal delay={0.06}><h1 className="mt-7 max-w-4xl font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-7xl">Compliance as a <span className="text-gradient">Service</span></h1></Reveal>
          <Reveal delay={0.12}><p className="mt-6 max-w-2xl text-lg text-white/75">Achieve and maintain CMMC Level 2 readiness without diverting your team from the mission. We deliver assessment, remediation, and continuous monitoring as one managed program.</p></Reveal>
          <Reveal delay={0.18}><div className="mt-9 flex flex-wrap gap-4"><PrimaryButton to="/contact">Start Your Assessment</PrimaryButton><GhostButton href="#lifecycle" light>See the roadmap</GhostButton></div></Reveal>
          <Reveal delay={0.24}>
            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-white/10 pt-8">
              {[["110", "NIST controls"], ["14", "Control families"], ["24/7", "Monitoring"]].map(([v, l]) => (
                <div key={l}><div className="font-display text-3xl font-extrabold lg:text-4xl">{v}</div><p className="mt-1 text-xs text-white/50">{l}</p></div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading overline="What's covered" title="A complete defense-grade compliance stack" sub="Everything the Defense Industrial Base needs to protect CUI and win regulated contracts — under one accountable partner." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.07}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 transition-[transform,box-shadow] duration-400 hover:-translate-y-1 hover:shadow-hover">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-royal"><Icon name={p.icon} className="h-6 w-6" /></div>
                  <h3 className="mt-6 font-display text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section id="lifecycle" className="relative overflow-hidden bg-[#050e26] py-24 text-white grain lg:py-32">
        <div className="absolute inset-0 grid-lines opacity-25" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading light overline="The Roadmap" title="From gap assessment to managed compliance" sub="A structured, evidence-driven lifecycle that takes you from unknown posture to sustained, audit-ready compliance." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {LIFECYCLE.map((step, i) => (
              <Reveal key={step.n} delay={(i % 4) * 0.06}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:border-royal/40 hover:bg-white/10">
                  <span className="font-mono text-2xl font-bold text-royal-light">{step.n}</span>
                  <h3 className="mt-4 font-display text-lg font-bold">{step.t}</h3>
                  <p className="mt-2 text-sm text-white/60">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why managed */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-hover">
              <img src={IMG.serverRack} alt="Secure infrastructure" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute bottom-5 left-5 right-5 glass-dark rounded-2xl p-5">
                <div className="flex items-center justify-between"><span className="overline text-royal-light">Posture Score</span><span className="text-emerald-300 text-xs">Audit Ready</span></div>
                <div className="mt-3 font-display text-3xl font-bold"><Counter value={110} />/110 controls</div>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading overline="Why managed compliance" title="Compliance that runs itself — so you can run the mission" sub="CMMC is not a one-time project. Requirements evolve, environments drift, and audits recur. Our managed model keeps you continuously compliant." />
            <div className="mt-8 space-y-4">
              {["Predictable cost with a single accountable partner", "Continuous monitoring instead of point-in-time snapshots", "Expert remediation across cloud, identity, and endpoints", "Assessment-ready evidence maintained year-round"].map((t, i) => (
                <Reveal key={t} delay={i * 0.06}>
                  <div className="flex items-start gap-3"><Icon name="CheckCircle2" className="mt-0.5 h-5 w-5 shrink-0 text-royal" /><span className="text-slate-700">{t}</span></div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}><div className="mt-9"><PrimaryButton to="/contact">Request a Gap Assessment</PrimaryButton></div></Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <SectionHeading center overline="Questions" title="CMMC, answered" />
          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="mt-10 w-full" data-testid="compliance-faq">
              {[
                ["Who needs CMMC Level 2?", "Organizations in the Defense Industrial Base that store, process, or transmit Controlled Unclassified Information (CUI) under DoD contracts typically require Level 2 alignment with NIST SP 800-171."],
                ["How long does readiness take?", "It depends on your current posture and environment. After a gap assessment, we provide a realistic timeline and a prioritized POA&M to reach assessment readiness."],
                ["Do we need Microsoft GCC High?", "Many organizations handling CUI or ITAR data migrate to GCC High for the sovereignty and boundary controls the framework expects. We assess and, where appropriate, execute that migration."],
                ["What is continuous monitoring?", "Ongoing telemetry, alerting, and posture management that keep your controls effective and your evidence current between formal assessments."],
              ].map(([q, a], i) => (
                <AccordionItem key={i} value={`c-${i}`} className="border-b border-slate-200">
                  <AccordionTrigger className="text-left font-display text-base font-semibold text-navy hover:no-underline">{q}</AccordionTrigger>
                  <AccordionContent className="text-slate-600">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CTABanner title="Get audit-ready with a partner who owns the outcome." sub="Start with a gap assessment and receive a clear, prioritized roadmap to CMMC Level 2." primary="Start Your Assessment" />
    </>
  );
}
