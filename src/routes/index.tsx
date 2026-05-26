import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-ink text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <QuoteForm />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
