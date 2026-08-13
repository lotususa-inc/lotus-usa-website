import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import { COMPANY, IMG, SERVICES } from "@/data/site";
import { useConsent } from "@/context/ConsentContext";

export function Footer() {
  const { openPreferences } = useConsent();

  return (
    <footer className="relative overflow-hidden bg-navy text-white grain" data-testid="site-footer">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-4">
            <div className="inline-flex rounded-xl bg-white px-4 py-3">
              <img src="/assets/lotus-logo.png" alt="Lotus USA, Inc." className="h-9 w-auto" />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              A diversified Government & Enterprise Solutions company delivering procurement, enterprise technology, professional services, staffing, CMMC compliance, and digital solutions since 2014.
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-xs font-mono uppercase tracking-widest text-gold-light w-fit">
              <span className="h-2 w-2 rounded-full bg-gold-light animate-pulse" /> Trusted Since 2014
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
              {[["Contracts & Past Performance", "/contracts"], ["Industries", "/industries"], ["About Us", "/about"], ["Insights", "/insights"], ["Contact", "/contact"]].map(([l, p]) => (
                <li key={p}><Link to={p} className="text-sm text-white/70 transition-colors hover:text-white">{l}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="overline text-white/40">Get in touch</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-royal-light mt-0.5" /><span>{COMPANY.address1}<br />{COMPANY.address2}</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-royal-light" /><a href={`tel:${COMPANY.phone}`} className="hover:text-white">{COMPANY.phone}</a></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-royal-light" /><a href={`mailto:${COMPANY.email}`} className="hover:text-white">{COMPANY.email}</a></li>
            </ul>
            {/* Newsletter removed per design direction */}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 sm:flex-row">
          <p className="text-xs text-white/50">Â© 2026 Lotus USA, Inc. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link to="/privacy-policy" className="text-xs text-white/60 hover:text-white transition-colors" data-testid="footer-privacy">Privacy Policy</Link>
            <Link to="/cookie-policy" className="text-xs text-white/60 hover:text-white transition-colors" data-testid="footer-cookie-policy">Cookie Policy</Link>
            <button type="button" onClick={openPreferences} className="text-xs text-white/60 hover:text-white transition-colors" data-testid="footer-cookie-preferences">Cookie Preferences</button>
            <a href={COMPANY.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs text-white/60 hover:text-white" data-testid="footer-linkedin">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

