"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Youtube, Send } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-heading",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-heading", start: "top 85%" },
        }
      );
      gsap.fromTo(
        ".contact-left",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-left", start: "top 80%" },
        }
      );
      gsap.fromTo(
        ".contact-right",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".contact-right", start: "top 80%" },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Animate button
    gsap.to(".submit-btn", {
      scale: 0.97,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      onComplete: () => setSubmitted(true),
    });
  };

  const inputClass =
    "w-full bg-transparent border-b border-nude/50 focus:border-gold outline-none py-3 font-body text-sm text-charcoal placeholder-mocha/30 transition-colors duration-300";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 relative overflow-hidden"
      style={{ background: "#F5F0EA" }}
    >
      {/* Decorative */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
        style={{ background: "radial-gradient(circle, #C9A84C, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="contact-heading text-center mb-16 opacity-0">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-gold mb-4">
            Get in Touch
          </p>
          <h2
            className="font-display text-5xl md:text-6xl mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Let's Create{" "}
            <em className="italic" style={{ color: "#C9A84C" }}>
              Your Look
            </em>
          </h2>
          <span className="deco-line block mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — Info */}
          <div className="contact-left lg:col-span-2 opacity-0">
            <p
              className="font-body font-light leading-relaxed mb-10"
              style={{ color: "#5C3D2E", opacity: 0.8, fontSize: "15px" }}
            >
              Whether you're looking for your first pair of extensions or you're a
              professional stocking for your salon — we'd love to hear from you.
              Reach out and our beauty concierge will respond within 2 hours.
            </p>

            {/* Quick actions */}
            <div className="space-y-4 mb-10">
              <a
                href="https://wa.me/+911234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
                >
                  <MessageCircle size={18} className="text-charcoal" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-gold">
                    WhatsApp
                  </p>
                  <p className="font-display text-base text-charcoal">
                    +91 12345 67890
                  </p>
                </div>
              </a>

              <a
                href="tel:+911234567890"
                className="flex items-center gap-4 p-4 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
                >
                  <Phone size={18} className="text-charcoal" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-gold">
                    Call Us
                  </p>
                  <p className="font-display text-base text-charcoal">
                    +91 12345 67890
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@lumierebeauty.com"
                className="flex items-center gap-4 p-4 bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
                >
                  <Mail size={18} className="text-charcoal" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-gold">
                    Email
                  </p>
                  <p className="font-display text-base text-charcoal">
                    hello@lumierebeauty.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
                >
                  <MapPin size={18} className="text-charcoal" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-widest uppercase text-gold">
                    Studio
                  </p>
                  <p className="font-display text-base text-charcoal">
                    Durgapur, West Bengal
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-mocha/50 mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, label: "Instagram", href: "#" },
                  { Icon: Facebook, label: "Facebook", href: "#" },
                  { Icon: Youtube, label: "YouTube", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 flex items-center justify-center border border-nude/50 hover:border-gold hover:text-gold text-mocha/50 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div
            className="contact-right lg:col-span-3 p-8 md:p-10 opacity-0"
            style={{ background: "#FDFAF6" }}
          >
            {submitted ? (
              <div className="text-center py-16">
                <div
                  className="w-16 h-16 mx-auto flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
                >
                  <Send size={24} className="text-charcoal" />
                </div>
                <h3 className="font-display text-3xl mb-3" style={{ color: "#1A1A1A" }}>
                  Message Sent!
                </h3>
                <p className="font-body text-sm text-mocha/60">
                  Our beauty concierge will reach out within 2 hours. Thank you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <p
                  className="font-display text-2xl mb-6"
                  style={{ color: "#1A1A1A" }}
                >
                  Send an Enquiry
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label className="font-body text-[9px] tracking-[0.3em] uppercase text-mocha/50 block mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-body text-[9px] tracking-[0.3em] uppercase text-mocha/50 block mb-2">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                  <div>
                    <label className="font-body text-[9px] tracking-[0.3em] uppercase text-mocha/50 block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-body text-[9px] tracking-[0.3em] uppercase text-mocha/50 block mb-2">
                      I'm Interested In
                    </label>
                    <select
                      name="interest"
                      value={formState.interest}
                      onChange={handleChange}
                      className={inputClass + " cursor-pointer"}
                    >
                      <option value="">Select a category</option>
                      <option value="hair">Hair Extensions</option>
                      <option value="lashes">Eyelashes</option>
                      <option value="lenses">Contact Lenses</option>
                      <option value="all">All Products</option>
                      <option value="wholesale">Wholesale / Salon</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-body text-[9px] tracking-[0.3em] uppercase text-mocha/50 block mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your needs, shade preference, or any questions..."
                    className={inputClass + " resize-none"}
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn w-full py-4 font-body text-[11px] tracking-[0.3em] uppercase text-charcoal flex items-center justify-center gap-2.5 transition-opacity duration-300 hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #C9A84C, #E8D48A)" }}
                >
                  <Send size={13} />
                  Send Enquiry
                </button>

                <p className="font-body text-[10px] text-center text-mocha/40">
                  We reply within 2 hours · Your information is 100% private
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
