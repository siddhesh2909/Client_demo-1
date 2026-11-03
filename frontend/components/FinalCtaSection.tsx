"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageCircle, CalendarHeart } from "lucide-react";
import { IMAGES, CONTACT } from "@/lib/content";
import { Reveal } from "./Reveal";

export function FinalCtaSection() {
  return (
    <section className="relative py-28 sm:py-40 overflow-hidden grain">
      <div className="absolute inset-0">
        <Image
          src={IMAGES.ctaBackground}
          alt="Cinematic wedding backdrop"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-deep/75" />
        <div className="absolute inset-0 bg-maroon/25 mix-blend-multiply" />
      </div>
      <div className="relative max-w-4xl mx-auto px-5 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-cream"
        >
          Let&apos;s Create Something <span className="gold-text">Beautiful</span> Together.
        </motion.h2>
        <Reveal delay={0.2}>
          <p className="mt-6 text-base md:text-lg text-cream/75 max-w-2xl mx-auto leading-relaxed">
            Whether it&apos;s your wedding, a creative photoshoot, a cinematic reel,
            or your photography learning journey — we are ready to bring your vision to life.
          </p>
        </Reveal>
        <Reveal delay={0.35} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            data-testid="final-cta-book"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-10 py-4 text-sm font-semibold text-charcoal hover:bg-gold-light transition-colors duration-300"
          >
            <CalendarHeart size={18} />
            Book Your Experience
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
              "Namaskar! I would like to enquire about a shoot with SVS Films And Photography."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="final-cta-whatsapp"
            className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-10 py-4 text-sm font-semibold text-cream hover:border-gold hover:text-gold transition-colors duration-300"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
