import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck, BarChart3, MapPin } from "lucide-react";
import { useConsent } from "@/context/ConsentContext";

const CATEGORIES = [
  {
    key: "necessary",
    icon: ShieldCheck,
    title: "Strictly Necessary",
    desc: "Required for the site to function â€” page routing, security, and remembering your cookie choice. Always active.",
    always: true,
  },
  {
    key: "analytics",
    icon: BarChart3,
    title: "Analytics & Performance",
    desc: "Product analytics and anonymous session insights (PostHog) that help us understand how the site is used. Disabled until you allow it.",
  },
  {
    key: "functional",
    icon: MapPin,
    title: "Functional",
    desc: "Enables embedded third-party content such as the Google Maps office location. Disabled until you allow it.",
  },
];

function Toggle({ checked, disabled, onChange, testid }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      data-testid={testid}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
        checked ? "bg-royal" : "bg-slate-300"
      } ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"}`}
    >
      <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${checked ? "translate-x-5" : "translate-x-0.5"}`} />
    </button>
  );
}

function PreferencesModal() {
  const { prefsOpen, closePreferences, savePreferences, acceptAll, rejectNonEssential, consent } = useConsent();
  const [prefs, setPrefs] = useState({ analytics: false, functional: false });

  useEffect(() => {
    if (prefsOpen) {
      setPrefs({
        analytics: !!(consent && consent.analytics),
        functional: !!(consent && consent.functional),
      });
    }
  }, [prefsOpen, consent]);

  return (
    <AnimatePresence>
      {prefsOpen && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          data-testid="cookie-preferences-modal"
        >
          <div className="absolute inset-0 bg-navy/60 backdrop-blur-sm" onClick={closePreferences} />
          <motion.div
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative m-3 w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-hover"
          >
            <div className="flex items-center gap-3 border-b border-slate-200 px-6 py-5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-white"><Cookie className="h-5 w-5" /></span>
              <div>
                <h2 className="font-display text-lg font-bold text-navy">Cookie preferences</h2>
                <p className="text-xs text-slate-500">Manage how Lotus USA uses cookies and similar technologies.</p>
              </div>
            </div>

            <div className="max-h-[52vh] space-y-4 overflow-y-auto px-6 py-5">
              {CATEGORIES.map((cat) => {
                const CatIcon = cat.icon;
                const checked = cat.always ? true : prefs[cat.key];
                return (
                  <div key={cat.key} className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 p-4">
                    <div className="flex gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-royal"><CatIcon className="h-4 w-4" /></span>
                      <div>
                        <p className="text-sm font-semibold text-navy">{cat.title}{cat.always && <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-slate-500">Always on</span>}</p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-500">{cat.desc}</p>
                      </div>
                    </div>
                    <Toggle
                      checked={checked}
                      disabled={cat.always}
                      onChange={(v) => setPrefs((p) => ({ ...p, [cat.key]: v }))}
                      testid={`cookie-toggle-${cat.key}`}
                    />
                  </div>
                );
              })}
              <p className="text-xs text-slate-400">
                Read our <Link to="/cookie-policy" className="text-royal underline" onClick={closePreferences}>Cookie Policy</Link> and{" "}
                <Link to="/privacy-policy" className="text-royal underline" onClick={closePreferences}>Privacy Policy</Link>.
              </p>
            </div>

            <div className="flex flex-col gap-2 border-t border-slate-200 px-6 py-4 sm:flex-row sm:justify-end">
              <button onClick={rejectNonEssential} data-testid="cookie-modal-reject" className="rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-slate-50">Reject Non-Essential</button>
              <button onClick={() => savePreferences(prefs)} data-testid="cookie-modal-save" className="rounded-full border border-royal px-5 py-2.5 text-sm font-semibold text-royal transition-colors hover:bg-royal/5">Save Preferences</button>
              <button onClick={acceptAll} data-testid="cookie-modal-accept" className="rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy">Accept All</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CookieConsent() {
  const { showBanner, acceptAll, rejectNonEssential, openPreferences } = useConsent();

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 120, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 120, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-0 z-[70] px-3 pb-3 sm:px-5 sm:pb-5"
            role="region"
            aria-label="Cookie consent"
            data-testid="cookie-banner"
          >
            <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-5 shadow-hover sm:p-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy text-white"><Cookie className="h-5 w-5" /></span>
                  <div>
                    <p className="font-display text-sm font-bold text-navy">We value your privacy</p>
                    <p className="mt-1 max-w-2xl text-xs leading-relaxed text-slate-600">
                      We use strictly necessary cookies to make our site work. With your consent, we also use optional analytics and functional cookies.
                      Optional cookies stay off until you allow them. See our{" "}
                      <Link to="/cookie-policy" className="text-royal underline">Cookie Policy</Link> and{" "}
                      <Link to="/privacy-policy" className="text-royal underline">Privacy Policy</Link>.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row lg:shrink-0">
                  <button onClick={openPreferences} data-testid="cookie-manage" className="rounded-full border border-navy/15 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-slate-50">Manage Preferences</button>
                  <button onClick={rejectNonEssential} data-testid="cookie-reject" className="rounded-full border border-royal px-5 py-2.5 text-sm font-semibold text-royal transition-colors hover:bg-royal/5">Reject Non-Essential</button>
                  <button onClick={acceptAll} data-testid="cookie-accept" className="rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy">Accept All</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <PreferencesModal />
    </>
  );
}

