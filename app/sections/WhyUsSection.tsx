"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Leaf, Sparkles, Heart, Award, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const USPs = [
  {
    Icon: Award,
    title: "Premium Quality",
    desc: "Every product passes a 14-point quality check before reaching you. We source only the finest raw materials globally.",
  },
  {
    Icon: Leaf,
    title: "Cruelty-Free",
    desc: "100% vegan and cruelty-free across our lash and lens range. Beauty without compromise — ever.",
  },
  {
    Icon: Heart,
    title: "Skin & Eye Safe",
    desc: "All products are dermatologically tested. Our lenses are FDA & CE certified for your absolute safety.",
  },
  {
    Icon: Sparkles,
    title: "Luxury Packaging",
    desc: "Each order arrives in signature Lumière packaging — perfect for gifting or a personal indulgence.",
  },
  {
    Icon: Shield,
    title: "Satisfaction Guarantee",
    desc: "Love it or return it. Our 30-day guarantee means you can shop with complete confidence.",
  },
  {
    Icon: Clock,
    title: "Express Delivery",
    desc: "Same-day dispatch on orders before 2pm. Tracked nationwide delivery straight to your door.",
  },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".why-heading", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".usp-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: ".usp-grid", start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2D1B0E 60%, #3D2214 100%)" }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 rounded-full translate-x-1/2 -translate-y-1/2"
        style={{ border: "1px solid #C9A84C" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 opacity-5 rounded-full -translate-x-1/2 translate-y-1/2"
        style={{ border: "1px solid #E8D48A" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="why-heading text-center mb-16 opacity-0">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
            Why Lumière
          </p>
          <h2
            className="font-display text-5xl md:text-6xl mb-4 text-warm-white"
          >
            The Lumière{" "}
            <em
              className="italic"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #E8D48A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Promise
            </em>
          </h2>
          <span className="deco-line block mt-6" />
        </div>

        {/* Grid */}
        <div className="usp-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {USPs.map(({ Icon, title, desc }, idx) => (
            <div
              key={idx}
              className="usp-card group p-8 border border-white/8 hover:border-gold/30 transition-all duration-500 opacity-0"
              style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, {
                  y: -4,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, {
                  y: 0,
                  duration: 0.3,
                  ease: "power2.out",
                });
              }}
            >
              <div
                className="w-12 h-12 flex items-center justify-center mb-6"
                style={{ background: "linear-gradient(135deg, #C9A84C22, #E8D48A22)" }}
              >
                <Icon
                  size={22}
                  style={{ color: "#C9A84C" }}
                />
              </div>
              <h3
                className="font-display text-xl font-medium mb-3"
                style={{ color: "#FAF7F2" }}
              >
                {title}
              </h3>
              <p
                className="font-body text-sm font-light leading-relaxed"
                style={{ color: "rgba(232,213,196,0.65)" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
