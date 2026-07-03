import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { nav } from "@/data/site";
import { MobileProductsMenu, ProductsMegaMenu } from "./ProductsMegaMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <div
        className={`container-x flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 border ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-border shadow-pill"
            : "bg-white border-transparent shadow-pill"
        }`}
      >
        <Link to="/" className="shrink-0 pl-2">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1 text-[13px] font-semibold tracking-wider">
          {nav.map((item) => {
            const active = pathname === item.to;
            if (item.to === "/products")
              return <ProductsMegaMenu key={item.to} active={pathname.startsWith("/products")} />;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative px-4 py-2 uppercase transition-colors ${
                  active ? "text-brand" : "text-ink hover:text-brand"
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-brand rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-[13px] font-bold uppercase tracking-wider text-ink shadow-pill transition-transform hover:-translate-y-0.5 hover:bg-brand-light"
          >
            Get a Quote
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center size-10 rounded-full bg-brand text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden container-x mt-2 rounded-3xl bg-white shadow-soft border border-border overflow-hidden">
          <div className="flex flex-col p-3">
            {nav.map((item) =>
              item.to === "/products" ? (
                <MobileProductsMenu key={item.to} />
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  className="px-4 py-3 rounded-xl text-sm font-semibold text-ink hover:bg-muted"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-ink"
            >
              Get a Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
