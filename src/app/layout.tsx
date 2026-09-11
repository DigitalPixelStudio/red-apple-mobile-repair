import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });

const url = "https://redappplemobilerepair.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: "Red Apple Mobile Repair | iPhone Repair in Halasuru, Bangalore — 30-Min Service",
    template: "%s | Red Apple Mobile Repair",
  },
  description:
    "Bangalore's expert iPhone repair studio in Halasuru. Screen, battery, back glass, camera & water damage repair with 90-day warranty, free doorstep pickup and 30-minute service. 4.9★ rated.",
  keywords: ["iPhone repair Bangalore", "iPhone screen replacement Halasuru", "iPhone battery replacement", "mobile repair Bangalore", "Red Apple Mobile Repair"],
  openGraph: {
    title: "Red Apple Mobile Repair — Precision Repair. Premium Care.",
    description: "Expert iPhone repair in Halasuru, Bangalore. Genuine-grade parts, 90-day warranty, free pickup. Most repairs in 30 minutes.",
    url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Red Apple Mobile Repair — Bengaluru", description: "Premium iPhone repair, 30-minute service, 90-day warranty." },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Red Apple Mobile Repair",
  image: `${url}/icon.svg`,
  telephone: "+918660663776",
  priceRange: "₹499 - ₹4000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "#36, Opposite Halasuru Police Station, Halasuru Metro Road",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560008",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 12.9833, longitude: 77.6361 },
  openingHours: "Mo-Su 10:30-21:00",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "905" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How long does a typical iPhone repair take?", acceptedAnswer: { "@type": "Answer", text: "Most repairs like display, battery, and charging port are done in 30-60 minutes while you wait." } },
    { "@type": "Question", name: "Do you offer a warranty on repairs?", acceptedAnswer: { "@type": "Answer", text: "Yes, every repair includes a 90-day service warranty on parts and workmanship." } },
    { "@type": "Question", name: "Do you provide free pickup and drop?", acceptedAnswer: { "@type": "Answer", text: "Yes, inside Bangalore we offer free doorstep pickup and drop for most repairs." } },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${space.variable}`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
