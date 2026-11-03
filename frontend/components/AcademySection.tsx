"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { COURSES } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function AcademySection() {
  return (
    <section id="academy" data-testid="academy-section" className="py-24 sm:py-32 bg-cream text-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Cinematography Academy"
          title="Learn. Create. Inspire."
          marathi="तुमच्या कलेला द्या एक नवी दिशा!"
          dark
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COURSES.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: (i % 3) * 0.1 }}
              data-testid={`course-card-${i + 1}`}
              className="group rounded-2xl overflow-hidden bg-white border border-charcoal/10 shadow-[0_8px_30px_rgba(36,32,32,0.08)] hover:shadow-[0_16px_44px_rgba(100,30,50,0.18)] hover:-translate-y-1.5 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-108 transition-transform duration-[1.2s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-serif text-xl text-charcoal group-hover:text-maroon transition-colors">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-charcoal/65">
                  {c.description}
                </p>
                <a
                  href="#contact"
                  data-testid={`course-learn-more-${i + 1}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:text-kesari transition-colors"
                >
                  Learn More <ArrowRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-16 relative overflow-hidden rounded-3xl bg-maroon px-8 py-12 sm:px-14 sm:py-16 text-center grain">
            <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-kesari/20 blur-3xl" />
            <GraduationCap size={40} className="mx-auto text-gold" strokeWidth={1.5} />
            <h3 className="mt-5 font-serif text-2xl sm:text-3xl lg:text-4xl text-cream">
              Turn Your Passion Into Your Profession.
            </h3>
            <p className="mt-4 max-w-xl mx-auto text-sm sm:text-base text-cream/70">
              Practical, hands-on training inside a working studio — learn on real
              shoots, real equipment, and real projects.
            </p>
            <a
              href="#contact"
              data-testid="academy-enroll-button"
              className="mt-8 inline-flex rounded-full bg-gold px-10 py-3.5 text-sm font-semibold text-charcoal hover:bg-gold-light transition-colors duration-300"
            >
              Enquire About Classes
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
