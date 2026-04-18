"use client";
import { Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";

const footerLinks = {
  Collections: ["Hair Extensions", "Eyelashes", "Contact Lenses", "New Arrivals", "Bestsellers"],
  Company: ["Our Story", "Why Lumière", "Sustainability", "Press", "Careers"],
  Support: ["FAQ", "Shipping & Returns", "Care Guide", "Book Consultation", "Contact Us"],
};

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative"
      style={{ background: "linear-gradient(180deg, #1A1A1A 0%, #0D0B09 100%)" }}
    >
      {/* Top border */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, #E8D48A, #C9A84C, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <button onClick={scrollTop} className="block mb-4">
              <span className="font-accent text-5xl" style={{ color: "#C9A84C" }}>
                Lumière
              </span>
              <p className="font-body text-[9px] tracking-[0.4em] uppercase text-white/30 ml-0.5 mt-1">
                Beauty Studio
              </p>
            </button>
            <p
              className="font-body text-sm font-light leading-relaxed mb-6 max-w-xs"
              style={{ color: "rgba(232,213,196,0.5)" }}
            >
              Elevating natural beauty with premium hair extensions, handcrafted
              lashes, and designer contact lenses since 2014.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Facebook, href: "#", label: "Facebook" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-gold/50 hover:text-gold text-white/30 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold mb-5">
                {category}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/35 hover:text-white/70 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-[11px] text-white/25">
            © {new Date().getFullYear()} Lumière Beauty Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-[11px] text-white/25 hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-body text-[11px] text-white/25 hover:text-white/50 transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollTop}
              className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-gold/50 hover:text-gold text-white/30 transition-all duration-300 ml-4"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
