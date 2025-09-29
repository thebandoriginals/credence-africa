
"use client";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import React, { Suspense, useEffect, useState } from "react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import Marquee from "@/components/marquee";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getInsights, type Insight } from "@/lib/insights";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [insights, setInsights] = useState<Insight[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    async function fetchInsights() {
        const fetchedInsights = await getInsights();
        setInsights(fetchedInsights);
    }
    fetchInsights();
  }, []);

  const isAdminPage = pathname.startsWith('/admin');

  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="flex flex-col min-h-screen">
          {!isAdminPage && (
            <>
              <div className="bg-primary text-primary-foreground">
                <Marquee pauseOnHover>
                  {insights.map((insight) => (
                    <Link key={insight.id} href={`/insights/${insight.slug}`} className="flex items-center gap-4 text-sm font-medium whitespace-nowrap">
                      <span>{insight.title}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ))}
                </Marquee>
              </div>
              <Header />
            </>
          )}
          <main className={`flex-grow ${!isAdminPage ? 'container mx-auto px-4 sm:px-6 lg:px-8' : ''}`}>
            {!isAdminPage && (
              <Suspense>
                <Breadcrumbs />
              </Suspense>
            )}
            {children}
          </main>
          {!isAdminPage && (
            <Suspense>
              <Footer />
            </Suspense>
          )}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
