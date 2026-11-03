"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Clapperboard } from "lucide-react";
import { REELS } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function ReelProductionSection() {
  return (
    <section id="reels" data-testid="reels-section" className="py-24 sm:py-32 bg-charcoal-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Reels & Content Production"
          title="Create Content That Gets Noticed."
          marathi="रील्स जे लक्षात राहतील"
        />
        <Reveal delay={0.15} className="mt-6 text-center">
          <p className="text-sm sm:text-base text-cream/60 max-w-2xl mx-auto">
            Vertical-first storytelling for Instagram — brand promos, product shoots,
            fashion films and creator content, shot and edited in-house.
          </p>
        </Reveal>
      </div>

      <div className="mt-14 no-scrollbar overflow-x-auto">
        <div className="flex gap-5 px-5 sm:px-8 w-max mx-auto lg:mx-0">
          {REELS.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
              data-testid={`reel-card-${i + 1}`}
              className="group relative w-[200px] sm:w-[230px] shrink-0 aspect-[9/16] overflow-hidden rounded-2xl border border-gold/20 bg-charcoal"
            >
              <Image
                src={r.image}
                alt={r.title}
                fill
                sizes="230px"
                loading="lazy"
                className="object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.2s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-transparent to-charcoal-deep/30" />
              <button
                data-testid={`reel-play-button-${i + 1}`}
                aria-label={`Play ${r.title}`}
                className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-cream/15 backdrop-blur-md border border-cream/40 flex items-center justify-center text-cream group-hover:bg-gold group-hover:text-charcoal group-hover:border-gold group-hover:scale-110 transition-all duration-400"
              >
                <Play size={22} fill="currentColor" className="ml-0.5" />
              </button>
              <div className="absolute bottom-0 inset-x-0 p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-gold">{r.tag}</p>
                <p className="mt-1 font-serif text-base text-cream">{r.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Reveal delay={0.2} className="mt-14 text-center px-5">
        <a
          href="#contact"
          data-testid="reels-cta-create"
          className="inline-flex items-center gap-2 rounded-full border border-gold px-10 py-4 text-sm font-semibold text-gold hover:bg-gold hover:text-charcoal transition-colors duration-300"
        >
          <Clapperboard size={18} />
          Create Your Next Reel With Us
        </a>
      </Reveal>
    </section>
  );
}
