import { useEffect } from "react";
import { Link } from "react-router-dom";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import aboutPortrait from "@/assets/amita-warm.png";
import heroPortrait from "@/assets/amita-formal.png";
import { Anchor, Brain, Compass, Mountain, ShieldCheck, Award, ArrowUpRight } from "lucide-react";

function Label({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-accent">
      <span className="h-px w-8 bg-accent/60" /> {children}
    </div>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <p className="font-serif text-3xl text-accent md:text-4xl">{n}</p>
      <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{l}</p>
    </div>
  );
}

export default function AboutPage() {
  useEffect(() => {
    document.title = "About — Dr. Amita Motwani";
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-gradient-luxury pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">About</p>
            <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
              A calm authority <br /> in a <em>complex world.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Bridging clinical psychology, relationship coaching, and leadership development—for those who expect depth, discretion, and craft.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.5rem] shadow-card">
              <img src={aboutPortrait} alt="Dr. Amita Motwani" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7 lg:pl-8">
            <Label>Introduction</Label>
            <h2 className="mt-6 font-serif text-3xl text-foreground md:text-4xl text-balance">
              I help people return to themselves—steady, clear, and quietly in command.
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                Dr. Amita Motwani is a Psychologist and Emotional Governance Specialist known for translating deep psychological insight into practical transformation.
              </p>
              <p>
                Her work bridges the worlds of clinical psychology, relationship coaching, and leadership development—creating a refined practice for those navigating emotional complexity and high-pressure environments.
              </p>
              <p>
                With over a decade of experience, she has worked with individuals, couples, families, and organizations—helping them build clarity, stability, and intentional action.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6">
              <Stat n="10+" l="Years of practice" />
              <Stat n="1000+" l="Lives touched" />
              <Stat n="50+" l="Workshops led" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY TIMELINE */}
      <section className="bg-secondary/40 py-28 lg:py-36">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <Reveal>
            <div className="text-center">
              <Label>The Journey</Label>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl text-balance">
                A practice shaped by years of <em>quiet study</em>.
              </h2>
            </div>
          </Reveal>
          <div className="mt-20 space-y-0">
            {[
              { year: "Early Years", title: "Academic foundations", body: "PhD in English Literature laid the foundation for how Amita reads people, language, and the unspoken." },
              { year: "Clinical Practice", title: "Becoming a counselor", body: "Certified as a Psychological Counselor, Amita opened her practice for individuals, couples, and families." },
              { year: "Public Recognition", title: "Mrs. India International 2013", body: "A platform that opened conversations about poise, presence, and emotional composure with a national audience." },
              { year: "Master Trainer", title: "The Emotional Governance Framework", body: "After a decade of clinical insight, Amita architected a body of work for leaders, families, and young adults." },
              { year: "Today", title: "A multi-format practice", body: "1:1 sessions, signature workshops, college programs, and corporate engagements—each shaped to the person in the room." },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="grid grid-cols-12 gap-6 border-t border-border py-10">
                  <p className="col-span-12 text-[11px] uppercase tracking-[0.3em] text-accent md:col-span-3">{m.year}</p>
                  <div className="col-span-12 md:col-span-9">
                    <p className="font-serif text-2xl text-foreground md:text-3xl">{m.title}</p>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{m.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / FRAMEWORK */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Label>The Framework</Label>
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
              <Reveal key={i} delay={i * 70} className="bg-background">
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

      {/* CREDENTIALS */}
      <section className="bg-secondary/40 py-28 lg:py-36">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <Reveal>
            <div className="text-center">
              <Label>Credentials</Label>
              <h2 className="mt-6 font-serif text-4xl text-foreground md:text-5xl">A decade of distinction.</h2>
            </div>
          </Reveal>
          <div className="mt-20 space-y-8">
            {[
              { year: "PhD", title: "PhD in English Literature" },
              { year: "Cert.", title: "Certified Psychological Counselor" },
              { year: "10+", title: "Years of Clinical Experience" },
              { year: "2013", title: "Mrs. India International" },
              { year: "2008", title: "Gladrags Mrs. India Exotic" },
            ].map((a, i) => (
              <Reveal key={i} delay={i * 60}>
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

      {/* PERSONAL MESSAGE */}
      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:px-12">
          <Reveal className="lg:col-span-7">
            <Label>A Personal Note</Label>
            <p className="mt-8 font-serif text-3xl leading-snug text-foreground md:text-4xl text-balance">
              "The most powerful work I do is not loud. It is the slow, careful return to oneself—one honest conversation at a time. If something inside you is asking for change, that is already the beginning."
            </p>
            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-muted-foreground">— Dr. Amita Motwani</p>
            <div className="mt-12">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-[12px] uppercase tracking-[0.25em] text-background transition-all hover:bg-foreground/85 hover:gap-3"
              >
                Begin a conversation <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150} className="lg:col-span-5">
            <div className="overflow-hidden rounded-[1.5rem] shadow-card">
              <img src={heroPortrait} alt="Dr. Amita Motwani portrait" width={1024} height={1280} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
