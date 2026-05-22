import { ArrowUpRight } from "lucide-react";
import kitchen from "@/assets/service-kitchen.jpg";
import bathroom from "@/assets/service-bathroom.jpg";
import bedroom from "@/assets/service-bedroom.jpg";

const services = [
  {
    img: kitchen,
    tag: "Most popular",
    title: "Standard Clean",
    desc: "A meticulous top-to-bottom refresh of every room, surface, and floor — perfect for weekly or bi-weekly upkeep.",
    points: ["Kitchen & bath sanitized", "Floors vacuumed & mopped", "Dust, polish & detail"],
  },
  {
    img: bathroom,
    tag: "Reset your home",
    title: "Deep Clean",
    desc: "An intensive restoration for first-time clients or seasonal resets. We get into every grout line and corner.",
    points: ["Inside appliances", "Baseboards & vents", "Detailed grout & glass"],
  },
  {
    img: bedroom,
    tag: "Stress-free transitions",
    title: "Move In / Move Out",
    desc: "Walk into a spotless new home, or leave your old one immaculate. Built for landlord and realtor standards.",
    points: ["Inside cabinets & drawers", "Walls spot-cleaned", "Guarantee for inspections"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Services</div>
            <h2 className="mt-3 text-4xl lg:text-5xl text-balance">
              Cleaning crafted around your home.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Every clean is performed by background-checked professionals using a 58-point checklist
            and premium, family-safe products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article key={s.title} className="lux-card overflow-hidden flex flex-col">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={1200}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background/95 px-3 py-1 text-[11px] font-medium text-foreground">
                  {s.tag}
                </span>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-foreground">
                      <span className="h-1 w-1 rounded-full bg-gold" /> {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#quote"
                  className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-gold transition-colors"
                >
                  Book this clean <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
