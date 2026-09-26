import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/components/ThemeProvider";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-bhuvi-one.vercel.app"),

  title: "Bhuvanesh Neve | Full Stack Java Developer",

  description:
    "Portfolio of Bhuvanesh Neve, a Computer Engineering student and Full Stack Java Developer building modern web applications with Java, Spring Boot, React, Next.js and modern web technologies.",

  keywords: [
    "Bhuvanesh Neve",
    "Bhuvanesh Neve Portfolio",
    "Full Stack Java Developer",
    "Java Developer",
    "Spring Boot Developer",
    "React Developer",
    "Next.js Developer",
    "Computer Engineering",
    "Web Developer Portfolio",
  ],

  authors: [
    {
      name: "Bhuvanesh Neve",
    },
  ],

  creator: "Bhuvanesh Neve",

  verification: {
    google: "M7DhokN5B2kbOoiCmATbANZg2sQwhor4rkHp8NBEoqk",
  },

  openGraph: {
    title: "Bhuvanesh Neve | Full Stack Java Developer",
    description:
      "Portfolio of Bhuvanesh Neve, a Computer Engineering student and Full Stack Java Developer building modern web applications with Java, Spring Boot, React and Next.js.",
    type: "website",
    locale: "en_US",
    url: "https://portfolio-bhuvi-one.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}