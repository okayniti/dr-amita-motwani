import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Youtube, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/40 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 lg:px-12">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            <Link to="/" className="font-serif text-2xl text-foreground">Dr. Amita Motwani</Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Psychology, relationship coaching, and emotional governance for individuals, families, and leaders.
            </p>
            <div className="mt-8 flex items-center gap-4">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:border-accent hover:text-accent">
                  <Icon className="h-4 w-4" strokeWidth={1.4} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Explore" links={[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/workshops", label: "Workshops" },
            { to: "/programs", label: "Programs & Pricing" },
            { to: "/contact", label: "Contact" },
          ]} />

          <FooterCol title="Services" links={[
            { to: "/services", label: "Individual Counseling" },
            { to: "/services", label: "Relationship Counseling" },
            { to: "/services", label: "Family Counseling" },
            { to: "/services", label: "Teen Counseling" },
            { to: "/services", label: "Grief & Healing" },
          ]} />

          <FooterCol title="Workshops" links={[
            { to: "/workshops", label: "Relational Mastery" },
            { to: "/workshops", label: "Command Presence" },
            { to: "/workshops", label: "Social Intelligence" },
            { to: "/workshops", label: "Corporate Programs" },
            { to: "/workshops", label: "College Programs" },
          ]} />

          <div className="col-span-2 lg:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.3em] text-foreground">Contact</p>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              <li><a href="tel:8878512345" className="flex items-center gap-2 hover:text-foreground"><Phone className="h-3.5 w-3.5 text-accent" strokeWidth={1.4} /> 8878512345</a></li>
              <li><a href="tel:8889299899" className="flex items-center gap-2 hover:text-foreground"><Phone className="h-3.5 w-3.5 text-accent" strokeWidth={1.4} /> 8889299899</a></li>
              <li><a href="mailto:amitamotwaniclinic@gmail.com" className="flex items-start gap-2 hover:text-foreground"><Mail className="h-3.5 w-3.5 text-accent mt-1 shrink-0" strokeWidth={1.4} /> <span className="break-all">amitamotwaniclinic@gmail.com</span></a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 hairline" />

        <div className="mt-16 text-center">
          <p className="font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl text-balance">
            “Emotional command is the highest form of power. <br className="hidden md:block" />
            Inner stability is the real luxury.”
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">— Dr. Amita Motwani</p>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 md:flex-row">
          <p className="text-[11px] tracking-[0.2em] text-muted-foreground/70">
            © {new Date().getFullYear()} Dr. Amita Motwani. All rights reserved.
          </p>
          <p className="text-[11px] tracking-[0.2em] text-muted-foreground/70">Designed with quiet care.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-[0.3em] text-foreground">{title}</p>
      <ul className="mt-6 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-muted-foreground transition-colors hover:text-foreground">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
