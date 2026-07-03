import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Check, Eye, Flag, Gem, Globe, Headphones, Rocket, Star, Target, Users } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { CTAButton } from "@/components/Button";
import { CTASection, Eyebrow, FadeUp, SectionHeader } from "@/components/Section";
import { industries, milestones, teamMembers, testimonials } from "@/data/site";
import aboutHero from "@/assets/about-hero.jpg";
import aboutMeeting from "@/assets/about-meeting.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nexora — Your Trusted Technology Partner" },
      { name: "description", content: "Learn about Nexora IT Solutions: our story, mission, vision, values, leadership team, and the milestones that define our growth." },
      { property: "og:title", content: "About Nexora" },
      { property: "og:description", content: "Driven by innovation, built on trust." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <Hero />
      <StatsBand />
      <Story />
      <MVV />
      <Team />
      <Journey />
      <IndustriesGrid />
      <WhyUs />
      <Partnerships />
      <Testimonials />
      <CTASection title={<>Let's Build Something <span className="text-white">Amazing</span> Together</>} />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="container-x grid lg:grid-cols-2 gap-10 items-center pb-10">
      <FadeUp>
        <Eyebrow>About Nexora</Eyebrow>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-ink leading-[1.05]">
          Your Trusted<br /><span className="highlight">Technology</span> Partner
        </h1>
        <div className="mt-3 h-1 w-20 bg-brand rounded-full" />
        <p className="mt-6 max-w-lg text-sm text-gray-text leading-relaxed">
          At Nexora IT Solutions, we believe technology should empower businesses to achieve more. With a passion for innovation and a commitment to excellence, we deliver solutions that drive growth, efficiency, and success.
        </p>
        <div className="mt-8"><CTAButton>More About Us</CTAButton></div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <img src={aboutHero} alt="Nexora office" className="rounded-3xl w-full object-cover shadow-soft" width={1280} height={800} />
      </FadeUp>
    </section>
  );
}

