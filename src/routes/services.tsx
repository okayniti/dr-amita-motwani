import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { ContactBlock } from "./index";
import { Users, Heart, Baby, Home as HomeIcon, Leaf, ShieldCheck, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Counseling Services — Dr. Amita Motwani" },
      { name: "description", content: "Premium counseling and therapeutic services—individual, couples, family, teens, grief, and habit support." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Users,
    title: "Individual Counseling",
    sub: "For clarity, healing, and self-direction.",
    body: "A confidential 1:1 practice for those navigating anxiety, identity questions, life transitions, or simply the desire to live more intentionally.",
    helps: ["Professionals seeking clarity", "Those moving through transitions", "Anyone who values inner work"],
  },
  {
    icon: Heart,
    title: "Marriage & Relationship Counseling",
    sub: "Restoring emotional safety and partnership.",
    body: "Work with both partners to rebuild communication, intimacy, and trust—or to make difficult decisions with grace.",
    helps: ["Couples in conflict", "Partners feeling distant", "Those rebuilding after rupture"],
  },
  {
    icon: Baby,
    title: "Teen & Adolescent Counseling",
    sub: "For the most formative emotional years.",
    body: "A safe, non-judgmental space for teens to make sense of identity, peer pressure, family dynamics, and future direction.",
    helps: ["Teenagers 13–19", "Parents seeking support for their child", "College students under pressure"],
  },
  {
    icon: HomeIcon,
    title: "Family Counseling",
    sub: "Restoring connection at home.",
    body: "Family sessions to repair communication, navigate change, and rebuild the emotional architecture of home life.",
    helps: ["Parents and children", "Blended families", "Multi-generational households"],
  },
  {
    icon: Leaf,
    title: "Grief & Emotional Healing",
    sub: "Moving through loss with dignity.",
    body: "Compassionate support through bereavement, separation, or the quieter griefs that don't have a name—held with care, never rushed.",
    helps: ["Those processing loss", "Recent separation or divorce", "Caregivers and those left behind"],
  },
  {
    icon: ShieldCheck,
    title: "Addiction & Habit Support",
    sub: "Compassionate, evidence-based change.",
    body: "Behavior-change work for compulsive patterns, dependencies, and the quieter habits that quietly undermine a life.",
    helps: ["Those seeking lasting change", "Family members of those struggling", "High-functioning patterns"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-gradient-luxury pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">Services</p>
            <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
              Therapy as a <em>refined</em> practice.
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              A confidential, deeply personal counseling experience for those who expect depth, discretion, and craft.
            </p>
          </Reveal>
        </div>
      </section>

      {/* APPROACH */}
      <section className="border-y border-border/60 bg-background py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 md:grid-cols-3 lg:px-12">
          {[
            { t: "Confidential", b: "Every conversation is held in absolute privacy." },
            { t: "Evidence-based", b: "Rooted in clinical psychology and decades of research." },
            { t: "Bespoke", b: "No template. Each engagement is shaped to the person." },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-accent">{c.t}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-6xl space-y-24 px-6 lg:px-12">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 60}>
              <article className="grid grid-cols-1 gap-12 border-t border-border pt-16 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <s.icon className="h-7 w-7 text-accent" strokeWidth={1.3} />
                  <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    Service {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">{s.title}</h2>
                  <p className="mt-3 font-serif italic text-lg text-muted-foreground">{s.sub}</p>
                </div>
                <div className="lg:col-span-8 lg:pl-8">
                  <p className="text-[15px] leading-relaxed text-muted-foreground md:text-base">{s.body}</p>
                  <div className="mt-10">
                    <p className="text-[11px] uppercase tracking-[0.3em] text-foreground">Who it helps</p>
                    <ul className="mt-5 space-y-3">
                      {s.helps.map((h) => (
                        <li key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 rounded-full bg-accent" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-12">
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 text-[12px] uppercase tracking-[0.25em] text-foreground transition-all hover:border-foreground hover:bg-foreground/5"
                    >
                      Book this service <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactBlock />
    </SiteLayout>
  );
}
