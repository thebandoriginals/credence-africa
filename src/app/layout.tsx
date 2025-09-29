import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";

const questrial = Questrial({ subsets: ["latin"], weight: ["400"], variable: "--font-questrial" });

export const metadata: Metadata = {
  title: "Credence Africa Landing",
  description: "Credence Africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${questrial.variable} font-sans antialiased bg-background text-foreground`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
