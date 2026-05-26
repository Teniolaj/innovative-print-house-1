import { motion } from "framer-motion";
import { WhatsAppIcon } from "./Contact";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/233243420953?text=Hi%20Innovative%20Print%20House!"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <WhatsAppIcon className="h-6 w-6 relative" />
    </motion.a>
  );
}
