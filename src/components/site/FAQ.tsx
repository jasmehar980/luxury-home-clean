import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Are your cleaners insured and background-checked?",
    a: "Yes — every Lumen professional passes a full background check, in-person interview, and 40-hour training program. We carry up to $2M in liability insurance on every job.",
  },
  {
    q: "What's included in a standard clean?",
    a: "Our 58-point checklist covers kitchens, bathrooms, bedrooms, and living areas — including dusting, vacuuming, mopping, surface sanitizing, mirrors, and trash removal.",
  },
  {
    q: "What if I'm not satisfied?",
    a: "Tell us within 24 hours and we'll come back to re-clean any area at no charge. Our satisfaction guarantee is unconditional.",
  },
  {
    q: "Do I need to provide supplies?",
    a: "No. We bring all premium, eco-friendly, pet- and kid-safe products and equipment. If you'd prefer we use yours, just let us know.",
  },
  {
    q: "Which areas do you serve?",
    a: "Austin, Round Rock, Cedar Park, Pflugerville, Lakeway, and Westlake. Not sure if we cover you? Drop your ZIP in the quote form.",
  },
  {
    q: "Can I book a recurring clean?",
    a: "Absolutely — and you'll save. Weekly clients save 15%, bi-weekly clients save 10%. You can pause, skip, or cancel any time.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-gold font-medium">FAQ</div>
          <h2 className="mt-3 text-4xl lg:text-5xl text-balance">Quietly answered.</h2>
        </div>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const active = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-xl text-foreground">{f.q}</span>
                  <span className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border">
                    {active ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                {active && (
                  <p className="pb-7 -mt-1 text-muted-foreground leading-relaxed max-w-3xl">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
