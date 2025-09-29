import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const programs = [
    "SME Capital Access Platforms",
    "Market Expansion Labs",
    "Women & Youth Enterprise Programs",
];

const impactPathways = [
    "Investment-ready startups",
    "Inclusive entrepreneurship",
    "Cross-border scaling",
];

export default function SmesStartupsPage() {
  return (
    <div className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            SMEs & Startups
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Empowering entrepreneurship.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Programs</h2>
            <ul className="space-y-4">
              {programs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Impact Pathways</h2>
            <ul className="space-y-4">
              {impactPathways.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Scale Your Venture
          </h2>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consult">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}