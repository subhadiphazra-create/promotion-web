"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X, ShoppingBag } from "lucide-react";

const navLinks = [
  { label: "Collections", href: "#categories" },
  { label: "Products", href: "#products" },
  { label: "Our Story", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 2.5 }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-charcoal/95 backdrop-blur-xl shadow-2xl border-b border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start"
          >
            <span
              className="font-accent text-3xl leading-none"
              style={{ color: "#C9A84C" }}
            >
              Lumière
            </span>
            <span
              className="font-body text-[9px] tracking-[0.35em] uppercase text-nude/70 ml-0.5"
            >
              Beauty Studio
            </span>
          </button>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="font-body text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-gold transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden lg:flex items-center gap-2 px-5 py-2 text-[11px] tracking-[0.2em] uppercase font-body text-charcoal bg-gold hover:bg-gold-light transition-colors duration-300 rounded-none"
            >
              Enquire
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white/80 hover:text-gold transition-colors"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal/98 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollTo(link.href)}
                className="font-display text-3xl text-white/80 hover:text-gold transition-colors duration-300 italic"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-4 px-8 py-3 text-[11px] tracking-[0.3em] uppercase font-body text-charcoal bg-gold hover:bg-gold-light transition-colors"
            >
              Enquire Now
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
