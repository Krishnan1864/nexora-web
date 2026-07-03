import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Star } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTAButton } from "@/components/Button";
import { CTASection, Eyebrow, FadeUp, SectionHeader } from "@/components/Section";
import { industries, process, services, testimonials } from "@/data/site";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsBar } from "@/components/StatsBar";
import servicesHero from "@/assets/services-hero.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Nexora IT Solutions" },
      {
        name: "description",
        content:
          "Explore Nexora's core services: software development, cloud, cybersecurity, data, IT consulting, managed services, UI/UX.",
      },
      { property: "og:title", content: "Nexora Services" },
      { property: "og:description", content: "Smart solutions for complex challenges." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <Hero />
      <CategoryStrip />
      <CoreServices />
      <StatsBar />
      <WhyMore />
      <Process />
      <IndustriesGrid />
      <Reviews />
      <CTASection
        title={
          <>
            Ready to Build Your <span className="text-white">Next Big Thing?</span>
          </>
        }
      />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="container-x grid lg:grid-cols-[1.05fr_1.1fr] gap-10 items-center pb-10">
      <FadeUp>
        <Eyebrow>Our Services</Eyebrow>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-ink leading-[1.05]">
          Smart <span className="highlight">Solutions</span> for
          <br />
          Complex Challenges
        </h1>
        <p className="mt-5 max-w-lg text-sm text-gray-text leading-relaxed">
          We combine deep technical expertise with industry knowledge to deliver custom solutions
          that drive real business value and accelerate your growth.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <CTAButton>Explore Services</CTAButton>
          <CTAButton variant="outline">Talk to an Expert</CTAButton>
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <img
          src={servicesHero}
          alt="Team collaboration"
          className="rounded-3xl w-full object-cover shadow-soft"
          width={1024}
          height={800}
        />
      </FadeUp>
    </section>
  );
}

function CategoryStrip() {
  const cats = [
    { slug: "", label: "All Services", sub: "Complete IT Solutions" },
    ...services.map((s) => ({ slug: s.slug, label: s.title, sub: "" })),
  ];
  return (
    <section className="container-x py-6">
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
        {cats.map((c, i) => (
          <Link
            key={c.label}
            to={c.slug ? `/services/${c.slug}` : "/services"}
            className={`shrink-0 rounded-2xl border p-4 min-w-[160px] text-center transition-all ${i === 0 ? "bg-secondary border-brand" : "bg-white border-border hover:border-brand"}`}
          >
            <div className="mx-auto size-9 rounded-xl bg-secondary text-brand grid place-items-center mb-2">
              <Star className="size-4" />
            </div>
            <div className="text-xs font-bold text-ink">{c.label}</div>
            {c.sub && <div className="text-[11px] text-gray-text mt-1">{c.sub}</div>}
          </Link>
        ))}
      </div>
    </section>
  );
}

function CoreServices() {
  return (
    <section className="container-x py-14">
      <SectionHeader
        eyebrow="What We Do"
        title="Our Core Services"
        action={
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand"
          >
            View All Services <ArrowRight className="size-4" />
          </Link>
        }
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((s, i) => (
          <FadeUp key={s.slug} delay={i * 0.04} className="h-full">
            <ServiceCard icon={s.icon} title={s.title} desc={s.desc} to={`/services/${s.slug}`} />
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function WhyMore() {
  const pts = [
    "Experienced & certified professionals",
    "Agile & transparent process",
    "On-time delivery with quality assurance",
    "Ongoing support & maintenance",
  ];
  return (
    <section className="container-x py-14 grid lg:grid-cols-2 gap-10 items-center">
      <FadeUp>
        <Eyebrow>Why Choose Nexora?</Eyebrow>
        <h2 className="mt-3 text-3xl lg:text-[40px] font-extrabold text-ink leading-tight">
          We Deliver More
          <br />
          Than Just Services
        </h2>
        <p className="mt-5 text-sm text-gray-text leading-relaxed max-w-lg">
          Our client-centric approach, technical excellence, and commitment to quality make us the
          trusted technology partner for businesses worldwide.
        </p>
        <ul className="mt-6 space-y-2.5">
          {pts.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm font-medium text-ink">
              <span className="grid place-items-center size-6 rounded-full bg-brand text-ink">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>
      </FadeUp>
      <FadeUp delay={0.1}>
        <div className="rounded-3xl yellow-gradient aspect-[5/3] relative overflow-hidden p-6">
          <div className="absolute inset-0 dotted-grid opacity-30" />
          <div className="relative h-full bg-white/90 rounded-2xl shadow-soft p-5">
            <div className="text-xs font-bold tracking-wider uppercase text-gray-text mb-3">
              Project Roadmap
            </div>
            <div className="grid grid-cols-5 gap-2">
              {["Discover", "Plan", "Develop", "Deploy", "Optimize"].map((s, i) => (
                <div key={s} className="text-center">
                  <div className="mx-auto size-3 rounded-full bg-brand" />
                  <div className="text-[10px] mt-2 font-semibold text-ink">{s}</div>
                </div>
              ))}
            </div>
            <div className="absolute top-1/2 left-5 right-5 border-t-2 border-dashed border-brand/60 -translate-y-1 -z-0" />
          </div>
        </div>
      </FadeUp>
    </section>
  );
}

function Process() {
  return (
    <section className="container-x py-14">
      <SectionHeader
        eyebrow="Our Process"
        title={
          <>
            Simple Steps, Proven <span className="highlight">Results</span>
          </>
        }
      />
      <div className="relative">
        <div className="hidden md:block absolute top-7 left-[8%] right-[8%] border-t-2 border-dashed border-brand/60" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
          {process.map((p) => {
            const Icon = p.icon;
            return (
              <FadeUp key={p.step} className="text-center">
                <div className="mx-auto grid place-items-center size-14 rounded-full bg-white border-2 border-brand text-brand">
                  <Icon className="size-6" strokeWidth={1.8} />
                </div>
                <div className="mt-4 text-sm font-bold text-gray-text">{p.step}</div>
                <div className="text-base font-bold text-ink">{p.title}</div>
                <p className="mt-2 text-xs text-gray-text leading-relaxed">{p.desc}</p>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function IndustriesGrid() {
  return (
    <section className="container-x py-14">
      <SectionHeader
        eyebrow="Industries We Serve"
        title={
          <>
            Solutions Tailored for <span className="highlight">Every Industry</span>
          </>
        }
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {industries.map((i) => {
          const Icon = i.icon;
          return (
            <div
              key={i.label}
              className="rounded-2xl bg-white border border-border p-5 flex flex-col items-center gap-3 hover:border-brand transition-colors"
            >
              <Icon className="size-7 text-brand" strokeWidth={1.8} />
              <div className="text-xs font-semibold text-ink">{i.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Reviews() {
  return (
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
  );
}
