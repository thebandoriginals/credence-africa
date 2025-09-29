import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const partners = ["Startups & Scale-Ups", "SACCOs & Cooperatives", "DFIs & NGOs", "Family Offices", "Public Sector Entities", "Industry Associations"]

export default function AboutPage() {
  const introImage = PlaceHolderImages.find((img) => img.id === "about-intro");

  return (
    <div className="flex-1">
      <section id="who-we-are" className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
              <p className="text-lg text-muted-foreground">
                Credence Africa delivers strategic advisory and social
                enterprise solutions for Africa’s complex markets. We work at the
                intersection of capital, compliance, governance, and policy,
                helping our clients make informed decisions, secure competitive
                advantage, and scale responsibly in high-growth,
                high-complexity environments.
              </p>
            </div>
            {introImage && (
              <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                  src={introImage.imageUrl}
                  alt={introImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={introImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="our-approach" className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
            We blend local insight with global standards, focusing on
            execution-ready strategies. Our consulting model is built around
            five principles:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-left">
            <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-2">1. Execution-Ready Advisory</h3>
                <p className="text-sm text-muted-foreground">We deliver blueprints that can be implemented immediately, with risk-managed precision.</p>
            </div>
             <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-2">2. Context-Driven Structuring</h3>
                <p className="text-sm text-muted-foreground">We adapt to local, sectoral, and jurisdictional realities, crafting strategies that align with law, policy, and market conditions.</p>
            </div>
             <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-2">3. Cross-Functional Expertise</h3>
                <p className="text-sm text-muted-foreground">Our teams integrate finance, law, public policy, tax, and innovation in every engagement.</p>
            </div>
             <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-2">4. Influence + Compliance</h3>
                <p className="text-sm text-muted-foreground">We help clients shape the rules, not just follow them—navigating regulation and policy landscapes with intention.</p>
            </div>
             <div className="p-6 border rounded-lg">
                <h3 className="font-bold text-lg mb-2">5. Growth with Integrity</h3>
                <p className="text-sm text-muted-foreground">Every solution we build is designed to be sustainable, scalable, and strategically sound.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="our-partners" className="py-16 md:py-24  bg-secondary">
          <div className="container text-center">
              <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
              <p className="max-w-3xl mx-auto text-muted-foreground mb-12">We advise clients who shape sectors, scale ventures, and steer reform:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                  {partners.map(partner => (
                      <div key={partner} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span className="font-medium">{partner}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>
      
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
              <h2 className="text-3xl font-bold mb-4">Download Our Company Profile</h2>
              <p className="text-lg max-w-2xl mx-auto mb-8">Get a detailed overview of our services, team, and impact.</p>
              <Button asChild size="lg" variant="secondary">
                  <Link href="#">Download Profile</Link>
              </Button>
          </div>
      </section>
    </div>
  );
}
