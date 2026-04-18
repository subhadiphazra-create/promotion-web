"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Eye } from "lucide-react";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.07,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(overlayRef.current, {
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(cardRef.current, {
      y: -4,
      boxShadow: "0 20px 60px rgba(201,168,76,0.15)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(cardRef.current, {
      y: 0,
      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const categoryLabel: Record<Product["category"], string> = {
    hair: "Hair Extension",
    lashes: "Eyelashes",
    lenses: "Contact Lenses",
  };

  return (
    <div
      ref={cardRef}
      className="product-card group cursor-pointer bg-white overflow-hidden"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(product)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <div
          ref={imageRef}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Hover overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 flex items-center justify-center opacity-0"
          style={{ background: "rgba(26,16,8,0.5)" }}
        >
          <div
            className="flex items-center gap-2 px-5 py-3 font-body text-[11px] tracking-[0.2em] uppercase text-charcoal"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
          >
            <Eye size={13} />
            Quick View
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <div
            className="absolute top-4 left-4 px-3 py-1 font-body text-[9px] tracking-[0.2em] uppercase text-charcoal"
            style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
          >
            {product.badge}
          </div>
        )}

        {/* Category tag */}
        <div className="absolute top-4 right-4 glass-dark px-2 py-1">
          <span className="font-body text-[8px] tracking-[0.2em] uppercase text-white/60">
            {categoryLabel[product.category]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="p-5">
        <h3
          className="font-display text-xl font-medium mb-1 leading-tight"
          style={{ color: "#1A1A1A" }}
        >
          {product.name}
        </h3>
        <p
          className="font-body text-xs font-light leading-relaxed mb-3"
          style={{ color: "#5C3D2E", opacity: 0.8 }}
        >
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="font-display text-xl"
            style={{ color: "#C9A84C" }}
          >
            {product.price}
          </span>
          <span
            className="font-body text-[10px] tracking-[0.15em] uppercase text-mocha/60 group-hover:text-gold transition-colors duration-300"
          >
            View Details →
          </span>
        </div>

        {/* Color swatches */}
        {product.colors && (
          <div className="flex items-center gap-1.5 mt-3">
            {product.colors.map((color, idx) => (
              <div
                key={idx}
                className="w-4 h-4 rounded-full border border-white/50 cursor-pointer hover:scale-125 transition-transform"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
