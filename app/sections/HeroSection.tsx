"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, Sparkles } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.2 });

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        imageRef.current,
        { scale: 1.15, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        taglineRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

    // Subtle parallax
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xRatio = (clientX / window.innerWidth - 0.5) * 15;
      const yRatio = (clientY / window.innerHeight - 0.5) * 10;
      gsap.to(imageRef.current, {
        x: xRatio,
        y: yRatio,
        duration: 1.5,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToCategories = () => {
    document.querySelector("#categories")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D0B09 0%, #1A1008 40%, #2D1B0E 100%)" }}
    >
      {/* Background Image */}
      <div
        ref={imageRef}
        className="absolute inset-0 opacity-0"
        style={{ transform: "scale(1.15)" }}
      >
        <Image
          src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=85"
          alt="Luxury beauty"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,8,5,0.9) 0%, rgba(26,16,8,0.75) 50%, rgba(45,27,14,0.85) 100%)",
          }}
        />
      </div>

      {/* Decorative grain overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative gold circle */}
      <div
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-5 pointer-events-none hidden lg:block"
        style={{ border: "1px solid #C9A84C" }}
      />
      <div
        className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[350px] h-[350px] rounded-full opacity-8 pointer-events-none hidden lg:block"
        style={{ border: "1px solid #E8D48A" }}
      />

      {/* Content */}
      <div
        ref={overlayRef}
        className="relative z-10 max-w-7xl mx-auto px-6 w-full opacity-0"
      >
        <div className="max-w-3xl">
          {/* Pre-tagline */}
          <div ref={taglineRef} className="flex items-center gap-3 mb-8 opacity-0">
            <Sparkles size={14} style={{ color: "#C9A84C" }} />
            <span
              className="font-body text-[10px] tracking-[0.4em] uppercase"
              style={{ color: "#C9A84C" }}
            >
              Premium Beauty Collection 2025
            </span>
            <Sparkles size={14} style={{ color: "#C9A84C" }} />
          </div>

          {/* Main Heading */}
          <h1
            ref={headingRef}
            className="font-display opacity-0 leading-none mb-6"
            style={{ fontSize: "clamp(52px, 8vw, 110px)", color: "#FAF7F2" }}
          >
            Enhance Your
            <br />
            <em
              className="not-italic"
              style={{
                background: "linear-gradient(135deg, #C9A84C 0%, #E8D48A 50%, #C9A84C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Natural Beauty
            </em>
          </h1>

          {/* Sub */}
          <p
            ref={subRef}
            className="font-body font-light opacity-0 mb-10 max-w-lg"
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              color: "rgba(232, 213, 196, 0.75)",
              lineHeight: 1.8,
            }}
          >
            Curated luxury hair extensions, handcrafted eyelashes, and captivating
            contact lenses — crafted for women who command attention.
          </p>

          {/* CTAs */}
          <div
            ref={ctaRef}
            className="flex flex-wrap items-center gap-4 opacity-0"
          >
            <button
              onClick={scrollToCategories}
              className="group flex items-center gap-3 px-8 py-4 font-body text-[12px] tracking-[0.2em] uppercase text-charcoal bg-gold hover:bg-gold-light transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
            >
              Shop Now
              <ArrowDown
                size={14}
                className="group-hover:translate-y-1 transition-transform duration-300"
              />
            </button>
            <button
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 font-body text-[12px] tracking-[0.2em] uppercase text-nude/70 hover:text-nude border border-nude/20 hover:border-nude/50 transition-all duration-300"
            >
              Our Story
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-10 mt-16 pt-10 border-t border-white/10">
            {[
              { value: "50K+", label: "Happy Clients" },
              { value: "100%", label: "Human Hair" },
              { value: "5★", label: "Avg Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p
                  className="font-display text-3xl"
                  style={{ color: "#C9A84C" }}
                >
                  {stat.value}
                </p>
                <p className="font-body text-[9px] tracking-[0.25em] uppercase text-white/40 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToCategories}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300"
        style={{ animation: "float 3s ease-in-out infinite" }}
      >
        <span className="font-body text-[9px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={14} />
      </button>
    </section>
  );
}
