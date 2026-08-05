import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Landmark, Cpu, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { IMG, STATS, SERVICES, WHY, INDUSTRIES, CERTIFICATIONS, REGISTRATION, AGENCIES, CAP_STATEMENT_URL, COMPANY } from "@/data/site";
import { Reveal, Overline, Counter, PrimaryButton, GhostButton, SectionHeading, Icon } from "@/components/common";
import { CertMarquee, CTABanner, FeatureCard } from "@/components/sections";
import { api } from "@/lib/api";

const HERO_LINES = ["Secure.", "Compliant.", "Mission Ready."];
const PILLS = [
  { icon: ShieldCheck, label: "Cybersecurity" },
  { icon: Cloud, label: "Cloud Modernization" },
  { icon: Landmark, label: "Government" },
  { icon: Cpu, label: "Digital Transformation" },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-[74px] text-white grain" data-testid="hero">
      <div className="absolute inset-0">
        <img src={IMG.heroNetwork} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-navy/60" />
      </div>
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-royal/25 blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-12 lg:px-8 lg:py-32">
        <div className="lg:col-span-7">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Overline light>Federal & Commercial Technology Partner</Overline>
          </motion.div>
          <h1 className="mt-7 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            {HERO_LINES.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span className="block" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.85, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}>
                  {i === 2 ? <span className="text-gradient">{line}</span> : line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            Helping government and commercial organizations accelerate digital transformation, workforce solutions, cybersecurity, cloud modernization, and CMMC compliance.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.88, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton to="/contact" data-testid="hero-consult">Request Consultation</PrimaryButton>
            <GhostButton to="/industries" light data-testid="hero-explore">Explore Services</GhostButton>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.7 }}
            className="mt-12 flex flex-wrap gap-3">
            {PILLS.map((p) => (
              <div key={p.label} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-sm">
                <p.icon className="h-4 w-4 text-royal-light" />
                <span className="text-xs font-medium text-white/80">{p.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.9 }}
          className="lg:col-span-5">
          <div className="glass-dark animate-floaty rounded-3xl p-7 shadow-hover">
            <div className="flex items-center justify-between">
              <span className="overline text-royal-light">Compliance Status</span>
              <span className="flex items-center gap-2 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Active
              </span>
            </div>
            <p className="mt-5 font-display text-3xl font-bold">CMMC Level 2</p>
            <p className="mt-1 text-sm text-white/60">Aligned to NIST SP 800-171 · 110 controls</p>
            <div className="mt-6 space-y-3">
              {[["Zero Trust Architecture", 100], ["Continuous Monitoring", 100], ["GCC High Environment", 100]].map(([l, v]) => (
                <div key={l}>
                  <div className="flex justify-between text-xs text-white/70"><span>{l}</span><span className="font-mono text-royal-light">{v}%</span></div>
                  <div className="mt-1.5 h-1.5 rounded-full bg-white/10">
                    <motion.div className="h-full rounded-full bg-gradient-to-r from-royal to-royal-light" initial={{ width: 0 }} animate={{ width: `${v}%` }} transition={{ delay: 1.1, duration: 1 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative -mt-px border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-5 py-14 lg:grid-cols-4 lg:px-8">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="border-l border-slate-200 pl-6 first:border-l-0 lg:first:border-l lg:pl-8">
            <div className="font-display text-4xl font-extrabold text-navy lg:text-5xl"><Counter value={s.value} suffix={s.suffix} /></div>
            <p className="mt-2 max-w-[16ch] text-sm text-slate-500">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Insights() {
  const [posts, setPosts] = useState([]);
  useEffect(() => { api.get("/blog").then((r) => setPosts(r.data.slice(0, 3))).catch(() => {}); }, []);
  if (!posts.length) return null;
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading overline="Latest Insights" title="Perspectives on secure delivery" />
          <GhostButton to="/insights" data-testid="insights-all">View all insights</GhostButton>
        </div>
        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <Link to={`/insights/${p.slug}`} className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-[transform,box-shadow] duration-400 hover:-translate-y-1 hover:shadow-hover" data-testid={`insight-card-${i}`}>
                <div className="relative h-48 overflow-hidden">
                  <img src={p.cover_image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs font-medium text-white backdrop-blur">{p.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-navy line-clamp-2 group-hover:text-royal transition-colors">{p.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 line-clamp-2">{p.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useSEO({ title: "Secure. Compliant. Mission Ready.", description: "Lotus USA Inc. helps government and commercial organizations accelerate digital transformation, cybersecurity, cloud modernization, and CMMC Level 2 compliance.", image: IMG.heroNetwork, path: "/" });
  return (
    <>
      <Hero />
      <CertMarquee />
      <Stats />

      {/* Why */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading overline="Why Lotus USA" title="A partner built for the mission" sub="We combine defense-grade security, deep compliance expertise, and specialized talent to help organizations deliver with confidence." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.08}><FeatureCard icon={w.icon} title={w.title} desc={w.desc} /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Performance */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading overline="Past Performance" title="A proven record of trusted delivery" sub="With more than 2,300 completed contracts, Lotus USA delivers secure, compliant outcomes across Federal, State, and Local government as well as commercial enterprises. Detailed past-performance references are available to contracting officers on request." />
              <Reveal delay={0.15}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Federal Government", "State Government", "Local Government", "Commercial Enterprises"].map((t) => (
                    <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2.5 text-sm font-medium text-navy">{t}</span>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={0.2}><div className="mt-8"><GhostButton to="/contact" data-testid="past-performance-cta">Request references</GhostButton></div></Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-200 bg-navy p-8 text-white lg:p-10">
                <span className="overline text-royal-light">Federal Registration</span>
                <p className="mt-3 text-sm text-white/60">Everything a contracting officer needs to verify and award with confidence.</p>
                <dl className="mt-7 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                  {REGISTRATION.map((r) => (
                    <div key={r.label}>
                      <dt className="font-mono text-xs uppercase tracking-widest text-white/40">{r.label}</dt>
                      <dd className="mt-1 font-display text-base font-bold">{r.value}</dd>
                    </div>
                  ))}
                </dl>
                <a href={CAP_STATEMENT_URL} download className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-royal px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-royal-light" data-testid="download-capability-home">
                  <Icon name="Download" className="h-4 w-4" /> Download Capability Statement
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-slate-50 py-24 lg:py-32" data-testid="trusted-by">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading center overline="Trusted By" title="Serving agencies at every level of government" sub="A selection of the federal, state, and local organizations Lotus USA has supported. Detailed past-performance references are available to contracting officers on request." />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {AGENCIES.map((a, i) => (
              <Reveal key={a} delay={(i % 4) * 0.05}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:border-royal/30">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-royal"><Icon name="Building2" className="h-4 w-4" /></span>
                  <span className="text-sm font-medium leading-tight text-navy">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading overline="What we do" title="Four disciplines. One standard of excellence." />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link to={`/services/${s.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-9 transition-[transform,box-shadow,border-color] duration-400 hover:-translate-y-1 hover:border-royal/30 hover:shadow-hover" data-testid={`service-card-${s.slug}`}>
                  {s.flagship && <span className="absolute right-6 top-6 rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal">Flagship</span>}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-white transition-colors duration-300 group-hover:bg-royal"><Icon name={s.icon} className="h-7 w-7" /></div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-3 flex-1 text-slate-600">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-royal">Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="relative overflow-hidden bg-navy py-24 text-white grain lg:py-32">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading light overline="Industries" title="Trusted across the sectors that matter most" sub="From federal defense to critical infrastructure, we deliver secure outcomes where the stakes are highest." />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name + i} delay={(i % 5) * 0.05}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors duration-300 hover:bg-white/10 hover:border-royal/40">
                  <Icon name={ind.icon} className="h-6 w-6 text-royal-light" />
                  <p className="mt-4 font-display font-bold">{ind.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}><div className="mt-10"><GhostButton to="/industries" light>All industries</GhostButton></div></Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading center overline="Certifications & Designations" title="Credentials that open doors" sub="A diverse small business with the certifications agencies rely on to meet compliance and socioeconomic goals." />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
            {CERTIFICATIONS.map((c, i) => (
                <Reveal key={c.code} delay={(i % 7) * 0.04}>
                  <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-royal/40 hover:bg-white hover:shadow-soft">
                    <span className="font-mono text-sm font-bold text-royal">{c.code}</span>
                    <span className="mt-2 text-xs leading-tight text-slate-500">{c.name}</span>
                  </div>
                </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Insights />
      <CTABanner title="Let's build something secure, compliant, and mission ready." sub="Talk with our team about your compliance, staffing, or modernization goals. We respond within one business day." />
    </>
  );
}
