import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Poppins, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/landing/Header"; // Import the Header component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  style: ["normal","italic"],
});
const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
  style: ["normal","italic"],
});
export const metadata: Metadata = {
  title: "CCA Connect Philippines",
  description: "CCA Manila's Center for Food Entrepreneurship — bootcamps, consultancy, and experts for food businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${poppins.variable} ${jost.variable} antialiased`}
      >
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-[#225475] focus:px-4 focus:py-2 focus:font-jost focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="content">{children}</main>
      </body>
    </html>
  );
}