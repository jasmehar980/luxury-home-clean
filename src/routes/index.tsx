import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Quote } from "@/components/site/Quote";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lumen Clean — Premium Home Cleaning in Austin, TX" },
      {
        name: "description",
        content:
          "Vetted, insured cleaners delivering hotel-grade home cleaning across Austin. Book in 60 seconds. 100% satisfaction guaranteed.",
      },
      { property: "og:title", content: "Lumen Clean — Premium Home Cleaning in Austin" },
      {
        property: "og:description",
        content:
          "Hotel-grade home cleaning, booked in 60 seconds. Insured, vetted, satisfaction guaranteed.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}
