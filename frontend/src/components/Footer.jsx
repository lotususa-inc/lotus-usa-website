import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Phone, Printer, Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { COMPANY, IMG, SERVICES } from "@/data/site";
import { api, formatApiError } from "@/lib/api";

export function Footer() {
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const subscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setBusy(true);
    try {
      await api.post("/newsletter", { email });
      toast.success("You're subscribed. Watch for Lotus USA insights.");
      setEmail("");
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail));
    } finally { setBusy(false); }
  };

  return (
    <footer className="relative overflow-hidden bg-navy text-white grain" data-testid="site-footer">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <img src="/assets/lotus-logo-white.png" alt="Lotus USA Inc." className="h-8 w-auto" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              A diverse small business delivering secure, compliant technology, staffing, and CMMC compliance to government and commercial organizations.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-widest text-royal-light w-fit">
              <span className="h-2 w-2 rounded-full bg-royal-light animate-pulse" /> {COMPANY.tagline}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="overline text-white/40">Services</h4>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-white/70 transition-colors hover:text-white">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="overline text-white/40">Company</h4>
            <ul className="mt-5 space-y-3">
              {[["Industries", "/industries"], ["About Us", "/about"], ["Insights", "/insights"], ["Contact", "/contact"], ["Admin", "/admin"]].map(([l, p]) => (
                <li key={p}><Link to={p} className="text-sm text-white/70 transition-colors hover:text-white">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="overline text-white/40">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-royal-light mt-0.5" /><span>{COMPANY.address1}<br />{COMPANY.address2}</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-royal-light" /><a href={`tel:${COMPANY.phone}`} className="hover:text-white">{COMPANY.phone}</a></li>
              <li className="flex gap-3"><Printer className="h-4 w-4 shrink-0 text-royal-light" /><span>Fax {COMPANY.fax}</span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-royal-light" /><a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a></li>
            </ul>
            <form onSubmit={subscribe} className="mt-6" data-testid="footer-newsletter-form">
              <label className="overline text-white/40">Newsletter</label>
              <div className="mt-3 flex gap-2">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@agency.gov"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-royal-light" data-testid="newsletter-email" />
                <button disabled={busy} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-royal transition-colors hover:bg-royal-light disabled:opacity-60" data-testid="newsletter-submit" aria-label="Subscribe">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
          <p className="text-xs text-white/50">© 2026 Lotus USA Inc. All Rights Reserved.</p>
          <a href={COMPANY.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-white/60 hover:text-white" data-testid="footer-linkedin">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
