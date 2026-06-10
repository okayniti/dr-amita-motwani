import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import heroPortrait from "@/assets/amita-formal.png";
import aboutPortrait from "@/assets/amita-warm.png";
import {
  Award,
  GraduationCap,
  Sparkles,
  Crown,
  Heart,
  Users,
  Baby,
  Home as HomeIcon,
  Leaf,
  ShieldCheck,
  ArrowUpRight,
  Compass,
  Anchor,
  Brain,
  Mountain,
  Mail,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Amita Motwani — Emotional Governance & Luxury Coaching" },
      { name: "description", content: "Master your inner world. Command your outer reality. Premium psychology, relationship coaching, and emotional governance for individuals and leaders." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-accent">
      <span className="h-px w-8 bg-accent/60" />
      {children}
    </div>
  );
}

function PrimaryButton({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[12px] uppercase tracking-[0.25em] text-background transition-all hover:bg-foreground/85 hover:gap-3"
    >
      {children}
      <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

function GhostButton({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-7 py-3.5 text-[12px] uppercase tracking-[0.25em] text-foreground transition-all hover:border-foreground hover:bg-foreground/5"
    >
      {children}
    </Link>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-luxury pt-32 pb-24 lg:pt-44 lg:pb-32">
        <div className="absolute inset-0 bg-gradient-soft pointer-events-none" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <div className="animate-fade-up lg:col-span-7">
            <SectionLabel>Emotional Governance</SectionLabel>
            <h1 className="mt-8 font-serif text-5xl leading-[1.05] tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
              Master Your Inner World. <br />
              <span className="italic text-foreground/80">Command</span> Your Outer Reality.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              <span className="font-serif text-foreground text-lg">Dr. Amita Motwani</span> — Psychologist • Relationship Coach • Emotional Governance Authority • Master Trainer
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Working at the intersection of psychology, human behavior, and leadership—helping individuals and decision-makers develop clarity, composure, and emotional command.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <PrimaryButton to="/contact">Book a Session</PrimaryButton>
              <GhostButton to="/workshops">Invite for Workshop</GhostButton>
            </div>
          </div>
          <div className="relative animate-fade-up lg:col-span-5" style={{ animationDelay: "200ms" }}>
            <div className="absolute -inset-6 rounded-[2rem] bg-champagne/40 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.5rem] shadow-card">
              <img
                src={heroPortrait}
                alt="Dr. Amita Motwani, Psychologist and Emotional Governance Specialist"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-background/90 px-6 py-4 shadow-soft backdrop-blur-md md:block">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">A Decade of Practice</p>
              <p className="mt-1 font-serif text-2xl text-foreground">10<span className="text-accent">+</span> Years</p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <section className="border-y border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 lg:px-12">
          {[
            { icon: GraduationCap, label: "10+ Years Experience" },
            { icon: Brain, label: "Psychologist & Therapist" },
            { icon: Sparkles, label: "Master Trainer, Emotional Governance" },
            { icon: Crown, label: "Mrs. India International 2013" },
          ].map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex items-center gap-4">
                <item.icon className="h-5 w-5 text-accent" strokeWidth={1.4} />
                <p className="text-[13px] uppercase tracking-[0.18em] text-muted-foreground">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-background py-28 lg:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.5rem] shadow-card">
              <img
                src={aboutPortrait}
                alt="Dr. Amita Motwani in studio"
                width={1024}
                height={1280}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 lg:pl-8">
            <SectionLabel>About</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-foreground md:text-5xl text-balance">
              A Calm Authority <br /> in a <em className="font-serif">Complex World</em>
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Dr. Amita Motwani is a Psychologist and Emotional Governance Specialist known for translating deep psychological insight into practical transformation.
              </p>
              <p>
                She works with individuals, couples, and leaders navigating emotional complexity, relationships, and high-pressure environments—helping them build clarity, stability, and intentional action.
              </p>
            </div>
            <div className="mt-10">
              <GhostButton to="/about">Learn More</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-secondary/40 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <SectionLabel>Signature Philosophy</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                The Emotional Governance Framework
              </h2>
              <p className="mt-6 text-muted-foreground">
                Five disciplines that quietly transform how you lead your life, relationships, and work.
              </p>
            </div>
          </Reveal>
          <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Anchor, title: "Stay Calm", body: "Composure when things feel uncertain." },
              { icon: Compass, title: "Respond", body: "Thoughtfully, instead of reacting instantly." },
              { icon: Brain, title: "Decide", body: "Clearly, without overwhelm." },
              { icon: ShieldCheck, title: "Boundaries", body: "Held with quiet, grounded confidence." },
              { icon: Mountain, title: "Stay Grounded", body: "Steady under pressure, every time." },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 80} className="bg-background">
                <div className="h-full p-8 transition-colors hover:bg-secondary/40">
                  <p.icon className="h-6 w-6 text-accent" strokeWidth={1.3} />
                  <p className="mt-8 font-serif text-2xl text-foreground">{p.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesGrid />

      {/* WORKSHOPS */}
      <SignatureWorkshops />

      {/* SPECIALIZED PROGRAMS */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <Reveal>
            <div className="max-w-2xl">
              <SectionLabel>Specialized Programs</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Carefully crafted, deeply personal.
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 divide-y divide-border border-y border-border">
            {[
              "The Emotional Reset",
              "The Composed Leader",
              "Strategic Composure",
              "Sustainable Success",
              "The Stability Code",
              "Power Within",
              "Breaking the Noise",
              "Social Pressure Detox",
            ].map((title, i) => (
              <Reveal key={title} delay={i * 40}>
                <div className="group grid grid-cols-12 items-center gap-4 py-7 transition-colors hover:bg-secondary/30">
                  <span className="col-span-2 text-xs tracking-[0.3em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="col-span-8 font-serif text-2xl text-foreground md:text-3xl">{title}</p>
                  <ArrowUpRight className="col-span-2 ml-auto h-5 w-5 text-muted-foreground transition-all group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.4} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOP EXPERIENCE */}
      <section className="bg-secondary/40 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <SectionLabel>The Experience</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Not just sessions. <em>Transformational</em> experiences.
              </h2>
            </div>
          </Reveal>
          <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, title: "Experiential Learning", body: "Insights through doing, not just hearing." },
              { icon: Brain, title: "Psychology-Based", body: "Rooted in research and clinical practice." },
              { icon: Compass, title: "Real-Life Application", body: "Tools that travel into your everyday." },
              { icon: Anchor, title: "Lasting Impact", body: "Inner shifts that hold long after." },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="group h-full rounded-2xl border border-border bg-background p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <c.icon className="h-6 w-6 text-accent" strokeWidth={1.3} />
                  <p className="mt-8 font-serif text-2xl text-foreground">{c.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GEN Z PROGRAM */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-12">
          <Reveal>
            <SectionLabel>For Colleges & Young Professionals</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
              The Social <em>Intelligence</em> Code
            </h2>
            <p className="mt-8 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
              A high-energy interactive program designed for Gen Z—focused on relationships, peer pressure, emotional awareness, and real-life social dynamics.
            </p>
            <div className="mt-10">
              <GhostButton to="/contact">Bring it to your campus</GhostButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              {["Activities", "Games", "Reflective exercises", "Real-life simulations"].map((t, i) => (
                <div key={t} className="rounded-2xl border border-border bg-secondary/30 p-8">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent">0{i + 1}</p>
                  <p className="mt-6 font-serif text-xl text-foreground">{t}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-secondary/40 py-28 lg:py-36">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <Reveal>
            <div className="text-center">
              <SectionLabel>Achievements & Credentials</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">A decade of distinction.</h2>
            </div>
          </Reveal>
          <div className="mt-20 space-y-10">
            {[
              { year: "PhD", title: "PhD in English Literature" },
              { year: "Cert.", title: "Certified Psychological Counselor" },
              { year: "10+", title: "Years of Clinical Experience" },
              { year: "2013", title: "Mrs. India International" },
              { year: "2008", title: "Gladrags Mrs. India Exotic" },
            ].map((a, i) => (
              <Reveal key={i} delay={i * 70}>
                <div className="flex items-baseline gap-8 border-b border-border pb-8">
                  <span className="font-serif text-3xl text-accent md:text-4xl">{a.year}</span>
                  <p className="text-lg text-foreground md:text-xl">{a.title}</p>
                  <Award className="ml-auto h-5 w-5 text-muted-foreground" strokeWidth={1.3} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="max-w-2xl">
              <SectionLabel>Who I Work With</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Designed for those who lead—themselves, and others.
              </h2>
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3">
            {[
              { icon: Users, t: "Individuals" },
              { icon: Heart, t: "Couples & Families" },
              { icon: Baby, t: "Teenagers & Young Adults" },
              { icon: Crown, t: "Professionals & Leaders" },
              { icon: HomeIcon, t: "Corporates" },
              { icon: GraduationCap, t: "Educational Institutions" },
            ].map((a, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="group flex h-full items-center gap-5 rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/60 hover:shadow-soft">
                  <a.icon className="h-6 w-6 text-accent" strokeWidth={1.3} />
                  <p className="font-serif text-xl text-foreground">{a.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-luxury py-32 lg:py-44">
        <div className="absolute inset-0 bg-gradient-soft pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-12">
          <Reveal>
            <SectionLabel>Begin</SectionLabel>
            <h2 className="mt-8 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
              Clarity changes <em>everything.</em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether you are seeking personal guidance or organizational transformation, the first step is a conversation.
            </p>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <PrimaryButton to="/contact">Book a Session</PrimaryButton>
              <GhostButton to="/workshops">Invite for Workshop</GhostButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <ContactBlock />
    </SiteLayout>
  );
}

export function ServicesGrid() {
  const services = [
    { icon: Users, title: "Individual Counseling", body: "Confidential 1:1 work for clarity, healing, and growth." },
    { icon: Heart, title: "Marriage & Relationship", body: "Rebuild emotional safety, intimacy, and partnership." },
    { icon: Baby, title: "Teen & Adolescent", body: "Hold space for the most formative emotional years." },
    { icon: HomeIcon, title: "Family Counseling", body: "Restore connection and communication at home." },
    { icon: Leaf, title: "Grief & Emotional Healing", body: "Move through loss with dignity and support." },
    { icon: ShieldCheck, title: "Addiction & Habit Support", body: "Compassionate, evidence-based behavior change." },
  ];
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Counseling Services</SectionLabel>
            <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
              Counseling & <em>Therapeutic</em> Services
            </h2>
          </div>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="group h-full rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-accent/60 hover:shadow-card">
                <s.icon className="h-6 w-6 text-accent" strokeWidth={1.3} />
                <h3 className="mt-8 font-serif text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                <div className="mt-8 hairline opacity-60" />
                <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors group-hover:text-accent">
                  Learn more →
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SignatureWorkshops() {
  const workshops = [
    {
      tag: "Workshop 01",
      title: "Relational Mastery",
      sub: "The Emotional Blueprint of Connection",
      body: "Decode the patterns shaping every relationship in your life—and rewrite them with intention.",
    },
    {
      tag: "Workshop 02",
      title: "Command Presence",
      sub: "The Psychology of Leadership & Influence",
      body: "How composure, clarity, and emotional precision become quiet, undeniable authority.",
    },
    {
      tag: "Workshop 03",
      title: "The Social Intelligence Code",
      sub: "Modern Social Dynamics for the Real World",
      body: "Read rooms, hold ground, and navigate complex social landscapes with grace.",
    },
  ];
  return (
    <section className="bg-secondary/40 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <SectionLabel>Signature Workshops</SectionLabel>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                Designed for depth. <br />
                <em>Built for transformation.</em>
              </h2>
            </div>
            <div className="hidden md:block">
              <GhostButton to="/workshops">View All Workshops</GhostButton>
            </div>
          </div>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {workshops.map((w, i) => (
            <Reveal key={w.title} delay={i * 100}>
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-background p-10 transition-all hover:-translate-y-1 hover:shadow-card">
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{w.tag}</p>
                <h3 className="mt-8 font-serif text-3xl leading-tight text-foreground">{w.title}</h3>
                <p className="mt-3 font-serif italic text-lg text-muted-foreground">{w.sub}</p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                <div className="mt-auto pt-10">
                  <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.25em] text-foreground transition-all group-hover:gap-3">
                    Enquire <ArrowUpRight size={14} />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-[12px] uppercase tracking-[0.25em] text-muted-foreground">
            <span className="flex items-center gap-2"><span className="text-accent">✓</span> 1–3 Day Formats</span>
            <span className="flex items-center gap-2"><span className="text-accent">✓</span> Customizable</span>
            <span className="flex items-center gap-2"><span className="text-accent">✓</span> Highly Interactive & Experiential</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <section id="contact" className="bg-background py-28 lg:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-12">
        <Reveal>
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
            A single conversation can change the trajectory.
          </h2>
          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
            Reach out for personal counseling, couple sessions, or to invite Dr. Amita to your organization.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <PrimaryButton to="/contact">Schedule Your Session</PrimaryButton>
            <GhostButton to="/contact">Enquire for Workshops</GhostButton>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl border border-border bg-secondary/30 p-10">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Direct</p>
            <div className="mt-6 space-y-6">
              <a href="tel:8878512345" className="group flex items-center gap-4 text-foreground">
                <Phone className="h-5 w-5 text-accent" strokeWidth={1.3} />
                <span className="font-serif text-2xl">8878512345</span>
              </a>
              <a href="tel:8889299899" className="group flex items-center gap-4 text-foreground">
                <Phone className="h-5 w-5 text-accent" strokeWidth={1.3} />
                <span className="font-serif text-2xl">8889299899</span>
              </a>
              <a href="mailto:amitamotwaniclinic@gmail.com" className="group flex items-center gap-4 text-foreground">
                <Mail className="h-5 w-5 text-accent" strokeWidth={1.3} />
                <span className="font-serif text-xl break-all">amitamotwaniclinic@gmail.com</span>
              </a>
            </div>
            <div className="mt-10 hairline" />
            <p className="mt-8 text-xs leading-relaxed tracking-wide text-muted-foreground">
              All conversations are held with the highest confidentiality and care.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
