import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { IMG, HERO, STATS, SERVICES, WHY, INDUSTRIES, CERTIFICATIONS, PARTNERS, COMPANY } from "@/data/site";
import { Reveal, Overline, PrimaryButton, GhostButton, SectionHeading, Icon } from "@/components/common";
import { CertMarquee, CTABanner, FeatureCard } from "@/components/sections";
import { useCapability } from "@/context/CapabilityContext";
import { api } from "@/lib/api";

function Hero() {
  const { pdf } = useCapability();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-slate-50 pt-[74px]" data-testid="hero">
      <div className="absolute inset-0 grid-lines opacity-[0.5]" />
      <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-royal/10 blur-[120px]" />
      <div className="absolute left-0 top-1/2 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 lg:grid-cols-12 lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="font-mono text-[11px] uppercase tracking-[0.18em] leading-relaxed text-royal max-w-xl">
            {HERO.eyebrow}
          </motion.p>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            {HERO.headline.split(" ").map((w, i) => (
              <span key={i} className="inline-block overflow-hidden align-bottom">
                <motion.span className="inline-block pr-[0.28ch]" initial={{ y: "110%" }} animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 + i * 0.035, ease: [0.22, 1, 0.36, 1] }}>
                  {w === "Since" || w === "2014" ? <span className="text-royal">{w}</span> : w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {HERO.sub}
          </motion.p>
          <div className="mt-9 flex flex-wrap gap-4" data-testid="hero-cta-row">
            <PrimaryButton to="/contact" data-testid="hero-quote">Request a Quote</PrimaryButton>
            <GhostButton href={pdf} download data-testid="hero-capability">
              <Download className="h-4 w-4" /> Download Capability Statement
            </GhostButton>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
          className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-hover">
            <img src={IMG.capitol} alt="Government and enterprise solutions" className="h-[380px] w-full object-cover lg:h-[440px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-3xl font-extrabold text-navy">2,300+</p>
                  <p className="text-xs text-slate-600">Government contracts executed</p>
                </div>
                <div className="h-10 w-1 rounded bg-gold" />
                <div>
                  <p className="font-display text-3xl font-extrabold text-navy">2014</p>
                  <p className="text-xs text-slate-600">Serving since</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white" data-testid="stats">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-5 py-12 sm:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="px-4 py-4 text-center sm:text-left">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-royal mx-auto sm:mx-0">
              <Icon name={s.icon} className="h-5 w-5" />
            </span>
            <div className="mt-4 font-display text-xl font-extrabold text-navy lg:text-2xl">{s.big}</div>
            <p className="mt-1 text-xs leading-snug text-slate-500">{s.label}</p>
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
          <SectionHeading overline="Insights" title="News & perspectives" />
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
  const { registration, agencies, pdf } = useCapability();
  useSEO({ title: "Government & Enterprise Solutions Partner Since 2014", description: "Lotus USA, Inc. delivers government procurement, enterprise technology, professional services, IT & healthcare staffing, CMMC compliance, and digital solutions for Federal, State, Local Government, and commercial organizations.", image: IMG.heroBuilding, path: "/" });
  return (
    <>
      <Hero />
      <Stats />

      {/* Certifications — prominent */}
      <section className="bg-slate-50 py-24 lg:py-32" data-testid="certifications">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading center overline="Certifications & Designations" title="A trusted, diverse government contractor" sub="Lotus USA holds the certifications and schedules agencies rely on to award with confidence and meet socioeconomic goals." />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
            {CERTIFICATIONS.map((c, i) => (
              <Reveal key={c.code} delay={(i % 8) * 0.04}>
                <div className="group flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-5 text-center transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-soft">
                  <span className="font-display text-sm font-extrabold text-navy">{c.code}</span>
                  <span className="mt-2 text-[11px] leading-tight text-slate-500">{c.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-24 lg:py-32" data-testid="services">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading overline="What we do" title="Six ways we power government & enterprise" sub="A diversified solutions partner across procurement, enterprise technology, professional services, staffing, compliance, and digital." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.06}>
                <Link to={`/services/${s.slug}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-[transform,box-shadow,border-color] duration-400 hover:-translate-y-1 hover:border-royal/30 hover:shadow-hover" data-testid={`service-card-${s.slug}`}>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy text-white transition-colors duration-300 group-hover:bg-royal"><Icon name={s.icon} className="h-7 w-7" /></div>
                  <h3 className="mt-6 font-display text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-slate-600">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-royal">Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading overline="Why Lotus USA" title="Diversified capability. Proven delivery." />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY.map((w, i) => (<Reveal key={w.title} delay={(i % 3) * 0.07}><FeatureCard icon={w.icon} title={w.title} desc={w.desc} /></Reveal>))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-white py-24 lg:py-32" data-testid="industries">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading overline="Industries Served" title="Trusted across the public and private sectors" />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 4) * 0.05}>
                <div className="group flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors duration-300 hover:border-gold/50">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy text-white transition-colors group-hover:bg-royal"><Icon name={ind.icon} className="h-4 w-4" /></span>
                  <span className="text-sm font-semibold text-navy">{ind.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}><div className="mt-10"><GhostButton to="/industries">All industries</GhostButton></div></Reveal>
        </div>
      </section>

      {/* Past Performance + Registration */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading overline="Contracts & Past Performance" title="A record government buyers can trust" sub="With 2,300+ government contracts executed since 2014, Lotus USA delivers across Federal, State, and Local government and commercial enterprises. Detailed past-performance references are available to contracting officers on request." />
              <Reveal delay={0.15}><div className="mt-8 flex flex-wrap gap-4"><PrimaryButton to="/contracts" data-testid="past-performance-cta">View Past Performance</PrimaryButton><GhostButton href={pdf} download><Download className="h-4 w-4" />Capability Statement</GhostButton></div></Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-slate-200 bg-navy p-8 text-white lg:p-10">
                <span className="overline text-gold-light">Federal Registration</span>
                <p className="mt-3 text-sm text-white/60">Everything a contracting officer needs to verify and award with confidence.</p>
                <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5">
                  {registration.map((r) => (
                    <div key={r.label}>
                      <dt className="font-mono text-xs uppercase tracking-widest text-white/40">{r.label}</dt>
                      <dd className="mt-1 font-display text-base font-bold">{r.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-white py-24 lg:py-32" data-testid="trusted-by">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading center overline="Trusted By" title="Serving agencies at every level of government" sub="A selection of the organizations Lotus USA has supported. References available to contracting officers on request." />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {agencies.map((a, i) => (
              <Reveal key={a} delay={(i % 4) * 0.04}>
                <div className="flex h-full items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-300 hover:border-royal/30 hover:bg-white">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-royal"><Icon name="Building2" className="h-4 w-4" /></span>
                  <span className="text-sm font-medium leading-tight text-navy">{a}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="border-y border-slate-200 bg-slate-50 py-16" data-testid="partnerships">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <div className="text-center lg:text-left">
              <Overline>Partnerships & Alliances</Overline>
              <p className="mt-3 max-w-md font-display text-lg font-bold text-navy">Certified across the platforms that power the enterprise</p>
            </div>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 lg:w-auto">
              {PARTNERS.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.06}>
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-colors duration-300 hover:border-gold/40">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-white"><Icon name={p.icon} className="h-5 w-5" /></span>
                    <div><div className="font-display text-sm font-bold text-navy">{p.name}</div><div className="text-xs text-slate-500">{p.credential}</div></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Insights />
      <CTABanner title="Let's build your next government or enterprise solution." sub="Request a quote and our team will respond within one business day." primary="Request a Quote" />
    </>
  );
}
