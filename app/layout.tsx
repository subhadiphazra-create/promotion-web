import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumière Beauty — Premium Hair, Lashes & Lenses",
  description: "Elevate your natural beauty with our curated collection of luxury hair extensions, handcrafted eyelashes, and designer contact lenses.",
  keywords: "hair extensions, eyelashes, contact lenses, beauty, luxury, lumiere",
  openGraph: {
    title: "Lumière Beauty",
    description: "Enhance Your Natural Beauty",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@200;300;400;500;600&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
