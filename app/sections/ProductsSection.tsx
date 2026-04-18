"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import { products } from "../data/products";
import type { Product } from "../data/products";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Hair Extensions", value: "hair" },
  { label: "Eyelashes", value: "lashes" },
  { label: "Contact Lenses", value: "lenses" },
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

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
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".product-card",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.1,
      }
    );
  }, [activeFilter]);

  return (
    <>
      <section
        id="products"
        ref={sectionRef}
        className="py-28"
        style={{ background: "#F5F0EA" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div ref={headingRef} className="text-center mb-12 opacity-0">
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
              Explore
            </p>
            <h2
              className="font-display text-5xl md:text-6xl mb-4"
              style={{ color: "#1A1A1A" }}
            >
              Our <em className="italic">Signature</em> Range
            </h2>
            <span className="deco-line mt-6 block" />
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-6 py-2.5 font-body text-[10px] tracking-[0.25em] uppercase transition-all duration-300 ${
                  activeFilter === f.value
                    ? "text-charcoal"
                    : "text-mocha/60 bg-white border border-nude/50 hover:border-gold/50"
                }`}
                style={
                  activeFilter === f.value
                    ? { background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }
                    : {}
                }
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={setSelectedProduct}
              />
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-14">
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-10 py-4 font-body text-[11px] tracking-[0.3em] uppercase text-charcoal border border-gold/50 hover:bg-gold hover:border-gold transition-all duration-300"
            >
              Enquire for Full Catalogue
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
