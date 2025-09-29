import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PlaceHolderImages from "@/lib/placeholder-images.json";
import { ArrowRight, CheckCircle, Mail, Phone, Scale, Users, FileText, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredSolutions = [
    {
        title: "Capital Raising & Blended Finance",
        description: "Unlock capital and structure for impact across markets and mandates.",
        href: "/services#capital-raising"
    },
    {
        title: "Trade & Investment Structuring",
        description: "Enter markets confidently with strategic positioning and compliance.",
        href: "/services#trade-investment"
    },
    {
        title: "Corporate Structuring & Tax Strategy",
        description: "Structure to scale, govern to endure, and optimize for generations.",
        href: "/services#enterprise-architecture"
    },
    {
        title: "IP Commercialization & Talent Strategy",
        description: "Protect your ideas, monetize your identity, and scale your influence.",
        href: "/services#ip-commercialization"
    },
    {
        title: "Regulatory Affairs & Public Policy",
        description: "Engage power, navigate policy, and shape the future of your industry.",
        href: "/services#public-affairs"
    },
]

const recentInsights = [
    { title: "Navigating East Africa’s Evolving Tax Landscape", date: "28 May 2025", href: "/insights" },
    { title: "IP Monetization Strategies for African Creators", date: "28 May 2025", href: "/insights" },
    { title: "Blended Finance: Unlocking Capital for Climate Resilience", date: "25 May 2025", href: "/insights" },
    { title: "Diaspora Investment and the Rise of Legacy Structuring", date: "25 May 2025", href: "/insights" },
    { title: "The Real Cost of Compliance in 2025: What Regulators Are Watching", date: "25 May 2025", href: "/insights" },
];

const whatWeSolve = [
    "Capital and investment readiness for high-growth ventures",
    "Regulatory licensing and multi-agency compliance strategy",
    "Market entry across East Africa and diaspora re-entry structuring",
    "Cross-border tax and entity structuring",
    "Government relations, public policy tracking, and advocacy",
    "Monetization of IP, content, brand, and digital assets",
    "Succession, legacy, and trust planning for entrepreneurs and families",
]

const caseStudyHighlights = [
    { icon: <Users className="size-6 text-primary" />, text: "Scaling operations for high-growth ventures." },
    { icon: <Scale className="size-6 text-primary" />, text: "Attracting catalytic funding for social enterprises." },
    { icon: <FileText className="size-6 text-primary" />, text: "Unlocking compliance bottlenecks for fintech innovators." },
    { icon: <Landmark className="size-6 text-primary" />, text: "Influencing regulation for development partners." },
]

export default function Home() {
  return (
    <div className="flex flex-col space-y-24 py-16 lg:py-24">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold max-w-4xl mx-auto">Credence Africa — Strategic Advisory for Africa’s Next Growth Frontier</h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Smart insights. Practical execution. Structures that scale in complexity and across borders.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/services">Explore Services</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/consult">Book a Consultation</Link>
          </Button>
        </div>
      </section>
      
      {/* Who We Are */}
      <section className="text-center">
        <h2 className="text-3xl font-bold">Who We Are</h2>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          Credence Africa is a pan-African strategic advisory and social enterprise platform operating at the intersection of capital, governance, compliance, and public affairs. We help businesses, governments, nonprofits, and financial institutions navigate Africa’s opportunity zones where risk meets scale.
        </p>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="p-6">
                <h3 className="font-semibold text-xl">Pan-African Perspective</h3>
                <p className="mt-2 text-muted-foreground">Operating across multiple jurisdictions at the nexus of capital, compliance, governance, and policy.</p>
            </div>
            <div className="p-6">
                <h3 className="font-semibold text-xl">Growth Catalysts</h3>
                <p className="mt-2 text-muted-foreground">Unlocking capital, structuring entities, navigating regulation, and scaling impact.</p>
            </div>
            <div className="p-6">
                <h3 className="font-semibold text-xl">Execution Partners</h3>
                <p className="mt-2 text-muted-foreground">Delivering actionable strategies that withstand scrutiny in high-complexity environments.</p>
            </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
            <Button asChild variant="outline">
                <Link href="/about">Our Full Story</Link>
            </Button>
            <Button asChild>
                <Link href="/about#team">Meet the Team</Link>
            </Button>
        </div>
      </section>

      {/* Quote & Stats */}
      <section className="bg-secondary py-20 text-center">
          <div className="container mx-auto">
            <p className="text-2xl font-medium max-w-4xl mx-auto">&quot;We combine deep local understanding with global-standard execution to help clients navigate Africa&apos;s opportunity zones — where risk meets scale.&quot;</p>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <p className="text-4xl font-bold text-primary">10+</p>
                    <p className="mt-2 text-muted-foreground">Years of Experience</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold text-primary">50+</p>
                    <p className="mt-2 text-muted-foreground">Clients Served</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold text-primary">8</p>
                    <p className="mt-2 text-muted-foreground">African Markets</p>
                </div>
                 <div>
                    <p className="text-4xl font-bold text-primary">$25M+</p>
                    <p className="mt-2 text-muted-foreground">Capital Facilitated</p>
                </div>
            </div>
          </div>
      </section>

      {/* What We Solve */}
      <section>
        <h2 className="text-3xl font-bold text-center">What We Solve</h2>
        <div className="mt-12 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {whatWeSolve.map((item) => (
                <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="size-6 text-primary mt-1 shrink-0" />
                    <p>{item}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Featured Solutions */}
      <section>
          <h2 className="text-3xl font-bold text-center">Featured Solutions</h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredSolutions.map((solution) => (
                  <Card key={solution.title}>
                      <CardHeader>
                          <CardTitle>{solution.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-muted-foreground mb-4">{solution.description}</p>
                          <Button asChild variant="link" className="p-0">
                            <Link href={solution.href}>Learn More <ArrowRight className="ml-2 size-4" /></Link>
                          </Button>
                      </CardContent>
                  </Card>
              ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg">
                <Link href="/services">See All Services</Link>
            </Button>
          </div>
      </section>

      {/* Recent Insights */}
      <section>
        <h2 className="text-3xl font-bold text-center">Recent Insights</h2>
        <div className="mt-12 grid gap-6">
            {recentInsights.map((insight) => (
              <div key={insight.title} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg">
                <div>
                  <h3 className="font-semibold text-lg">{insight.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{insight.date}</p>
                </div>
                <Button asChild variant="link" className="mt-2 sm:mt-0">
                  <Link href={insight.href}>Read More</Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline">
                <Link href="/insights">Read All Insights</Link>
            </Button>
          </div>
      </section>

      {/* Case Studies */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl font-bold">Case Studies</h2>
                <p className="mt-4 text-muted-foreground">
                    See how we’ve helped clients scale operations, attract catalytic funding, unlock compliance bottlenecks, and influence regulation across Africa.
                </p>
                <div className="mt-6 space-y-4">
                    {caseStudyHighlights.map((highlight) => (
                        <div key={highlight.text} className="flex items-start gap-4">
                            {highlight.icon}
                            <p className="pt-0.5">{highlight.text}</p>
                        </div>
                    ))}
                </div>
                <Button asChild className="mt-8">
                    <Link href="/case-studies">View Case Studies</Link>
                </Button>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                    src="/credcase.webp"
                    alt="Team in a meeting"
                    fill
                    className="object-cover"
                    data-ai-hint="business meeting"
                />
            </div>
        </section>
      
      {/* Trust & Impact */}
      <section className="text-center">
        <h2 className="text-3xl font-bold">Trust & Impact</h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-muted-foreground">
            <p><strong>10+ years</strong> shaping enterprises, cooperatives, and institutions</p>
            <p><strong>50+ clients</strong> and partners across government, finance, and civil society</p>
            <p><strong>8 African markets</strong> actively engaged</p>
            <p><strong>$25M+ capital</strong> facilitated for enterprises and social ventures</p>
        </div>
        <p className="mt-12 text-muted-foreground">
            <strong>Trusted by:</strong> Growth-stage startups, cooperative unions, fintech innovators, development partners, and public agencies.
        </p>
        <div className="mt-8">
            <Button asChild variant="outline">
                <Link href="/about#partners">Meet Our Partners</Link>
            </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-20 text-center rounded-lg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold">Let’s Shape Africa’s Growth Frontier Together</h2>
          <p className="mt-4 max-w-3xl mx-auto">
            Whether you are raising capital, structuring across borders, or navigating regulatory reform — Credence Africa is your trusted execution partner.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
             <a href="mailto:connect@credence.africa" className="flex items-center gap-2 hover:underline">
                <Mail /> <span>connect@credence.africa</span>
            </a>
            <a href="tel:+254719468240" className="flex items-center gap-2 hover:underline">
                <Phone /> <span>+254 719 468 240</span>
            </a>
          </div>
          <div className="mt-10 flex justify-center gap-4">
             <Button asChild size="lg" variant="secondary">
              <Link href="/consult">Book a Strategy Call</Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/consult">Send an Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
