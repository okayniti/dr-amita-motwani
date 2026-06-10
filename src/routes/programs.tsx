import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowUpRight,
  Check,
  Sparkles,
  Crown,
  Gem,
  Building2,
  Download,
  Plus,
  Minus,
  Users,
  Clock,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Pricing — Dr. Amita Motwani" },
      {
        name: "description",
        content:
          "Premium workshops and immersive transformation programs in emotional governance — from accessible community sessions to deep multi-day retreats and corporate intensives.",
      },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

/* ————————————————————— Atoms ————————————————————— */

function Eyebrow({ children }: { children: string }) {
  return (
    <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-accent">
      <span className="h-px w-8 bg-accent/60" />
      {children}
    </div>
  );
}

function Badge({ children, tone = "soft" }: { children: string; tone?: "soft" | "gold" }) {
  const cls =
    tone === "gold"
      ? "border-accent/60 bg-accent/10 text-accent"
      : "border-border bg-background/70 text-foreground/70";
  return (
    <span
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.28em] ${cls}`}
    >
      <span className="h-1 w-1 rounded-full bg-current opacity-70" />
      {children}
    </span>
  );
}

function PrimaryCTA({
  to,
  children,
  variant = "solid",
}: {
  to: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-[11px] uppercase tracking-[0.28em] transition-all duration-300";
  const styles =
    variant === "solid"
      ? "bg-foreground text-background hover:bg-foreground/85"
      : "border border-foreground/70 text-foreground hover:bg-foreground hover:text-background";
  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

function TrustRow() {
  const items = [
    { icon: Users, label: "Small Cohorts" },
    { icon: ShieldCheck, label: "Application Based" },
    { icon: Sparkles, label: "Experiential Format" },
    { icon: Clock, label: "Designed for Real Life" },
  ];
  return (
    <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
      {items.map((i) => (
        <div key={i.label} className="flex items-center justify-center gap-3 bg-background px-6 py-5">
          <i.icon size={16} className="text-accent" strokeWidth={1.4} />
          <span className="text-[11px] uppercase tracking-[0.28em] text-foreground/70">
            {i.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ————————————————————— Page ————————————————————— */

function ProgramsPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-gradient-luxury pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <Reveal>
            <Eyebrow>Programs & Pricing</Eyebrow>
            <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
              Transformation Programs <br className="hidden md:block" />
              <em>& Workshops.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A refined progression — from accessible community experiences to deep, multi-day
              immersions for individuals, leaders, and institutions.
            </p>
            <p className="mt-10 font-serif text-xl italic text-foreground/70">
              “Transformation begins the moment awareness deepens.”
            </p>
            <TrustRow />
          </Reveal>
        </div>
      </section>

      {/* 1 — PUBLIC INTRODUCTION */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>01 · Introductory Public Workshops</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                An accessible introduction to <em>emotional clarity.</em>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                Live, intimate community sessions designed to help you experience steadiness,
                self-awareness, and practical regulation in real time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <article className="relative mt-16 overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[oklch(0.97_0.022_80)] to-background p-10 shadow-soft md:p-14 lg:p-16">
              <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
                {/* Left */}
                <div className="flex flex-col lg:col-span-7">
                  <div className="flex flex-wrap gap-2">
                    <Badge tone="gold">Featured Community Experience</Badge>
                    <Badge>90-Minute Live Session</Badge>
                  </div>
                  <h3 className="mt-6 font-serif text-4xl leading-tight text-foreground md:text-5xl">
                    Anxiety Management & Emotional Reset
                  </h3>
                  <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                    A live, interactive session to soften the inner noise — practical regulation
                    tools, reflective work, and calm you can carry into your week.
                  </p>

                  <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {[
                      "Live interactive experience",
                      "Emotional regulation tools",
                      "Stress & anxiety understanding",
                      "Practical calming techniques",
                      "Reflective exercises",
                      "Live Q&A with Dr. Amita",
                    ].map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right pricing panel */}
                <div className="lg:col-span-5">
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-background/80 p-8 backdrop-blur-sm">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                        Investment
                      </p>
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="font-serif text-6xl leading-none text-foreground">₹49</span>
                        <span className="text-sm text-muted-foreground">/ seat</span>
                      </div>
                      <div className="mt-5 flex flex-wrap gap-2">
                        <Badge tone="gold">Limited Seats</Badge>
                        <Badge>Online · Live</Badge>
                      </div>
                      <div className="my-7 hairline" />
                      <p className="text-[13px] leading-relaxed text-muted-foreground">
                        Designed as a gentle, valuable entry into the work — not a sales pitch.
                        You leave with tools, language, and a quieter nervous system.
                      </p>
                    </div>
                    <div className="mt-8">
                      <PrimaryCTA to="/contact">Reserve Your Seat</PrimaryCTA>
                      <p className="mt-5 text-center text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                        Secure payment · Instant confirmation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* 2 — SIGNATURE PROGRAMS */}
      <section className="bg-secondary/40 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow>02 · Signature Transformation Programs</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Deep, immersive <em>emotional governance</em> journeys.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                Experiential programs for those committed to lasting internal change — clarity,
                composure, and command of one's emotional life.
              </p>
            </div>
          </Reveal>

          <div className="mt-24 grid grid-cols-1 items-stretch gap-y-10 gap-x-8 pt-6 lg:grid-cols-3 lg:gap-x-10">
            {[
              {
                icon: Sparkles,
                duration: "3-Day Intensive",
                title: "Emotional Governance Intensive",
                tagline: "Clarity. Stability. Emotional command.",
                price: "₹15,000",
                ribbon: "Early Bird",
                cta: "Apply for the Cohort",
                bullets: [
                  "Foundational emotional mastery tools",
                  "Behavioral awareness practices",
                  "Communication frameworks",
                  "Relationship intelligence",
                  "Guided experiential exercises",
                ],
              },
              {
                icon: Crown,
                duration: "5-Day Immersion",
                title: "Transformation Experience",
                tagline: "Deep emotional awareness & behavioral transformation.",
                price: "₹25,000",
                ribbon: "Most Chosen",
                cta: "Reserve Your Seat",
                bullets: [
                  "Advanced emotional regulation",
                  "Identity & pattern work",
                  "Stress resilience systems",
                  "Leadership psychology",
                  "Interactive breakthrough sessions",
                  "Integration practices",
                ],
                featured: true,
              },
              {
                icon: Gem,
                duration: "7-Day Retreat",
                title: "Emotional Mastery Retreat",
                tagline: "The complete emotional governance immersion.",
                price: "₹45,000",
                ribbon: "By Application",
                cta: "Request Enrollment",
                bullets: [
                  "Advanced emotional mastery",
                  "Deep behavioral rewiring",
                  "Leadership composure work",
                  "Relationship dynamics",
                  "Personal transformation arc",
                  "Reflective integration",
                ],
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <article
                  className={`relative flex h-full flex-col rounded-3xl border p-9 transition-all duration-500 lg:p-10 ${
                    card.featured
                      ? "border-accent/40 bg-gradient-to-b from-[oklch(0.98_0.022_80)] to-background glow-gold lg:-translate-y-4"
                      : "border-border bg-background shadow-soft hover:-translate-y-1 hover:border-accent/40 hover:shadow-card"
                  }`}
                >
                  {/* Ribbon */}
                  <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2">
                    <Badge tone="gold">{card.ribbon}</Badge>
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <card.icon className="h-5 w-5 text-accent" strokeWidth={1.3} />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                      {card.duration}
                    </p>
                  </div>

                  <h3 className="mt-6 font-serif text-[28px] leading-tight text-foreground md:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 min-h-[3rem] font-serif text-base italic leading-snug text-foreground/65">
                    {card.tagline}
                  </p>

                  <div className="my-7 hairline" />

                  {/* Price block — fixed height for alignment */}
                  <div className="min-h-[110px]">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                      Investment
                    </p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="font-serif text-5xl leading-none text-foreground">
                        {card.price}
                      </span>
                      <span className="text-xs text-muted-foreground">/ participant</span>
                    </div>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-accent">
                      Early bird benefits available
                    </p>
                  </div>

                  {/* Outcomes — flex-grow so CTA aligns */}
                  <ul className="mt-2 flex-1 space-y-3">
                    {card.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* CTA — pinned bottom */}
                  <div className="pt-10">
                    <PrimaryCTA to="/contact" variant={card.featured ? "solid" : "outline"}>
                      {card.cta}
                    </PrimaryCTA>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-20 text-center font-serif text-xl italic text-foreground/60">
              Each cohort is intentionally small. Selection is by application to preserve depth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3 — CORPORATE */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>03 · Corporate & Institutional</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                For organizations, <em>corporates</em> & educational institutions.
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
                Custom-designed programs shaped to your people, your context, and your outcomes —
                delivered with the same emotional precision as our flagship work.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2">
            {[
              { t: "Leadership Teams", b: "Composure, presence, and emotional precision for senior leaders." },
              { t: "Employees & Culture", b: "Workplace wellbeing, emotional regulation, psychological safety." },
              { t: "Students & Faculty", b: "Social intelligence and emotional fluency for academic communities." },
              { t: "Wellness Initiatives", b: "Long-form programs woven into your wellbeing calendar." },
            ].map((x) => (
              <div key={x.t} className="flex flex-col bg-background p-8 lg:p-10">
                <p className="font-serif text-2xl text-foreground">{x.t}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{x.b}</p>
              </div>
            ))}
            <div className="bg-background p-8 sm:col-span-2 lg:p-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-accent">Available Formats</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["90-Minute", "1-Day", "3-Day", "5-Day", "Long-Format"].map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-border px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-foreground/75"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <Reveal>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition-all hover:bg-foreground/85"
              >
                <Building2 size={14} /> Invite for Institutional Program
                <ArrowUpRight size={14} />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-foreground/80 transition-all hover:border-foreground hover:text-foreground">
                <Download size={14} /> Download Brochure
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Voices from the Room</Eyebrow>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                What participants <em>carry home.</em>
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
            {[
              { q: "I walked in carrying years of noise. I left with a quiet I didn't know I owned.", a: "Senior Leader, Pharma" },
              { q: "The most refined emotional work I've experienced. Nothing performative. Everything precise.", a: "Founder & CEO" },
              { q: "It rewired how I respond — to my team, to my partner, to myself.", a: "Educator & Coach" },
            ].map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-2xl border border-border bg-background p-10">
                  <blockquote className="font-serif text-2xl italic leading-snug text-foreground">
                    “{t.q}”
                  </blockquote>
                  <figcaption className="mt-auto pt-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
                    — {t.a}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          {/* Institution placeholder row */}
          <Reveal delay={200}>
            <div className="mt-16">
              <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Trusted across institutions & organizations
              </p>
              <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-5">
                {["Institution", "Corporate", "Academy", "Foundation", "Wellness"].map((n) => (
                  <div
                    key={n}
                    className="flex items-center justify-center bg-background px-4 py-8 font-serif text-base italic text-foreground/40"
                  >
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CLOSING CTA */}
      <section className="bg-gradient-luxury py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <Reveal>
            <Eyebrow>Begin the Conversation</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
              Not sure which program is <em>right for you?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Share a few details. We'll respond personally with a recommended path —
              individual, cohort, or institutional.
            </p>
            <div className="mx-auto mt-10 max-w-sm">
              <PrimaryCTA to="/contact">Begin Your Journey</PrimaryCTA>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "How are participants selected for the immersive programs?",
      a: "Each cohort is intentionally small. Admission is by application to preserve psychological depth, group composition, and the integrity of the work.",
    },
    {
      q: "Are early bird benefits available?",
      a: "Yes. Early enrollment includes preferred pricing and priority placement for limited cohorts. Please enquire for current windows.",
    },
    {
      q: "Can corporate programs be fully customized?",
      a: "Entirely. Format, depth, and focus areas are co-designed with your leadership to align with your culture and outcomes.",
    },
    {
      q: "Are sessions held in-person or online?",
      a: "Public workshops are typically online. Signature immersions and corporate programs are delivered in-person, with select hybrid formats available.",
    },
    {
      q: "What is the refund and rescheduling policy?",
      a: "Given the cohort-based nature of the work, seats are reserved on confirmation. A detailed policy is shared at enrollment.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Frequently Asked</Eyebrow>
            <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
              Clarity before <em>commitment.</em>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-accent"
                >
                  <span className="font-serif text-xl text-foreground md:text-2xl">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.3} />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.3} />
                  )}
                </button>
                {isOpen && (
                  <div className="pb-8 text-[15px] leading-relaxed text-muted-foreground">{f.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}