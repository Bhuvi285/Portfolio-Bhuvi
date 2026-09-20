import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhuvanesh | Full Stack Developer",
  description: "Personal portfolio of Bhuvanesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}