function StatsBand() {
  const items = [
    { v: "10+", l: "Years of Experience", I: Award },
    { v: "500+", l: "Projects Delivered", I: Rocket },
    { v: "90+", l: "Expert Professionals", I: Users },
    { v: "25+", l: "Countries Served", I: Globe },
    { v: "99.9%", l: "Client Satisfaction", I: Star },
    { v: "24/7", l: "Support Available", I: Headphones },
  ];
  return (
    <section className="container-x py-6">
      <div className="rounded-3xl yellow-gradient px-8 py-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {items.map(({ v, l, I }) => (
          <div key={l} className="flex items-center gap-3">
            <I className="size-7 text-ink shrink-0" strokeWidth={1.8} />
            <div>
              <div className="text-xl font-extrabold text-ink leading-none">{v}</div>
              <div className="text-[11px] mt-1 text-ink/80 font-semibold">{l}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Story() {
  const pts = ["Client-focused approach", "Agile and adaptable solutions", "Experienced and certified team", "Commitment to long-term partnerships"];
  return (
    <section className="container-x py-14 grid lg:grid-cols-2 gap-10 items-center">
      <FadeUp>
        <img src={aboutMeeting} alt="Team meeting" className="rounded-3xl w-full object-cover shadow-soft" width={1024} height={768} loading="lazy" />
      </FadeUp>
      <FadeUp delay={0.1}>
        <Eyebrow>Our Story</Eyebrow>
        <h2 className="mt-3 text-3xl lg:text-[40px] font-extrabold text-ink leading-tight">Driven by Innovation, Built on Trust</h2>
        <p className="mt-5 text-sm text-gray-text leading-relaxed">
          Nexora IT Solutions was founded with a simple idea: to help businesses navigate the digital world with confidence. What started as a small team of tech enthusiasts has grown into a trusted partner for companies worldwide.
        </p>
        <p className="mt-3 text-sm text-gray-text leading-relaxed">
          We combine deep technical expertise with a client-first approach to deliver solutions that are not only powerful but also practical and future-ready.
        </p>
        <ul className="mt-6 space-y-2.5">
          {pts.map((p) => (
            <li key={p} className="flex items-center gap-3 text-sm font-medium text-ink">
              <span className="grid place-items-center size-6 rounded-full bg-brand text-ink"><Check className="size-3.5" strokeWidth={3} /></span>
              {p}
            </li>
          ))}
        </ul>
      </FadeUp>
    </section>
  );
}

function MVV() {
  const items = [
    { I: Target, title: "Our Mission", body: "Deliver innovative, reliable, and scalable IT solutions that empower businesses to achieve their goals." },
    { I: Eye, title: "Our Vision", body: "To be a global leader in IT solutions, recognized for our innovation, integrity, and impact." },
    { I: Gem, title: "Our Values", body: "Customer First. Integrity & Transparency. Excellence. Collaboration. Innovation." },
  ];
  return (
    <section className="container-x py-10">
      <div className="rounded-3xl bg-secondary/60 border border-border p-8 grid md:grid-cols-3 gap-6">
        {items.map(({ I, title, body }) => (
          <FadeUp key={title} className="flex gap-4">
            <div className="grid place-items-center size-12 rounded-full bg-white text-brand border border-border shrink-0"><I className="size-6" strokeWidth={1.8} /></div>
            <div>
              <h3 className="text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-gray-text leading-relaxed">{body}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className="container-x py-14">
      <SectionHeader
        eyebrow="Our Team"
        title={<>Meet the Minds Behind Nexora</>}
        action={<Link to="/about" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand">View All Team <ArrowRight className="size-4" /></Link>}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {teamMembers.map((m) => (
          <FadeUp key={m.name}>
            <div className="rounded-2xl bg-white border border-border overflow-hidden shadow-card">
              <div className="aspect-square bg-secondary" />
              <div className="p-4 text-center">
                <div className="font-bold text-ink text-sm">{m.name}</div>
                <div className="text-xs text-gray-text mt-1">{m.role}</div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="container-x py-14">
      <SectionHeader eyebrow="Our Journey" title="Milestones That Define Our Growth" />
      <div className="relative">
        <div className="hidden md:block absolute top-7 left-[8%] right-[8%] border-t-2 border-dashed border-brand/60" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 relative">
          {milestones.map((m, i) => {
            const Icons = [Flag, Users, Globe, Award, Rocket];
            const Icon = Icons[i];
            return (
              <FadeUp key={m.year} className="text-center">
                <div className="mx-auto grid place-items-center size-14 rounded-full bg-white border-2 border-brand text-brand">
                  <Icon className="size-6" strokeWidth={1.8} />
                </div>
                <div className="mt-4 text-base font-extrabold text-ink">{m.year}</div>
                <div className="text-sm font-bold text-ink mt-1">{m.title}</div>
                <p className="mt-2 text-xs text-gray-text leading-relaxed">{m.desc}</p>
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
      <SectionHeader eyebrow="Industries We Serve" title={<>Solutions Tailored for <span className="highlight">Every Industry</span></>} />
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {industries.map((i) => {
          const Icon = i.icon;
          return (
            <div key={i.label} className="rounded-2xl bg-white border border-border p-5 flex flex-col items-center gap-3 hover:border-brand transition-colors">
              <Icon className="size-7 text-brand" strokeWidth={1.8} />
              <div className="text-xs font-semibold text-ink">{i.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { t: "Experienced Team", d: "Skilled professionals with deep industry knowledge." },
    { t: "Quality First", d: "We follow best practices to ensure top quality." },
    { t: "Agile Approach", d: "Flexible processes that adapt to your needs." },
    { t: "Reliable Support", d: "24/7 support to keep your business ahead." },
  ];
  return (
    <section className="container-x py-14">
      <SectionHeader eyebrow="Why Choose Nexora" title={<>We Deliver More Than J<span className="highlight">ust Solutions</span></>} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ t, d }) => (
          <div key={t} className="rounded-2xl bg-white border border-border p-6 shadow-card flex gap-4">
            <div className="grid place-items-center size-12 rounded-2xl bg-secondary text-brand shrink-0">
              <Users className="size-6" strokeWidth={1.8} />
            </div>
            <div>
              <h4 className="font-bold text-ink text-sm">{t}</h4>
              <p className="text-xs text-gray-text mt-2 leading-relaxed">{d}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Partnerships() {
  const items = ["AWS Advanced Partner", "Microsoft Azure Partner", "Google Cloud Partner", "Oracle Cloud Select", "ISO 27001 Certified"];
  return (
    <section className="container-x py-14">
      <SectionHeader eyebrow="Our Partnerships" title="Certified. Trusted. Recognized." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((p) => (
          <div key={p} className="rounded-2xl bg-white border border-border p-6 text-center">
            <div className="text-sm font-bold text-ink">{p}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="container-x py-14">
      <SectionHeader eyebrow="What Our Clients Say" title={<>Trusted by Businesses Worldwide</>} />
      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="rounded-2xl bg-white border border-border p-6 shadow-card">
            <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, j) => (<Star key={j} className="size-4 fill-brand text-brand" />))}</div>
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
