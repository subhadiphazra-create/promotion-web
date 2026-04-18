"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import CategoriesSection from "./sections/CategoriesSection";
import ProductsSection from "./sections/ProductsSection";
import WhyUsSection from "./sections/WhyUsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";

// Dynamically import scroll progress to avoid SSR issues
const ScrollProgress = dynamic(() => import("./components/ScrollProgress"), {
  ssr: false,
});

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Prevent scroll during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      {/* Loading Screen */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Scroll progress bar */}
      {!loading && <ScrollProgress />}

      {/* Main Site */}
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.5s ease",
          pointerEvents: loading ? "none" : "auto",
        }}
      >
        <Navbar />

        <main>
          <HeroSection />
          <CategoriesSection />
          <ProductsSection />
          <WhyUsSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </>
  );
}
