import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, ChevronRight, Headphones, Plus, Rocket, ShieldCheck, Star, Zap } from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTAButton } from "@/components/Button";
import { CTASection, Eyebrow, FadeUp } from "@/components/Section";
import { process, services, testimonials } from "@/data/site";
import serviceImg from "@/assets/service-detail.jpg";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.service.title} — Nexora IT Solutions` },
      { name: "description", content: loaderData.service.desc },
      { property: "og:title", content: loaderData.service.title },
      { property: "og:description", content: loaderData.service.desc },
    ] : [],
  }),
  component: ServiceDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x py-32 text-center">
        <h1 className="text-3xl font-extrabold text-ink">Service not found</h1>
        <Link to="/services" className="mt-6 inline-block text-brand font-semibold">Back to services</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: () => <SiteLayout><div className="container-x py-32 text-center"><h1 className="text-3xl font-extrabold">Something went wrong</h1></div></SiteLayout>,
});

const features = [
  ["Scalable & high-performance applications"],
  ["Secure, reliable & future-ready solutions"],
  ["Agile development with transparent process"],
  ["End-to-end support & maintenance"],
];

const offerings = [
  { title: "Web Application Development", desc: "Dynamic, responsive, and user-friendly web applications." },
  { title: "Mobile App Development", desc: "Native and cross-platform mobile applications." },
  { title: "Cloud Application Development", desc: "Scalable cloud-native applications on modern platforms." },
  { title: "API Development & Integration", desc: "Seamless API development and third-party integration." },
  { title: "Enterprise Software Solutions", desc: "Robust enterprise-grade solutions to streamline operations." },
  { title: "Maintenance & Support", desc: "Ongoing maintenance, updates, and technical support." },
];

const whyChoose = [
  { title: "Experienced & Certified Team", desc: "Skilled professionals with deep industry knowledge." },
  { title: "Agile Development", desc: "Iterative development for better quality and flexibility." },
  { title: "Transparent Communication", desc: "Regular updates and clear communication at every step." },
  { title: "Cost-Effective Solutions", desc: "High-quality solutions within your budget." },
];

const faqs = [
  { q: "What technologies do you use?", a: "We work with the modern stack: React, Node.js, Python, Go, AWS, GCP, Azure and many more." },
  { q: "How long does a project take?", a: "Timelines depend on scope. Typical engagements range from 4 weeks to 6 months." },
  { q: "Do you provide post-launch support?", a: "Yes — we offer flexible maintenance and support packages tailored to your needs." },
  { q: "Can you integrate with our existing system?", a: "Absolutely. Our team specializes in seamless integrations and migrations." },
];

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const Icon = service.icon;
  return (
    <SiteLayout>
      <section className="container-x">
        <nav className="flex items-center gap-2 text-xs text-gray-text mb-5">
          <Link to="/" className="hover:text-brand">« Home</Link>
          <ChevronRight className="size-3" />
          <Link to="/services" className="hover:text-brand">Services</Link>
          <ChevronRight className="size-3" />
          <span className="text-brand font-semibold">{service.title}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center pb-10">
          <FadeUp>
            <Eyebrow>Our Service</Eyebrow>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-ink leading-[1.05]">{service.title}</h1>
            <p className="mt-5 max-w-lg text-sm text-gray-text leading-relaxed">{service.desc}</p>
            <ul className="mt-6 space-y-2.5">
              {features.map(([f]) => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium text-ink">
                  <span className="grid place-items-center size-6 rounded-full bg-brand text-ink"><Check className="size-3.5" strokeWidth={3} /></span>{f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton>Request a Quote</CTAButton>
              <CTAButton variant="outline">Talk to an Expert</CTAButton>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="relative">
              <img src={serviceImg} alt={service.title} className="rounded-3xl w-full object-cover shadow-soft" width={1024} height={768} />
              <FloatingCard className="-top-4 left-6" icon={<Icon className="size-5" />} title="Clean Code" sub="High Quality" />
              <FloatingCard className="top-6 -right-3" icon={<Zap className="size-5" />} title="Agile Process" sub="On-Time Delivery" />
              <FloatingCard className="bottom-8 left-10" icon={<ShieldCheck className="size-5" />} title="Secure" sub="Data Protection" />
              <FloatingCard className="-bottom-4 right-8" icon={<Rocket className="size-5" />} title="Scalable" sub="Future Ready" />
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="container-x py-6">
        <div className="rounded-3xl bg-white border border-border py-6 px-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { I: Icon, t: "Custom Solutions", d: "Built specifically for your business needs." },
            { I: ShieldCheck, t: "Secure & Reliable", d: "Industry best security practices." },
            { I: Rocket, t: "Scalable", d: "Grow your solution as your business grows." },
            { I: Zap, t: "On-Time Delivery", d: "Agile methodology ensures faster delivery." },
            { I: Headphones, t: "24/7 Support", d: "We're here whenever you need us." },
          ].map(({ I, t, d }) => (
            <div key={t} className="flex gap-3">
              <I className="size-6 text-brand shrink-0 mt-0.5" strokeWidth={1.8} />
              <div>
                <div className="text-xs font-bold text-ink">{t}</div>
                <div className="text-[11px] text-gray-text mt-1 leading-snug">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-14 grid lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <Eyebrow>What We Offer</Eyebrow>
          <h2 className="mt-3 text-3xl lg:text-[36px] font-extrabold text-ink leading-tight">Our {service.title} Services</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {offerings.map((o) => (
              <div key={o.title} className="group rounded-2xl bg-white border border-border p-5 flex gap-4 hover:border-brand transition-colors">
                <div className="grid place-items-center size-11 rounded-xl bg-secondary text-brand shrink-0"><Icon className="size-5" strokeWidth={1.8} /></div>
                <div className="flex-1">
                  <h4 className="font-bold text-ink text-sm">{o.title}</h4>
                  <p className="text-xs text-gray-text mt-1.5 leading-relaxed">{o.desc}</p>
                </div>
                <ArrowRight className="size-4 text-brand mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-3xl bg-secondary/60 border border-border p-6 h-fit">
          <Eyebrow>Why Choose Nexora?</Eyebrow>
          <ul className="mt-5 space-y-5">
            {whyChoose.map((w) => (
              <li key={w.title} className="flex gap-3">
                <div className="grid place-items-center size-10 rounded-xl bg-white text-brand border border-border shrink-0"><Check className="size-4" strokeWidth={3} /></div>
                <div>
                  <div className="font-bold text-ink text-sm">{w.title}</div>
                  <p className="text-xs text-gray-text mt-1 leading-relaxed">{w.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="container-x py-10">
        <Eyebrow>Our Process</Eyebrow>
        <h2 className="mt-3 text-3xl lg:text-[36px] font-extrabold text-ink leading-tight">Our Proven Development Process</h2>
        <div className="mt-10 relative">
          <div className="hidden md:block absolute top-7 left-[6%] right-[6%] border-t-2 border-dashed border-brand/60" />
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 relative">
            {[...process, { step: "06", icon: Headphones, title: "Support", desc: "Continuous support and optimization." }].map((p) => {
              const Icn = p.icon;
              return (
                <div key={p.step} className="text-center">
                  <div className="mx-auto grid place-items-center size-14 rounded-full bg-white border-2 border-brand text-brand">
                    <Icn className="size-6" strokeWidth={1.8} />
                  </div>
                  <div className="mt-4 text-sm font-bold text-gray-text">{p.step}</div>
                  <div className="text-sm font-bold text-ink">{p.title}</div>
                  <p className="mt-2 text-xs text-gray-text leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-x py-14 grid lg:grid-cols-[1fr_1fr] gap-10">
        <div>
          <Eyebrow>What Our Clients Say</Eyebrow>
          <h3 className="mt-3 text-2xl font-extrabold text-ink">Real Stories From Real Clients</h3>
          <div className="mt-6 grid gap-4">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white border border-border p-5 shadow-card">
                <div className="flex gap-1 mb-2">{Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="size-3.5 fill-brand text-brand" />))}</div>
                <p className="text-sm text-ink">“{t.quote}”</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="size-9 rounded-full yellow-gradient" />
                  <div>
                    <div className="font-bold text-ink text-sm">{t.name}</div>
                    <div className="text-xs text-gray-text">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <Eyebrow>Frequently Asked Questions</Eyebrow>
          <h3 className="mt-3 text-2xl font-extrabold text-ink">Got Questions?</h3>
          <div className="mt-6 space-y-3">
            {faqs.map((f, i) => <FAQItem key={f.q} {...f} initial={i === 0} />)}
          </div>
        </div>
      </section>

      <CTASection title={<>Ready to Build Your <span className="text-white">Next Big Thing?</span></>} />
    </SiteLayout>
  );
}

function FloatingCard({ className = "", icon, title, sub }: { className?: string; icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className={`hidden md:flex absolute bg-white rounded-2xl shadow-soft p-3 pr-5 items-center gap-3 ${className}`}>
      <div className="grid place-items-center size-9 rounded-xl bg-secondary text-brand">{icon}</div>
      <div>
        <div className="text-xs font-bold text-ink">{title}</div>
        <div className="text-[11px] text-gray-text">{sub}</div>
      </div>
    </div>
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
