import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 text-sm text-gray-text leading-relaxed max-w-xs">
            We empower businesses with innovative technology solutions to transform, scale, and succeed in the digital era.
          </p>
          <div className="mt-5 flex gap-2">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="grid place-items-center size-9 rounded-full bg-muted text-ink hover:bg-brand transition-colors">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Company" links={[
          { label: "About Us", to: "/about" },
          { label: "Careers", to: "/about" },
          { label: "Our Team", to: "/about" },
          { label: "News & Insights", to: "/about" },
          { label: "Contact Us", to: "/contact" },
        ]} />
        <FooterCol title="Services" links={[
          { label: "Software Development", to: "/services/software-development" },
          { label: "Cloud Solutions", to: "/services/cloud-solutions" },
          { label: "Cyber Security", to: "/services/cyber-security" },
          { label: "IT Consulting", to: "/services/it-consulting" },
          { label: "Managed Services", to: "/services/managed-services" },
        ]} />
        <FooterCol title="Industries" links={[
          { label: "Healthcare", to: "/services" },
          { label: "Finance", to: "/services" },
          { label: "Retail", to: "/services" },
          { label: "Manufacturing", to: "/services" },
          { label: "Education", to: "/services" },
        ]} />

        <div>
          <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-ink mb-5">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-text">
            <li className="flex items-start gap-2.5"><Phone className="size-4 text-brand mt-0.5 shrink-0" />+1 (555) 123-4567</li>
            <li className="flex items-start gap-2.5"><Mail className="size-4 text-brand mt-0.5 shrink-0" />hello@nexora.com</li>
            <li className="flex items-start gap-2.5"><MapPin className="size-4 text-brand mt-0.5 shrink-0" />123 Innovation Drive,<br />San Francisco, CA 94107</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-text">
          <p>© 2025 Nexora IT Solutions. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-ink">Privacy Policy</a>
            <a href="#" className="hover:text-ink">Terms of Service</a>
            <a href="#" className="hover:text-ink">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-ink mb-5">{title}</h4>
      <ul className="space-y-3 text-sm text-gray-text">
        {links.map((l) => (
          <li key={l.label}><Link to={l.to} className="hover:text-brand transition-colors">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
