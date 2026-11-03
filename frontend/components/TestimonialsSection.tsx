"use client";

import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function TestimonialsSection() {
  return (
    <section data-testid="testimonials-section" className="py-24 sm:py-32 bg-maroon-deep/60">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Kind Words"
          title="Loved By Families & Creators."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <figure
                data-testid={`testimonial-card-${i + 1}`}
                className="relative h-full rounded-2xl border border-gold/25 bg-charcoal/70 p-8 backdrop-blur-sm"
              >
                <Quote size={30} className="text-gold/50" strokeWidth={1.2} />
                <div className="mt-4 flex gap-1" aria-label="5 star rating">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="text-gold" fill="#C6A15B" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm sm:text-base leading-relaxed text-cream/80">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-gold/15 pt-4">
                  <p className="font-serif text-cream">{t.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold/70">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-cream/40 tracking-wide">
          Demonstration testimonials — replace with genuine client reviews.
        </p>
      </div>
    </section>
  );
}
