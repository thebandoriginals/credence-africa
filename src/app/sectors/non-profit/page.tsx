import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const capabilities = [
    "Impact measurement",
    "Earned income models",
    "Compliance frameworks",
];

const impactPathways = [
    "Resilient nonprofits",
    "Professionalized governance",
    "Locally led institutions"
];

export default function NonProfitPage() {
  return (
    <div className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Non-Profit Sector
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Strengthening nonprofits for impact through governance and fundraising strategies.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Capabilities</h2>
            <ul className="space-y-4">
              {capabilities.map((item) => (
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
        <div className="container mx-auto mt-16">
            <div className="bg-card p-8 rounded-lg shadow-md">
                 <h2 className="text-3xl font-bold mb-6">Who We Serve</h2>
                 <p className="text-muted-foreground">NGOs, foundations, public benefit organizations.</p>
            </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Strengthen Your Impact
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
