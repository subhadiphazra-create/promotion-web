"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../data/products";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".testimonials-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".testimonials-heading", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".testimonial-outer",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".testimonial-outer", start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const cards = trackRef.current?.querySelectorAll(".testimonial-card");
    if (cards) {
      gsap.to(cards, {
        opacity: 0,
        x: index > current ? -30 : 30,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          setCurrent(index);
          gsap.fromTo(
            cards,
            { opacity: 0, x: index > current ? 30 : -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power3.out",
              onComplete: () => setIsAnimating(false),
            }
          );
        },
      });
    }
  };

  const prev = () => goTo(current === 0 ? testimonials.length - 1 : current - 1);
  const next = () => goTo(current === testimonials.length - 1 ? 0 : current + 1);

  const t = testimonials[current];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-28"
      style={{ background: "#FDFAF6" }}
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="testimonials-heading text-center mb-16 opacity-0">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
            Client Love
          </p>
          <h2
            className="font-display text-5xl md:text-6xl mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Stories of{" "}
            <em className="italic" style={{ color: "#C9A84C" }}>
              Confidence
            </em>
          </h2>
          <span className="deco-line block mt-6" />
        </div>

        {/* Carousel */}
        <div className="testimonial-outer opacity-0">
          {/* Large quote mark */}
          <div
            className="text-center font-display text-[120px] leading-none opacity-10 select-none mb-4"
            style={{ color: "#C9A84C" }}
          >
            "
          </div>

          <div ref={trackRef} className="relative min-h-[280px]">
            <div className="testimonial-card text-center px-4 md:px-12">
              <p
                className="font-display text-xl md:text-2xl italic leading-relaxed mb-8"
                style={{ color: "#2D1B0E" }}
              >
                {t.text}
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#C9A84C"
                    style={{ color: "#C9A84C" }}
                  />
                ))}
              </div>

              {/* Avatar */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="relative w-14 h-14 rounded-full overflow-hidden"
                  style={{ border: "2px solid #C9A84C" }}
                >
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p
                    className="font-display text-lg font-medium"
                    style={{ color: "#1A1A1A" }}
                  >
                    {t.name}
                  </p>
                  <p className="font-body text-xs text-mocha/60">{t.role}</p>
                  <p
                    className="font-body text-[10px] tracking-[0.2em] uppercase mt-0.5"
                    style={{ color: "#C9A84C" }}
                  >
                    {t.product}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-11 h-11 flex items-center justify-center border border-nude/50 hover:border-gold hover:text-gold transition-colors duration-300 text-mocha/50"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  className="transition-all duration-300"
                  style={{
                    width: idx === current ? "24px" : "8px",
                    height: "8px",
                    background:
                      idx === current
                        ? "linear-gradient(90deg, #C9A84C, #E8D48A)"
                        : "rgba(201,168,76,0.3)",
                    borderRadius: "4px",
                  }}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 flex items-center justify-center border border-nude/50 hover:border-gold hover:text-gold transition-colors duration-300 text-mocha/50"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
