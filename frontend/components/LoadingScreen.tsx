"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          data-testid="loading-screen"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-charcoal-deep flex flex-col items-center justify-center"
        >
          <motion.svg
            width="72"
            height="72"
            viewBox="0 0 64 64"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <rect x="2" y="2" width="60" height="60" rx="8" fill="none" stroke="#C6A15B" strokeWidth="2" />
            <text x="32" y="38" fontFamily="Georgia, serif" fontSize="20" fill="#C6A15B" textAnchor="middle" fontWeight="bold">
              SVS
            </text>
            <circle cx="32" cy="48" r="2" fill="#D98235" />
          </motion.svg>
          <div className="mt-6 overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-xl sm:text-2xl text-cream tracking-wide"
            >
              SVS Films And Photography
            </motion.p>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-3 font-marathi text-sm text-gold/80"
          >
            कलेचा वारसा, आठवणींचा ठेवा!
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.6, delay: 0.4, ease: "easeInOut" }}
            className="mt-8 h-px w-48 origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
