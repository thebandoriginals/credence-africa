import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const sectors = [
  { name: "Agriculture & Food", description: "Enhancing agribusiness operations, supply chain efficiency, and climate-smart farming for sustainable food security." },
  { name: "Cooperatives & Social Economy", description: "Strengthening governance, leadership, financial sustainability, and cooperative-driven economic transformation." },
  { name: "Creative & Digital Economy", description: "Supporting artists, digital entrepreneurs, and content creators with tools for commercialization, intellectual property protection, and market expansion." },
  { name: "Education & Skills Development", description: "Equipping educators, policymakers, and entrepreneurs with modern strategies in curriculum development, digital learning, and institutional leadership." },
  { name: "Faith-Based Organizations", description: "Providing governance, fundraising, and community impact strategies to faith-based institutions and religious leaders." },
  { name: "Healthcare & Wellness", description: "Improving healthcare management, financing, digital health solutions, and patient care models to enhance service delivery." },
  { name: "Hospitality & Tourism", description: "Driving sustainable tourism, customer experience enhancement, and business growth strategies for the hospitality sector." },
  { name: "Mobility & Logistics", description: "Advancing smart transport, sustainable mobility, fleet management, financial inclusion, and logistics solutions to improve efficiency and safety." },
  { name: "Non-Profit Sector", description: "Strengthening impact measurement, fundraising, governance, and sustainability strategies to maximize social impact." },
  { name: "Public Sector & Governance", description: "Enhancing policy development, regulatory frameworks, transparency, and governance efficiency in public administration." },
  { name: "SMEs & Startups", description: "Providing business model innovation, access to funding, scaling strategies, and investment readiness for entrepreneurs and small enterprises." },
  { name: "Technology & Digital Economy", description: "Driving innovation in fintech, artificial intelligence, blockchain, data analytics, and digital transformation across industries." },
];

export default function SectorsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Our Work by Sector
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          At Credence Africa, our work spans multiple sectors where social
          enterprise, policy reform, and capital access intersect. Each
          programmatic intervention builds resilient institutions, drives
          inclusive growth, and creates measurable social and economic impact.
        </p>
      </section>

      <section className="mt-12 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div key={sector.name} className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col">
              <h3 className="font-bold text-xl text-primary">{sector.name}</h3>
              <p className="mt-2 text-muted-foreground flex-grow">{sector.description}</p>
              <Button variant="link" asChild className="p-0 h-auto mt-4 self-start">
                  <Link href="#">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 md:mt-24 bg-secondary py-16 rounded-lg">
        <div className="container text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-card-foreground">
                Why Partner with Credence Africa?
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                    { title: "Expert-Led Insights", description: "Work with seasoned industry experts, legal professionals, and policymakers." },
                    { title: "Tailored Solutions", description: "Customized interventions addressing unique sectoral challenges." },
                    { title: "Innovative Approaches", description: "Africa-centric strategies blending global best practices." },
                    { title: "Measurable Impact", description: "Outcomes that drive growth, resilience, and transformation." }
                ].map((item, index) => (
                    <div key={index} className="text-center">
                        <h3 className="font-semibold text-lg text-primary">{item.title}</h3>
                        <p className="text-muted-foreground mt-2 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className="mt-16 md:mt-24 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Let’s Shape the Future Together
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Whether you’re an entrepreneur, corporate leader, policymaker, or investor, Credence Africa is your trusted partner for growth, transformation, and impact.
        </p>
        <div className="mt-8 text-muted-foreground">
            <a href="mailto:connect@credence.africa" className="hover:text-primary">connect@credence.africa</a>
            <span className="mx-2">|</span>
            <a href="tel:+254719468240" className="hover:text-primary">+254 719 468 240</a>
        </div>
      </section>
    </div>
  );
}
