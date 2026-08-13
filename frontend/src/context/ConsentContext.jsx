import { createContext, useContext, useEffect, useState, useCallback } from "react";

// Consent storage key. Bump the version if categories change.
const KEY = "lotus_cookie_consent_v1";

const ConsentContext = createContext(null);

// Apply the user's consent choice to the actual third-party technologies.
// Only PostHog (analytics + session recording) is a non-essential tracker on
// this site; it is initialised opted-out by default in index.html.
function applyConsent(c) {
  const ph = typeof window !== "undefined" ? window.posthog : null;
  if (!ph) return;
  try {
    if (c && c.analytics) {
      ph.opt_in_capturing && ph.opt_in_capturing();
      ph.startSessionRecording && ph.startSessionRecording();
    } else {
      ph.stopSessionRecording && ph.stopSessionRecording();
      ph.opt_out_capturing && ph.opt_out_capturing();
    }
  } catch (e) {
    /* posthog not ready â€” safe to ignore, default is opted-out */
  }
}

export function ConsentProvider({ children }) {
  // undefined = still loading from storage, null = no decision yet, object = decided
  const [consent, setConsent] = useState(undefined);
  const [prefsOpen, setPrefsOpen] = useState(false);

  useEffect(() => {
    let stored = null;
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) stored = JSON.parse(raw);
    } catch (e) {
      stored = null;
    }
    setConsent(stored);
    applyConsent(stored); // no decision => opted out (default)
  }, []);

  const persist = useCallback((prefs) => {
    const value = {
      necessary: true,
      analytics: !!prefs.analytics,
      functional: !!prefs.functional,
      ts: new Date().toISOString(),
      v: 1,
    };
    try {
      localStorage.setItem(KEY, JSON.stringify(value));
    } catch (e) {
      /* storage unavailable â€” consent will not persist */
    }
    setConsent(value);
    applyConsent(value);
    setPrefsOpen(false);
  }, []);

  const acceptAll = useCallback(() => persist({ analytics: true, functional: true }), [persist]);
  const rejectNonEssential = useCallback(() => persist({ analytics: false, functional: false }), [persist]);
  const savePreferences = useCallback((p) => persist(p), [persist]);
  const openPreferences = useCallback(() => setPrefsOpen(true), []);
  const closePreferences = useCallback(() => setPrefsOpen(false), []);

  return (
    <ConsentContext.Provider
      value={{
        consent,
        showBanner: consent === null,
        analytics: !!(consent && consent.analytics),
        functional: !!(consent && consent.functional),
        acceptAll,
        rejectNonEssential,
        savePreferences,
        prefsOpen,
        openPreferences,
        closePreferences,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export const useConsent = () => useContext(ConsentContext);

