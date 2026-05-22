import { Star } from "lucide-react";

const reviews = [
  {
    quote:
      "I've used three services in Austin. Lumen is the only one that gets the corners, the baseboards, the inside of the microwave. Worth every dollar.",
    name: "Sarah K.",
    where: "Tarrytown, Austin",
  },
  {
    quote:
      "Booked in under a minute. Cleaner arrived early, was lovely, and left the place looking like a hotel suite. New monthly ritual unlocked.",
    name: "Marcus D.",
    where: "Mueller, Austin",
  },
  {
    quote:
      "We have two dogs and a toddler. They use products I actually trust, and the house has never felt this calm. Highly recommend.",
    name: "Priya N.",
    where: "Round Rock",
  },
  {
    quote:
      "Move-out clean got me my full deposit back. Landlord literally said it was the cleanest unit she'd ever seen.",
    name: "Jamie L.",
    where: "Cedar Park",
  },
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-gradient-ink text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Loved by locals</div>
            <h2 className="mt-3 text-4xl lg:text-5xl text-primary-foreground text-balance">
              2,400+ cleans. 4.9 stars.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-primary-foreground/70 text-sm">Google · Yelp · Nextdoor</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-5 font-display text-2xl leading-snug text-primary-foreground">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 text-sm text-primary-foreground/60">
                <span className="text-primary-foreground font-medium">{r.name}</span> · {r.where}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
