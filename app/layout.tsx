import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  title: "Saguaro Glass — Custom Brake Metal & Glazing, Glendale AZ",
  description:
    "Family-owned custom metal fabrication and glazing supply in the Valley of the Sun since 1981. CnC-folded sill flashings, wall caps, door cladding, storefront and curtainwall.",
  openGraph: {
    title: "Saguaro Glass — Custom Brake Metal & Glazing",
    description:
      "Family-owned custom metal fabrication and glazing supply in Glendale, AZ since 1981.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bone text-ink">
        {children}
      </body>
    </html>
  );
}
