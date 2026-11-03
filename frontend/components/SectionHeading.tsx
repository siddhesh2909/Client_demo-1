"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  marathi,
  align = "center",
  dark = false,
}: {
  eyebrow: string;
  title: string;
  marathi?: string;
  align?: "center" | "left";
  dark?: boolean;
}) {
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <motion.span
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-gold"
      >
        {eyebrow}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl leading-tight ${
          dark ? "text-charcoal" : "text-cream"
        }`}
      >
        {title}
      </motion.h2>
      {marathi && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className={`font-marathi text-base md:text-lg ${
            dark ? "text-maroon" : "text-gold/90"
          }`}
        >
          {marathi}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent"
      />
    </div>
  );
}
