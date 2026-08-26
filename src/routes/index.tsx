import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Compass,
  Eye,
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
  MessageCircle,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
const logo = "/images/babc-logo.png";
const p1 = "/images/p1.jpeg";
const p2 = "/images/p2.jpeg";
const p3 = "/images/p3.jpeg";
const p5 = "/images/p5.jpeg";
const p6 = "/images/p6.jpeg";
const p7 = "/images/p7.jpeg";
const p8 = "/images/p8.jpeg";
const p9 = "/images/p9.jpeg";
const p10 = "/images/p10.jpeg";
const p11 = "/images/p11.jpeg";
const advertVideo = "/videos/babc-advert.mp4";
const COMPANY_NAME = "BIG-WIG ARCHITECTURE AND BUILDING CONSTRUCTION";
const CEO_NAME = "Engineer Hillary Ifechukwudere Kwam";
const CAC_NUMBER = "7051820";
const CAC_ADDRESS = "91 Meze Ogocha Crescent, Asaba, Delta State";
const CAC_DATE = "13 July 2023";

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
    ],
  }),
  component: Index,
});

const PHONE = "+2349067883721";
const EMAIL = "destinybigwig@gmail.com";
const WHATSAPP = `https://wa.me/2349067883721?text=${encodeURIComponent(
  "Hello B.A.B.C, I would like to request a quote for my project.",
)}`;
const INSPECTION_WHATSAPP = `https://wa.me/2349067883721?text=${encodeURIComponent(
  "Hello B.A.B.C, I would like to book a site inspection.",
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
  { img: p9, title: "Omeoga Residence", meta: "Luxury Duplex · Completed", category: "Duplexes", location: "Awka", status: "Completed", tall: true },
  { img: p6, title: "Royal Crest Mansion", meta: "5-Bedroom Mansion · Finishing", category: "Duplexes", location: "Enugu", status: "Finishing" },
  { img: p3, title: "Heritage Bungalow", meta: "Classic Bungalow · Completed", category: "Bungalows", location: "Onitsha", status: "Completed" },
  { img: p1, title: "Bigwig Terraces", meta: "Multi-Unit Terraces · Ongoing", category: "Terraces", location: "Enugu", status: "Ongoing", tall: true },
  { img: p7, title: "Coronet Villa", meta: "Twin Duplex · Roofing Stage", category: "Duplexes", location: "Asaba", status: "Roofing" },
  { img: p10, title: "Omeoga Annex", meta: "Contemporary Duplex · Completed", category: "Duplexes", location: "Awka", status: "Completed" },
  { img: p5, title: "Palm Court Bungalow", meta: "Detached Bungalow · Finishing", category: "Bungalows", location: "Owerri", status: "Finishing" },
  { img: p2, title: "Greenfield Home", meta: "Modern Bungalow · Plastering", category: "Bungalows", location: "Lagos", status: "Plastering" },
  { img: p8, title: "Colonnade Project", meta: "Storey Building · Structural Works", category: "Commercial", location: "Abuja", status: "Structural works" },
  { img: p11, title: "Owerri Duplex", meta: "Duplex · Screeding", category: "Duplexes", location: "Owerri, Imo State", status: "Screeding" },
];

const PROJECT_CATEGORIES = ["All", "Duplexes", "Bungalows", "Terraces", "Commercial"];

const SERVICE_AREAS = [
  "Abia",
  "Anambra",
  "Akwa Ibom",
  "Bayelsa",
  "Benue",
  "Cross River",
  "Delta",
  "Edo",
  "Enugu",
  "Imo",
  "Kaduna",
  "Kano",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "FCT Abuja",
];

const FAQS = [
  { question: "Do you handle both design and construction?", answer: "Yes. We can take your project from site assessment and architectural design through construction, finishing and handover." },
  { question: "Can you work outside Delta State?", answer: "Yes. We serve clients across 24 states in Nigeria, subject to a site assessment and agreed project scope." },
  { question: "How do I begin a project?", answer: "Send your location, project type and preferred timeline through the quote form or WhatsApp. We will arrange a consultation or site inspection." },
  { question: "Do you provide project updates?", answer: "Yes. Our process includes milestone reporting, transparent costing and regular communication throughout the build." },
];

const PROCESS = [
  { step: "01", title: "Consultation", body: "We listen, inspect the site and define scope, budget and timeline." },
  { step: "02", title: "Design & Costing", body: "Drawings, 3D views and a transparent bill of quantities." },
  { step: "03", title: "Construction", body: "Skilled crews, weekly reporting and strict quality checks." },
  { step: "04", title: "Handover", body: "Finishing, snag-free inspection and keys to your new legacy." },
];

const TESTIMONIALS = [
  {
    quote: "I was impressed by how involved they stayed from the first day to the handover. The finishing came out even better than I expected.",
    name: "Chief Emeka Onyema",
    role: "Homeowner, Awka",
  },
  {
    quote: "I live abroad, so regular updates were very important to me. B.A.B.C kept me informed and made the whole process feel manageable.",
    name: "Mrs. Adaeze Nwosu",
    role: "Diaspora Client, Houston",
  },
  {
    quote: "They handled the design, approvals and construction for our terrace project. I always knew what stage we were at and what came next.",
    name: "Ifeanyi Okeke",
    role: "Estate Developer, Enugu",
  },
  {
    quote: "My plot was not very large, but they made good use of every part of it. The house feels spacious, bright and practical.",
    name: "Dr. Ngozi Mbamalu",
    role: "Homeowner, Onitsha",
  },
];

const STATS = [
  { value: "120+", label: "Projects Delivered" },
  { value: "9", label: "Years On Site" },
  { value: "100%", label: "Structural Compliance" },
  { value: "24", label: "States Covered" },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[number] | null>(null);
  const [certificateOpen, setCertificateOpen] = useState(false);
  const visibleProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

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
            <img src={logo} alt="B.A.B.C logo" className="h-11 w-11 shrink-0 object-contain" width="44" height="44" />
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
          src={p9}
          alt="Completed luxury duplex built by B.A.B.C"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-royal-deep/60" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 border border-accent/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.28em] text-accent">
              <Sparkles className="h-3 w-3" /> RC {CAC_NUMBER}
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
            Every discipline your project needs, under one roof.
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

      {/* Advert video */}
      <section id="advert" className="border-y border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Our Work In Motion</p>
            <div className="rule-gold mt-4" />
            <h2 className="mt-6 max-w-2xl font-display text-3xl sm:text-5xl">See what B.A.B.C can build for you.</h2>
            <p className="mt-5 max-w-xl text-muted-foreground">Watch our short introduction and see the care behind every project.</p>
          </Reveal>
          <Reveal delay={120}>
            <figure className="mt-12 overflow-hidden border border-border bg-card shadow-[var(--shadow-elegant)]">
              <video
                controls
                preload="none"
                playsInline
                poster={p11}
                aria-label="B.A.B.C advert video"
                className="aspect-video w-full bg-black object-cover"
              >
                <source src={advertVideo} type="video/mp4" />
                Your browser does not support HTML video. Please contact B.A.B.C for an introduction.
              </video>
              <figcaption className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-5 py-4">
                <span className="text-sm text-muted-foreground">B.A.B.C · From Vision to Legacy</span>
                <a href="#quote" className="text-[10px] uppercase tracking-[0.16em] text-accent hover:underline">Start your project</a>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Service areas */}
      <section id="areas" className="border-y border-border bg-secondary/30 py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Service Areas</p>
            <div className="rule-gold mt-4" />
            <h2 className="mt-6 max-w-2xl font-display text-3xl sm:text-5xl">Building across 24 states.</h2>
            <p className="mt-5 max-w-xl text-muted-foreground">From initial site inspection to final handover, our team supports projects across Nigeria.</p>
          </Reveal>
          <details className="group mt-10 sm:hidden">
            <summary className="flex cursor-pointer list-none items-center justify-between border border-border bg-card px-5 py-4 text-sm font-medium marker:hidden">
              View 24 service areas
              <span className="text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="grid grid-cols-2 gap-x-5 gap-y-2 border-x border-b border-border px-5 py-4 text-sm">
              {SERVICE_AREAS.map((state) => (
                <div key={state} className="flex items-center gap-2 py-1 text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" /> {state}
                </div>
              ))}
            </div>
          </details>
          <div className="mt-10 hidden grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid sm:grid-cols-3 lg:grid-cols-6">
            {SERVICE_AREAS.map((state) => (
              <div key={state} className="flex items-center gap-2 border-b border-border/60 py-2 text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" /> {state}
              </div>
            ))}
          </div>
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
            <div className="sm:col-span-2 lg:col-span-3 flex flex-wrap gap-2">
              {PROJECT_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`border px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors ${
                    activeCategory === category
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {visibleProjects.map((p, i) => (
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
                    decoding="async"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      p.tall ? "h-80 sm:h-[34rem]" : "h-80"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                  <span className="absolute left-4 top-4 border border-accent/50 bg-ink/75 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-accent">
                    {p.status}
                  </span>
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <span className="min-w-0">
                      <span className="block truncate font-display text-lg">{p.title}</span>
                      <span className="mt-1 block text-[11px] uppercase tracking-[0.18em] text-accent">
                        {p.meta}
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(p)}
                      className="inline-flex shrink-0 items-center gap-1.5 border border-accent/60 px-2.5 py-2 text-[10px] uppercase tracking-[0.12em] text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      Details <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Progress gallery */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Work In Progress</p>
          <div className="rule-gold mt-4" />
          <h2 className="mt-6 max-w-2xl font-display text-3xl sm:text-5xl">
            See the craft at every stage.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <Reveal>
            <figure className="border border-border bg-card">
              <img src={p11} alt="Owerri Duplex during screeding" className="h-80 w-full object-cover" loading="lazy" decoding="async" />
              <figcaption className="p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-accent">Current stage</p>
                <h3 className="mt-2 font-display text-2xl">Owerri Duplex</h3>
                <p className="mt-2 text-sm text-muted-foreground">Screeding · Owerri, Imo State</p>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <figure className="border border-border bg-card">
              <img src={p9} alt="Completed duplex project" className="h-80 w-full object-cover" loading="lazy" decoding="async" />
              <figcaption className="p-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-accent">Completed reference</p>
                <h3 className="mt-2 font-display text-2xl">From structure to finish</h3>
                <p className="mt-2 text-sm text-muted-foreground">A look at the standard we deliver.</p>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Trust */}
      <section id="credentials" className="border-y border-border surface-royal py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Built On Trust</p>
            <div className="rule-gold mt-4" />
            <h2 className="mt-6 max-w-3xl font-display text-3xl sm:text-5xl">A registered business with a clear record.</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_1fr_1fr]">
            <Reveal>
              <article className="border border-accent/30 bg-ink/30 p-7">
                <CheckCircle2 className="h-7 w-7 text-accent" strokeWidth={1.4} />
                <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-accent">CAC registered business name</p>
                <h3 className="mt-3 font-display text-2xl leading-tight">{COMPANY_NAME}</h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">Architecture and building construction services across Nigeria.</p>
                <p className="mt-5 text-sm text-primary-foreground/80">RC Number: <strong className="text-accent">{CAC_NUMBER}</strong></p>
                <p className="mt-2 text-sm text-primary-foreground/70">{CAC_ADDRESS}</p>
                <p className="mt-2 text-sm text-primary-foreground/70">Registered {CAC_DATE}</p>
                <Button type="button" variant="outlineGold" className="mt-6" onClick={() => setCertificateOpen(true)}>
                  <Eye className="h-4 w-4" /> View CAC Details
                </Button>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="border border-accent/30 bg-ink/30 p-7">
                <p className="text-[10px] uppercase tracking-[0.18em] text-accent">Leadership</p>
                <h3 className="mt-5 font-display text-2xl">{CEO_NAME}</h3>
                <p className="mt-2 text-sm text-primary-foreground/70">Chief Executive Officer</p>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">Leading B.A.B.C with a commitment to thoughtful design, sound construction and lasting value.</p>
              </article>
            </Reveal>
            <Reveal delay={200}>
              <article className="border border-accent/30 bg-ink/30 p-7">
                <ShieldCheck className="h-7 w-7 text-accent" strokeWidth={1.4} />
                <h3 className="mt-5 font-display text-2xl">Professional delivery</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">Transparent costing, milestone reporting and disciplined site supervision.</p>
              </article>
            </Reveal>
            <Reveal delay={300}>
              <article className="border border-accent/30 bg-ink/30 p-7">
                <Building2 className="h-7 w-7 text-accent" strokeWidth={1.4} />
                <h3 className="mt-5 font-display text-2xl">Company profile</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">Download our company overview and contact details for your records.</p>
                <Button asChild variant="outlineGold" className="mt-6">
                  <a href="/company-profile.html" download>Download Profile</a>
                </Button>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">How We Work</p>
          <div className="rule-gold mt-4" />
            <h2 className="mt-6 max-w-2xl font-display text-3xl sm:text-5xl">
              A clear construction timeline, from first call to handover.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 100}>
              <div className="border-t border-accent/40 pt-6">
                <span className="font-display text-4xl text-gold-gradient">{p.step}</span>
                <h3 className="mt-4 text-xl">{p.title}</h3>
                <span className="mt-2 inline-block text-[10px] uppercase tracking-[0.16em] text-accent">Stage {p.step}</span>
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

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] text-accent">FAQ</p>
          <div className="rule-gold mt-4" />
          <h2 className="mt-6 max-w-2xl font-display text-3xl sm:text-5xl">Straight answers before we break ground.</h2>
        </Reveal>
        <div className="mt-12 grid gap-3 lg:grid-cols-2">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group border border-border bg-card px-6 py-5">
              <summary className="cursor-pointer list-none pr-8 font-display text-lg marker:hidden group-open:text-accent">{faq.question}</summary>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
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
                  <ShieldCheck className="h-4 w-4 shrink-0 text-accent" /> RC Number: {CAC_NUMBER}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="outlineGold">
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  Chat on WhatsApp
                </a>
                </Button>
                <Button asChild variant="gold">
                <a href={INSPECTION_WHATSAPP} target="_blank" rel="noreferrer">
                  <MapPin className="h-4 w-4" /> Book a Site Inspection
                </a>
                </Button>
                <Button asChild variant="outlineGold">
                  <a href={`tel:${PHONE}`}><Phone className="h-4 w-4" /> Call Now</a>
                </Button>
              </div>
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
            <img src={logo} alt="B.A.B.C logo" className="h-14 w-14 shrink-0 object-contain" width="56" height="56" />
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
            <a href="#areas" className="hover:text-accent">Service Areas</a>
            <a href="#faq" className="hover:text-accent">FAQ</a>
            <a href="/privacy-policy.html" className="hover:text-accent">Privacy Policy</a>
          </nav>
          <div className="space-y-2 text-sm text-muted-foreground">
            <a href={`tel:${PHONE}`} className="block hover:text-accent">
              {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="block break-all hover:text-accent">
              {EMAIL}
            </a>
            <p>RC {CAC_NUMBER}</p>
            <div className="flex flex-wrap gap-2 pt-3">
              <a href="https://www.instagram.com/architect_construction_company?igsi=YXpzYnVsbzZjOXJn&utm_source=ig_contact_invite" target="_blank" rel="noreferrer" className="border border-border px-2.5 py-1 text-xs transition-colors hover:border-accent hover:text-accent">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=100063766340506&mibextid=wwXIfr" target="_blank" rel="noreferrer" className="border border-border px-2.5 py-1 text-xs transition-colors hover:border-accent hover:text-accent">Facebook</a>
              <a href="https://www.tiktok.com/@b.a.b.c.company?_r=1&_t=ZS-99Cum9x7a8y" target="_blank" rel="noreferrer" className="border border-border px-2.5 py-1 text-xs transition-colors hover:border-accent hover:text-accent">TikTok</a>
              <button type="button" disabled className="border border-border px-2.5 py-1 text-xs opacity-60" title="Verified Google Reviews profile coming soon">Reviews soon</button>
            </div>
          </div>
        </div>
        <div className="border-t border-border/70 px-5 py-5 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} B.A.B.C — All rights reserved
        </div>
        <div className="border-t border-border/70 px-5 py-4 text-center text-xs text-muted-foreground sm:px-8">
          By contacting us through this website, you agree that we may use your details to respond to your enquiry. We do not sell your information.
        </div>
      </footer>

      <div className="floating-actions fixed inset-x-4 bottom-4 z-40 mx-auto grid max-w-xl grid-cols-2 gap-2 sm:inset-x-auto sm:right-5 sm:max-w-none sm:grid-cols-4">
        <a href="#quote" className="floating-action inline-flex items-center justify-center gap-2 border border-accent bg-accent px-3 py-3 text-center text-[10px] font-medium uppercase tracking-[0.12em] text-accent-foreground shadow-lg transition-transform hover:-translate-y-1">
          <Quote className="h-4 w-4" /> <span>Request a Quote</span>
        </a>
        <a href={INSPECTION_WHATSAPP} target="_blank" rel="noreferrer" className="floating-action inline-flex items-center justify-center gap-2 border border-accent bg-background px-3 py-3 text-center text-[10px] font-medium uppercase tracking-[0.12em] text-accent shadow-lg transition-transform hover:-translate-y-1">
          <MapPin className="h-4 w-4" /> <span>Book Inspection</span>
        </a>
        <a href={`tel:${PHONE}`} className="floating-action inline-flex items-center justify-center gap-2 border border-border bg-card px-3 py-3 text-center text-[10px] font-medium uppercase tracking-[0.12em] text-foreground shadow-lg transition-transform hover:-translate-y-1">
          <Phone className="h-4 w-4 text-accent" /> <span>Call Now</span>
        </a>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="Chat with B.A.B.C on WhatsApp" className="floating-action inline-flex items-center justify-center gap-2 border border-[#25D366] bg-[#25D366] px-3 py-3 text-center text-[10px] font-medium uppercase tracking-[0.12em] text-white shadow-lg transition-transform hover:-translate-y-1">
          <MessageCircle className="h-4 w-4" /> <span>WhatsApp</span>
        </a>
      </div>

      <div className="floating-socials fixed bottom-24 left-4 z-40 flex flex-col gap-2 sm:bottom-5 sm:left-5">
        <a
          href="https://www.instagram.com/architect_construction_company?igsi=YXpzYnVsbzZjOXJn&utm_source=ig_contact_invite"
          target="_blank"
          rel="noreferrer"
          aria-label="Open B.A.B.C on Instagram"
          className="floating-social inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E4405F] text-white shadow-lg transition-transform hover:scale-110"
        >
          <SocialMark network="instagram" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100063766340506&mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          aria-label="Open B.A.B.C on Facebook"
          className="floating-social inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-lg transition-transform hover:scale-110"
        >
          <SocialMark network="facebook" />
        </a>
        <a
          href="https://www.tiktok.com/@b.a.b.c.company?_r=1&_t=ZS-99Cum9x7a8y"
          target="_blank"
          rel="noreferrer"
          aria-label="Open B.A.B.C on TikTok"
          className="floating-social inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-110"
        >
          <SocialMark network="tiktok" />
        </a>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl border-border bg-card p-0">
          {selectedProject && (
            <>
              <img src={selectedProject.img} alt={selectedProject.title} className="h-64 w-full object-cover sm:h-80" />
              <div className="p-6 sm:p-8">
                <DialogHeader>
                  <DialogTitle className="font-display text-3xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription>{selectedProject.meta}</DialogDescription>
                </DialogHeader>
                <div className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-5 text-sm sm:grid-cols-3">
                  <div><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Category</p><p className="mt-1">{selectedProject.category}</p></div>
                  <div><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Location</p><p className="mt-1">{selectedProject.location}</p></div>
                  <div><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Status</p><p className="mt-1 text-accent">{selectedProject.status}</p></div>
                </div>
                <Button asChild variant="gold" className="mt-6">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">Discuss a similar project</a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={certificateOpen} onOpenChange={setCertificateOpen}>
        <DialogContent className="max-w-xl border-border bg-card">
          <DialogHeader>
            <DialogTitle className="font-display text-3xl">CAC Certificate Details</DialogTitle>
            <DialogDescription>Certificate of registration information for B.A.B.C.</DialogDescription>
          </DialogHeader>
          <div className="mt-5 space-y-4 border-y border-border py-5 text-sm">
            <div><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Registered business name</p><p className="mt-1 font-display text-xl">{COMPANY_NAME}</p></div>
            <div><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">RC number</p><p className="mt-1 text-accent">{CAC_NUMBER}</p></div>
            <div><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Business activity</p><p className="mt-1">Architecture and Building Construction Services</p></div>
            <div><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Principal place of business</p><p className="mt-1">{CAC_ADDRESS}</p></div>
            <div><p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Date of registration</p><p className="mt-1">{CAC_DATE}</p></div>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">The certificate image can be displayed here once it is uploaded as a public website asset.</p>
        </DialogContent>
      </Dialog>
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

function SocialMark({ network }: { network: "instagram" | "facebook" | "tiktok" }) {
  if (network === "facebook") {
    return <span className="font-sans text-2xl font-bold leading-none">f</span>;
  }

  if (network === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
        <path d="M15.6 3c.3 1.8 1.3 3 3.1 3.5v2.7c-1.2-.1-2.2-.5-3.1-1.1v6.2a5.7 5.7 0 1 1-4.9-5.6v2.8a2.9 2.9 0 1 0 2.1 2.8V3h2.8Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
    </svg>
  );
}
