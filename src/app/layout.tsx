import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import React, { Suspense } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Marquee from "@/components/marquee";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const recentInsights = [
    { title: "Navigating East Africa’s Evolving Tax Landscape", date: "28 May 2025", href: "/insights" },
    { title: "IP Monetization Strategies for African Creators", date: "28 May 2025", href: "/insights" },
    { title: "Blended Finance: Unlocking Capital for Climate Resilience", date: "25 May 2025", href: "/insights" },
    { title: "Diaspora Investment and the Rise of Legacy Structuring", date: "25 May 2025", href: "/insights" },
    { title: "The Real Cost of Compliance in 2025: What Regulators Are Watching", date: "25 May 2025", href: "/insights" },
];

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
          <div className="bg-primary text-primary-foreground">
            <Marquee pauseOnHover>
              {recentInsights.map((insight) => (
                <Link key={insight.title} href={insight.href} className="flex items-center gap-4 text-sm font-medium whitespace-nowrap">
                  <span>{insight.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </Marquee>
          </div>
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
