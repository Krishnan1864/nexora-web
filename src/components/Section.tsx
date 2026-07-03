import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="text-xs font-bold tracking-[0.22em] uppercase text-brand">{children}</div>;
}

export function SectionHeader({ eyebrow, title, action, className = "" }: { eyebrow?: string; title: ReactNode; action?: ReactNode; className?: string }) {
  return (
    <div className={`flex items-end justify-between gap-6 flex-wrap mb-10 ${className}`}>
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] font-extrabold text-ink max-w-2xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CTASection({ title, button = "Get a Free Consultation", to = "/contact" }: { title: ReactNode; button?: string; to?: string }) {
  return (
    <section className="container-x py-12">
      <div className="relative overflow-hidden rounded-3xl yellow-gradient p-8 md:p-12 flex flex-wrap items-center justify-between gap-6">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 dotted-grid" />
        <div className="flex items-center gap-5 relative">
          <div className="grid place-items-center size-16 rounded-full bg-white shadow-card shrink-0">
            <svg className="size-7 text-brand" viewBox="0 0 24 24" fill="currentColor"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/></svg>
          </div>
          <h3 className="text-2xl md:text-[32px] font-extrabold text-ink max-w-xl leading-tight">{title}</h3>
        </div>
        <a href={to} className="relative inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-bold uppercase tracking-wider text-ink shadow-card hover:-translate-y-0.5 transition-transform">
          {button}
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
}
