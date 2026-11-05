import { motion } from "framer-motion";

const items = [
  { image: "government-publication", tag: "Publication", title: "Government Beyond the Center", alt: "Printed Government Beyond the Center textbooks" },
  { image: "pw-mining-diaries", tag: "Corporate diaries", title: "PW Mining branded diaries", alt: "Red and blue PW Mining diaries with gold branding" },
  { image: "exercise-books", tag: "Education", title: "Custom school exercise books", alt: "Stacks of custom printed school exercise books" },
  { image: "medical-association-diaries", tag: "Corporate diaries", title: "Ghana Medical Association diaries", alt: "Embossed red and blue Ghana Medical Association diaries" },
  { image: "bakery-banner", tag: "Large format", title: "Vee Choice Bakery roll-up banner", alt: "Full-length Vee Choice Bakery promotional roll-up banner" },
  { image: "conference-programme", tag: "Publication", title: "33rd National Conference programme", alt: "Printed programmes for the Evangelical Presbyterian Church national conference" },
  { image: "conference-programme-detail", tag: "Print finishing", title: "Conference programme ? print detail", alt: "Another view of the finished national conference programmes" },
];

export function Gallery({ fullPage = false }: { fullPage?: boolean }) {
  const Heading = fullPage ? "h1" : "h2";
  return <section id="work" className={`relative bg-ink ${fullPage ? "pt-36 pb-24" : "py-24 lg:py-32"}`}>
    <div className="mx-auto max-w-7xl px-5 lg:px-10">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <div>
          <div className="text-[11px] uppercase tracking-[0.3em] text-gold flex items-center gap-3"><span className="h-px w-10 bg-gold/70" />{fullPage ? "Our portfolio" : "Selected work"}</div>
          <Heading className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl max-w-3xl">{fullPage ? <>Work that speaks <span className="italic gold-shimmer">for itself.</span></> : <>A small look at what <br className="hidden sm:block" /><span className="italic gold-shimmer">left the press.</span></>}</Heading>
        </div>
        <div className="max-w-sm text-sm sm:text-base text-white/65"><p>From custom diaries and school books to publications and banners. A closer look at our print work.</p>
          {!fullPage && <a href="/works" className="mt-5 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-gold">View all works <span aria-hidden="true">?</span></a>}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
        {(fullPage ? items : items.slice(0, 6)).map((it, i) => <motion.figure key={it.image} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i % 3 * 0.05 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-ink-soft">
          <div className="aspect-square overflow-hidden bg-white/5"><img src={`/works/${it.image}.jpg`} alt={it.alt} loading={fullPage && i < 3 ? "eager" : "lazy"} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /></div>
          <figcaption className="p-5"><div className="text-[11px] uppercase tracking-[0.15em] text-gold">{it.tag}</div><h3 className="mt-2 text-lg sm:text-xl leading-snug">{it.title}</h3></figcaption>
        </motion.figure>)}
      </div>
      {fullPage ? <div className="mt-14 rounded-2xl border border-gold/25 p-6 sm:p-9 flex flex-col sm:flex-row sm:items-center justify-between gap-5"><p className="font-display text-xl sm:text-2xl">Have something in mind? Let's print it.</p><a href="/#quote" className="inline-flex justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink">Request a Quote</a></div> :
      <div className="mt-16 overflow-hidden border-y border-white/10 py-6" aria-hidden="true"><div className="marquee flex gap-12 whitespace-nowrap text-2xl sm:text-3xl font-display">{[0, 1].map(k => <div key={k} className="flex items-center gap-12">{["Print", "?", "Branding", "?", "Publication", "?", "Apparel", "?", "Merch", "?", "Diaries", "?"].map((w, i) => <span key={i} className={i % 2 === 0 ? "text-white" : "text-stroke"}>{w}</span>)}</div>)}</div></div>}
    </div>
  </section>;
}
