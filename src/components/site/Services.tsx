import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, PenTool, BookMarked, Printer, Shirt, Gift, ArrowUpRight } from "lucide-react";

const services = [
  {
    id: "branding",
    title: "Corporate Branding",
    icon: Palette,
    blurb: "Complete brand identity systems — logos, guidelines, stationery and rollouts that turn companies into icons.",
    bullets: ["Logo & identity systems", "Brand guidelines", "Stationery suite"],
  },
  {
    id: "graphic",
    title: "Graphic Design",
    icon: PenTool,
    blurb: "Editorial layouts, flyers, posters and campaign artwork crafted pixel-perfect for print and digital.",
    bullets: ["Flyers & posters", "Campaign artwork", "Editorial layouts"],
  },
  {
    id: "diary",
    title: "Cooperate Diary",
    icon: BookMarked,
    blurb: "Premium leather and hardback diaries with embossed branding — the year-long handshake with your clients.",
    bullets: ["Custom embossing", "Foil stamping", "Bulk corporate runs"],
  },
  {
    id: "digital",
    title: "Digital Printing",
    icon: Printer,
    blurb: "Vivid, large-format and short-run digital printing — banners, brochures, business cards, you name it.",
    bullets: ["Banners & posters", "Brochures & cards", "Short-run on demand"],
  },
  {
    id: "tshirt",
    title: "T-Shirt Printing",
    icon: Shirt,
    blurb: "DTF, screen and sublimation printing on premium garments — for staff uniforms, events and merch drops.",
    bullets: ["DTF & screen print", "Event uniforms", "Custom merch"],
  },
  {
    id: "souvenir",
    title: "Souvenirs / Gift Items",
    icon: Gift,
    blurb: "Branded mugs, totes, pens, keychains and gift sets that keep your name on every desk in town.",
    bullets: ["Mugs & drinkware", "Totes & pouches", "Pens & keychains"],
  },
];

export function Services() {
  const [active, setActive] = useState<string>(services[0].id);
  const activeService = services.find((s) => s.id === active)!;

  return (
    <section id="services" className="relative py-28 lg:py-40 bg-ink-soft">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold/90 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/70" /> What we do
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl max-w-2xl">
              Six crafts. <span className="italic gold-shimmer">One press.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/65">
            Hover or tap any service to dive in. Each one is delivered in-house by our team of designers,
            printers and finishers — no middlemen, no surprises.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          {/* List */}
          <ul className="divide-y divide-white/10 border-y border-white/10">
            {services.map((s, i) => {
              const isActive = s.id === active;
              const Icon = s.icon;
              return (
                <li key={s.id}>
                  <button
                    onMouseEnter={() => setActive(s.id)}
                    onFocus={() => setActive(s.id)}
                    onClick={() => setActive(s.id)}
                    className="group relative w-full text-left py-7 flex items-center gap-6"
                  >
                    <span className={`font-display text-sm tabular-nums transition-colors ${isActive ? "text-gold" : "text-white/40"}`}>
                      0{i + 1}
                    </span>
                    <span className={`grid place-items-center h-12 w-12 rounded-full border transition-all duration-500 ${isActive ? "border-gold bg-gold/10 text-gold" : "border-white/15 text-white/60"}`}>
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className={`font-display text-3xl sm:text-4xl lg:text-5xl transition-all duration-500 ${isActive ? "text-white translate-x-2" : "text-white/45"}`}>
                      {s.title}
                    </span>
                    <ArrowUpRight className={`ml-auto h-6 w-6 transition-all duration-500 ${isActive ? "text-gold opacity-100 translate-x-0" : "text-white/30 opacity-0 -translate-x-3"}`} />
                    {/* Gold sweep underline */}
                    <span
                      className={`absolute left-0 right-0 bottom-0 h-px origin-left bg-gradient-to-r from-gold via-gold-soft to-transparent transition-transform duration-700 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Detail card */}
          <div className="lg:sticky lg:top-28">
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 lg:p-10 overflow-hidden">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold">
                    Service · {activeService.id}
                  </div>
                  <h3 className="mt-5 font-display text-3xl sm:text-4xl">{activeService.title}</h3>
                  <p className="mt-4 text-white/70 leading-relaxed">{activeService.blurb}</p>
                  <ul className="mt-6 space-y-2.5">
                    {activeService.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-white/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {b}
                      </li>
                    ))}
                  </ul>
                  <a href="#quote" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:gap-3 transition-all">
                    Get a quote for {activeService.title.toLowerCase()} <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
