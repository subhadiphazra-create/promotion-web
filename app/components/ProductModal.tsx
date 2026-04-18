"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { X, Check, MessageCircle, Phone } from "lucide-react";
import type { Product } from "../data/products";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );
      gsap.fromTo(
        panelRef.current,
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
    }
  }, [product]);

  const handleClose = () => {
    gsap.to(backdropRef.current, { opacity: 0, duration: 0.3 });
    gsap.to(panelRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: onClose,
    });
  };

  if (!product) return null;

  const categoryLabel: Record<Product["category"], string> = {
    hair: "Hair Extension",
    lashes: "Eyelashes",
    lenses: "Contact Lenses",
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="absolute inset-0 modal-backdrop"
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-warm-white rounded-none shadow-2xl"
        style={{ background: "#FDFAF6" }}
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-20 w-9 h-9 flex items-center justify-center bg-charcoal/10 hover:bg-charcoal hover:text-white transition-colors duration-300"
        >
          <X size={16} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative" style={{ minHeight: "420px" }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {product.badge && (
              <div
                className="absolute top-6 left-6 px-4 py-1.5 font-body text-[10px] tracking-[0.2em] uppercase text-charcoal"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
              >
                {product.badge}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 md:p-10 flex flex-col justify-between">
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-gold mb-3">
                {categoryLabel[product.category]}
              </p>
              <h2
                className="font-display text-3xl md:text-4xl mb-2"
                style={{ color: "#1A1A1A" }}
              >
                {product.name}
              </h2>
              <p
                className="font-display text-2xl italic mb-5"
                style={{ color: "#C9A84C" }}
              >
                {product.price}
              </p>

              <p
                className="font-body text-sm font-light leading-relaxed mb-6"
                style={{ color: "#5C3D2E", opacity: 0.85 }}
              >
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal/50 mb-3">
                  Key Features
                </p>
                <ul className="space-y-2">
                  {product.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-2.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
                      >
                        <Check size={10} className="text-charcoal" />
                      </div>
                      <span className="font-body text-sm text-mocha/80">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Color swatches */}
              {product.colors && (
                <div className="mb-6">
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-charcoal/50 mb-3">
                    Available Shades
                  </p>
                  <div className="flex gap-2">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded-full border-2 border-white shadow cursor-pointer hover:scale-110 transition-transform"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="space-y-3 mt-6">
              <a
                href="https://wa.me/+911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full py-4 font-body text-[11px] tracking-[0.2em] uppercase text-charcoal transition-all duration-300"
                style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
              >
                <MessageCircle size={14} />
                Enquire on WhatsApp
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center justify-center gap-2.5 w-full py-4 font-body text-[11px] tracking-[0.2em] uppercase text-charcoal border border-charcoal/20 hover:border-charcoal/50 transition-colors duration-300"
              >
                <Phone size={14} />
                Call to Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
