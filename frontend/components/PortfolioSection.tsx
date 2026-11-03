"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

export function PortfolioSection() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length)),
    [filtered.length]
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, close, prev, next]);

  return (
    <section id="portfolio" data-testid="portfolio-section" className="py-24 sm:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Stories We've Captured."
          marathi="आमच्या कॅमेऱ्यातील आठवणी"
        />

        <div className="mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
          {PORTFOLIO_CATEGORIES.map((cat) => {
            const id = cat.toLowerCase().replace(/[^a-z]+/g, "-");
            const active = filter === cat;
            return (
              <button
                key={cat}
                data-testid={`filter-tab-${id}`}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 border ${
                  active
                    ? "bg-gold text-charcoal border-gold"
                    : "border-gold/25 text-cream/70 hover:text-gold hover:border-gold/60"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <motion.div layout data-testid="portfolio-grid" className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.button
                layout
                key={item.src + item.title}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightbox(i)}
                data-testid={`portfolio-item-${i}`}
                className={`group relative mb-4 block w-full overflow-hidden rounded-lg border border-gold/15 ${item.ratio} break-inside-avoid`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-maroon-deep/0 group-hover:bg-maroon-deep/45 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-left text-sm font-medium text-cream">{item.title}</p>
                  <p className="text-left text-[11px] uppercase tracking-[0.2em] text-gold mt-1">
                    {item.category}
                  </p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
        <p className="mt-8 text-center text-xs text-cream/40 tracking-wide">
          Demo gallery — replace with the studio&apos;s real portfolio images.
        </p>
      </div>

      <AnimatePresence>
        {lightbox !== null && filtered[lightbox] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            data-testid="lightbox-modal"
            className="fixed inset-0 z-[70] bg-charcoal-deep/95 backdrop-blur-md flex items-center justify-center"
            onClick={close}
          >
            <button
              data-testid="lightbox-close-button"
              onClick={close}
              className="absolute top-5 right-5 z-10 rounded-full border border-gold/40 p-2.5 text-cream hover:bg-gold hover:text-charcoal transition-colors"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <button
              data-testid="lightbox-prev-button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-8 z-10 rounded-full border border-gold/40 p-2.5 text-cream hover:bg-gold hover:text-charcoal transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              data-testid="lightbox-next-button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-8 z-10 rounded-full border border-gold/40 p-2.5 text-cream hover:bg-gold hover:text-charcoal transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
            <motion.div
              key={filtered[lightbox].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative max-h-[85vh] max-w-[88vw] w-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightbox].src}
                alt={filtered[lightbox].title}
                width={1200}
                height={1500}
                className="max-h-[85vh] w-auto object-contain rounded-lg border border-gold/25"
              />
              <p className="mt-4 text-center font-serif text-lg text-cream">
                {filtered[lightbox].title}
                <span className="ml-3 text-xs uppercase tracking-[0.25em] text-gold">
                  {filtered[lightbox].category}
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
