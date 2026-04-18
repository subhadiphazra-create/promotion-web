"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { categories } from "../data/products";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".category-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>, enter: boolean) => {
    const card = e.currentTarget;
    const img = card.querySelector(".cat-img");
    const overlay = card.querySelector(".cat-overlay");
    const cta = card.querySelector(".cat-cta");

    gsap.to(img, {
      scale: enter ? 1.08 : 1,
      duration: 0.7,
      ease: "power2.out",
    });
    gsap.to(overlay, {
      opacity: enter ? 0.75 : 0.55,
      duration: 0.4,
    });
    gsap.to(cta, {
      opacity: enter ? 1 : 0,
      y: enter ? 0 : 10,
      duration: 0.4,
    });
  };

  return (
    <section id="categories" ref={sectionRef} className="py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
            Our Collections
          </p>
          <h2
            className="font-display text-5xl md:text-6xl mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Crafted for{" "}
            <em className="italic">Every Look</em>
          </h2>
          <span className="deco-line mt-6 block" />
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {categories.map((cat, i) => (
            <div
              key={cat.id}
              className="category-card relative overflow-hidden cursor-pointer opacity-0"
              style={{ height: "clamp(320px, 50vw, 520px)" }}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
              onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
            >
              {/* Image */}
              <div className="cat-img absolute inset-0 will-change-transform">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Overlay */}
              <div
                className="cat-overlay absolute inset-0 transition-opacity"
                style={{
                  opacity: 0.55,
                  background:
                    i === 0
                      ? "linear-gradient(180deg, rgba(10,8,5,0.2) 0%, rgba(45,27,14,0.95) 100%)"
                      : i === 1
                      ? "linear-gradient(180deg, rgba(10,8,5,0.2) 0%, rgba(92,61,46,0.95) 100%)"
                      : "linear-gradient(180deg, rgba(10,8,5,0.2) 0%, rgba(26,16,8,0.95) 100%)",
                }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p
                  className="font-accent text-3xl mb-1"
                  style={{ color: "#C9A84C" }}
                >
                  {cat.tagline}
                </p>
                <h3
                  className="font-display text-2xl font-medium mb-2"
                  style={{ color: "#FAF7F2" }}
                >
                  {cat.name}
                </h3>
                <p
                  className="font-body text-sm font-light leading-relaxed mb-4"
                  style={{ color: "rgba(232, 213, 196, 0.75)" }}
                >
                  {cat.description}
                </p>
                <div
                  className="cat-cta flex items-center gap-2 font-body text-[10px] tracking-[0.25em] uppercase opacity-0 translate-y-2"
                  style={{ color: "#C9A84C" }}
                >
                  Explore Collection <ArrowRight size={12} />
                </div>
              </div>

              {/* Count badge */}
              <div
                className="absolute top-6 right-6 glass-dark rounded-full px-3 py-1"
              >
                <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/60">
                  {cat.count} styles
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
