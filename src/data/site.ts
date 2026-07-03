import {
  Code2, Cloud, ShieldCheck, BarChart3, Users, Settings, Rocket, Headphones,
  Heart, Landmark, ShoppingCart, Factory, GraduationCap, Truck, Building2, MoreHorizontal,
  Search, ClipboardList, Code, FlaskConical, Send, LineChart,
} from "lucide-react";

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
];

export const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "500+", label: "Projects Delivered" },
  { value: "90+", label: "Expert Professionals" },
  { value: "25+", label: "Countries Served" },
  { value: "99.9%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

export const services = [
  { slug: "software-development", icon: Code2, title: "Software Development", desc: "Custom software solutions built to solve complex business problems and drive digital transformation." },
  { slug: "cloud-solutions", icon: Cloud, title: "Cloud Solutions", desc: "Scalable, secure, and cost-effective cloud solutions to modernize your infrastructure and applications." },
  { slug: "cyber-security", icon: ShieldCheck, title: "Cyber Security", desc: "Protect your business with advanced security solutions and proactive threat management." },
  { slug: "data-analytics", icon: BarChart3, title: "Data & Analytics", desc: "Turn raw data into actionable insights with our data engineering, analytics and visualization services." },
  { slug: "it-consulting", icon: Users, title: "IT Consulting", desc: "Strategic IT consulting to align technology with your business goals and optimize performance." },
  { slug: "managed-services", icon: Settings, title: "Managed Services", desc: "Proactive monitoring, maintenance, and support to keep your systems running smoothly, 24/7." },
  { slug: "ui-ux-design", icon: Rocket, title: "UI/UX Design", desc: "Create engaging digital experiences with user-centered design that drives customer satisfaction." },
];

export const industries = [
  { icon: Heart, label: "Healthcare" },
  { icon: Landmark, label: "Finance" },
  { icon: ShoppingCart, label: "Retail" },
  { icon: Factory, label: "Manufacturing" },
  { icon: GraduationCap, label: "Education" },
  { icon: Truck, label: "Logistics" },
  { icon: Building2, label: "Real Estate" },
  { icon: MoreHorizontal, label: "More" },
];

export const process = [
  { step: "01", icon: Search, title: "Discover", desc: "We understand your goals, challenges, and requirements." },
  { step: "02", icon: ClipboardList, title: "Plan", desc: "We create a strategic plan tailored to your needs." },
  { step: "03", icon: Code, title: "Execute", desc: "Our experts build, implement, and integrate solutions." },
  { step: "04", icon: FlaskConical, title: "Deliver", desc: "We deliver quality solutions that drive results." },
  { step: "05", icon: LineChart, title: "Optimize", desc: "We continuously optimize for long-term success." },
];

export const partners = ["Microsoft", "AWS", "Google Cloud", "Oracle", "IBM", "Accenture", "Cisco", "Dell"];

export const products: { slug: string; name: string; category: string; tagline: string; desc: string; features: string[] }[] = [
  { slug: "nexora-erp", name: "Nexora ERP", category: "ERP", tagline: "All-in-one ERP solution", desc: "Streamline finance, HR, sales, and inventory in a single, integrated platform.", features: ["Integrated Modules", "Real-time Analytics", "Automation & Workflow", "Secure & Compliant"] },
  { slug: "nexora-crm", name: "Nexora CRM", category: "CRM", tagline: "Modern customer platform", desc: "Manage leads, deals, and customer relationships with intelligent automation.", features: ["Lead Management", "Sales Pipeline", "Email Automation", "Reporting Dashboard"] },
  { slug: "nexora-hrms", name: "Nexora HRMS", category: "HR", tagline: "Human resources, simplified", desc: "End-to-end HR platform covering payroll, attendance, and performance.", features: ["Payroll Processing", "Attendance Tracking", "Performance Reviews", "Employee Self-Service"] },
  { slug: "nexora-pos", name: "Nexora POS", category: "Retail", tagline: "Point of sale, reinvented", desc: "Fast, reliable point-of-sale system designed for modern retailers.", features: ["Quick Checkout", "Inventory Sync", "Multi-Store Support", "Card & Digital Pay"] },
  { slug: "nexora-inventory", name: "Nexora Inventory", category: "Operations", tagline: "Smarter stock management", desc: "Real-time inventory tracking with smart reorder and warehouse management.", features: ["Stock Tracking", "Barcode Support", "Smart Reorder", "Warehouse Insights"] },
  { slug: "nexora-analytics", name: "Nexora Analytics", category: "Analytics", tagline: "Data into decisions", desc: "Powerful BI platform with dashboards, alerts, and predictive insights.", features: ["Interactive Dashboards", "Custom Reports", "Predictive Insights", "Data Connectors"] },
];

export const testimonials = [
  { name: "John Davis", role: "CTO, FinPro Solutions", quote: "Nexora transformed our IT infrastructure and helped us achieve operational efficiency like never before." },
  { name: "Sarah Mitchell", role: "IT Director, MedCare+", quote: "Their team is professional, responsive, and truly understands our business needs." },
  { name: "Michael Brown", role: "CEO, LogiTrack Inc.", quote: "Highly recommended for any business looking to scale with the right technology partner." },
];

export const teamMembers = [
  { name: "John Davis", role: "Chief Executive Officer" },
  { name: "Sarah Mitchell", role: "Chief Operating Officer" },
  { name: "Michael Brown", role: "Chief Technology Officer" },
  { name: "Emily Johnson", role: "Head of Delivery" },
  { name: "David Wilson", role: "Head of Sales" },
];

export const milestones = [
  { year: "2014", title: "Founded", desc: "Nexora IT Solutions was established with a vision to deliver innovative IT solutions." },
  { year: "2016", title: "Team Expansion", desc: "Grew our team and expanded our services to serve more businesses." },
  { year: "2018", title: "Global Reach", desc: "Expanded our client base across multiple countries and industries." },
  { year: "2020", title: "Industry Recognition", desc: "Recognized by industry leaders for excellence in service and customer satisfaction." },
  { year: "2024+", title: "Future Forward", desc: "Continuing to innovate and empower businesses for a digital-first future." },
];
