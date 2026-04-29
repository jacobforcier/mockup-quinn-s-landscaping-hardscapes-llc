import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import config from "../business.config.json";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: config.name,
  description:
    config.description ||
    `${config.name} — ${config.category} serving ${config.address
      .split(",")
      .slice(-2)
      .join(",")
      .trim()}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
