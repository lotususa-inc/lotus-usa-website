import { useSEO } from "@/hooks/useSEO";
import { Reveal, Overline } from "@/components/common";
import { useConsent } from "@/context/ConsentContext";
import { COMPANY } from "@/data/site";

const LAST_UPDATED = "July 2026";

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

export default function PrivacyPolicy() {
  useSEO({ title: "Privacy Policy", description: "How Lotus USA, Inc. collects, uses, and protects the personal information you provide through our website.", path: "/privacy-policy" });
  const { openPreferences } = useConsent();
  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[74px] text-white grain" data-testid="privacy-hero">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="relative mx-auto max-w-4xl px-5 py-16 lg:px-8 lg:py-20">
          <Reveal><Overline light>Legal</Overline></Reveal>
          <Reveal delay={0.06}><h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Privacy Policy</h1></Reveal>
          <Reveal delay={0.12}><p className="mt-4 text-sm text-white/60">Last updated: {LAST_UPDATED}</p></Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8" data-testid="privacy-content">
          <Section title="Overview">
            <p>{COMPANY.name} {`("Lotus USA," "we," "us," or "our")`} respects your privacy. This policy explains what personal information we collect through {COMPANY.website}, how we use it, and the choices you have. This policy is provided for general information and does not constitute legal advice.</p>
          </Section>

          <Section title="Information we collect">
            <p>We only collect information you choose to provide and limited technical information needed to operate the site:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li><strong>Contact &amp; request forms:</strong> your name, email address, phone number, organization, area of interest, and the message you send.</li>
              <li><strong>Newsletter sign-up:</strong> your email address.</li>
              <li><strong>Analytics (optional):</strong> if you consent, anonymous usage and performance data via our analytics provider.</li>
              <li><strong>Functional embeds (optional):</strong> if you consent, embedded content such as Google Maps may set its own cookies.</li>
            </ul>
          </Section>

          <Section title="How we use your information">
            <ul className="list-disc space-y-1 pl-5">
              <li>To respond to your inquiries, quotes, and consultation requests.</li>
              <li>To send you communications you have requested, such as our newsletter.</li>
              <li>To operate, secure, and improve our website.</li>
            </ul>
            <p>We do not sell or rent your personal information, and we do not use it for third-party advertising.</p>
          </Section>

          <Section title="Analytics &amp; cookies">
            <p>Strictly necessary cookies are always active. Optional analytics and functional cookies remain disabled until you consent. You can review categories, change, or withdraw your choice at any time.</p>
            <p><button type="button" onClick={openPreferences} data-testid="privacy-open-cookie-prefs" className="font-semibold text-royal underline">Manage cookie preferences</button>. See our Cookie Policy for full details on the technologies we use.</p>
          </Section>

          <Section title="Service providers">
            <p>We use trusted third parties to operate the site, including email delivery, product analytics, and map embeds. These providers process data only as needed to provide their services.</p>
          </Section>

          <Section title="Data retention">
            <p>We retain form submissions and subscriber information only as long as necessary to respond to your request, provide requested communications, and meet legal or business record-keeping needs.</p>
          </Section>

          <Section title="Your privacy rights">
            <p>Depending on your location, you may have rights to access, correct, or delete your personal information, or to opt out of certain processing. California residents have rights under the CCPA/CPRA. Because we do not sell or share personal information for cross-context behavioral advertising, no {`"Do Not Sell or Share"`} mechanism is required. To exercise any right, contact us using the details below.</p>
          </Section>

          <Section title="Contact us">
            <p>{COMPANY.name}<br />{COMPANY.address1}, {COMPANY.address2}<br />Phone: <a href={`tel:${COMPANY.phone}`} className="text-royal underline">{COMPANY.phone}</a><br />Email: <a href={`mailto:${COMPANY.email}`} className="text-royal underline">{COMPANY.email}</a></p>
          </Section>
        </div>
      </section>
    </>
  );
}
