import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageSquare, X, Phone, Mail } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import { COMPANY } from "@/data/site";
import { PrimaryButton } from "@/components/common";

function FloatingWidgets() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.96 }}
            className="glass-dark w-72 rounded-2xl p-5 text-white shadow-hover" data-testid="floating-contact-panel">
            <p className="font-display text-lg font-bold">Let's talk mission.</p>
            <p className="mt-1 text-sm text-white/70">Reach our team directly or request a consultation.</p>
            <a href={`tel:${COMPANY.phone}`} className="mt-4 flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2.5 text-sm hover:bg-white/10 transition-colors"><Phone className="h-4 w-4 text-royal-light" />{COMPANY.phone}</a>
            <a href={`mailto:${COMPANY.email}`} className="mt-2 flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2.5 text-sm hover:bg-white/10 transition-colors"><Mail className="h-4 w-4 text-royal-light" />{COMPANY.email}</a>
            <PrimaryButton to="/contact" className="mt-4 w-full py-2.5">Request a Quote</PrimaryButton>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="flex flex-col gap-3">
        <AnimatePresence>
          {show && (
            <motion.button initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy shadow-hover border border-slate-200 hover:bg-navy hover:text-white transition-colors" data-testid="back-to-top" aria-label="Back to top">
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
        <button onClick={() => setOpen((o) => !o)} className="flex h-14 w-14 items-center justify-center rounded-full bg-royal text-white shadow-[0_10px_30px_rgba(21,94,239,0.35)] hover:bg-navy transition-colors" data-testid="floating-contact-toggle" aria-label="Contact">
          {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        </button>
      </div>
    </div>
  );
}

export function Layout({ children }) {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingWidgets />
      <CookieConsent />
    </div>
  );
}

