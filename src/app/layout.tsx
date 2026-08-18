import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Temptations To Go | Birmingham",
  description: "Luxurious bakes & desserts, handmade in Birmingham by Aisha.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} antialiased h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-cream text-espresso selection:bg-earth-green selection:text-cream">
        {children}
      </body>
    </html>
  );
}
