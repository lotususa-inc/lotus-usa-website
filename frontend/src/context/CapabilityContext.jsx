import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { api } from "@/lib/api";
import { NAICS_CODES, REGISTRATION, AGENCIES, CAP_STATEMENT_URL } from "@/data/site";

const CapabilityContext = createContext(null);

const FALLBACK = {
  naics: NAICS_CODES,
  registration: REGISTRATION,
  agencies: AGENCIES,
  pdf: CAP_STATEMENT_URL,
};

export function CapabilityProvider({ children }) {
  const [data, setData] = useState(FALLBACK);

  const refresh = useCallback(async () => {
    try {
      const { data: d } = await api.get("/capability");
      setData({
        naics: d.naics?.length ? d.naics : FALLBACK.naics,
        registration: d.registration?.length ? d.registration : FALLBACK.registration,
        agencies: d.agencies?.length ? d.agencies : FALLBACK.agencies,
        pdf: d.pdf || FALLBACK.pdf,
      });
    } catch {
      /* keep fallback */
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  return <CapabilityContext.Provider value={{ ...data, refresh }}>{children}</CapabilityContext.Provider>;
}

export const useCapability = () => useContext(CapabilityContext) || FALLBACK;
