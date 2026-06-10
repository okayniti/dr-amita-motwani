import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, Sparkles, Brain, Compass, Anchor, Crown, Heart, GraduationCap, Building2 } from "lucide-react";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Signature Workshops — Dr. Amita Motwani" },
      { name: "description", content: "Executive workshops on emotional governance, leadership, relationships, and social intelligence for organizations and institutions." },
    ],
    links: [{ rel: "canonical", href: "/workshops" }],
  }),
  component: WorkshopsPage,
});

function Label({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-accent">
      <span className="h-px w-8 bg-accent/60" /> {children}
    </div>
  );
}

const tracks = [
  {
    icon: Sparkles,
    tag: "Mastery Track",
    title: "Emotional Governance Mastery",
    body: "The flagship body of work. A multi-day immersive program for those who lead—themselves, teams, and families—through complexity.",
    bullets: ["Composure under pressure", "Decision clarity", "Boundaried influence"],
  },
  {
    icon: Crown,
    tag: "Leadership",
    title: "Command Presence",
    body: "The psychology of leadership and influence—how composure, clarity, and emotional precision become quiet, undeniable authority.",
    bullets: ["Executive presence", "Difficult conversations", "Power without performance"],
  },
  {
    icon: Heart,
    tag: "Relationships",
    title: "Relational Mastery",
    body: "The emotional blueprint of connection. Decode the patterns shaping every relationship—and rewrite them with intention.",
    bullets: ["Attachment & patterns", "Repair & rupture", "Intimacy & boundaries"],
  },
  {
    icon: GraduationCap,
    tag: "Gen Z & Colleges",
    title: "The Social Intelligence Code",
    body: "A high-energy interactive program for Gen Z—peer pressure, emotional awareness, and real-life social dynamics.",
    bullets: ["Activities & games", "Real-life simulations", "Reflective exercises"],
  },
  {
    icon: Building2,
    tag: "Corporate",
    title: "Composed Leadership for Teams",
    body: "Tailored interventions for executive teams, founders, and organizations seeking emotional capacity at scale.",
    bullets: ["Leadership offsites", "Founder coaching", "Team composure workshops"],
  },
];

function WorkshopsPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-gradient-luxury pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">Workshops & Programs</p>
            <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
              Built for <em>transformation.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Executive-level workshops shaped to your people. Held with depth, designed for measurable inner change.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRACKS */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="max-w-2xl">
              <Label>Workshop Tracks</Label>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Five tracks. <em>One philosophy.</em>
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {tracks.map((t, i) => (
              <Reveal key={t.title} delay={(i % 2) * 80}>
                <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-10 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-card">
                  <div className="flex items-center gap-4">
                    <t.icon className="h-6 w-6 text-accent" strokeWidth={1.3} />
                    <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{t.tag}</p>
                  </div>
                  <h3 className="mt-8 font-serif text-3xl leading-tight text-foreground">{t.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                  <ul className="mt-8 space-y-3">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span className="mt-2 h-1 w-1 rounded-full bg-accent" /> {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-10">
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-foreground transition-all group-hover:gap-3">
                      Enquire <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="bg-secondary/40 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <Label>Methodology</Label>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Experiential, psychological, lasting.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Every program is engineered for inner shifts that hold long after the room empties.
              </p>
            </div>
          </Reveal>
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, title: "Experiential Learning", body: "Insights through doing, not just hearing." },
              { icon: Brain, title: "Psychology-Based", body: "Rooted in research and clinical practice." },
              { icon: Compass, title: "Real-Life Application", body: "Tools that travel into your everyday." },
              { icon: Anchor, title: "Lasting Impact", body: "Inner shifts that hold long after." },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-background p-8 shadow-soft">
                  <c.icon className="h-6 w-6 text-accent" strokeWidth={1.3} />
                  <p className="mt-8 font-serif text-2xl text-foreground">{c.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FORMATS */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <div className="max-w-2xl">
              <Label>Formats</Label>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Crafted to your context.
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {[
              { d: "1 Day", t: "Intensive Immersion", b: "A focused day for senior teams or curated groups." },
              { d: "2 Days", t: "Signature Workshop", b: "The most requested format. Depth with breathing room." },
              { d: "3 Days", t: "Mastery Retreat", b: "Off-site immersion for transformation that holds." },
            ].map((f, i) => (
              <Reveal key={i} delay={i * 80} className="bg-background">
                <div className="h-full p-10">
                  <p className="font-serif text-5xl text-accent">{f.d}</p>
                  <p className="mt-6 font-serif text-2xl text-foreground">{f.t}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-[12px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="flex items-center gap-2"><span className="text-accent">✓</span> Customizable</span>
              <span className="flex items-center gap-2"><span className="text-accent">✓</span> On-site or Off-site</span>
              <span className="flex items-center gap-2"><span className="text-accent">✓</span> Highly Interactive</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <WorkshopInquiry />
    </SiteLayout>
  );
}

function WorkshopInquiry() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-secondary/40 py-28 lg:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-12">
        <Reveal className="lg:col-span-5">
          <Label>Workshop Inquiry</Label>
          <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
            Bring this work to your people.
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Share a few details. Dr. Amita's team will respond personally with a recommended format and next steps.
          </p>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-background p-10"
          >
            {sent ? (
              <div className="py-12 text-center">
                <p className="font-serif text-3xl text-foreground">Thank you.</p>
                <p className="mt-4 text-muted-foreground">Your inquiry has been received. We'll be in touch shortly.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label="Your Name" name="name" />
                <Field label="Organization" name="org" />
                <Field label="Email" name="email" type="email" />
                <Field label="Phone" name="phone" />
                <div className="md:col-span-2">
                  <label className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Track of Interest</label>
                  <select className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-accent">
                    <option>Emotional Governance Mastery</option>
                    <option>Command Presence (Leadership)</option>
                    <option>Relational Mastery</option>
                    <option>The Social Intelligence Code (Gen Z)</option>
                    <option>Composed Leadership (Corporate)</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Tell us about your group</label>
                  <textarea rows={4} className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-accent" />
                </div>
                <div className="md:col-span-2 mt-4">
                  <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-[12px] uppercase tracking-[0.25em] text-background transition-all hover:bg-foreground/85 sm:w-auto">
                    Submit Inquiry <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input id={name} name={name} type={type} className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-accent" />
    </div>
  );
}
