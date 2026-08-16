import type { Metadata } from "next";
// Self-hosted via @fontsource (no runtime call to Google's servers — faster,
// more private, and builds reliably in offline/CI environments).
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "@fontsource/fraunces/700.css";
import "@fontsource/fraunces/400-italic.css";
import "@fontsource/fraunces/600-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";
import "./globals.css";

const SITE_URL = "https://ideatofunded.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Idea to Funded | Advisory for Funding-Ready Founders & Institutions",
    template: "%s | Idea to Funded",
  },
  description:
    "Idea to Funded helps founders build funding-ready ventures and partners with institutions to design and deliver entrepreneurship programmes with measurable outcomes.",
  keywords: [
    "Idea to Funded",
    "startup funding advisory",
    "pitch deck Africa",
    "investment readiness",
    "MSME funding",
    "entrepreneurship programme design",
    "grant writing Africa",
    "Yemisi Ajeojo",
  ],
  authors: [{ name: "Idea to Funded" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Idea to Funded",
    title: "Idea to Funded | Advisory for Funding-Ready Founders & Institutions",
    description:
      "We help builders launch, grow, and become funding-ready — and partner with institutions to design and deliver entrepreneurship programmes with measurable outcomes.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Idea to Funded" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Idea to Funded | Advisory for Funding-Ready Founders & Institutions",
    description:
      "We help builders launch, grow, and become funding-ready — and partner with institutions to design and deliver entrepreneurship programmes with measurable outcomes.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Idea to Funded",
    url: SITE_URL,
    logo: `${SITE_URL}/icon-192.png`,
    description:
      "Idea to Funded supports builders to launch, grow, and become funding-ready, and partners with institutions to design and deliver entrepreneurship and innovation programmes.",
    sameAs: [],
  };

  return (
    <html lang="en">
      <body className="font-body antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
