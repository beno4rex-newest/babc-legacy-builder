import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Compass,
  HardHat,
  Home,
  Mail,
  MapPin,
  Menu,
  Paintbrush,
  Phone,
  Quote,
  Ruler,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import logo from "@/assets/babc-logo.png.asset.json";
import p1 from "@/assets/p1.jpeg.asset.json";
import p2 from "@/assets/p2.jpeg.asset.json";
import p3 from "@/assets/p3.jpeg.asset.json";
import p5 from "@/assets/p5.jpeg.asset.json";
import p6 from "@/assets/p6.jpeg.asset.json";
import p7 from "@/assets/p7.jpeg.asset.json";
import p8 from "@/assets/p8.jpeg.asset.json";
import p9 from "@/assets/p9.jpeg.asset.json";
import p10 from "@/assets/p10.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "B.A.B.C | Big-Wig Architecture & Building Construction" },
      {
        name: "description",
        content:
          "B.A.B.C builds premium residences, estates and commercial structures across Nigeria. Architecture, construction and finishing — from vision to legacy.",
      },
      {
        property: "og:title",
        content: "B.A.B.C | Big-Wig Architecture & Building Construction",
      },
      {
        property: "og:description",
        content:
          "Premium Nigerian architecture and building construction. Design, build and finish with B.A.B.C — from vision to legacy.",
      },
      { property: "og:image", content: `https://babc.example${p9.url}` },
      { name: "twitter:image", content: `https://babc.example${p9.url}` },
    ],
  }),
  component: Index,
});

const PHONE = "+2349067883721";
const EMAIL = "destinybigwig@gmail.com";
const WHATSAPP = `https://wa.me/2349067883721?text=${encodeURIComponent(
  "Hello B.A.B.C, I would like to request a quote for my project.",
)}`;

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  {
    icon: Compass,
    title: "Architectural Design",
    body: "Bespoke residential and commercial designs, 3D visuals and full working drawings tailored to your land and lifestyle.",
  },
  {
    icon: Building2,
    title: "Building Construction",
    body: "Foundation to roofing with disciplined supervision, certified materials and structural integrity you can trust.",
  },
  {
    icon: Paintbrush,
    title: "Finishing & Interiors",
    body: "POP, screeding, tiling, cornices, wrought-iron works, lighting and premium paint finishes.",
  },
  {
    icon: Ruler,
    title: "Project Management",
    body: "Transparent budgeting, procurement, milestone reporting and delivery timelines you can plan your life around.",
  },
  {
    icon: HardHat,
    title: "Renovation & Remodeling",
    body: "Structural upgrades and modern facelifts that raise the value and comfort of existing buildings.",
  },
  {
    icon: Home,
    title: "Estate Development",
    body: "Multi-unit terraces, blocks of flats and gated estate development from land assessment to handover.",
  },
];

const PROJECTS = [
  { img: p9.url, title: "Omeoga Residence", meta: "Luxury Duplex · Completed", tall: true },
  { img: p6.url, title: "Royal Crest Mansion", meta: "5-Bedroom Mansion · Finishing" },
  { img: p3.url, title: "Heritage Bungalow", meta: "Classic Bungalow · Completed" },
  { img: p1.url, title: "Bigwig Terraces", meta: "Multi-Unit Terraces · Ongoing", tall: true },
  { img: p7.url, title: "Coronet Villa", meta: "Twin Duplex · Roofing Stage" },
  { img: p10.url, title: "Omeoga Annex", meta: "Contemporary Duplex · Completed" },
  { img: p5.url, title: "Palm Court Bungalow", meta: "Detached Bungalow · Finishing" },
  { img: p2.url, title: "Greenfield Home", meta: "Modern Bungalow · Plastering" },
  { img: p8.url, title: "Colonnade Project", meta: "Storey Building · Structural Works" },
];

