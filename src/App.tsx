import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const works = path === "/works";
  const home = path === "/";
  return <div className="bg-ink text-foreground min-h-screen">
    <Navbar />
    <main id="main-content">
      {home ? <><Hero /><Services /><Gallery /><QuoteForm /><Contact /></> : works ? <Gallery fullPage /> :
        <section className="mx-auto max-w-xl px-5 py-40 text-center"><h1 className="text-4xl">Page not found</h1><a href="/" className="mt-6 inline-block text-gold">Return home</a></section>}
    </main>
    <Footer /><FloatingWhatsApp />
  </div>;
}
