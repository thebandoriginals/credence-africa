import { Button } from "@/components/ui/button";
import Link from "next/link";

const sectors = [
  {
    name: "Consult",
    href: "/sectors/consult",
    description: "Strategic advisory to scale businesses and institutions with resilient governance and innovative models.",
  },
  {
    name: "Cooperatives",
    href: "/sectors/cooperatives",
    description: "Catalyzing cooperative growth with innovation, sustainability, and policy advocacy.",
  },
  {
    name: "Faith-Based",
    href: "/sectors/faith-based",
    description: "Building sustainable, mission-aligned ventures for faith-based organizations.",
  },
  {
    name: "Mobility",
    href: "/sectors/mobility",
    description: "Transforming transport with cooperative-led models, innovative financing, and policy reform.",
  },
  {
    name: "Non-Profit",
    href: "/sectors/non-profit",
    description: "Strengthening nonprofits for impact through governance and fundraising strategies.",
  },
  {
    name: "Public Affairs",
    href: "/sectors/public-affairs",
    description: "Navigating policy and regulatory landscapes with strategic advocacy.",
  },
  {
    name: "Agriculture & Food",
    href: "/sectors/agriculture-food",
    description: "Strengthening food systems through cooperative enterprise and climate-smart practices.",
  },
  {
    name: "Creative & Digital Economy",
    href: "/sectors/creative-digital",
    description: "Empowering Africa’s creative and digital sectors.",
  },
  {
    name: "Education & Skills Development",
    href: "/sectors/education-skills",
    description: "Skilling Africa’s youth for economic opportunities.",
  },
  {
    name: "Healthcare & Wellness",
    href: "/sectors/healthcare-wellness",
    description: "Strengthening healthcare ecosystems for better access and resilience.",
  },
  {
    name: "Hospitality & Tourism",
    href: "/sectors/hospitality-tourism",
    description: "Enhancing tourism ecosystems for sustainable growth and community benefit.",
  },
  {
    name: "SMEs & Startups",
    href: "/sectors/smes-startups",
    description: "Empowering entrepreneurship with capital access and market expansion support.",
  },
  {
    name: "Technology & Digital Economy",
    href: "/sectors/technology-digital",
    description: "Scaling African-led digital enterprises through innovation and investment.",
  },
];


export default function SectorsPage() {
  return (
    <div className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Driving Impact Across Africa’s Sectors</h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            We deliver tailored advisory to empower cooperatives, mobility, public affairs, and more, fostering growth and resilience.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector) => (
              <div key={sector.name} className="bg-card p-6 rounded-lg shadow-md flex flex-col">
                <h3 className="text-2xl font-bold mb-4">{sector.name}</h3>
                <p className="text-muted-foreground mb-6 flex-grow">{sector.description}</p>
                <Button asChild>
                  <Link href={sector.href}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Partner for Impact</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Collaborate to drive growth across Africa’s sectors.
          </p>
           <p className="text-lg mb-8">
            📧 connect@credence.africa | 📞 +254 719 468 240
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consult">Book a Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#">Download Sector Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
