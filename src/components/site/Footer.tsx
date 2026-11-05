import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="relative bg-ink border-t border-white/10 py-14">
      <div className="mx-auto max-w-7xl px-5 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10 rounded-full ring-1 ring-gold/40" />
            <div>
              <div className="font-semibold">Innovative <span className="text-gold">Print House</span></div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-white/45">Print · Branding · Publication</div>
            </div>
          </div>
          <p className="mt-4 text-white/55 max-w-xs">Premium custom printing studio based in Accra, Ghana. Crafting brands since day one.</p>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/45 mb-4">Explore</div>
          <ul className="space-y-2 text-white/75">
            <li><a href="/#services" className="hover:text-gold">Services</a></li>
            <li><a href="/works" className="hover:text-gold">Selected Work</a></li>
            <li><a href="/#quote" className="hover:text-gold">Get a Quote</a></li>
            <li><a href="/#contact" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/45 mb-4">Contact</div>
          <ul className="space-y-2 text-white/75">
            <li><a href="tel:+233322495092" className="hover:text-gold">+233 322 495 092</a></li>
            <li><a href="https://wa.me/233243420953" target="_blank" rel="noreferrer" className="hover:text-gold">WhatsApp</a></li>
            <li><a href="https://instagram.com/innovativeprintgh" target="_blank" rel="noreferrer" className="hover:text-gold">@innovativeprintgh</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-white/45 mb-4">Hours</div>
          <ul className="space-y-2 text-white/75">
            <li>Mon – Sat · 8:00 am – 5:00 pm</li>
            <li className="text-white/45">Sunday · Closed</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 mx-auto max-w-7xl px-5 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40 border-t border-white/10 pt-6">
        <div>© {new Date().getFullYear()} Innovative Print House. All rights reserved.</div>
        <div>Crafted with care · Accra, Ghana</div>
      </div>
    </footer>
  );
}
