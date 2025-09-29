import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, CheckCircle, Globe, Lightbulb, LineChart, Mail, Phone, Scale } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      icon: <LineChart className="size-8 text-primary" />,
      title: "Capital Raising & Blended Finance",
      description: "Unlock capital and structure for impact across markets and mandates.",
      href: "/services#capital-raising"
    },
    {
      icon: <Globe className="size-8 text-primary" />,
      title: "Trade & Investment Structuring",
      description: "Enter markets confidently with strategic positioning and compliance.",
      href: "/services#trade-investment"
    },
    {
      icon: <Scale className="size-8 text-primary" />,
      title: "Corporate Structuring & Tax Strategy",
      description: "Structure to scale, govern to endure, and optimize for generations.",
      href: "/services#corporate-structuring"
    },
    {
      icon: <Lightbulb className="size-8 text-primary" />,
      title: "IP Commercialization & Talent Strategy",
      description: "Protect your ideas, monetize your identity, and scale your influence.",
      href: "/services#ip-commercialization"
    },
    {
      icon: <Briefcase className="size-8 text-primary" />,
      title: "Regulatory Affairs & Public Policy",
      description: "Engage power, navigate policy, and shape the future of your industry.",
      href: "/services#regulatory-affairs"
    },
  ];

  const insights = [
    { title: "Navigating East Africa’s Evolving Tax Landscape", date: "28 May 2025" },
    { title: "IP Monetization Strategies for African Creators", date: "28 May 2025" },
    { title: "Blended Finance: Unlocking Capital for Climate Resilience", date: "25 May 2025" },
    { title: "Diaspora Investment and the Rise of Legacy Structuring", date: "25 May 2025" },
    { title: "The Real Cost of Compliance in 2025: What Regulators Are Watching", date: "25 May 2025" },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section id="home" className="w-full text-center py-20 lg:py-32">
        <h1 className="text-4xl lg:text-5xl font-bold">Credence Africa — Strategic Advisory for Africa’s Next Growth Frontier</h1>
        <p className="mt-4 text-lg lg:text-xl text-muted-foreground">Smart insights. Practical execution. Structures that scale in complexity and across borders.</p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/services">Explore Services</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/consult">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="w-full py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">Credence Africa is a pan-African strategic advisory and social enterprise platform operating at the intersection of capital, governance, compliance, and public affairs. We help businesses, governments, nonprofits, and financial institutions navigate Africa’s opportunity zones where risk meets scale.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-bold text-lg">Pan-African Perspective</h3>
              <p className="text-muted-foreground mt-2">Operating across multiple jurisdictions at the nexus of capital, compliance, governance, and policy.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Growth Catalysts</h3>
              <p className="text-muted-foreground mt-2">Unlocking capital, structuring entities, navigating regulation, and scaling impact.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Execution Partners</h3>
              <p className="text-muted-foreground mt-2">Delivering actionable strategies that withstand scrutiny in high-complexity environments.</p>
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild>
              <Link href="/about">Our Full Story</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about#team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="our-approach" className="w-full py-16 lg:py-24">
        <div className="container mx-auto text-center">
          <p className="text-2xl font-medium max-w-4xl mx-auto">"We combine deep local understanding with global-standard execution to help clients navigate Africa's opportunity zones — where risk meets scale."</p>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">10+</p>
              <p className="text-muted-foreground mt-2">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">50+</p>
              <p className="text-muted-foreground mt-2">Clients Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">8</p>
              <p className="text-muted-foreground mt-2">African Markets</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">$25M+</p>
              <p className="text-muted-foreground mt-2">Capital Facilitated</p>
            </div>
          </div>
        </div>
      </section>

       {/* What We Solve Section */}
       <section id="what-we-solve" className="w-full py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">What We Solve</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Capital and investment readiness for high-growth ventures",
              "Regulatory licensing and multi-agency compliance strategy",
              "Market entry across East Africa and diaspora re-entry structuring",
              "Cross-border tax and entity structuring",
              "Government relations, public policy tracking, and advocacy",
              "Monetization of IP, content, brand, and digital assets",
              "Succession, legacy, and trust planning for entrepreneurs and families",
            ].map((item) => (
              <div key={item} className="flex items-start gap-4">
                <CheckCircle className="size-6 text-primary mt-1 shrink-0" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions Section */}
      <section id="featured-solutions" className="w-full py-16 lg:py-24">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Featured Solutions</h2>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 5).map(service => (
               <Card key={service.title} className="text-left">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {service.icon}
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                  <Button asChild variant="link" className="px-0 mt-4">
                    <Link href={service.href}>Learn More</Link>
                  </Button>
                </CardContent>
               </Card>
            ))}
          </div>
           <Button asChild className="mt-12" size="lg">
              <Link href="/services">See All Services</Link>
           </Button>
        </div>
      </section>

       {/* Recent Insights Section */}
      <section id="recent-insights" className="w-full py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Recent Insights</h2>
          <div className="mt-10 grid gap-6">
            {insights.map((insight) => (
              <div key={insight.title} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b">
                <div>
                  <h3 className="font-semibold">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{insight.date}</p>
                </div>
                <Button asChild variant="link" className="mt-2 sm:mt-0">
                  <Link href="/insights">Read More</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/insights">Read All Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="w-full py-16 lg:py-24">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Case Studies</h2>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">See how we’ve helped clients scale operations, attract catalytic funding, unlock compliance bottlenecks, and influence regulation across Africa.</p>
            <div className="mt-8">
              <Button asChild size="lg">
                  <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
        </div>
      </section>

      {/* Trust & Impact Section */}
      <section id="trust-impact" className="w-full py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold">Trust & Impact</h2>
              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div><p className="font-semibold">10+ years shaping enterprises, cooperatives, and institutions</p></div>
                  <div><p className="font-semibold">50+ clients and partners across government, finance, and civil society</p></div>
                  <div><p className="font-semibold">8 African markets actively engaged</p></div>
                  <div><p className="font-semibold">$25M+ capital facilitated for enterprises and social ventures</p></div>
              </div>
              <p className="mt-10 text-lg text-muted-foreground">
                  <strong>Trusted by:</strong> Growth-stage startups, cooperative unions, fintech innovators, development partners, and public agencies.
              </p>
              <div className="mt-8">
                <Button asChild>
                    <Link href="/about#partners">Meet Our Partners</Link>
                </Button>
              </div>
          </div>
      </section>
      
      {/* Final CTA Banner */}
      <section id="final-cta" className="w-full py-20 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold">Let’s Shape Africa’s Growth Frontier Together</h2>
              <p className="mt-4 max-w-3xl mx-auto">Whether you are raising capital, structuring across borders, or navigating regulatory reform — Credence Africa is your trusted execution partner.</p>
              <div className="mt-6 space-y-2">
                <p className="flex items-center justify-center gap-2"><Mail className="size-5" /> connect@credence.africa</p>
                <p className="flex items-center justify-center gap-2"><Phone className="size-5" /> +254 719 468 240</p>
              </div>
              <div className="mt-8 flex justify-center gap-4">
                  <Button asChild size="lg" variant="secondary">
                      <Link href="/consult">Book a Strategy Call</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                      <Link href="/consult">Send an Inquiry</Link>
                  </Button>
              </div>
          </div>
      </section>
    </div>
  );
}
