import { useSEO } from "@/hooks/useSEO";
import { Reveal, Overline } from "@/components/common";
import { useConsent } from "@/context/ConsentContext";
import { COMPANY } from "@/data/site";

const LAST_UPDATED = "July 2026";

const TABLE = [
  { category: "Strictly Necessary", provider: "Lotus USA", purpose: "Site routing, security, and storing your cookie consent choice.", optional: "No" },
  { category: "Analytics & Performance", provider: "PostHog", purpose: "Anonymous usage analytics and session insights to improve the site.", optional: "Yes" },
  { category: "Functional", provider: "Google Maps", purpose: "Displays our office location map when enabled.", optional: "Yes" },
];

function Section({ title, children }) {
  return (
    <Reveal>
      <div className="mt-10 first:mt-0">
        <h2 className="font-display text-xl font-bold text-navy">{title}</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">{children}</div>
      </div>
    </Reveal>
  );
}

export default function CookiePolicy() {
  useSEO({ title: "Cookie Policy", description: "Details of the cookies and third-party technologies used on the Lotus USA, Inc. website and how to manage your consent.", path: "/cookie-policy" });
  const { openPreferences } = useConsent();
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[74px] text-white grain" data-testid="cookie-policy-hero">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
          <Reveal><Overline light>Legal</Overline></Reveal>
          <Reveal delay={0.06}><h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Cookie Policy</h1></Reveal>
          <Reveal delay={0.12}><p className="mt-4 text-sm text-white/60">Last updated: {LAST_UPDATED}</p></Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8" data-testid="cookie-policy-content">
          <Section title="What are cookies?">
            <p>Cookies and similar technologies are small files or identifiers stored on your device. They help websites function, remember your preferences, and understand how the site is used.</p>
          </Section>

          <Section title="How we use cookies">
            <p>{COMPANY.name} uses a limited set of cookies. Strictly necessary cookies are always active because the site cannot function without them. All optional cookies — analytics and functional — remain disabled until you provide consent. We do not use advertising or marketing tracking, and we do not load optional scripts before you consent.</p>
          </Section>

          <Section title="Cookies we use">
            <div className="overflow-x-auto">
              <table className="mt-2 w-full border-collapse text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="py-2 pr-4 font-semibold">Category</th>
                    <th className="py-2 pr-4 font-semibold">Provider</th>
                    <th className="py-2 pr-4 font-semibold">Purpose</th>
                    <th className="py-2 font-semibold">Optional</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE.map((r) => (
                    <tr key={r.category} className="border-b border-slate-100 align-top">
                      <td className="py-3 pr-4 font-semibold text-navy">{r.category}</td>
                      <td className="py-3 pr-4">{r.provider}</td>
                      <td className="py-3 pr-4 text-slate-600">{r.purpose}</td>
                      <td className="py-3">{r.optional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section title="Managing your preferences">
            <p>You can accept all cookies, reject non-essential cookies, or choose specific categories at any time. Your choice is stored on your device and persists across visits until you change it.</p>
            <p><button type="button" onClick={openPreferences} data-testid="cookie-policy-open-prefs" className="font-semibold text-royal underline">Open cookie preferences</button>. You can also reopen this panel using the {`"Cookie Preferences"`} link in the website footer.</p>
          </Section>

          <Section title="Contact us">
            <p>Questions about this policy? Email <a href={`mailto:${COMPANY.email}`} className="text-royal underline">{COMPANY.email}</a> or call <a href={`tel:${COMPANY.phone}`} className="text-royal underline">{COMPANY.phone}</a>.</p>
          </Section>
        </div>
      </section>
    </>
  );
}