const PROCESS = [
  { step: "01", title: "Consultation", body: "We listen, inspect the site and define scope, budget and timeline." },
  { step: "02", title: "Design & Costing", body: "Drawings, 3D views and a transparent bill of quantities." },
  { step: "03", title: "Construction", body: "Skilled crews, weekly reporting and strict quality checks." },
  { step: "04", title: "Handover", body: "Finishing, snag-free inspection and keys to your new legacy." },
];

const TESTIMONIALS = [
  {
    quote:
      "B.A.B.C delivered my duplex three weeks ahead of schedule. The finishing quality is better than what I saw in the drawings.",
    name: "Chief Emeka Onyema",
    role: "Homeowner, Awka",
  },
  {
    quote:
      "What impressed me most was the reporting. I was abroad throughout the build and never felt out of touch for a single week.",
    name: "Mrs. Adaeze Nwosu",
    role: "Diaspora Client, Houston",
  },
  {
    quote:
      "They handled our terrace project end-to-end — design, approvals and construction. Professional from the first site visit.",
    name: "Ifeanyi Okeke",
    role: "Estate Developer, Enugu",
  },
];

const STATS = [
  { value: "120+", label: "Projects Delivered" },
  { value: "14", label: "Years On Site" },
  { value: "100%", label: "Structural Compliance" },
  { value: "9", label: "States Covered" },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "border-b border-border/70 bg-background/90 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 sm:px-8">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <img src={logo.url} alt="B.A.B.C logo" className="h-11 w-11 shrink-0 object-contain" />
            <span className="min-w-0">
              <span className="block font-display text-base leading-none tracking-[0.18em] text-gold-gradient">
                B.A.B.C
              </span>
              <span className="mt-1 block truncate text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                From Vision to Legacy
              </span>
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-8 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button asChild variant="gold" size="sm" className="ml-auto hidden sm:inline-flex lg:ml-0">
            <a href="#quote">Request a Quote</a>
          </Button>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="ml-auto shrink-0 rounded-sm border border-border p-2 text-foreground sm:ml-0 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="animate-fade-in border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-border/60 py-3 text-sm tracking-wide text-muted-foreground"
                >
                  {item.label}
                </a>
              ))}
              <Button asChild variant="gold" className="mt-4">
                <a href="#quote" onClick={() => setMenuOpen(false)}>
                  Request a Quote
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
        <img
          src={p9.url}
          alt="Completed luxury duplex built by B.A.B.C"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-royal-deep/60" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 border border-accent/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-accent">
              <Sparkles className="h-3 w-3" /> RC 7051829
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.05] sm:text-6xl lg:text-7xl">
              We build the homes <br className="hidden sm:block" />
              <span className="text-gold-gradient">families remember.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Big-Wig Architecture and Building Construction Company — designing, building and
              finishing premium residences and estates across Nigeria.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <a href="#quote">Request a Quote</a>
              </Button>
              <Button asChild variant="outlineGold" size="lg">
                <a href="#projects">View Our Projects</a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border surface-royal">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-10 sm:px-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="px-2 text-center">
                <p className="font-display text-3xl text-gold-gradient sm:text-4xl">{s.value}</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Our Services</p>
          <div className="rule-gold mt-4" />
          <h2 className="mt-6 max-w-2xl font-display text-3xl sm:text-5xl">
            Every discipline your build needs, under one roof.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="lift h-full border border-border bg-card p-7">
                <s.icon className="h-7 w-7 text-accent" strokeWidth={1.4} />
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Recent Projects</p>
            <div className="rule-gold mt-4" />
            <h2 className="mt-6 max-w-2xl font-display text-3xl sm:text-5xl">
              Sites we've shaped, homes we've handed over.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <figure
                  className={`lift group relative overflow-hidden border border-border ${
                    p.tall ? "sm:row-span-2" : ""
                  }`}
                >
                  <img
                    src={p.img}
                    alt={`${p.title} — ${p.meta}`}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      p.tall ? "h-80 sm:h-[34rem]" : "h-80"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <span className="min-w-0">
                      <span className="block truncate font-display text-lg">{p.title}</span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-accent">
                        {p.meta}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">How We Work</p>
          <div className="rule-gold mt-4" />
          <h2 className="mt-6 max-w-2xl font-display text-3xl sm:text-5xl">
            From vision to legacy, in four measured stages.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 100}>
              <div className="border-t border-accent/40 pt-6">
                <span className="font-display text-4xl text-gold-gradient">{p.step}</span>
                <h3 className="mt-4 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-y border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Client Voices</p>
            <div className="rule-gold mt-4" />
            <h2 className="mt-6 max-w-2xl font-display text-3xl sm:text-5xl">
              Trusted by families and developers.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <blockquote className="lift h-full border border-border bg-card p-8">
                  <Quote className="h-7 w-7 text-accent" strokeWidth={1.3} />
                  <p className="mt-5 font-display text-lg leading-relaxed">{t.quote}</p>
                  <footer className="mt-6 border-t border-border pt-4">
                    <p className="text-sm text-foreground">{t.name}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {t.role}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / Contact */}
      <section id="quote" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div id="contact">
              <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Contact Us</p>
              <div className="rule-gold mt-4" />
              <h2 className="mt-6 font-display text-3xl sm:text-5xl">
                Request a quote for your project.
              </h2>
              <p className="mt-5 max-w-md text-muted-foreground">
                Share your plot details and what you have in mind. We respond with a clear scope and
                costing — no obligation.
              </p>

              <div className="mt-10 space-y-4 text-sm">
                <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-accent">
                  <Phone className="h-4 w-4 shrink-0 text-accent" /> {PHONE}
                </a>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 hover:text-accent">
                  <Mail className="h-4 w-4 shrink-0 text-accent" /> {EMAIL}
                </a>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 shrink-0 text-accent" /> Nationwide projects across
                  Nigeria
                </p>
                <p className="flex items-center gap-3 text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-accent" /> RC Number: 7051829
                </p>
              </div>

              <Button asChild variant="outlineGold" className="mt-8">
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <form
              className="border border-border bg-card p-7 sm:p-9"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const body = `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nProject type: ${data.get(
                  "type",
                )}\nLocation: ${data.get("location")}\nBudget: ${data.get("budget")}\n\n${data.get("details")}`;
                window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
                  "Quote Request — B.A.B.C",
                )}&body=${encodeURIComponent(body)}`;
              }}
            >
              <h3 className="text-xl">Project details</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Full name" required />
                <Field name="phone" label="Phone / WhatsApp" required />
                <Field name="type" label="Project type" placeholder="Duplex, bungalow, terrace…" />
                <Field name="location" label="Site location" />
                <Field name="budget" label="Budget range" className="sm:col-span-2" />
                <label className="sm:col-span-2">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Tell us about the project
                  </span>
                  <textarea
                    name="details"
                    rows={4}
                    className="mt-2 w-full border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
                  />
                </label>
              </div>
              <Button type="submit" variant="gold" className="mt-7 w-full">
                Send Quote Request
              </Button>
              <p className="mt-4 text-center text-[11px] text-muted-foreground">
                Prefer instant replies? Message us on WhatsApp.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="flex min-w-0 items-start gap-4">
            <img src={logo.url} alt="B.A.B.C logo" className="h-14 w-14 shrink-0 object-contain" />
            <div className="min-w-0">
              <p className="font-display text-lg tracking-[0.16em] text-gold-gradient">B.A.B.C</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Big-Wig Architecture and Building Construction Company. From Vision to Legacy.
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-accent">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href={`tel:${PHONE}`} className="block hover:text-accent">
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="block break-all hover:text-accent">
              {EMAIL}
            </a>
            <p>RC 7051829</p>
          </div>
        </div>
        <div className="border-t border-border/70 px-5 py-5 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} B.A.B.C — All rights reserved
        </div>
      </footer>
    </div>
  );
}

function Field({
  name,
  label,
  required,
  placeholder,
  className = "",
}: {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <label className={className}>
      <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-accent"
      />
    </label>
  );
}
