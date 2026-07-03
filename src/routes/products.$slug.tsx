import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  ChevronRight,
  Heart,
  Plus,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
  Zap,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTAButton } from "@/components/Button";
import { CTASection, Eyebrow, FadeUp, SectionHeader } from "@/components/Section";
import { products, testimonials } from "@/data/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Nexora` },
          { name: "description", content: loaderData.product.desc },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.desc },
        ]
      : [],
  }),
  component: ProductDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-x py-32 text-center">
        <h1 className="text-3xl font-extrabold">Product not found</h1>
        <Link to="/" className="mt-6 inline-block text-brand font-semibold">
          Back to home
        </Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: () => (
    <SiteLayout>
      <div className="container-x py-32 text-center">
        <h1 className="text-3xl font-extrabold">Something went wrong</h1>
      </div>
    </SiteLayout>
  ),
});

const integrations = [
  "QuickBooks",
  "Xero",
  "PayPal",
  "Stripe",
  "Slack",
  "Microsoft 365",
  "Google Workspace",
  "50+ More",
];
const faqs = [
  { q: "Is there a free trial?", a: "Yes — 14-day free trial with no credit card required." },
  {
    q: "Can it scale with my team?",
    a: "Absolutely. Our products are built for teams of any size.",
  },
  {
    q: "Do you offer onboarding support?",
    a: "Yes, dedicated onboarding specialists guide your team end to end.",
  },
  {
    q: "Is my data secure?",
    a: "We follow enterprise-grade security with ISO 27001 and SOC 2 compliance.",
  },
];

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const [activeTab, setActiveTab] = useState(0);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <SiteLayout>
      <section className="container-x">
        <nav className="flex items-center gap-2 text-xs text-gray-text mb-5">
          <Link to="/" className="hover:text-brand">
            « Home
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-brand font-semibold">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 items-center pb-10">
          <FadeUp>
            <Eyebrow>Product</Eyebrow>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-ink leading-[1.05]">
              {product.name.split(" ")[0]}{" "}
              <span className="highlight">{product.name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="mt-5 max-w-lg text-sm text-gray-text leading-relaxed">{product.desc}</p>
            <ul className="mt-6 space-y-2.5">
              {(product.features as string[]).map((f: string) => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium text-ink">
                  <span className="grid place-items-center size-6 rounded-full bg-brand text-ink">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton>Request a Demo</CTAButton>
              <CTAButton variant="outline">Talk to an Expert</CTAButton>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-3xl bg-white border border-border shadow-soft overflow-hidden p-4">
              <div className="rounded-2xl yellow-gradient aspect-[5/4] relative overflow-hidden p-6">
                <div className="absolute inset-0 dotted-grid opacity-30" />
                <div className="relative h-full bg-white/95 rounded-xl p-5 shadow-card flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="size-2.5 rounded-full bg-brand" />
                    <div className="text-xs font-bold text-ink">{product.name} Dashboard</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      "Total Revenue $125,430",
                      "Active Users 2,540",
                      "Net Profit $47,180",
                      "Growth +15.6%",
                    ].map((m) => (
                      <div
                        key={m}
                        className="rounded-lg bg-secondary p-3 text-xs font-semibold text-ink"
                      >
                        {m}
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 rounded-lg bg-secondary/60 grid place-items-center text-xs text-gray-text">
                    Revenue Overview
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="container-x py-6">
        <div className="rounded-3xl bg-white border border-border py-6 px-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { I: Workflow, t: "Integrated Modules", d: "All key functions in one platform." },
            { I: Sparkles, t: "Real-time Analytics", d: "Dashboards to track performance." },
            { I: Zap, t: "Automation & Workflow", d: "Automate repetitive tasks." },
            { I: ShieldCheck, t: "Secure & Compliant", d: "Enterprise-grade security." },
          ].map(({ I, t, d }) => (
            <div key={t} className="flex gap-3">
              <I className="size-6 text-brand shrink-0 mt-0.5" strokeWidth={1.8} />
              <div>
                <div className="text-xs font-bold text-ink">{t}</div>
                <div className="text-[11px] text-gray-text mt-1">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-14 grid lg:grid-cols-[2fr_1fr] gap-8">
        <div>
          <Eyebrow>Features</Eyebrow>
          <h2 className="mt-3 text-3xl lg:text-[36px] font-extrabold text-ink leading-tight">
            Everything You Need to <span className="highlight">Run Your Business</span>
          </h2>
          <div className="mt-6 flex flex-wrap gap-1 border-b border-border">
            {(product.features as string[]).map((f: string, i: number) => (
              <button
                key={f}
                onClick={() => setActiveTab(i)}
                className={`px-4 py-3 text-xs font-bold uppercase tracking-wider transition-all border-b-2 -mb-px ${
                  activeTab === i
                    ? "text-brand border-brand"
                    : "text-gray-text border-transparent hover:text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-6 items-center">
            <div className="rounded-2xl border border-border bg-white p-5 shadow-card">
              <div className="text-xs font-bold uppercase tracking-wider text-gray-text mb-3">
                {product.features[activeTab]} Overview
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Total Income $125,430",
                  "Total Expenses $78,250",
                  "Net Profit $47,180",
                  "Outstanding $12,430",
                ].map((s) => (
                  <div
                    key={s}
                    className="rounded-lg bg-secondary p-3 text-xs font-semibold text-ink"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xl font-extrabold text-ink">
                Take Control of Your {product.features[activeTab]}
              </h4>
              <p className="mt-3 text-sm text-gray-text leading-relaxed">
                Manage your operations end-to-end. Get real-time insights and make data-driven
                decisions with ease.
              </p>
              <ul className="mt-5 space-y-2">
                {(product.features as string[]).map((f: string) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-ink">
                    <span className="grid place-items-center size-5 rounded-full bg-brand text-ink">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <aside className="rounded-3xl bg-secondary/60 border border-border p-6 h-fit">
          <Eyebrow>Why Choose {product.name}?</Eyebrow>
          <ul className="mt-5 space-y-5">
            {[
              { t: "All-in-One Solution", d: "Complete business management in a single platform." },
              { t: "Easy to Use", d: "Intuitive interface designed for all users." },
              { t: "Scalable", d: "Grows with your business from small to enterprise." },
              { t: "Customizable", d: "Tailor the system to match your unique processes." },
              { t: "24/7 Support", d: "Expert support whenever you need it." },
            ].map((w) => (
              <li key={w.t} className="flex gap-3">
                <div className="grid place-items-center size-10 rounded-xl bg-white text-brand border border-border shrink-0">
                  <Heart className="size-4" />
                </div>
                <div>
                  <div className="font-bold text-ink text-sm">{w.t}</div>
                  <p className="text-xs text-gray-text mt-1 leading-relaxed">{w.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="container-x py-10">
        <Eyebrow>Integrations</Eyebrow>
        <h2 className="mt-3 text-3xl lg:text-[36px] font-extrabold text-ink leading-tight">
          Seamlessly Integrate with Your <span className="highlight">Favorite Tools</span>
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {integrations.map((i) => (
            <div
              key={i}
              className="rounded-2xl bg-white border border-border p-4 text-center text-xs font-bold text-ink hover:border-brand transition-colors"
            >
              {i}
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-14">
        <SectionHeader eyebrow="What Our Clients Say" title="Trusted by Businesses Worldwide" />
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white border border-border p-6 shadow-card">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="text-sm text-ink leading-relaxed">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="size-10 rounded-full yellow-gradient" />
                <div>
                  <div className="font-bold text-ink text-sm">{t.name}</div>
                  <div className="text-xs text-gray-text">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-10">
        <Eyebrow>Frequently Asked Questions</Eyebrow>
        <h2 className="mt-3 text-3xl lg:text-[36px] font-extrabold text-ink leading-tight">
          Got Questions?
        </h2>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {faqs.map((f, i) => (
            <FAQItem key={f.q} {...f} initial={i === 0} />
          ))}
        </div>
      </section>

      <SectionHeader
        className="container-x mt-10"
        eyebrow="Related Products"
        title="You May Also Like"
      />
      <div className="container-x pb-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {related.map((p) => (
          <Link
            key={p.slug}
            to={`/products/${p.slug}`}
            className="group block rounded-2xl bg-white border border-border overflow-hidden shadow-card hover:-translate-y-1 transition-all"
          >
            <div className="aspect-[5/3] yellow-gradient grid place-items-center text-xl font-extrabold text-ink">
              {p.name}
            </div>
            <div className="p-5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand">
                {p.category}
              </div>
              <h3 className="mt-2 text-base font-bold text-ink">{p.tagline}</h3>
              <p className="mt-2 text-xs text-gray-text">{p.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      <CTASection
        title={
          <>
            Ready to <span className="text-white">Streamline</span> Your Business?
          </>
        }
        button="Schedule a Demo"
      />
    </SiteLayout>
  );
}

function FAQItem({ q, a, initial = false }: { q: string; a: string; initial?: boolean }) {
  const [open, setOpen] = useState(initial);
  return (
    <div className="rounded-2xl border border-border bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-3 p-5 text-left"
      >
        <span className="text-sm font-bold text-ink">{q}</span>
        <span
          className={`grid place-items-center size-7 rounded-full bg-brand text-ink transition-transform ${open ? "rotate-45" : ""}`}
        >
          <Plus className="size-4" strokeWidth={3} />
        </span>
      </button>
      {open && <div className="px-5 pb-5 text-sm text-gray-text leading-relaxed">{a}</div>}
    </div>
  );
}
