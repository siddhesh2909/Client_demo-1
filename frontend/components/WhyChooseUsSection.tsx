"use client";

import { Sparkles, Landmark, Aperture, Layers } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const PILLARS = [
  {
    icon: Sparkles,
    title: "Creative Excellence",
    text: "Cinematic framing, warm color grading and editorial storytelling in every deliverable.",
    testid: "feature-pill-excellence",
  },
  {
    icon: Landmark,
    title: "Authentic Maharashtrian Heritage",
    text: "A real traditional wada, cultural styling and deep respect for Maharashtrian rituals.",
    testid: "feature-pill-wada",
  },
  {
    icon: Aperture,
    title: "Professional Equipment",
    text: "Cinema-grade cameras, lenses, gimbals and studio lighting for every shoot.",
    testid: "feature-pill-cinema-gear",
  },
  {
    icon: Layers,
    title: "Complete Creative Solutions",
    text: "Photography, films, studio space, training and content production — all under one roof.",
    testid: "feature-pill-solutions",
  },
];

export function WhyChooseUsSection() {
  return (
    <section data-testid="why-choose-us-section" className="py-24 sm:py-32 bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-maroon/20 blur-3xl rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Why SVS" title="Craft, Culture & Complete Care." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div
                data-testid={p.testid}
                className="group h-full rounded-2xl border border-gold/20 p-8 text-center hover:border-gold/60 hover:bg-maroon/10 transition-colors duration-500"
              >
                <div className="mx-auto h-16 w-16 rounded-full border border-gold/40 flex items-center justify-center group-hover:bg-gold/10 group-hover:scale-105 transition-all duration-500">
                  <p.icon size={28} className="text-gold" strokeWidth={1.4} />
                </div>
                <h3 className="mt-6 font-serif text-lg sm:text-xl text-cream">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/60">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
