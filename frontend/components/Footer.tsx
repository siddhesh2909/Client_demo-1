"use client";

import { Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";
import { BRAND, CONTACT, SERVICES } from "@/lib/content";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Wada Studio", href: "#wada" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const ACADEMY_LINKS = [
  "Professional Cinematography",
  "Mobile Photography",
  "Mobile Videography",
  "Photography Fundamentals",
  "Video Editing",
  "Reel Creation",
];

export function Footer() {
  return (
    <footer data-testid="footer-section" className="bg-[#120e0f] border-t border-gold/15">
      <div className="paithani-border opacity-60" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#home" data-testid="footer-logo" className="flex items-center gap-3">
            <svg width="44" height="44" viewBox="0 0 64 64" aria-hidden="true">
              <rect x="2" y="2" width="60" height="60" rx="8" fill="none" stroke="#C6A15B" strokeWidth="2.5" />
              <text x="32" y="38" fontFamily="Georgia, serif" fontSize="20" fill="#C6A15B" textAnchor="middle" fontWeight="bold">
                SVS
              </text>
              <circle cx="32" cy="48" r="2" fill="#D98235" />
            </svg>
            <span className="font-serif text-cream">{BRAND.name}</span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-cream/55">
            Where Maharashtrian heritage meets modern creativity — photography,
            films, a traditional wada studio, academy training and content production.
          </p>
          <p className="mt-4 font-marathi text-gold/80 text-sm">{BRAND.taglineMarathi}</p>
          <div className="mt-6 flex gap-3">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" data-testid="footer-instagram-link" aria-label="Instagram"
              className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-cream/70 hover:text-charcoal hover:bg-gold hover:border-gold transition-colors">
              <Instagram size={17} />
            </a>
            <a href={CONTACT.youtube} target="_blank" rel="noopener noreferrer" data-testid="footer-youtube-link" aria-label="YouTube"
              className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-cream/70 hover:text-charcoal hover:bg-gold hover:border-gold transition-colors">
              <Youtube size={17} />
            </a>
            <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" data-testid="footer-facebook-link" aria-label="Facebook"
              className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-cream/70 hover:text-charcoal hover:bg-gold hover:border-gold transition-colors">
              <Facebook size={17} />
            </a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" data-testid="footer-whatsapp-link" aria-label="WhatsApp"
              className="h-10 w-10 rounded-full border border-gold/30 flex items-center justify-center text-cream/70 hover:text-charcoal hover:bg-gold hover:border-gold transition-colors">
              <MessageCircle size={17} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Quick Links</h4>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href} data-testid={`footer-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-sm text-cream/60 hover:text-gold transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Our Services</h4>
          <ul className="mt-5 space-y-3">
            {SERVICES.map((s) => (
              <li key={s.id} className="text-sm text-cream/60">
                {s.title}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Academy</h4>
          <ul className="mt-5 space-y-3">
            {ACADEMY_LINKS.map((a) => (
              <li key={a}>
                <a href="#academy" className="text-sm text-cream/60 hover:text-gold transition-colors">
                  {a}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved. · Demo website proposal.
          </p>
          <p className="font-marathi text-xs text-gold/60">{BRAND.taglineMarathi}</p>
        </div>
      </div>
    </footer>
  );
}
