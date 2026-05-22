import { useState } from "react";
import { Phone, Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#pricing", label: "Pricing" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-18 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-ink text-primary-foreground">
            <Sparkles className="h-4 w-4 text-gold" />
          </span>
          <span className="font-display text-xl tracking-tight">
            Lumen<span className="text-gold">.</span>Clean
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition-colors"
          >
            <Phone className="h-4 w-4" /> (555) 123-4567
          </a>
          <a
            href="#quote"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-soft"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground text-base"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 text-foreground"
            >
              <Phone className="h-4 w-4" /> (555) 123-4567
            </a>
            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
