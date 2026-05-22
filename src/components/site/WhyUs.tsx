import { ShieldCheck, Users, Sparkles, Clock, Leaf, BadgeCheck } from "lucide-react";
import team from "@/assets/team-cleaner.jpg";

const points = [
  { icon: ShieldCheck, title: "Insured & bonded", desc: "Up to $2M liability coverage on every clean." },
  { icon: Users, title: "Vetted cleaners", desc: "Background-checked, trained, and rated 4.9★ avg." },
  { icon: BadgeCheck, title: "Satisfaction guarantee", desc: "Not happy? We come back and re-clean — free." },
  { icon: Clock, title: "Book in 60 seconds", desc: "Instant quotes, flexible scheduling, easy reschedules." },
  { icon: Leaf, title: "Eco & pet safe", desc: "Premium non-toxic products, safe for kids and pets." },
  { icon: Sparkles, title: "58-point checklist", desc: "Hotel-grade standards on every single visit." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 lg:py-32 bg-stone-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Why Lumen</div>
            <h2 className="mt-3 text-4xl lg:text-5xl text-balance">
              The standard your home deserves.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We built Lumen for homeowners who care about details — the kind that turn a clean
              house into a calm one. Every visit, every corner, every time.
            </p>

            <div className="mt-8 relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={team}
                alt="A vetted Lumen cleaning professional"
                loading="lazy"
                width={1200}
                height={1400}
                className="w-full h-[360px] object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {points.map((p) => (
              <div key={p.title} className="lux-card p-7">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-ink text-gold">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
