import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Check, Cloud, Headphones, ShieldCheck, Star } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTAButton } from "@/components/Button";
import { Eyebrow, FadeUp, SectionHeader, CTASection } from "@/components/Section";
import { StatsBar } from "@/components/StatsBar";
import { ServiceCard } from "@/components/ServiceCard";
import { industries, partners, process, services, testimonials } from "@/data/site";
import heroBuilding from "@/assets/hero-building.jpg";
import aboutMeeting from "@/assets/about-meeting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora IT Solutions — Smart Technology for Modern Business" },
      {
        name: "description",
        content:
          "We build technology. You grow business. Nexora is your trusted IT partner for software, cloud, security and analytics.",
      },
      { property: "og:title", content: "Nexora IT Solutions" },
      {
        property: "og:description",
        content: "Smart technology solutions for complex business challenges.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Partners />
      <ServicesGrid />
      <StatsBar />
      <AboutPreview />
      <IndustriesStrip />
      <RecentWork />
      <ProcessTimeline />
      <Testimonials />
      <CTASection
        title={
          <>
            Ready to Start Your <span className="text-white">Next Project?</span>
          </>
        }
        button="Get a Free Consultation"
      />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-[520px] h-[520px] rounded-full bg-brand-light/30 blur-3xl" />
      <div className="absolute top-40 left-1/3 w-72 h-72 dotted-grid opacity-60" />
      <div className="container-x relative pt-10 pb-16 grid lg:grid-cols-[1.05fr_1.1fr] gap-12 items-center">
        <FadeUp>
          <Eyebrow>We Build. You Grow.</Eyebrow>
          <h1 className="mt-5 text-[44px] sm:text-5xl lg:text-[60px] font-extrabold leading-[1.05] text-ink tracking-tight">
            Building Technology.
            <br />
            Delivering <span className="highlight">Excellence.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] text-gray-text leading-relaxed">
            Nexora IT Solutions is a technology partner committed to helping businesses navigate the
            digital landscape, optimize operations, and accelerate growth through innovative IT
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton to="/services">Our Services</CTAButton>
            <CTAButton variant="outline" to="/contact">
              Talk to an Expert
            </CTAButton>
          </div>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="size-10 rounded-full border-2 border-white bg-gradient-to-br from-brand to-brand-light"
                />
              ))}
              <div className="size-10 rounded-full bg-brand grid place-items-center text-ink font-bold text-sm border-2 border-white">
                +
              </div>
            </div>
            <div>
              <div className="text-lg font-extrabold text-ink leading-none">500+</div>
              <div className="text-xs text-gray-text mt-1">Happy Clients Worldwide</div>
            </div>
          </div>
        </FadeUp>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden">
            <img
              src={heroBuilding}
              alt="Modern Nexora office building"
              className="w-full h-full object-cover"
              width={1280}
              height={960}
            />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden md:flex absolute -left-4 top-10 bg-white rounded-2xl shadow-soft p-3 pr-5 items-center gap-3"
          >
            <div className="grid place-items-center size-10 rounded-xl bg-secondary text-brand">
              <BarChart3 className="size-5" />
            </div>
            <div>
              <div className="text-xs text-gray-text">Project Success</div>
              <div className="text-sm font-extrabold text-ink">99.9%</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="hidden md:flex absolute -right-4 top-1/3 bg-white rounded-2xl shadow-soft p-3 pr-5 items-center gap-3"
          >
            <div className="grid place-items-center size-10 rounded-xl bg-secondary text-brand">
              <Cloud className="size-5" />
            </div>
            <div>
              <div className="text-xs text-gray-text">Cloud Uptime</div>
              <div className="text-sm font-extrabold text-ink">99.99%</div>
            </div>
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity }}
            className="hidden md:flex absolute right-6 -bottom-4 bg-white rounded-2xl shadow-soft p-3 pr-5 items-center gap-3"
          >
            <div className="grid place-items-center size-10 rounded-xl bg-secondary text-brand">
              <ShieldCheck className="size-5" />
            </div>
            <div>
              <div className="text-xs text-gray-text">Client Satisfaction</div>
              <div className="text-sm font-extrabold text-ink">98%</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="container-x py-10">
      <div className="rounded-3xl bg-white border border-border py-7 px-6">
        <div className="text-center text-[11px] font-bold tracking-[0.3em] uppercase text-brand mb-6">
          Trusted by Innovative Companies Worldwide
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {partners.map((p) => (
            <div
              key={p}
              className="text-center text-gray-text font-bold tracking-wide grayscale opacity-70 hover:opacity-100 hover:text-ink hover:grayscale-0 transition-all text-sm"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="container-x py-16">
      <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
        <FadeUp>
          <Eyebrow>What We Do</Eyebrow>
          <h2 className="mt-3 text-3xl lg:text-[40px] font-extrabold text-ink leading-[1.1]">
            Smart Solutions for
            <br />
            Complex <span className="highlight">Challenges</span>
          </h2>
          <p className="mt-5 text-sm text-gray-text leading-relaxed max-w-md">
            We combine deep technical expertise with industry knowledge to deliver custom solutions
            that drive real business value.
          </p>
          <div className="mt-8">
            <CTAButton to="/services">Explore Services</CTAButton>
          </div>
        </FadeUp>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((s, i) => (
            <FadeUp key={s.slug} delay={i * 0.05} className="h-full">
              <ServiceCard icon={s.icon} title={s.title} desc={s.desc} to={`/services/${s.slug}`} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  const points = [
    "Digital Transformation",
    "Cloud Infrastructure",
    "AI Integration",
    "Cyber Security",
  ];
  return (
    <section className="container-x py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <FadeUp>
          <div className="relative">
            <img
              src={aboutMeeting}
              alt="About Nexora"
              className="rounded-3xl w-full h-auto object-cover shadow-soft"
              width={1024}
              height={768}
              loading="lazy"
            />
            <div className="absolute -bottom-6 left-6">
              <CTAButton to="/about">More About Us</CTAButton>
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <Eyebrow>Why Choose Nexora</Eyebrow>
          <h2 className="mt-3 text-3xl lg:text-[40px] font-extrabold text-ink leading-[1.1]">
            Your Trusted <span className="highlight">Technology</span> Partner
          </h2>
          <p className="mt-5 text-sm text-gray-text leading-relaxed max-w-lg">
            At Nexora IT Solutions, we believe technology should empower businesses to achieve more.
            With a passion for innovation and a commitment to excellence, we deliver solutions that
            drive growth, efficiency, and success.
          </p>
          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-sm font-semibold text-ink">
                <span className="grid place-items-center size-6 rounded-full bg-brand text-ink">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}

function IndustriesStrip() {
  return (
    <section className="container-x py-12">
      <SectionHeader
        eyebrow="Industries We Serve"
        title={
          <>
            Solutions Tailored for <span className="highlight">Every Industry</span>
          </>
        }
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {industries.map((it) => {
          const Icon = it.icon;
          return (
            <FadeUp key={it.label}>
              <div className="rounded-2xl bg-white border border-border p-5 flex flex-col items-center gap-3 hover:border-brand hover:-translate-y-1 transition-all">
                <Icon className="size-7 text-brand" strokeWidth={1.8} />
                <div className="text-xs font-semibold text-ink">{it.label}</div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}

const projects = [
  { name: "FinPro Analytics Platform", tag: "Data & Analytics" },
  { name: "MedCare+ Portal", tag: "Healthcare" },
  { name: "ShopDeal E-commerce", tag: "Retail" },
  { name: "LogiTrack System", tag: "Logistics" },
];

function RecentWork() {
  return (
    <section className="container-x py-16">
      <SectionHeader
        eyebrow="Our Recent Work"
        title={
          <>
            Solutions That Drive <span className="highlight">Results</span>
          </>
        }
        action={
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand"
          >
            Start a Project <ArrowRight className="size-4" />
          </Link>
        }
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((p, i) => (
          <FadeUp key={p.name} delay={i * 0.05}>
            <div className="group rounded-2xl bg-white border border-border overflow-hidden shadow-card hover:-translate-y-1 transition-all">
              <div className="aspect-[4/3] yellow-gradient relative overflow-hidden">
                <div className="absolute inset-0 dotted-grid opacity-40" />
              </div>
              <div className="p-5 flex items-center justify-between gap-3">
                <div>
                  <div className="font-bold text-ink text-sm">{p.name}</div>
                  <div className="text-xs text-gray-text mt-1">{p.tag}</div>
                </div>
                <div className="grid place-items-center size-9 rounded-full bg-brand text-ink shrink-0">
                  <ArrowRight className="size-4" />
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section className="container-x py-16">
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

function Testimonials() {
  return (
    <section className="container-x py-16">
      <SectionHeader
        eyebrow="What Our Clients Say"
        title={
          <>
            Trusted by <span className="highlight">Businesses</span> Worldwide
          </>
        }
      />
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <FadeUp key={t.name} delay={i * 0.05}>
            <div className="rounded-2xl bg-white border border-border p-6 shadow-card h-full">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="size-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="text-sm text-ink leading-relaxed">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="size-10 rounded-full yellow-gradient" />
                <div>
                  <div className="font-bold text-ink text-sm">{t.name}</div>
                  <div className="text-xs text-gray-text">{t.role}</div>
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
