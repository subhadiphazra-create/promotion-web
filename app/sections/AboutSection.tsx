"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-image",
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-image", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".about-content",
        { opacity: 0, x: 60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-content", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".about-stat",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-stats", start: "top 85%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 overflow-hidden"
      style={{ background: "#FAF7F2" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="about-image relative opacity-0">
            <div className="relative" style={{ paddingBottom: "120%" }}>
              <Image
                src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=900&q=85"
                alt="Lumière studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Gold frame accent */}
              <div
                className="absolute -bottom-6 -right-6 w-3/4 h-3/4 -z-10 hidden md:block"
                style={{ border: "1px solid #C9A84C", opacity: 0.4 }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute bottom-8 -right-4 md:right-8 p-6 glass-dark shadow-2xl"
              style={{ background: "rgba(26,16,8,0.92)", backdropFilter: "blur(20px)" }}
            >
              <p className="font-accent text-4xl" style={{ color: "#C9A84C" }}>
                10+
              </p>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-white/50 mt-1">
                Years of Craft
              </p>
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content opacity-0">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-5">
              Our Story
            </p>
            <h2
              className="font-display text-4xl md:text-5xl leading-tight mb-6"
              style={{ color: "#1A1A1A" }}
            >
              Beauty Is Our{" "}
              <em className="italic">Passion,{" "}</em>
              <br />
              Craft Is Our{" "}
              <em className="italic" style={{ color: "#C9A84C" }}>
                Promise
              </em>
            </h2>

            <div
              className="w-12 h-px mb-8"
              style={{ background: "linear-gradient(90deg, #C9A84C, #E8D48A)" }}
            />

            <p
              className="font-body font-light leading-relaxed mb-5"
              style={{ color: "#5C3D2E", fontSize: "15px", opacity: 0.85 }}
            >
              Lumière Beauty was born from a simple belief: every woman deserves to feel
              extraordinary every single day. Founded in 2014 by beauty artisan Aria Mehta,
              we started as a boutique salon specialising in bespoke hair transformations.
            </p>
            <p
              className="font-body font-light leading-relaxed mb-8"
              style={{ color: "#5C3D2E", fontSize: "15px", opacity: 0.85 }}
            >
              Today, we curate a hand-selected range of the world's finest beauty
              extensions, lashes, and lenses — each chosen to complement your unique
              features, not mask them. Our philosophy is simple: enhance what is already
              beautiful.
            </p>

            {/* Mission & Vision */}
            <div className="grid grid-cols-2 gap-5 mb-10">
              {[
                {
                  title: "Our Mission",
                  text: "To make luxury beauty accessible, safe, and deeply personal.",
                },
                {
                  title: "Our Vision",
                  text: "A world where every woman walks with effortless confidence.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-5 border-l-2"
                  style={{ borderColor: "#C9A84C", background: "rgba(201,168,76,0.05)" }}
                >
                  <p
                    className="font-display text-base font-medium mb-2"
                    style={{ color: "#1A1A1A" }}
                  >
                    {item.title}
                  </p>
                  <p
                    className="font-body text-xs font-light leading-relaxed"
                    style={{ color: "#5C3D2E", opacity: 0.75 }}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 font-body text-[11px] tracking-[0.3em] uppercase text-charcoal transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className="about-stats grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-16 border-t border-nude/50">
          {[
            { value: "50,000+", label: "Happy Clients" },
            { value: "3", label: "Product Categories" },
            { value: "10+", label: "Years Experience" },
            { value: "99%", label: "5-Star Reviews" },
          ].map((stat) => (
            <div key={stat.label} className="about-stat text-center opacity-0">
              <p
                className="font-display text-4xl mb-2"
                style={{ color: "#C9A84C" }}
              >
                {stat.value}
              </p>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-mocha/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
