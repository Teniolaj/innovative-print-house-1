import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";
import { ArrowRight, MessageCircle } from "lucide-react";

const WHATSAPP = "233243420953";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  service: z.string().min(1, "Pick a service"),
  quantity: z.string().trim().max(40).optional().or(z.literal("")),
  details: z.string().trim().min(10, "Tell us a little more (min 10 chars)").max(800),
});

const serviceOptions = [
  "Corporate Branding",
  "Graphic Design",
  "Cooperate Diary",
  "Digital Printing",
  "T-Shirt Printing",
  "Souvenirs / Gift Items",
];

export function QuoteForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", quantity: "", details: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onChange = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
  };

  const buildMessage = (d: typeof form) =>
    `Hello Innovative Print House! I'd like a quote.%0A%0A` +
    `*Name:* ${encodeURIComponent(d.name)}%0A` +
    `*Email:* ${encodeURIComponent(d.email)}%0A` +
    `*Phone:* ${encodeURIComponent(d.phone)}%0A` +
    `*Service:* ${encodeURIComponent(d.service)}%0A` +
    (d.quantity ? `*Quantity:* ${encodeURIComponent(d.quantity)}%0A` : "") +
    `*Details:* ${encodeURIComponent(d.details)}`;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setSubmitting(true);
    const url = `https://wa.me/${WHATSAPP}?text=${buildMessage(result.data)}`;
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      toast.success("Opening WhatsApp — we'll respond within an hour during work hours.");
      setSubmitting(false);
    }, 350);
  };

  return (
    <section id="quote" className="relative py-28 lg:py-40 bg-ink-soft overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-magenta/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-10 grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[11px] uppercase tracking-[0.35em] text-gold/90 flex items-center gap-3">
            <span className="h-px w-10 bg-gold/70" /> Custom Quote
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
            Tell us about <br />
            <span className="italic gold-shimmer">your project.</span>
          </h2>
          <p className="mt-6 max-w-md text-white/65">
            Drop the details and we'll send a tailored quote to your WhatsApp within the hour
            (Mon–Sat, 8am–5pm). No back-and-forth, no fluff.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { k: "01", t: "Free consultation", d: "We help you choose paper, finish, and quantity." },
              { k: "02", t: "Real samples", d: "Walk in and feel the paper before you commit." },
              { k: "03", t: "On-time delivery", d: "Or your next order is on us. Seriously." },
            ].map((it) => (
              <div key={it.k} className="flex gap-4">
                <span className="font-display text-gold text-sm tabular-nums pt-1">{it.k}</span>
                <div>
                  <div className="font-semibold">{it.t}</div>
                  <div className="text-sm text-white/60">{it.d}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl border border-gold/25 bg-gradient-to-br from-white/[0.04] to-transparent p-7 sm:p-10 backdrop-blur"
        >
          <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          <h3 className="font-display text-2xl mb-6">Request a quote</h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Full Name" error={errors.name}>
              <input className={inp(errors.name)} value={form.name} onChange={onChange("name")} placeholder="Ama Mensah" />
            </Field>
            <Field label="Email" error={errors.email}>
              <input type="email" className={inp(errors.email)} value={form.email} onChange={onChange("email")} placeholder="ama@brand.com" />
            </Field>
            <Field label="Phone" error={errors.phone}>
              <input className={inp(errors.phone)} value={form.phone} onChange={onChange("phone")} placeholder="+233 24 ..." />
            </Field>
            <Field label="Service" error={errors.service}>
              <select className={inp(errors.service)} value={form.service} onChange={onChange("service")}>
                <option value="">Select a service</option>
                {serviceOptions.map((s) => <option key={s} value={s} className="bg-ink">{s}</option>)}
              </select>
            </Field>
            <Field label="Quantity (optional)" className="sm:col-span-2" error={errors.quantity}>
              <input className={inp(errors.quantity)} value={form.quantity} onChange={onChange("quantity")} placeholder="e.g. 500 business cards" />
            </Field>
            <Field label="Project details" className="sm:col-span-2" error={errors.details}>
              <textarea rows={4} className={inp(errors.details)} value={form.details} onChange={onChange("details")} placeholder="Tell us sizes, finish, deadlines, anything we should know." />
            </Field>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-xs text-white/50 flex items-center gap-2">
              <MessageCircle className="h-3.5 w-3.5 text-gold" /> Sends directly to our WhatsApp.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-gold pl-6 pr-2 py-2 text-sm font-semibold text-ink hover:bg-gold-soft transition-all disabled:opacity-60"
            >
              {submitting ? "Opening WhatsApp…" : "Send Request"}
              <span className="grid place-items-center h-9 w-9 rounded-full bg-ink text-gold transition-transform group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, error, className, children }: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="block text-[10px] uppercase tracking-[0.3em] text-white/55 mb-2">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function inp(err?: string) {
  return `w-full rounded-xl bg-white/5 border ${err ? "border-red-400/60" : "border-white/10"} px-4 py-3 text-sm text-white placeholder-white/35 outline-none focus:border-gold focus:bg-white/[0.07] transition-colors`;
}
