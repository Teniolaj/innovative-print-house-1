import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useTransform, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/works", label: "Work" },
  { href: "/#quote", label: "Quote" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(20,16,12,0.6)", "rgba(20,16,12,0.95)"]);
  const [open, setOpen] = useState(false);
  const [locked, setLocked] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const pendingLink = useRef<string | null>(null);
  const followLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    pendingLink.current = event.currentTarget.href;
    setOpen(false);
  };

  useEffect(() => {
    if (!locked) return;
    const y = window.scrollY;
    const previous = { position: document.body.style.position, top: document.body.style.top, width: document.body.style.width, overflow: document.body.style.overflow };
    Object.assign(document.body.style, { position: "fixed", top: `-${y}px`, width: "100%", overflow: "hidden" });
    return () => {
      Object.assign(document.body.style, previous);
      const behavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, y);
      document.documentElement.style.scrollBehavior = behavior;
    };
  }, [locked]);

  useEffect(() => {
    if (!open) return;
    dialog.current?.querySelector<HTMLButtonElement>("button")?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab") return;
      const elements = dialog.current?.querySelectorAll<HTMLElement>('a[href], button');
      if (!elements?.length) return;
      const first = elements[0], last = elements[elements.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const resize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", resize);
    return () => { document.removeEventListener("keydown", onKey); desktop.removeEventListener("change", resize); };
  }, [open]);

  return <>
    <motion.header style={{ background: bg }} className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 h-20 flex items-center justify-between">
        <a href="/#top" className="flex items-center gap-3">
          <img src={logo} alt="Innovative Print House" className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40" />
          <div className="leading-tight hidden sm:block"><div className="text-sm font-semibold tracking-wide">Innovative <span className="text-gold">Print House</span></div><div className="text-[10px] uppercase tracking-[0.25em] text-white/50">Print ? Branding ? Publication</div></div>
        </a>
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-9 text-sm">{links.map(l => <a key={l.href} href={l.href} className="text-white/75 hover:text-gold transition-colors">{l.label}</a>)}</nav>
        <a href="/#quote" className="hidden md:inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink hover:bg-gold-soft"><Phone className="h-3.5 w-3.5" /> Get a Quote</a>
        <button ref={trigger} onClick={() => { setLocked(true); setOpen(true); }} className="md:hidden text-white p-3" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu"><Menu className="h-6 w-6" /></button>
      </div>
    </motion.header>
    {createPortal(<AnimatePresence onExitComplete={() => {
      setLocked(false);
      trigger.current?.focus();
      const href = pendingLink.current;
      pendingLink.current = null;
      if (href) requestAnimationFrame(() => requestAnimationFrame(() => {
        const url = new URL(href);
        if (url.pathname === window.location.pathname && url.hash) {
          window.history.pushState(null, "", url.hash);
          document.getElementById(url.hash.slice(1))?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
        } else window.location.assign(href);
      }));
    }}>
      {open && <motion.div ref={dialog} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu"
        initial={{ x: reducedMotion ? 0 : "-100%" }} animate={{ x: 0, transition: { duration: reducedMotion ? 0 : 0.35, ease: "easeIn" } }} exit={{ x: reducedMotion ? 0 : "-100%", transition: { duration: reducedMotion ? 0 : 0.3, ease: "easeOut" } }}
        className="fixed inset-0 z-[100] h-dvh w-full overflow-y-auto overscroll-contain bg-ink text-foreground flex flex-col">
        <div className="flex shrink-0 items-center justify-between px-5 h-20 border-b border-white/10"><span className="text-sm font-semibold">Menu</span><button onClick={() => setOpen(false)} className="p-3" aria-label="Close menu"><X className="h-6 w-6" /></button></div>
        <nav aria-label="Mobile navigation" className="flex flex-1 flex-col items-center justify-center gap-5 py-10">
          {links.map(l => <a key={l.href} href={l.href} onClick={followLink} className="font-display text-2xl min-h-11 px-6 flex items-center hover:text-gold">{l.label}</a>)}
          <a href="/#quote" onClick={followLink} className="mt-5 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink">Get a Quote</a>
        </nav>
      </motion.div>}
    </AnimatePresence>, document.body)}
  </>;
}
