import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer, Navbar } from "@/components";
import "./globals.css";

const poppins = Poppins({ weight: ['400', '500'], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Challenge App",
  description: "React Challenge Created by G0C4R",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
