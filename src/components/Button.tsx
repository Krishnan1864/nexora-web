import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  to?: string;
  href?: string;
  variant?: "primary" | "outline";
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export function CTAButton({ to = "/contact", href, variant = "primary", children, icon, className = "" }: Props) {
  const base = "inline-flex items-center gap-2 rounded-2xl px-6 py-4 text-[13px] font-bold uppercase tracking-wider transition-all hover:-translate-y-0.5";
  const styles = variant === "primary"
    ? "bg-brand text-ink shadow-pill hover:bg-brand-light"
    : "bg-white text-ink border border-border hover:border-ink";
  const content = (
    <>
      {children}
      {icon ?? <ArrowRight className="size-4" />}
    </>
  );
  if (href) return <a href={href} className={`${base} ${styles} ${className}`}>{content}</a>;
  return <Link to={to} className={`${base} ${styles} ${className}`}>{content}</Link>;
}
