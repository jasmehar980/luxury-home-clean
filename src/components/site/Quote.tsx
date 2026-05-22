import { useState } from "react";
import { Phone, MapPin, Check, ShieldCheck } from "lucide-react";

export function Quote() {
  const [sent, setSent] = useState(false);

  return (
    <section id="quote" className="py-24 lg:py-32 bg-stone-soft">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
              Book your clean
            </div>
            <h2 className="mt-3 text-4xl lg:text-5xl text-balance">
              Get your free quote in 60 seconds.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Tell us about your home. We'll send a transparent, all-inclusive price within minutes —
              no calls, no pressure.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-gold" />
                <span>100% satisfaction guarantee — or we re-clean free.</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-gold" />
                <span>Flat-rate pricing. No hidden fees, ever.</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span>Serving Austin, Round Rock, Cedar Park & nearby.</span>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-background p-6">
              <div className="text-sm text-muted-foreground">Prefer to talk?</div>
              <a
                href="tel:+15551234567"
                className="mt-1 inline-flex items-center gap-2 font-display text-2xl text-foreground hover:text-gold transition-colors"
              >
                <Phone className="h-5 w-5" /> (555) 123-4567
              </a>
              <div className="mt-1 text-xs text-muted-foreground">Mon–Sat, 7am–7pm CT</div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-card"
            >
              {sent ? (
                <div className="py-16 text-center">
                  <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                    <Check className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="mt-6 text-3xl">Quote on its way.</h3>
                  <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                    A member of the Lumen team will text you a price and available times within a few minutes.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl">Your free quote</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Takes 60 seconds. No credit card required.
                  </p>

                  <div className="mt-7 grid sm:grid-cols-2 gap-5">
                    <Field label="Full name" name="name" placeholder="Alex Morgan" required />
                    <Field label="Phone" name="phone" type="tel" placeholder="(555) 000-0000" required />
                    <Field label="Email" name="email" type="email" placeholder="alex@email.com" required />
                    <Field label="ZIP code" name="zip" placeholder="78704" required />
                    <Select
                      label="Bedrooms"
                      name="beds"
                      options={["Studio", "1", "2", "3", "4", "5+"]}
                    />
                    <Select
                      label="Bathrooms"
                      name="baths"
                      options={["1", "1.5", "2", "2.5", "3", "4+"]}
                    />
                    <Select
                      label="Service type"
                      name="service"
                      options={["Standard Clean", "Deep Clean", "Move In / Move Out", "Not sure — recommend"]}
                      full
                    />
                    <Select
                      label="Frequency"
                      name="freq"
                      options={["One-time", "Weekly (save 15%)", "Bi-weekly (save 10%)", "Monthly"]}
                      full
                    />
                  </div>

                  <div className="mt-5">
                    <label className="block text-xs font-medium text-foreground mb-1.5">
                      Anything we should know? (optional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-foreground transition"
                      placeholder="Pets, parking, preferred times…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-7 w-full inline-flex items-center justify-center rounded-full bg-primary px-6 py-4 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-soft"
                  >
                    Get my free quote
                  </button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground">
                    By submitting you agree to be contacted about your quote. We never share your info.
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-medium text-foreground mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-foreground transition"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
  full,
}: {
  label: string;
  name: string;
  options: string[];
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={name} className="block text-xs font-medium text-foreground mb-1.5">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/30 focus:border-foreground transition"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
