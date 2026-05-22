import { Phone, ArrowRight, ShieldCheck, Star, Leaf } from "lucide-react";
import heroImg from "@/assets/hero-living-room.jpg";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-14 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
              Now booking in Austin, Round Rock & Cedar Park
            </div>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance">
              A spotless home,
              <span className="block italic text-gold">effortlessly yours.</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Vetted, insured cleaners delivering hotel-grade results — booked in 60 seconds,
              backed by our <span className="text-foreground font-medium">100% satisfaction guarantee</span>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#quote"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-primary-foreground shadow-soft hover:shadow-card transition"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-4 text-sm font-medium text-foreground hover:border-foreground transition"
              >
                <Phone className="h-4 w-4" /> Call (555) 123-4567
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold" /> Insured & bonded
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-gold" /> Eco-friendly products
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-foreground font-medium">4.9</span>
                <span>· 2,400+ cleans</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={heroImg}
                alt="Pristine luxury living room cleaned to perfection"
                width={1600}
                height={1200}
                className="w-full h-[460px] lg:h-[620px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>

            {/* Floating proof card */}
            <div className="hidden sm:block absolute -bottom-8 -left-6 lux-card p-5 max-w-[280px]">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-gold" />
                <div>
                  <div className="text-sm font-semibold">Booked in under 60s</div>
                  <div className="text-xs text-muted-foreground">Avg. quote response</div>
                </div>
              </div>
              <div className="mt-4 h-1.5 w-full rounded-full bg-stone-soft overflow-hidden">
                <div className="h-full w-[92%] bg-gradient-gold" />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                92% of customers book the same day
              </div>
            </div>

            <div className="hidden sm:flex absolute -top-6 -right-4 lux-card px-5 py-4 items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-gold" />
              <div className="text-sm">
                <div className="font-semibold">100% Guarantee</div>
                <div className="text-xs text-muted-foreground">Or we re-clean free</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-y border-border bg-stone-soft/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-6 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span>As trusted by 1,200+ Austin homes</span>
          <span className="hidden md:inline">Featured in Austin Monthly</span>
          <span>Google Rated 4.9 ★</span>
          <span className="hidden md:inline">Yelp Top 100 Service</span>
          <span>Nextdoor Neighborhood Favorite</span>
        </div>
      </div>
    </section>
  );
}
