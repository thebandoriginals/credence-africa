import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Team Member 1",
      title: "Role 1",
      imageUrl: "https://picsum.photos/seed/tm1/400/400",
      imageHint: "professional headshot",
    },
    {
      name: "Team Member 2",
      title: "Role 2",
      imageUrl: "https://picsum.photos/seed/tm2/400/400",
       imageHint: "professional headshot",
    },
    {
      name: "Team Member 3",
      title: "Role 3",
      imageUrl: "https://picsum.photos/seed/tm3/400/400",
       imageHint: "professional headshot",
    },
  ];

  const whoWeWorkWith = [
    "Startups & Scale-Ups – Preparing for investment, expansion, or formalization",
    "SACCOs, Cooperatives & Financial Institutions – Seeking growth capital, blended finance, or licensing compliance",
    "Development Finance Actors & NGOs – Structuring public-private programs, market entry, and policy engagement",
    "Family Offices & High Net-Worth Individuals – Navigating succession, tax, and estate planning",
    "Public Sector Entities – Designing PPPs, regulatory models, and trade facilitation",
    "Industry Associations & Advocacy Platforms – Building influence and shaping national or regional policy",
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          About Us
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Blending Precision with Perspective. Navigating Complexity with
          Strategy.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          At Credence Africa, we deliver more than technical advisory—we bring
          strategy that reflects the real-world dynamics of doing business in
          Africa. We work at the intersection of capital, compliance,
          governance, and policy, helping our clients make informed decisions,
          secure competitive advantage, and scale responsibly in high-growth,
          high-complexity environments. We combine deep local understanding with
          global-standard execution—whether we&apos;re structuring capital for a
          growth-stage enterprise, designing cross-border tax architecture, or
          navigating multi-agency regulatory pathways.
        </p>
      </section>

      <section className="mt-16 md:mt-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-card-foreground">
            Our Mission & Vision
          </h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-semibold text-lg text-primary">Mission</h3>
              <p className="text-muted-foreground mt-2">
                To equip African enterprises, institutions, and development
                actors with actionable, context-aligned advisory that powers
                capital access, strategic structuring, regulatory clarity, and
                long-term resilience.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-primary">Vision</h3>
              <p className="text-muted-foreground mt-2">
                To become the continent’s most trusted partner in structuring
                sustainable growth—where innovation, investment, and influence
                intersect.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-64 md:h-96 relative rounded-lg overflow-hidden">
            <Image
                src="https://picsum.photos/seed/about1/800/600"
                alt="Our Mission"
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint="team collaboration"
            />
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl text-card-foreground">
          The Credence Africa Model
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
          Strategy That Scales. Advisory That Stands Up to Scrutiny.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Execution-Ready Advisory", description: "We don’t stop at reports. We deliver blueprints that can be implemented immediately, with risk-managed precision." },
            { title: "Context-Driven Structuring", description: "We adapt to local, sectoral, and jurisdictional realities, crafting strategies that align with law, policy, and market conditions." },
            { title: "Cross-Functional Expertise", description: "Our teams integrate finance, law, public policy, tax, and innovation in every engagement." },
            { title: "Influence + Compliance", description: "We help clients shape the rules, not just follow them—navigating regulation and policy landscapes with intention." },
            { title: "Growth with Integrity", description: "Every solution we build is designed to be sustainable, scalable, and strategically sound." }
          ].map((principle, index) => (
            <div key={index} className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
                <h3 className="font-semibold text-lg text-primary">{index+1}. {principle.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{principle.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section id="team" className="mt-16 md:mt-24">
        <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl text-card-foreground">
          Meet Our Team
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-center text-muted-foreground">
          We are lawyers, policy strategists, capital advisors, and business
          architects—bringing together decades of experience across law firms,
          multilateral institutions, investment firms, and public sector
          ecosystems. Each engagement is led by a partner-level advisor and
          delivered through multi-disciplinary teams tailored to your
          project’s needs.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={member.imageHint}
                />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{member.name}</h3>
              <p className="text-muted-foreground">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 md:mt-24 bg-secondary py-12 md:py-20 rounded-lg">
          <div className="container">
            <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl text-card-foreground">
            Who We Work With
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
            We advise clients who shape sectors, scale ventures, and steer reform:
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoWeWorkWith.map((client, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-card-foreground text-sm">{client}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      <section className="mt-16 md:mt-24 text-center">
        <Button size="lg" asChild>
            <a href="#">Download Our Company Profile</a>
        </Button>
      </section>
    </div>
  );
}