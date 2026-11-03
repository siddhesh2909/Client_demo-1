"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { CONTACT } from "@/lib/content";

export function WhatsAppButton() {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 4.5, duration: 0.6, type: "spring" }}
      href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
        "Namaskar! I would like to enquire about a shoot with SVS Films And Photography."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      data-testid="whatsapp-floating-button"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_28px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 animate-pulse-soft"
    >
      <MessageCircle size={26} fill="currentColor" />
    </motion.a>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          data-testid="back-to-top-button"
          aria-label="Back to top"
          className="fixed bottom-6 left-6 z-50 h-12 w-12 rounded-full border border-gold/50 bg-charcoal/80 backdrop-blur-md text-gold flex items-center justify-center hover:bg-gold hover:text-charcoal transition-colors duration-300"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
