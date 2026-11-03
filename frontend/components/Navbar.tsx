"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Camera } from "lucide-react";
import { BRAND } from "@/lib/content";

const LINKS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Wada Studio", href: "#wada", id: "wada" },
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "Academy", href: "#academy", id: "academy" },
  { label: "Contact", href: "#contact", id: "contact" },
];

function LogoMark() {
  return (
    <svg width="40" height="40" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="2" y="2" width="60" height="60" rx="8" fill="none" stroke="#C6A15B" strokeWidth="2.5" />
      <text x="32" y="38" fontFamily="Georgia, serif" fontSize="20" fill="#C6A15B" textAnchor="middle" fontWeight="bold">
        SVS
      </text>
      <circle cx="32" cy="48" r="2" fill="#D98235" />
    </svg>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 2.6, ease: [0.22, 1, 0.36, 1] }}
        data-testid="nav-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-charcoal/85 backdrop-blur-xl border-b border-gold/20 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 h-20">
          <a href="#home" data-testid="brand-logo" className="flex items-center gap-3 group">
            <LogoMark />
            <span className="flex flex-col leading-tight">
              <span className="font-serif text-sm sm:text-base tracking-wide text-cream group-hover:text-gold transition-colors">
                {BRAND.name}
              </span>
              <span className="font-marathi text-[10px] text-gold/80 tracking-widest">
                कलेचा वारसा
              </span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={l.href}
                data-testid={`nav-link-${l.id}`}
                className="link-underline text-sm font-medium tracking-wide text-cream/80 hover:text-cream transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              data-testid="cta-book-shoot-header"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-2.5 text-sm font-semibold text-charcoal hover:bg-gold-light transition-colors duration-300"
            >
              <Camera size={16} />
              Book a Shoot
            </a>
          </div>

          <button
            data-testid="mobile-menu-button"
            onClick={() => setOpen(true)}
            className="lg:hidden text-cream p-2"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            data-testid="mobile-menu"
            className="fixed inset-0 z-[60] bg-charcoal-deep/95 backdrop-blur-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-5 h-20">
              <span className="font-serif text-cream">{BRAND.shortName}</span>
              <button
                data-testid="mobile-menu-close"
                onClick={() => setOpen(false)}
                className="text-cream p-2"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-2">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="font-serif text-3xl sm:text-4xl py-2 text-cream/90 hover:text-gold transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 font-semibold text-charcoal"
              >
                <Camera size={18} />
                Book a Shoot
              </motion.a>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="mt-10 font-marathi text-gold/70 text-sm"
              >
                {BRAND.taglineMarathi}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
