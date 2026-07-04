import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  ChevronDown,
  ChevronRight,
  PackageSearch,
  ShoppingCart,
  UserCog,
  Users,
} from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { products } from "@/data/site";

const productIcons: Record<string, LucideIcon> = {
  "nexora-erp": Boxes,
  "nexora-crm": Users,
  "nexora-hrms": UserCog,
  "nexora-pos": ShoppingCart,
  "nexora-inventory": PackageSearch,
  "nexora-analytics": BarChart3,
};

function ProductExplorer({ closeMenu }: { closeMenu?: () => void }) {
  const [selectedSlug, setSelectedSlug] = useState(products[0].slug);
  const selected = products.find((product) => product.slug === selectedSlug) ?? products[0];

  return (
    <div className="grid overflow-hidden rounded-[22px] border border-slate-200/80 bg-white md:grid-cols-[280px_1fr]">
      <aside className="border-b border-slate-200 bg-slate-50/80 p-3 md:border-r md:border-b-0">
        <p className="px-3 pt-2 pb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
          Our Products
        </p>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:grid-cols-1">
          {products.map((product) => {
            const Icon = productIcons[product.slug] ?? Boxes;
            const selectedProduct = selected.slug === product.slug;
            return (
              <button
                key={product.slug}
                type="button"
                onClick={() => setSelectedSlug(product.slug)}
                onMouseEnter={() => setSelectedSlug(product.slug)}
                className={`group flex min-w-0 items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-all md:py-3 ${
                  selectedProduct
                    ? "bg-white text-[#0F172A] shadow-[0_3px_12px_rgba(15,23,42,.08)] ring-1 ring-slate-200"
                    : "text-slate-500 hover:bg-white/70 hover:text-[#0F172A]"
                }`}
              >
                <span
                  className={`grid size-9 shrink-0 place-items-center rounded-xl ${selectedProduct ? "bg-[#FFF3C4] text-[#B77A00]" : "bg-white text-slate-400"}`}
                >
                  <Icon className="size-[18px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[12px] font-bold leading-5 md:truncate">{product.name}</span>
                  <span className="hidden truncate text-[10px] text-slate-400 md:block">
                    {product.category}
                  </span>
                </span>
                <ChevronRight
                  className={`hidden size-4 shrink-0 md:block ${selectedProduct ? "text-[#B77A00]" : "opacity-0 group-hover:opacity-100"}`}
                />
              </button>
            );
          })}
        </div>
      </aside>

      <AnimatePresence mode="wait">
        <motion.section
          key={selected.slug}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -8 }}
          transition={{ duration: 0.18 }}
          className="flex min-h-[360px] flex-col p-4 sm:p-6 md:min-h-[400px] md:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[#FFF3C4] text-[#B77A00]">
              {(() => {
                const Icon = productIcons[selected.slug] ?? Boxes;
                return <Icon className="size-6" />;
              })()}
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#B77A00]">
                {selected.category}
              </p>
              <h2 className="mt-1 text-xl font-extrabold tracking-[-0.03em] text-[#0F172A] md:text-2xl">
                {selected.name}
              </h2>
              <p className="mt-1 text-xs font-semibold text-slate-500">{selected.tagline}</p>
            </div>
          </div>

          <p className="mt-5 max-w-xl text-[12px] leading-6 text-slate-500">{selected.desc}</p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {selected.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-slate-50/60 px-3.5 py-3 text-[11px] font-semibold text-slate-700"
              >
                <span className="size-1.5 shrink-0 rounded-full bg-[#FDB913]" />
                {feature}
              </div>
            ))}
          </div>

          <Link
            to={`/products/${selected.slug}`}
            onClick={closeMenu}
            className="group mt-auto flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#FDB913] to-[#FFC93C] p-4 text-[#0F172A] shadow-[0_8px_24px_rgba(253,185,19,.22)] transition-transform hover:-translate-y-0.5"
          >
            <span>
              <span className="block text-[12px] font-extrabold">Explore {selected.name}</span>
              <span className="mt-0.5 block text-[10px] text-slate-800/70">
                View features, benefits and product details
              </span>
            </span>
            <span className="grid size-9 place-items-center rounded-full bg-white/90">
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </motion.section>
      </AnimatePresence>
    </div>
  );
}

export function ProductsMegaMenu({ active }: { active: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onFocus={() => setOpen(true)}
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="true"
        aria-expanded={open}
        className={`relative flex items-center gap-1 px-4 py-2 uppercase transition-colors ${active ? "text-brand" : "text-ink hover:text-brand"}`}
      >
        Products{" "}
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        {active && (
          <motion.span
            layoutId="nav-underline"
            className="absolute right-4 -bottom-0.5 left-4 h-0.5 rounded-full bg-brand"
          />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -8, filter: "blur(6px)" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-1/2 w-[min(850px,calc(100vw-32px))] -translate-x-1/2 pt-4"
          >
            <div className="rounded-3xl border border-white/70 bg-white/[0.96] p-4 shadow-[0_20px_60px_rgba(0,0,0,.14)] backdrop-blur-[32px] backdrop-saturate-150">
              <ProductExplorer closeMenu={() => setOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function MobileProductsMenu() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const activeProductSlug =
    products.find((product) => pathname === `/products/${product.slug}`)?.slug ?? products[0].slug;
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold text-ink hover:bg-muted"
      >
        Products{" "}
        <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-3">
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3">
                <p className="px-2 pb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                  Our Products
                </p>
                <div className="grid gap-1">
                  {products.map((product) => {
                    const Icon = productIcons[product.slug] ?? Boxes;
                    const selectedProduct = activeProductSlug === product.slug;
                    return (
                      <Link
                        key={product.slug}
                        to={`/products/${product.slug}`}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center gap-3 rounded-2xl px-3 py-3 text-slate-500 transition-all ${
                          selectedProduct
                            ? "bg-white text-[#0F172A] shadow-[0_3px_12px_rgba(15,23,42,.08)] ring-1 ring-slate-200"
                            : "hover:bg-white hover:text-[#0F172A] hover:shadow-[0_3px_12px_rgba(15,23,42,.08)] hover:ring-1 hover:ring-slate-200"
                        }`}
                      >
                        <span
                          className={`grid size-10 shrink-0 place-items-center rounded-full shadow-sm ${
                            selectedProduct
                              ? "bg-[#FFF3C4] text-[#B77A00]"
                              : "bg-white text-slate-400 group-hover:bg-[#FFF3C4] group-hover:text-[#B77A00]"
                          }`}
                        >
                          <Icon className="size-[18px]" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-[13px] font-bold leading-5">
                            {product.name}
                          </span>
                          <span className="block text-[10px] font-semibold leading-4 text-slate-400">
                            {product.category}
                          </span>
                        </span>
                        <ChevronRight
                          className={`size-4 shrink-0 transition-colors ${selectedProduct ? "text-[#B77A00]" : "text-slate-400 group-hover:text-[#B77A00]"}`}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
