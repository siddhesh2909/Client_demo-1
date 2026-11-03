"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";

const ANCHORS: Record<string, string> = {
  photography: "#portfolio",
  wada: "#wada",
  academy: "#academy",
  reels: "#reels",
};

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-charcoal-deep">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="Four Crafts. One Creative House."
          marathi="प्रत्येक सेवा, एका कलेचं नाव"
        />
        <div className="mt-16 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`service-card-${i + 1}-${s.id}`}
              className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-charcoal min-h-[420px] flex flex-col justify-end"
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1.2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/60 to-transparent" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-maroon/25" />

              <div className="relative z-10 p-7 sm:p-9">
                <span className="text-gold font-serif text-lg">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-serif text-xl sm:text-2xl text-cream">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base leading-relaxed text-cream/70 max-w-md">
                  {s.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="text-[11px] tracking-wide text-gold/80 border border-gold/25 rounded-full px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={ANCHORS[s.id]}
                  data-testid={`service-explore-${s.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-gold-light transition-colors"
                >
                  Explore More
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
