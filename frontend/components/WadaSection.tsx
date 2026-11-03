"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Landmark, Lamp, Flower2, Clapperboard } from "lucide-react";
import { WADA_IMAGES } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const FEATURES = [
  {
    icon: Landmark,
    title: "Carved Wooden Pillars",
    text: "Authentic teak pillars and scalloped arches, recreated in traditional wada style.",
    testid: "wada-feature-pillar",
  },
  {
    icon: Lamp,
    title: "Courtyard & Brass Lamps",
    text: "An open राजांगण courtyard with warm brass lamp lighting for golden frames.",
    testid: "wada-feature-courtyard",
  },
  {
    icon: Flower2,
    title: "Traditional Props",
    text: "Pheta, Paithani, nath, tulshi vrindavan and heritage décor for cultural styling.",
    testid: "wada-feature-props",
  },
  {
    icon: Clapperboard,
    title: "Film-Ready Sets",
    text: "Perfect for music videos, reels, pre-weddings and cinematic productions.",
    testid: "wada-feature-films",
  },
];

export function WadaSection() {
  return (
    <section
      id="wada"
      data-testid="wada-usp-section"
      className="relative py-24 sm:py-32 bg-maroon-deep overflow-hidden grain"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-maroon/60 via-maroon-deep to-charcoal" />
      <div className="absolute -left-32 top-1/3 w-[28rem] h-[28rem] rounded-full bg-kesari/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Signature Experience"
          title="Experience the Royal Charm of a Maharashtrian Wada."
          marathi="मराठमोळ्या वाड्याची शान, प्रत्येक फ्रेममध्ये!"
        />

        <Reveal delay={0.2} className="mt-8 max-w-3xl mx-auto text-center">
          <p className="text-base md:text-lg leading-relaxed text-cream/75">
            Step into the timeless beauty of traditional Maharashtrian architecture.
            Our authentic wada studio provides a unique backdrop for traditional
            photography, pre-wedding sessions, cultural portraits, reels, and
            cinematic productions.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {WADA_IMAGES.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group relative overflow-hidden border border-gold/25 ${
                i % 2 === 0 ? "arch-top" : "rounded-xl"
              } ${i === 1 || i === 2 ? "lg:mt-10" : ""} aspect-[3/4]`}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-[1.4s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 right-4 text-xs sm:text-sm font-medium text-cream/90 tracking-wide">
                {img.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <div
                data-testid={f.testid}
                className="h-full rounded-xl border border-gold/20 bg-charcoal/50 backdrop-blur-sm p-6 hover:border-gold/50 hover:bg-charcoal/70 transition-colors duration-500"
              >
                <f.icon size={26} className="text-gold" strokeWidth={1.5} />
                <h4 className="mt-4 font-serif text-lg text-cream">{f.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <a
            href="#contact"
            data-testid="wada-cta-book-wada"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-sm font-semibold text-charcoal hover:bg-gold-light transition-colors duration-300"
          >
            Explore Our Wada Studio
          </a>
        </Reveal>
      </div>
    </section>
  );
}
