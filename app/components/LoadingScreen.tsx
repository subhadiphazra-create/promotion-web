"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete,
        });
      },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        taglineRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(
        progressRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: "power2.inOut", transformOrigin: "left" }
      )
      .to({}, { duration: 0.3 });
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(135deg, #1A1A1A 0%, #2D1B0E 60%, #3D2214 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ border: "1px solid #C9A84C" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ border: "1px solid #C9A84C" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full opacity-8"
          style={{ border: "1px solid #E8D48A" }}
        />
      </div>

      {/* Logo */}
      <div ref={logoRef} className="text-center opacity-0 relative z-10">
        <p className="font-accent text-8xl md:text-9xl" style={{ color: "#C9A84C" }}>
          Lumière
        </p>
        <div
          ref={lineRef}
          className="mx-auto my-4 origin-left"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, #C9A84C, #E8D48A, #C9A84C, transparent)",
            width: "280px",
          }}
        />
        <p
          ref={taglineRef}
          className="font-body text-[10px] tracking-[0.5em] uppercase text-nude/60"
        >
          Beauty Studio
        </p>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48">
        <div className="h-px bg-white/10 w-full relative overflow-hidden">
          <div
            ref={progressRef}
            className="absolute inset-0 origin-left"
            style={{
              background: "linear-gradient(90deg, #C9A84C, #E8D48A)",
            }}
          />
        </div>
        <p className="text-center font-body text-[9px] tracking-[0.3em] uppercase text-white/30 mt-3">
          Loading
        </p>
      </div>
    </div>
  );
}
