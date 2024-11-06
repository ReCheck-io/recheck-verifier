import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { StateProviderWrapper } from "@/contexts";
import { Toaster } from "@/components/ui";

import Header from "@/components/Header";

const interSans = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReCheck Verifier",
  description: "ReCheck Transaction Verifier",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} h-screen antialiased`}>
        <StateProviderWrapper>
          <Header />
          {children}
          <Toaster />
        </StateProviderWrapper>
      </body>
    </html>
  );
}
