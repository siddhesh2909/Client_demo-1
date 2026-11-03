"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "@/lib/content";

function MaskedLine({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="block"
      >
        {text}
      </motion.span>
    </span>
  );
}

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      data-testid="hero-section"
      className="relative h-[100svh] min-h-[620px] overflow-hidden grain"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <Image
          src={IMAGES.hero[0]}
          alt="Cinematic Maharashtrian wedding couple"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal" />
      <div className="absolute inset-0 bg-maroon-deep/30 mix-blend-multiply" />

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5"
      >
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ duration: 1.4, delay: 2.4 }}
          className="text-[11px] sm:text-xs font-semibold uppercase text-gold mb-6"
        >
          SVS Films And Photography
        </motion.p>

        <h1
          data-testid="hero-main-title"
          className="font-serif text-4xl sm:text-5xl lg:text-7xl leading-[1.12] text-cream max-w-5xl"
        >
          <MaskedLine text="EVERY FRAME" delay={2.55} />
          <MaskedLine text="TELLS A STORY." delay={2.75} />
        </h1>

        <motion.p
          data-testid="hero-marathi-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.4 }}
          className="font-marathi text-base md:text-lg lg:text-xl text-gold mt-6"
        >
          प्रत्येक क्षण खास, प्रत्येक आठवण कायमची!
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.6 }}
          className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-cream/75"
        >
          From timeless Maharashtrian traditions to modern cinematic experiences,
          we capture emotions, create stories, and turn your special moments into memories.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.85 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#portfolio"
            data-testid="hero-cta-explore"
            className="rounded-full bg-gold px-9 py-3.5 text-sm font-semibold text-charcoal hover:bg-gold-light transition-colors duration-300"
          >
            Explore Our Work
          </a>
          <a
            href="#services"
            data-testid="hero-cta-services"
            className="rounded-full border border-cream/40 px-9 py-3.5 text-sm font-semibold text-cream hover:border-gold hover:text-gold transition-colors duration-300"
          >
            Discover Our Services
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        data-testid="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.4, duration: 1 }}
        style={{ opacity: fade }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-gold/80"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.span>
      </motion.a>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1.2 }}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-gold/15 bg-charcoal/70 backdrop-blur-md overflow-hidden"
      >
        <div className="marquee-track py-4">
          {[0, 1].map((n) => (
            <div key={n} className="flex items-center shrink-0">
              {[
                "Wedding Films",
                "Traditional Wada Studio",
                "Pre-Wedding Stories",
                "Cinematography Academy",
                "Reels & Brand Films",
                "कलेचा वारसा, आठवणींचा ठेवा",
              ].map((item) => (
                <span key={item} className="flex items-center">
                  <span className="mx-8 text-sm tracking-[0.2em] uppercase text-cream/60 font-medium whitespace-nowrap">
                    {item}
                  </span>
                  <span className="text-gold">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
