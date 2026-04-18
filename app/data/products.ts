export interface Product {
  id: string;
  name: string;
  category: "hair" | "lashes" | "lenses";
  shortDescription: string;
  description: string;
  price: string;
  image: string;
  badge?: string;
  features: string[];
  colors?: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: "hair" | "lashes" | "lenses";
  tagline: string;
  description: string;
  image: string;
  count: number;
}

export const categories: Category[] = [
  {
    id: "cat-1",
    name: "Hair Extensions",
    slug: "hair",
    tagline: "Luxurious Length",
    description: "Premium Remy human hair extensions for seamless, voluminous results.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    count: 12,
  },
  {
    id: "cat-2",
    name: "Eyelashes",
    slug: "lashes",
    tagline: "Captivating Gaze",
    description: "Handcrafted lashes from ultra-fine silk & mink fibres.",
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80",
    count: 18,
  },
  {
    id: "cat-3",
    name: "Contact Lenses",
    slug: "lenses",
    tagline: "Eyes That Speak",
    description: "Breathable, UV-blocking colour lenses for a mesmerizing look.",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9d715?w=800&q=80",
    count: 24,
  },
];

export const products: Product[] = [
  // Hair Extensions
  {
    id: "h-1",
    name: "Silk Seamless Clip-In Set",
    category: "hair",
    shortDescription: "220g full-volume Remy human hair, 18 inches",
    description: "Our signature Silk Seamless Clip-In Extensions deliver undetectable volume and length. Made from 100% virgin Remy human hair, each weft is hand-tied for comfort and durability. The ultra-thin silicone-coated clips glide in with zero damage.",
    price: "$189",
    image: "https://images.unsplash.com/photo-1605980766566-e4c2c8ea1b8c?w=800&q=80",
    badge: "Bestseller",
    features: ["100% Virgin Remy Hair", "220g Full Volume", "Lasts 12–18 months", "Heat-styleable up to 230°C", "6 silky wefts included"],
    colors: ["#1A1A1A", "#4A2C2A", "#8B6914", "#E8D5C4", "#FAF7F2"],
  },
  {
    id: "h-2",
    name: "Keratin Bond Extensions",
    category: "hair",
    shortDescription: "Long-lasting fusion bonds, 22 inches",
    description: "Professional-grade keratin bond extensions for a truly seamless look. Individually applied for maximum customisation, these last up to 6 months with proper care. Available in 50 shades.",
    price: "$320",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    badge: "Premium",
    features: ["Italian Keratin bonds", "22 inch length", "100 strands per pack", "6-month durability", "Tangle-free guarantee"],
    colors: ["#1A1A1A", "#2D1B0E", "#8B5E3C", "#C4677A", "#E8D5C4"],
  },
  {
    id: "h-3",
    name: "Halo Crown Extension",
    category: "hair",
    shortDescription: "Wire-free invisible crown, 16 inches",
    description: "The revolutionary Halo Crown sits invisibly on your head with a transparent wire. No clips, no bonds—just 30 seconds to flawless volume. Perfect for special occasions or everyday glam.",
    price: "$145",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&q=80",
    features: ["Invisible wire design", "On in 30 seconds", "150g of volume", "Reusable 200+ times", "Adjustable sizing"],
  },
  // Lashes
  {
    id: "l-1",
    name: "Velvet Mink Lashes",
    category: "lashes",
    shortDescription: "Ultra-fine vegan mink, reusable 25×",
    description: "Our Velvet Mink Lashes are crafted from premium vegan silk fibres to mimic the natural taper of real mink fur. Feather-light and intensely glamorous, they contour perfectly to any eye shape.",
    price: "$34",
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800&q=80",
    badge: "Fan Favourite",
    features: ["Vegan & cruelty-free", "Reusable 25+ times", "Tapered band for comfort", "Dramatic 15mm length", "Glue included"],
  },
  {
    id: "l-2",
    name: "Silk Wispy Lashes",
    category: "lashes",
    shortDescription: "Natural wispies for everyday elegance",
    description: "Inspired by Korean beauty trends, these wispy lashes add fluttery definition without overdoing it. The crisscross silk strands create depth and dimension that looks genuinely natural.",
    price: "$28",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    features: ["Ultra-lightweight silk", "12–14mm mixed lengths", "Reusable 20+ times", "Flexible cotton band", "4 styles in the set"],
  },
  {
    id: "l-3",
    name: "Diamond Volume Lashes",
    category: "lashes",
    shortDescription: "Red-carpet glamour, full-fan style",
    description: "Make an entrance. Our Diamond Volume Lashes are meticulously handcrafted with 3D-layered fibres to create maximum drama. The jewelled-finish band adds sparkle even before you blink.",
    price: "$42",
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
    badge: "New",
    features: ["3D layered fibres", "Jewelled band detail", "18–22mm length", "Bold full-fan shape", "Cruelty-free"],
  },
  // Contact Lenses
  {
    id: "c-1",
    name: "Hazel Lumière Lenses",
    category: "lenses",
    shortDescription: "Warm honey-hazel with gold limbal ring",
    description: "The Hazel Lumière creates a warm, sunlit gaze with multi-tonal amber and honey pigments. A subtle gold limbal ring adds depth and definition. FDA-approved, oxygen-permeable material keeps eyes comfortable all day.",
    price: "$29/pair",
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9d715?w=800&q=80",
    badge: "Bestseller",
    features: ["14.5mm natural diameter", "FDA & CE approved", "8 hours comfortable wear", "UV-blocking coating", "Power 0.00 to -6.00"],
  },
  {
    id: "c-2",
    name: "Oceanic Blue Lenses",
    category: "lenses",
    shortDescription: "Deep ocean blue with ice-crystal pattern",
    description: "Dive into a world of captivating colour. The Oceanic Blue features a multi-layer pigment printing process that creates a crystalline depth unmatched in coloured lenses. Available in prescription.",
    price: "$32/pair",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    features: ["Crystal-depth printing", "14.2mm diameter", "Monthly disposable", "Prescription available", "Hygienic blister pack"],
  },
  {
    id: "c-3",
    name: "Smoky Grey Lenses",
    category: "lenses",
    shortDescription: "Mysterious slate grey, editorial look",
    description: "Editorial-grade colour inspired by high fashion runways. The Smoky Grey blends cool slate with silver undertones for a powerful, otherworldly gaze that photographs beautifully in any light.",
    price: "$30/pair",
    image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=800&q=80",
    badge: "New",
    features: ["Silver-slate pigments", "High-fashion inspired", "14.5mm diameter", "8–10 hours wear", "Toric available"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Mehta",
    role: "Beauty Influencer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "The Silk Seamless extensions completely changed my confidence. They blend so naturally that even my hairdresser was impressed. Absolutely obsessed.",
    rating: 5,
    product: "Silk Seamless Clip-In Set",
  },
  {
    id: 2,
    name: "Anjali Sharma",
    role: "Bridal Makeup Artist",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
    text: "I use the Velvet Mink Lashes on every bride I work with. They're the only lashes that stay perfect from ceremony through reception. Non-negotiable for me.",
    rating: 5,
    product: "Velvet Mink Lashes",
  },
  {
    id: 3,
    name: "Sofia Rodrigues",
    role: "Model",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&q=80",
    text: "The Oceanic Blue lenses are simply jaw-dropping on camera. I've tried so many brands—nothing compares to the depth and comfort of these. Wearing them at every shoot now.",
    rating: 5,
    product: "Oceanic Blue Lenses",
  },
  {
    id: 4,
    name: "Rhea Kapoor",
    role: "Fashion Blogger",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80",
    text: "Ordered the Halo Crown for a wedding and received so many compliments. Took me literally 30 seconds to put on. The quality is genuinely luxurious.",
    rating: 5,
    product: "Halo Crown Extension",
  },
];
