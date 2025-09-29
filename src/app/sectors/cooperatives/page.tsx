import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const objectives = [
  "Enhance operational excellence through training",
  "Drive innovation with technology solutions",
  "Advocate for cooperative-friendly policies",
  "Expand market access",
  "Foster inclusivity for women and youth",
];

const programs = [
  "Coop Leadership Academy", "Coop Innovate Labs", "Coop Climate", 
  "Coop Festival", "Coop Business Summit", "Coop Impact", 
  "Coop Policy Forum", "Coop Connect Expo", "Coop Excellence Awards", 
  "Coop Finance Accelerator"
];

const impactPathways = [
    "Improved governance and competitiveness",
    "Sustainable, climate-smart practices",
    "Expanded market opportunities",
    "Inclusive leadership for women and youth",
    "Strengthened socio-economic impact",
];

export default function CooperativesPage() {
  return (
    <div className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cooperatives
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Through Coops Africa, we catalyze cooperative growth with innovation,
            sustainability, and policy advocacy, positioning cooperatives as
            engines of socio-economic transformation.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">Core Objectives</h2>
              <ul className="space-y-4">
                {objectives.map((item) => (
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
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Programs</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {programs.map(program => (
                    <div key={program} className="p-4 border rounded-lg text-center font-medium">
                        {program}
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>

       <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Contact Coops Africa
          </h2>
           <p className="text-lg mb-8">
            📧 connect@coopsafrica.com | 📞 +254 705 462 363 | 🌍 www.coopsafrica.com
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/consult">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
