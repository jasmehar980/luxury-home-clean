import { Sparkles, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-ink text-primary-foreground">
              <Sparkles className="h-4 w-4 text-gold" />
            </span>
            <span className="font-display text-xl tracking-tight">
              Lumen<span className="text-gold">.</span>Clean
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Premium home cleaning for Austin and surrounding neighborhoods. Vetted, insured,
            and obsessed with the details.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Service Area</div>
          <ul className="mt-4 space-y-2 text-sm text-foreground">
            <li>Austin · Downtown, East, South</li>
            <li>Round Rock · Cedar Park</li>
            <li>Pflugerville · Lakeway</li>
            <li>Westlake · Bee Cave</li>
          </ul>
        </div>

        <div className="lg:col-span-4">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2 text-foreground">
              <Phone className="h-4 w-4 text-gold" /> (555) 123-4567
            </li>
            <li className="flex items-center gap-2 text-foreground">
              <Mail className="h-4 w-4 text-gold" /> hello@lumenclean.co
            </li>
            <li className="flex items-center gap-2 text-foreground">
              <MapPin className="h-4 w-4 text-gold" /> Serving Greater Austin, TX
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Lumen Clean Co. All rights reserved.</span>
          <span>Insured & bonded · Texas LIC #0098765</span>
        </div>
      </div>
    </footer>
  );
}
