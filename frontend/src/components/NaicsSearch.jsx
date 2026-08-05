import { useState } from "react";
import { Search } from "lucide-react";
import { NAICS_CODES } from "@/data/site";
import { Reveal, Overline } from "@/components/common";

export function NaicsSearch() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const filtered = term
    ? NAICS_CODES.filter((n) => n.code.includes(term) || n.desc.toLowerCase().includes(term))
    : NAICS_CODES;

  return (
    <section className="bg-white py-24 lg:py-32" data-testid="naics-section">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center">
          <Reveal><Overline className="justify-center">NAICS Codes</Overline></Reveal>
          <Reveal delay={0.05}><h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-navy lg:text-4xl">Find us by capability</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-5 text-slate-600">Search the NAICS codes Lotus USA is registered under to confirm alignment with your acquisition.</p></Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-10 max-w-xl">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search by code or description (e.g. 541512, consulting)"
              className="w-full rounded-full border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-sm text-navy outline-none transition-colors focus:border-royal"
              data-testid="naics-search-input"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2" data-testid="naics-results">
          {filtered.map((n) => (
            <div key={n.code} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-colors duration-300 hover:border-royal/30 hover:bg-white">
              <span className="rounded-lg bg-navy px-3 py-1.5 font-mono text-sm font-bold text-white">{n.code}</span>
              <span className="pt-1 text-sm text-slate-700">{n.desc}</span>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="col-span-full py-8 text-center text-slate-400" data-testid="naics-empty">No NAICS codes match "{q}".</p>
          )}
        </div>
      </div>
    </section>
  );
}
