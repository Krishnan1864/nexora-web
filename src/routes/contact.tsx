import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, Headphones, Mail, MapPin, Phone, Plus, Send, ShieldCheck, Users } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Eyebrow, FadeUp, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nexora IT Solutions" },
      { name: "description", content: "Get in touch with Nexora. Multiple ways to reach our team for quotes, partnerships, and support." },
      { property: "og:title", content: "Contact Nexora" },
      { property: "og:description", content: "Let's start a great conversation." },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "How quickly will you respond to my inquiry?", a: "We respond to all inquiries within 24 hours, often much sooner." },
  { q: "Do you offer free consultation?", a: "Yes, we offer a complimentary initial consultation to understand your needs." },
  { q: "What information should I provide for a quote?", a: "Project goals, timeline, budget range, and any technical requirements you have in mind." },
  { q: "What industries do you serve?", a: "Healthcare, finance, retail, manufacturing, logistics, education, and more." },
  { q: "Can you work with our existing systems?", a: "Absolutely. We specialize in integrations and migrations of all kinds." },
  { q: "Where are you located?", a: "Our HQ is in San Francisco, with team members serving clients globally." },
];

function ContactPage() {
  return (
    <SiteLayout>
      <section className="container-x grid lg:grid-cols-[1fr_1.1fr] gap-10 pb-10 items-start">
        <FadeUp>
          <Eyebrow>Get in Touch</Eyebrow>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-ink leading-[1.05]">
            Let's Start a<br /><span className="highlight">Great Conversation</span>
          </h1>
          <p className="mt-5 max-w-md text-sm text-gray-text leading-relaxed">
            Have a question, idea, or project in mind? We'd love to hear from you. Reach out to us and our team will get back to you as soon as possible.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { I: Send, t: "Quick Response", d: "We reply within 24 hours" },
              { I: Users, t: "Expert Support", d: "Talk to our solution specialists" },
              { I: ShieldCheck, t: "Trusted Partner", d: "Reliable solutions for your business" },
              { I: Headphones, t: "24/7 Assistance", d: "We're here whenever you need us" },
            ].map(({ I, t, d }) => (
              <div key={t} className="text-center">
                <div className="mx-auto size-12 rounded-full bg-secondary text-brand grid place-items-center mb-3"><I className="size-5" strokeWidth={1.8} /></div>
                <div className="text-xs font-bold text-ink">{t}</div>
                <div className="text-[11px] text-gray-text mt-1 leading-snug">{d}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <ContactForm />
        </FadeUp>
      </section>

      <section className="container-x py-10">
        <SectionHeader eyebrow="Contact Information" title="Multiple Ways to Reach Us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { I: MapPin, t: "Our Office", lines: ["123 Innovation Drive,", "San Francisco, CA 94107,", "United States"] },
            { I: Phone, t: "Call Us", lines: ["+1 (555) 123-4567", "Mon - Fri, 9:00 AM - 6:00 PM (PST)"] },
            { I: Mail, t: "Email Us", lines: ["hello@nexora.com", "support@nexora.com"] },
            { I: Clock, t: "Business Hours", lines: ["Monday - Friday", "9:00 AM - 6:00 PM (PST)", "Saturday - Sunday: Closed"] },
          ].map(({ I, t, lines }) => (
            <div key={t} className="rounded-2xl bg-white border border-border p-6 shadow-card flex gap-4">
              <div className="grid place-items-center size-11 rounded-full bg-secondary text-brand shrink-0"><I className="size-5" strokeWidth={1.8} /></div>
              <div>
                <div className="font-bold text-ink text-sm mb-2">{t}</div>
                {lines.map((l) => <div key={l} className="text-xs text-gray-text leading-relaxed">{l}</div>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-10 grid lg:grid-cols-[1.4fr_1fr] gap-5">
        <div className="rounded-3xl overflow-hidden bg-muted border border-border relative aspect-[16/9] lg:aspect-auto min-h-[320px]">
          <iframe
            title="Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-122.413%2C37.770%2C-122.388%2C37.785&amp;layer=mapnik"
            className="w-full h-full border-0"
            loading="lazy"
          />
          <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:w-72 rounded-2xl bg-white shadow-soft p-5">
            <div className="font-bold text-sm text-ink">Nexora IT Solutions</div>
            <div className="text-xs text-gray-text mt-2 leading-relaxed">123 Innovation Drive,<br />San Francisco, CA 94107,<br />United States</div>
            <a className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand" href="#">Get Directions <ArrowRight className="size-3.5" /></a>
          </div>
        </div>
        <div className="rounded-3xl yellow-gradient p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 dotted-grid opacity-30" />
          <h3 className="text-2xl md:text-3xl font-extrabold text-ink leading-tight">Ready to Start<br />Your Project?</h3>
          <p className="mt-4 text-sm text-ink/85 max-w-sm leading-relaxed">
            Let's turn your ideas into powerful solutions. Schedule a free consultation with our experts and take the first step today.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-xs font-bold uppercase tracking-wider text-ink shadow-card hover:-translate-y-0.5 transition-transform">
            <Calendar className="size-4" /> Schedule a Free Consultation <ArrowRight className="size-4" />
          </button>
        </div>
      </section>

      <section className="container-x py-10">
        <SectionHeader eyebrow="FAQs" title="Frequently Asked Questions" />
        <div className="grid md:grid-cols-2 gap-4">
          {faqs.map((f, i) => <FAQItem key={f.q} {...f} initial={i === 0} />)}
        </div>
      </section>

      <section className="container-x py-12">
        <div className="rounded-3xl bg-secondary/60 border border-border p-8 grid lg:grid-cols-[auto_1fr_auto] gap-6 items-center">
          <div className="size-16 rounded-full bg-brand grid place-items-center text-ink shrink-0"><Send className="size-7" /></div>
          <div>
            <div className="text-xl font-extrabold text-brand">Stay Updated</div>
            <p className="text-sm text-gray-text mt-1">Subscribe to our newsletter and get the latest updates, insights, and offers straight to your inbox.</p>
          </div>
          <form className="flex items-center gap-2 rounded-2xl bg-white border border-border p-2 pl-5 min-w-[260px]" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Enter your email address" className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-text" />
            <button className="grid place-items-center size-10 rounded-xl bg-brand text-ink"><Send className="size-4" /></button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function ContactForm() {
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch soon."); }}
      className="rounded-3xl bg-white border border-border shadow-soft p-7"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <Eyebrow>Send Us a Message</Eyebrow>
        </div>
        <div className="grid place-items-center size-11 rounded-full bg-secondary text-brand"><Mail className="size-5" /></div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <Field placeholder="First Name *" />
        <Field placeholder="Last Name *" />
        <Field placeholder="Email Address *" type="email" />
        <Field placeholder="Phone Number *" type="tel" />
        <div className="sm:col-span-2"><Field placeholder="Subject *" /></div>
        <div className="sm:col-span-2"><Field placeholder="How can we help you? *" /></div>
        <div className="sm:col-span-2">
          <textarea
            placeholder="Write your message here..."
            rows={5}
            className="w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm outline-none placeholder:text-gray-text focus:border-brand transition-colors resize-none"
          />
        </div>
      </div>
      <button className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-4 text-xs font-bold uppercase tracking-wider text-ink shadow-pill hover:-translate-y-0.5 hover:bg-brand-light transition-all">
        Send Message <ArrowRight className="size-4" />
      </button>
      <div className="mt-4 flex items-center gap-2 text-xs text-gray-text">
        <ShieldCheck className="size-4 text-brand" /> We respect your privacy. Your information is safe with us.
      </div>
    </form>
  );
}

function Field({ placeholder, type = "text" }: { placeholder: string; type?: string }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full rounded-2xl border border-border bg-background px-5 py-4 text-sm outline-none placeholder:text-gray-text focus:border-brand transition-colors"
    />
  );
}

function FAQItem({ q, a, initial = false }: { q: string; a: string; initial?: boolean }) {
  const [open, setOpen] = useState(initial);
  return (
    <div className="rounded-2xl border border-border bg-white overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-3 p-5 text-left">
        <span className="text-sm font-bold text-ink">{q}</span>
        <span className={`grid place-items-center size-7 rounded-full bg-brand text-ink transition-transform ${open ? "rotate-45" : ""}`}>
          <Plus className="size-4" strokeWidth={3} />
        </span>
      </button>
      {open && <div className="px-5 pb-5 text-sm text-gray-text leading-relaxed">{a}</div>}
    </div>
  );
}
