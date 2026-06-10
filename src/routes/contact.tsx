import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. Amita Motwani" },
      { name: "description", content: "Schedule a session or enquire for workshops with Dr. Amita Motwani." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="bg-gradient-luxury pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.35em] text-accent">Contact</p>
            <h1 className="mt-8 font-serif text-5xl leading-[1.05] text-foreground md:text-7xl text-balance">
              Begin with a <em>conversation.</em>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Share a few details and Dr. Amita's team will respond personally within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-background pb-32 pt-12 lg:pb-40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-12">
          <Reveal className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-secondary/30 p-10">
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Direct</p>
              <div className="mt-6 space-y-6">
                <a href="tel:8878512345" className="flex items-center gap-4 text-foreground">
                  <Phone className="h-5 w-5 text-accent" strokeWidth={1.3} />
                  <span className="font-serif text-2xl">8878512345</span>
                </a>
                <a href="tel:8889299899" className="flex items-center gap-4 text-foreground">
                  <Phone className="h-5 w-5 text-accent" strokeWidth={1.3} />
                  <span className="font-serif text-2xl">8889299899</span>
                </a>
                <a href="mailto:amitamotwaniclinic@gmail.com" className="flex items-center gap-4 text-foreground">
                  <Mail className="h-5 w-5 text-accent" strokeWidth={1.3} />
                  <span className="font-serif text-lg break-all">amitamotwaniclinic@gmail.com</span>
                </a>
              </div>
              <div className="mt-10 hairline" />
              <p className="mt-8 text-xs leading-relaxed tracking-wide text-muted-foreground">
                All conversations are held with the highest confidentiality and care.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-2xl border border-border bg-card p-10"
            >
              {sent ? (
                <div className="py-12 text-center">
                  <p className="font-serif text-3xl text-foreground">Thank you.</p>
                  <p className="mt-4 text-muted-foreground">Your message has been received. We'll be in touch shortly.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <Field label="Full Name" name="name" />
                  <Field label="Email" name="email" type="email" />
                  <Field label="Phone (optional)" name="phone" />
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Enquiry Type</label>
                    <select className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-accent">
                      <option>Personal Counseling Session</option>
                      <option>Couple / Family Session</option>
                      <option>Workshop Invitation</option>
                      <option>Corporate / Institution Programme</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Message</label>
                    <textarea rows={4} className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-accent" />
                  </div>
                  <button
                    type="submit"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-[12px] uppercase tracking-[0.25em] text-background transition-all hover:bg-foreground/85 sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-3 w-full border-0 border-b border-border bg-transparent py-3 text-foreground outline-none focus:border-accent"
      />
    </div>
  );
}
