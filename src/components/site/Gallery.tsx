import { motion } from "framer-motion";
import branding from "@/assets/g-branding.jpg";
import graphic from "@/assets/g-graphic.jpg";
import diary from "@/assets/g-diary.jpg";
import digital from "@/assets/g-digital.jpg";
import tshirt from "@/assets/g-tshirt.jpg";
import souvenir from "@/assets/g-souvenir.jpg";

const items = [
  { img: branding, tag: "Branding",   title: "Atlas Holdings — Stationery Suite", span: "md:col-span-2 md:row-span-2" },
  { img: digital,  tag: "Large Format", title: "Avenue Campaign Wrap" },
  { img: diary,    tag: "Diaries",    title: "Westmont Executive Diary 2026" },
  { img: graphic,  tag: "Editorial",  title: "Quarterly Brand Magazine", span: "md:col-span-2" },
  { img: tshirt,   tag: "Apparel",    title: "FieldKit Staff Uniforms" },
  { img: souvenir, tag: "Merch",      title: "Annual Conference Gift Set" },
];

export function Gallery() {
  return (
    <section id="work" className="relative py-28 lg:py-40 bg-ink">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <div className="text-[11px] uppercase tracking-[0.35em] text-gold/90 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/70" /> Selected work
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl max-w-3xl">
              A small look at what <br className="hidden sm:block" />
              <span className="italic gold-shimmer">left the press.</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/65">
            Over 1,200 projects shipped for startups, multinationals, churches and government agencies across Ghana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <motion.figure
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${it.span ?? ""}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">{it.tag}</div>
                  <div className="mt-1 font-display text-lg sm:text-xl text-white max-w-xs">{it.title}</div>
                </div>
                <span className="h-9 w-9 rounded-full border border-white/30 grid place-items-center text-white/70 group-hover:border-gold group-hover:text-gold transition-colors">
                  ↗
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-20 overflow-hidden border-y border-white/10 py-6">
          <div className="marquee flex gap-12 whitespace-nowrap text-4xl sm:text-5xl font-display">
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex items-center gap-12">
                {["Print", "·", "Branding", "·", "Publication", "·", "Apparel", "·", "Merch", "·", "Diaries", "·"].map((w, i) => (
                  <span key={i} className={i % 2 === 0 ? "text-white" : "text-stroke"}>{w}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
