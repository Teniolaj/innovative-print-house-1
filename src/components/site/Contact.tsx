import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const WA = "233243420953";

export function Contact() {
  return (
    <section id="contact" className="relative py-28 lg:py-36 bg-ink">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        >
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold/90 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/70" /> Come say hi
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl">
            Visit the <span className="italic gold-shimmer">studio.</span>
          </h2>
          <p className="mt-5 max-w-md text-white/65">
            Walk in to see paper samples, finishes and past work. Coffee's on us.
          </p>

          <div className="mt-10 space-y-5 text-sm">
            <Row icon={<Phone className="h-4 w-4" />} label="Call us">
              <a href="tel:+233322495092" className="hover:text-gold">+233 322 495 092</a> ·{" "}
              <a href={`https://wa.me/${WA}`} target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp</a>
            </Row>
            <Row icon={<Mail className="h-4 w-4" />} label="Email">
              <a href="mailto:hello@innovativeprinthouse.com" className="hover:text-gold">hello@innovativeprinthouse.com</a>
            </Row>
            <Row icon={<MapPin className="h-4 w-4" />} label="Studio">
              Innovative Print House, Accra, Ghana
            </Row>
            <Row icon={<Instagram className="h-4 w-4" />} label="Instagram">
              <a href="https://instagram.com/innovativeprintgh" target="_blank" rel="noreferrer" className="hover:text-gold">@innovativeprintgh</a>
            </Row>
            <Row icon={<Clock className="h-4 w-4" />} label="Opening hours">
              <div>Monday – Saturday · <span className="text-white">8:00 am – 5:00 pm</span></div>
              <div className="text-white/50">Sunday · Closed</div>
            </Row>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-gold/30 overflow-hidden bg-gradient-to-br from-gold/10 to-transparent p-1"
        >
          <div className="rounded-3xl bg-ink-soft p-8 sm:p-10 h-full flex flex-col justify-between min-h-[420px] relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-gold/30 float-y" />
            <div className="absolute -left-10 bottom-10 h-32 w-32 rounded-full border border-gold/20 float-y" style={{ animationDelay: "3s" }} />

            <div className="flex items-center gap-3 relative">
              <img src={logo} alt="" className="h-12 w-12 rounded-full ring-1 ring-gold/40" />
              <div>
                <div className="font-display text-xl">Innovative Print House</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">Print · Branding · Publication</div>
              </div>
            </div>

            <div className="relative">
              <p className="font-display text-2xl sm:text-3xl leading-snug">
                Ready when you are. Chat with us on WhatsApp and get a quote in minutes.
              </p>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent("Hi! I'd like to talk about a print project.")}`}
                target="_blank" rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:scale-[1.02] transition-transform"
              >
                <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid place-items-center h-9 w-9 rounded-full border border-gold/30 text-gold shrink-0">{icon}</span>
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/45">{label}</div>
        <div className="mt-1 text-white/85">{children}</div>
      </div>
    </div>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M19.11 17.21c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.13-.42-2.16-1.33-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.99 2.66 1.12 2.84.14.18 1.94 2.96 4.71 4.15.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM16.02 5.33c-5.86 0-10.62 4.76-10.62 10.61 0 1.87.49 3.69 1.41 5.29L5.33 26.67l5.55-1.46a10.59 10.59 0 0 0 5.13 1.31h.01c5.85 0 10.62-4.76 10.62-10.61 0-2.84-1.1-5.5-3.11-7.51a10.55 10.55 0 0 0-7.51-3.11z"/>
    </svg>
  );
}
