import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock, Linkedin, Download } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { COMPANY, SERVICES } from "@/data/site";
import { useCapability } from "@/context/CapabilityContext";
import { useConsent } from "@/context/ConsentContext";
import { Reveal, Overline, SectionHeading } from "@/components/common";
import { api, formatApiError } from "@/lib/api";

const empty = { name: "", email: "", phone: "", company: "", service: "", message: "" };

export default function Contact() {
  useSEO({ title: "Contact", description: "Contact Lotus USA Inc. — request a consultation for government contracting, staffing, CMMC compliance, or digital solutions.", path: "/contact" });
  const { registration, pdf } = useCapability();
  const { functional, openPreferences } = useConsent();
  const [form, setForm] = useState(empty);
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    try {
      await api.post("/contacts", form);
      toast.success("Thank you. Our team will respond within one business day.");
      setForm(empty);
    } catch (err) {
      toast.error(formatApiError(err.response?.data?.detail));
    } finally { setBusy(false); }
  };

  const inputCls = "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-slate-400 focus:border-royal";

  return (
    <>
      <section className="relative overflow-hidden bg-navy pt-[74px] text-white grain">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-royal/25 blur-[130px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
          <Reveal><Overline light>Get in touch</Overline></Reveal>
          <Reveal delay={0.06}><h1 className="mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.03] tracking-tight sm:text-5xl lg:text-6xl">Let's talk about your mission</h1></Reveal>
          <Reveal delay={0.12}><p className="mt-6 max-w-2xl text-lg text-white/70">Request a consultation and our team will respond within one business day.</p></Reveal>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={submit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft lg:p-10" data-testid="contact-form">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div><label className="overline text-slate-500">Full Name *</label><input required value={form.name} onChange={set("name")} className={`mt-2 ${inputCls}`} placeholder="Jane Doe" data-testid="contact-name" /></div>
                  <div><label className="overline text-slate-500">Email *</label><input required type="email" value={form.email} onChange={set("email")} className={`mt-2 ${inputCls}`} placeholder="jane@agency.gov" data-testid="contact-email" /></div>
                  <div><label className="overline text-slate-500">Phone</label><input value={form.phone} onChange={set("phone")} className={`mt-2 ${inputCls}`} placeholder="(213) 000-0000" data-testid="contact-phone" /></div>
                  <div><label className="overline text-slate-500">Organization</label><input value={form.company} onChange={set("company")} className={`mt-2 ${inputCls}`} placeholder="Your organization" data-testid="contact-company" /></div>
                </div>
                <div className="mt-5"><label className="overline text-slate-500">Area of Interest</label>
                  <select value={form.service} onChange={set("service")} className={`mt-2 ${inputCls}`} data-testid="contact-service">
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mt-5"><label className="overline text-slate-500">How can we help? *</label><textarea required rows={5} value={form.message} onChange={set("message")} className={`mt-2 ${inputCls} resize-none`} placeholder="Tell us about your goals, timeline, and requirements." data-testid="contact-message" /></div>
                <button disabled={busy} className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-royal px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-navy disabled:opacity-60 sm:w-auto" data-testid="contact-submit">
                  {busy ? "Sending…" : "Request Consultation"}
                </button>
                <p className="mt-4 text-xs leading-relaxed text-slate-500" data-testid="contact-privacy-notice">
                  By submitting this form, you acknowledge that Lotus USA, Inc. will use the information provided to respond to your request. See our{" "}
                  <Link to="/privacy-policy" className="font-medium text-royal underline hover:text-navy">Privacy Policy</Link> for more information.
                </p>
              </form>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-3xl bg-navy p-8 text-white lg:p-10">
                <h3 className="font-display text-2xl font-bold">Contact details</h3>
                <ul className="mt-7 space-y-5 text-sm">
                  <li className="flex gap-4"><MapPin className="h-5 w-5 shrink-0 text-royal-light" /><span>{COMPANY.address1}<br />{COMPANY.address2}</span></li>
                  <li className="flex gap-4"><Phone className="h-5 w-5 shrink-0 text-royal-light" /><a href={`tel:${COMPANY.phone}`} className="hover:text-royal-light">{COMPANY.phone}</a></li>
                  <li className="flex gap-4"><Mail className="h-5 w-5 shrink-0 text-royal-light" /><a href={`mailto:${COMPANY.email}`} className="hover:text-royal-light">{COMPANY.email}</a></li>
                  <li className="flex gap-4"><Clock className="h-5 w-5 shrink-0 text-royal-light" /><span>Mon–Fri · 8:00 AM – 6:00 PM PT</span></li>
                  <li className="flex gap-4"><Linkedin className="h-5 w-5 shrink-0 text-royal-light" /><a href={COMPANY.linkedin} target="_blank" rel="noreferrer" className="hover:text-royal-light">linkedin.com/in/lotususainc</a></li>
                </ul>
              </div>
              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200">
                {functional ? (
                  <iframe title="Lotus USA Inc. location" width="100%" height="280" loading="lazy" style={{ border: 0 }}
                    src="https://www.google.com/maps?q=355+S+Grand+Ave+Suite+2450+Los+Angeles+CA+90071&output=embed" data-testid="contact-map" />
                ) : (
                  <div className="flex h-[280px] flex-col items-center justify-center gap-3 bg-slate-50 px-6 text-center" data-testid="contact-map-placeholder">
                    <MapPin className="h-7 w-7 text-royal" />
                    <p className="text-sm font-semibold text-navy">{COMPANY.address1}, {COMPANY.address2}</p>
                    <p className="max-w-xs text-xs text-slate-500">The interactive map uses Google Maps (a functional cookie). Enable functional cookies to load it.</p>
                    <button type="button" onClick={openPreferences} className="rounded-full bg-navy px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-royal" data-testid="contact-map-enable">Enable map</button>
                  </div>
                )}
              </div>
              <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6" data-testid="contact-registration">
                <span className="overline text-slate-500">Federal Registration</span>
                <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4">
                  {registration.map((r) => (
                    <div key={r.label}>
                      <dt className="font-mono text-xs uppercase tracking-widest text-slate-400">{r.label}</dt>
                      <dd className="mt-0.5 text-sm font-semibold text-navy">{r.value}</dd>
                    </div>
                  ))}
                </dl>
                <a href={pdf} download className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-royal" data-testid="download-capability-contact">
                  <Download className="h-4 w-4" /> Download Capability Statement
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
