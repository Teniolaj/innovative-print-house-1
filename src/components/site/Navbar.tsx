import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#quote", label: "Quote" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(20,16,12,0)", "rgba(20,16,12,0.85)"]);
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(12px)"]);
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      style={{ background: bg, backdropFilter: blur as unknown as string }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/0"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Innovative Print House" className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40" />
          <div className="leading-tight hidden sm:block">
            <div className="text-sm font-semibold tracking-wide">Innovative <span className="text-gold">Print House</span></div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">Print · Branding · Publication</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative text-white/75 hover:text-white transition-colors group">
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a href="#quote" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-ink hover:bg-gold-soft transition-colors">
          <Phone className="h-3.5 w-3.5" /> Get a Quote
        </a>

        <button onClick={() => setOpen(true)} className="md:hidden text-white p-2" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-5 h-20">
              <span className="text-sm font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} className="p-2"><X className="h-6 w-6" /></button>
            </div>
            <nav className="flex flex-col items-center gap-7 pt-10 text-2xl font-display">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1, transition: { delay: 0.05 * i } }}
                  className="hover:text-gold"
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="#quote" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink">Get a Quote</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
