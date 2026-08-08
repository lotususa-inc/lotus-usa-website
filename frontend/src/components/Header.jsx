import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV, IMG, COMPANY } from "@/data/site";
import { Icon, PrimaryButton } from "@/components/common";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState(false);
  const [mobile, setMobile] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { setMobile(false); setOpenMega(false); }, [loc.pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50" data-testid="site-header">
      <div className={`transition-[background-color,box-shadow,border-color] duration-400 ${scrolled ? "glass shadow-soft border-b border-slate-200/70" : "bg-white/80 backdrop-blur-md border-b border-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8 h-[74px]">
          <Link to="/" className="flex items-center" data-testid="logo-link">
            <img src={IMG.logo} alt="Lotus USA Inc." className="h-9 w-auto object-contain" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="desktop-nav">
            {NAV.map((item) =>
              item.mega ? (
                <div key={item.label} className="relative" onMouseEnter={() => setOpenMega(true)} onMouseLeave={() => setOpenMega(false)}>
                  <button className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-navy/80 transition-colors hover:text-royal" data-testid="nav-services">
                    {item.label}<ChevronDown className={`h-4 w-4 transition-transform ${openMega ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openMega && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                      >
                        <div className="glass rounded-2xl border border-slate-200/70 p-3 shadow-hover grid grid-cols-2 gap-2">
                          {item.items.map((s) => (
                            <Link key={s.to} to={s.to} className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-royal/5" data-testid={`mega-${s.to.split("/").pop()}`}>
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-white transition-colors group-hover:bg-royal">
                                <Icon name={s.icon} className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-navy">{s.label}</div>
                                <div className="mt-0.5 text-xs leading-snug text-slate-500 line-clamp-2">{s.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={item.to} to={item.to} className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-royal ${loc.pathname === item.to ? "text-royal" : "text-navy/80"}`} data-testid={`nav-${item.label.toLowerCase()}`}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm font-medium text-navy/70 hover:text-royal transition-colors" data-testid="header-phone">
              <Phone className="h-4 w-4" />{COMPANY.phone}
            </a>
            <PrimaryButton to="/contact" className="px-5 py-2.5" data-testid="header-cta">Request a Quote</PrimaryButton>
          </div>

          <button className="lg:hidden text-navy" onClick={() => setMobile(true)} data-testid="mobile-menu-open" aria-label="Open menu">
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] lg:hidden">
            <div className="absolute inset-0 bg-navy/50 backdrop-blur-sm" onClick={() => setMobile(false)} />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
              className="absolute right-0 top-0 h-full w-[86%] max-w-sm bg-white p-6 overflow-y-auto" data-testid="mobile-nav">
              <div className="flex items-center justify-between">
                <img src={IMG.logo} alt="Lotus USA Inc." className="h-8" />
                <button onClick={() => setMobile(false)} data-testid="mobile-menu-close"><X className="h-6 w-6 text-navy" /></button>
              </div>
              <nav className="mt-8 flex flex-col gap-1">
                <Link to="/" className="rounded-lg px-3 py-3 text-lg font-semibold text-navy">Home</Link>
                <div className="mt-2 px-3 overline text-slate-400">Services</div>
                {NAV[1].items.map((s) => (
                  <Link key={s.to} to={s.to} className="rounded-lg px-3 py-2.5 text-navy/80 font-medium">{s.label}</Link>
                ))}
                {[["Contracts", "/contracts"], ["Industries", "/industries"], ["About", "/about"], ["Contact", "/contact"]].map(([label, p]) => (
                  <Link key={p} to={p} className="rounded-lg px-3 py-3 text-lg font-semibold text-navy">{label}</Link>
                ))}
              </nav>
              <PrimaryButton to="/contact" className="mt-6 w-full">Request a Quote</PrimaryButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
