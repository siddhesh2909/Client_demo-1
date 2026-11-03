"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { CONTACT } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const SERVICE_OPTIONS = [
  "Wedding Photography / Film",
  "Pre-Wedding Shoot",
  "Traditional Wada Studio Shoot",
  "Academy / Classes",
  "Reels & Content Production",
  "Other",
];

type Errors = { name?: string; phone?: string; service?: string };

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", date: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): boolean => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[+]?[\d\s-]{10,15}$/.test(form.phone.trim()))
      e.phone = "Please enter a valid 10-digit phone number.";
    if (!form.service) e.service = "Please choose a service.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSent(true);
    toast.success("Enquiry noted! We'll get back to you soon. (Demo form — no data was sent.)");
  };

  const set = (k: keyof typeof form) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [k]: ev.target.value });

  const inputCls =
    "w-full rounded-lg border border-gold/25 bg-charcoal/60 px-4 py-3 text-sm text-cream placeholder:text-cream/35 outline-none focus:border-gold transition-colors";
  const errCls = "mt-1.5 text-xs text-kesari";

  return (
    <section id="contact" data-testid="booking-form-section" className="py-24 sm:py-32 bg-charcoal-deep">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Book Your Date With Us."
          marathi="तुमची आठवण आम्हाला सोपवा"
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-3">
            {sent ? (
              <div
                data-testid="form-success-message"
                className="h-full min-h-[320px] rounded-2xl border border-gold/40 bg-maroon/20 flex flex-col items-center justify-center text-center p-10"
              >
                <span className="font-serif text-3xl gold-text">धन्यवाद!</span>
                <p className="mt-4 text-cream/80 max-w-md">
                  Thank you, {form.name.split(" ")[0]}! Your enquiry has been noted.
                  This is a demo form — connect it to the studio&apos;s WhatsApp or email
                  when the site goes live.
                </p>
                <button
                  data-testid="form-send-another"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", phone: "", service: "", date: "", message: "" });
                  }}
                  className="mt-8 rounded-full border border-gold px-8 py-3 text-sm font-semibold text-gold hover:bg-gold hover:text-charcoal transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-gold/20 bg-charcoal/60 p-7 sm:p-9 backdrop-blur-sm">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.18em] text-gold/80">
                      Your Name *
                    </label>
                    <input
                      id="name"
                      data-testid="form-input-name"
                      value={form.name}
                      onChange={set("name")}
                      placeholder="e.g. Aishwarya Patil"
                      className={inputCls}
                    />
                    {errors.name && <p data-testid="form-error-name" className={errCls}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.18em] text-gold/80">
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      data-testid="form-input-phone"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="+91 98XXXXXXXX"
                      className={inputCls}
                    />
                    {errors.phone && <p data-testid="form-error-phone" className={errCls}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-[0.18em] text-gold/80">
                      Service *
                    </label>
                    <select
                      id="service"
                      data-testid="form-select-service"
                      value={form.service}
                      onChange={set("service")}
                      className={`${inputCls} ${form.service ? "" : "text-cream/35"}`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((o) => (
                        <option key={o} value={o} className="bg-charcoal text-cream">
                          {o}
                        </option>
                      ))}
                    </select>
                    {errors.service && <p data-testid="form-error-service" className={errCls}>{errors.service}</p>}
                  </div>
                  <div>
                    <label htmlFor="date" className="mb-2 block text-xs uppercase tracking-[0.18em] text-gold/80">
                      Tentative Event Date
                    </label>
                    <input
                      id="date"
                      type="date"
                      data-testid="form-input-date"
                      value={form.date}
                      onChange={set("date")}
                      className={`${inputCls} [color-scheme:dark]`}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.18em] text-gold/80">
                      Tell Us About Your Event
                    </label>
                    <textarea
                      id="message"
                      data-testid="form-input-message"
                      value={form.message}
                      onChange={set("message")}
                      rows={4}
                      placeholder="Venue, dates, number of guests, what you have in mind…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  data-testid="form-submit-button"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-10 py-3.5 text-sm font-semibold text-charcoal hover:bg-gold-light transition-colors duration-300"
                >
                  <Send size={16} />
                  Send Enquiry
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl border border-gold/20 bg-charcoal/60 p-7">
              <h3 className="font-serif text-xl text-cream">Studio Details</h3>
              <ul className="mt-5 space-y-4 text-sm text-cream/70">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                  <span data-testid="contact-address">{CONTACT.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={18} className="text-gold shrink-0 mt-0.5" />
                  <a href={CONTACT.phoneHref} data-testid="contact-phone" className="hover:text-gold transition-colors">
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail size={18} className="text-gold shrink-0 mt-0.5" />
                  <a href={`mailto:${CONTACT.email}`} data-testid="contact-email" className="hover:text-gold transition-colors">
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-xs text-cream/40 leading-relaxed">
                Demo placeholders — replace with the studio&apos;s real address,
                phone and email.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gold/20 h-64">
              <iframe
                title="Studio location map (demo placeholder)"
                data-testid="contact-map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.mapsEmbedQuery)}&output=embed`}
                className="w-full h-full grayscale-[35%] contrast-[1.05]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
