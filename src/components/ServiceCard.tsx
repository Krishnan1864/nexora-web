import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export function ServiceCard({
  icon: Icon,
  title,
  desc,
  to,
}: {
  icon: LucideIcon;
  title: string;
  desc: string;
  to: string;
}) {
  return (
    <motion.div className="h-full" whileHover={{ y: -6 }} transition={{ duration: 0.25 }}>
      <Link
        to={to}
        className="group flex h-full min-h-[342px] flex-col rounded-2xl border border-border bg-white p-7 shadow-card transition-colors hover:border-brand"
      >
        <div className="grid place-items-center size-14 rounded-2xl bg-secondary text-brand mb-5">
          <Icon className="size-7" strokeWidth={1.8} />
        </div>
        <h3 className="text-lg font-bold text-ink mb-2.5">{title}</h3>
        <p className="text-sm text-gray-text leading-relaxed">{desc}</p>
        <div className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-wider text-brand transition-all group-hover:gap-3">
          Learn More <ArrowRight className="size-4" />
        </div>
      </Link>
    </motion.div>
  );
}
