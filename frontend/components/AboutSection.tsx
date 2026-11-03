"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function AboutSection() {
  return (
    <section id="about" data-testid="intro-section" className="relative py-24 sm:py-32 bg-charcoal overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-kesari/10 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="relative">
          <div className="relative arch-top overflow-hidden border border-gold/25 aspect-[4/5] max-w-md mx-auto lg:mx-0">
            <Image
              src={IMAGES.intro}
              alt="SVS photographer at work in the studio"
              fill
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="object-cover hover:scale-105 transition-transform duration-[1.4s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="hidden lg:block absolute -bottom-8 -right-4 w-48 aspect-square overflow-hidden border-4 border-charcoal shadow-2xl"
          >
            <Image
              src={IMAGES.introSecondary}
              alt="Film production crew at work"
              fill
              sizes="200px"
              className="object-cover"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="absolute -left-2 top-6 -rotate-90 origin-left font-marathi text-gold/60 text-sm tracking-widest hidden lg:block"
          >
            आठवणींचा ठेवा
          </motion.span>
        </Reveal>

        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About The Studio"
            title="More Than Photography. An Experience."
            align="left"
          />
          <Reveal delay={0.15}>
            <p className="text-base md:text-lg leading-relaxed text-cream/75">
              SVS Films And Photography is a complete creative house — professional
              photography, cinematic wedding films, an authentic traditional
              Maharashtrian wada built inside our studio, hands-on academy training,
              and high-impact reel production for brands and creators.
            </p>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-cream/75">
              Every project is treated like a story waiting to be told — with warm,
              cinematic craft and deep respect for the traditions we grew up with.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="flex flex-wrap gap-4 pt-2">
            {["Photography & Films", "Wada Studio", "Academy", "Reels Production"].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-gold/30 px-5 py-2 text-xs sm:text-sm text-gold tracking-wide"
                >
                  {chip}
                </span>
              )
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
