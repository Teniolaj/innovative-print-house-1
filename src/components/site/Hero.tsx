import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden grain">
      {/* Zooming background image (looped) */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Print shop with offset press"
          className="hero-zoom h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(15,12,8,0.85)_100%)]" />
      </div>

      {/* CMYK floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="float-y absolute -left-10 top-40 h-40 w-40 rounded-full bg-cyan/20 blur-3xl" />
        <div className="float-y absolute right-20 top-24 h-32 w-32 rounded-full bg-magenta/20 blur-3xl" style={{ animationDelay: "2s" }} />
        <div className="float-y absolute left-1/3 bottom-32 h-48 w-48 rounded-full bg-gold/15 blur-3xl" style={{ animationDelay: "4s" }} />
      </div>

      {/* Decorative gold rings */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4, delay: 0.5 }}
          className="absolute right-10 lg:right-28 top-32 h-16 w-16 rounded-full border-2 border-gold/70" />
        <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.4, delay: 0.9 }}
          className="absolute left-8 lg:left-32 bottom-44 h-24 w-24 rounded-full border-2 border-gold/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-10 pt-40 lg:pt-44 pb-24 min-h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.35em] text-gold/90"
        >
          <span className="h-px w-10 bg-gold/70" />
          Innovative Print House · Ghana
        </motion.div>

        <h1 className="mt-6 font-display text-[44px] leading-[1.02] sm:text-6xl md:text-7xl lg:text-[96px] font-bold max-w-5xl">
          <SplitWord text="Bold" delay={0.1} />{" "}
          <SplitWord text="ideas," delay={0.25} />
          <br className="hidden sm:block" />
          <SplitWord text="brilliantly" delay={0.45} />{" "}
          <span className="gold-shimmer italic">printed.</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-7 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed"
        >
          We craft premium corporate branding, publications and merchandise that make your business
          impossible to ignore. From a single business card to a nationwide campaign — we print it right.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a href="#quote" className="group inline-flex items-center gap-3 rounded-full bg-gold pl-6 pr-2 py-2 text-sm font-semibold text-ink hover:bg-gold-soft transition-all">
            Request a Quote
            <span className="grid place-items-center h-9 w-9 rounded-full bg-ink text-gold transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a href="#work" className="group inline-flex items-center gap-3 text-sm text-white/80 hover:text-white">
            <span className="grid place-items-center h-11 w-11 rounded-full border border-white/30 group-hover:border-gold transition-colors">
              <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
            </span>
            See our recent work
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.1 }}
          className="mt-16 grid grid-cols-3 max-w-2xl gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur"
        >
          {[
            { v: "10+", l: "Years Crafting" },
            { v: "1,200+", l: "Jobs Delivered" },
            { v: "98%", l: "Repeat Clients" },
          ].map((s) => (
            <div key={s.l} className="bg-ink/40 p-5 sm:p-6">
              <div className="font-display text-3xl sm:text-4xl text-gold">{s.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/55">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[10px] uppercase tracking-[0.4em] text-white/40"
      >
        <div className="flex flex-col items-center gap-3">
          <span>scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

function SplitWord({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "110%" }} animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
}
