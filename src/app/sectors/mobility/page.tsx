import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const objectives = [
  "Advance green and equitable mobility",
  "Mobilize finance for infrastructure",
  "Reform legal and policy frameworks",
  "Formalize informal transport via TransCoops",
  "Skill youth and empower women",
  "Strengthen safety and security",
  "Promote innovation and public engagement",
];

const programs = [
  "Mobility Capital & Investment Access (MoCIA)",
  "Mobility Transformation Lab (MoTraL)",
  "Mobility Policy & Urban Systems (MoPUS)",
  "Safer Mobility & Social Protection (SaMoA+)",
  "Mobility Culture & Public Engagement (MoCPE)",
];

const impactPathways = [
  "Cleaner, safer transport systems",
  "Formalized informal transport",
  "Empowered transport workforce",
  "Enhanced commuter safety",
  "Amplified innovation",
];

export default function MobilityPage() {
  return (
    <div className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mobility
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Through Credence Mobility, we transform transport with
            cooperative-led models, innovative financing, and policy reform for
            a cleaner, safer Africa.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <div
                  key={program}
                  className="p-6 border rounded-lg text-center font-medium"
                >
                  {program}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Contact Credence Mobility
          </h2>
          <p className="text-lg mb-8">
            📧 mobility@credence.africa | 📞 +254 759 203 069 / +254 719 468 240
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