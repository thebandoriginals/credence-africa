import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import React, { Suspense } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Credence Africa",
  description: "Strategic Advisory for Africa’s Next Growth Frontier",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense>
              <Breadcrumbs />
            </Suspense>
            {children}
          </main>
          <Suspense>
            <Footer />
          </Suspense>
        </div>
      </body>
    </html>
  );
}
