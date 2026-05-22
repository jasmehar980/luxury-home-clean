import { Check } from "lucide-react";

const tiers = [
  {
    name: "Refresh",
    price: "129",
    desc: "Light upkeep for tidy homes on a weekly rhythm.",
    features: ["Up to 1,500 sq ft", "Kitchen & bathrooms", "Dust, vacuum & mop", "Same cleaner each visit"],
  },
  {
    name: "Signature",
    price: "189",
    desc: "Our most-booked clean. The standard most homes need.",
    features: ["Up to 2,500 sq ft", "58-point checklist", "Eco-friendly products", "Re-clean guarantee"],
    featured: true,
  },
  {
    name: "Deep Reset",
    price: "289",
    desc: "An intensive top-to-bottom restoration of every detail.",
    features: ["Up to 2,500 sq ft", "Inside appliances", "Baseboards & vents", "Detailed grout & glass"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-medium">Pricing</div>
          <h2 className="mt-3 text-4xl lg:text-5xl text-balance">
            Honest, flat-rate pricing.
          </h2>
          <p className="mt-4 text-muted-foreground">
            No surprise fees. No hidden upsells. Just transparent rates and a guaranteed result.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={
                t.featured
                  ? "relative rounded-2xl bg-gradient-ink p-8 text-primary-foreground shadow-card lg:-mt-4 lg:mb-4"
                  : "lux-card p-8 flex flex-col"
              }
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-gold px-3 py-1 text-[11px] font-medium text-primary uppercase tracking-wider">
                  Most popular
                </span>
              )}
              <div className={t.featured ? "text-gold text-sm font-medium" : "text-foreground text-sm font-medium"}>
                {t.name}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-xs opacity-70">from $</span>
                <span className="font-display text-6xl tracking-tight">{t.price}</span>
              </div>
              <p className={`mt-3 text-sm ${t.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {t.desc}
              </p>
              <ul className="mt-7 space-y-3 text-sm flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`h-4 w-4 mt-0.5 ${t.featured ? "text-gold" : "text-foreground"}`} />
                    <span className={t.featured ? "text-primary-foreground/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={
                  t.featured
                    ? "mt-8 inline-flex justify-center rounded-full bg-gold px-5 py-3 text-sm font-medium text-primary hover:opacity-90 transition"
                    : "mt-8 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
                }
              >
                Book {t.name}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          Recurring customers save 15% (weekly) and 10% (bi-weekly). All prices include supplies, tax, and our satisfaction guarantee.
        </p>
      </div>
    </section>
  );
}
