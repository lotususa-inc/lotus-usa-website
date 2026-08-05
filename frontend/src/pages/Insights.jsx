import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Reveal, Overline, SectionHeading } from "@/components/common";
import { CTABanner } from "@/components/sections";
import { api } from "@/lib/api";

export default function Insights() {
  useSEO({ title: "Insights", description: "Perspectives on CMMC compliance, cybersecurity, cloud modernization, and secure delivery from Lotus USA Inc.", path: "/insights" });
  const [posts, setPosts] = useState([]);
  useEffect(() => { api.get("/blog").then((r) => setPosts(r.data)).catch(() => {}); }, []);
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[74px] text-white grain">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal><Overline light>Insights</Overline></Reveal>
          <Reveal delay={0.06}><h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">Perspectives on secure, compliant delivery</h1></Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {featured && (
            <Reveal>
              <Link to={`/insights/${featured.slug}`} className="group grid overflow-hidden rounded-3xl border border-slate-200 transition-shadow duration-400 hover:shadow-hover lg:grid-cols-2" data-testid="featured-post">
                <div className="relative h-64 overflow-hidden lg:h-auto"><img src={featured.cover_image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <span className="w-fit rounded-full bg-royal/10 px-3 py-1 text-xs font-semibold text-royal">{featured.category}</span>
                  <h2 className="mt-5 font-display text-2xl font-bold text-navy lg:text-3xl group-hover:text-royal transition-colors">{featured.title}</h2>
                  <p className="mt-4 text-slate-600 line-clamp-3">{featured.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-1 font-semibold text-royal">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>
            </Reveal>
          )}
          <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.07}>
                <Link to={`/insights/${p.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 transition-[transform,box-shadow] duration-400 hover:-translate-y-1 hover:shadow-hover" data-testid={`post-card-${i}`}>
                  <div className="relative h-48 overflow-hidden"><img src={p.cover_image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-navy/90 px-3 py-1 text-xs text-white">{p.category}</span></div>
                  <div className="flex flex-1 flex-col p-6"><h3 className="font-display text-lg font-bold text-navy line-clamp-2 group-hover:text-royal transition-colors">{p.title}</h3><p className="mt-3 flex-1 text-sm text-slate-600 line-clamp-3">{p.excerpt}</p><span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-royal">Read <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTABanner title="Have a compliance or modernization challenge?" />
    </>
  );
}
