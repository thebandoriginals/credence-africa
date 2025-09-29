import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Briefcase, CheckCircle, HeartHandshake, LandPlot, Lightbulb, LineChart, Mail, Phone, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const whatWeDo = [
    {
        icon: <LineChart className="w-8 h-8 text-primary" />,
        title: "Consult",
        description: "Strategic advisory for scaling businesses and institutions.",
        href: "/what-we-do#consult",
    },
    {
        icon: <Users className="w-8 h-8 text-primary" />,
        title: "Cooperatives",
        description: "Strengthening governance and capital access for cooperatives.",
        href: "/what-we-do#cooperatives",
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-primary" />,
        title: "Faith-Based",
        description: "Building mission-aligned, sustainable ventures for faith-based groups.",
        href: "/what-we-do#faith-based",
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M10 17h4V5h-4v12Zm-6 0h4V5H4v12Zm12 0h4V5h-4v12Z"/></svg>,
        title: "Mobility",
        description: "Advancing smart, cooperative-led transport and logistics solutions.",
        href: "/sectors/mobility",
    },
    {
        icon: <LandPlot className="w-8 h-8 text-primary" />,
        title: "Non-Profit",
        description: "Enhancing impact and sustainability for NGOs.",
        href: "/what-we-do#non-profit",
    },
    {
        icon: <CheckCircle className="w-8 h-8 text-primary" />,
        title: "Public Affairs",
        description: "Shaping policy and navigating regulatory landscapes.",
        href: "/what-we-do#public-affairs",
    },
];

const insights = [
  { title: "Navigating East Africa’s Evolving Tax Landscape", date: "28 May 2025" },
  { title: "IP Monetization Strategies for African Creators", date: "28 May 2025" },
  { title: "Blended Finance: Unlocking Capital for Climate Resilience", date: "25 May 2025" },
  { title: "Diaspora Investment and the Rise of Legacy Structuring", date: "25 May 2025" },
  { title: "The Real Cost of Compliance in 2025: What Regulators Are Watching", date: "25 May 2025" },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-home");
  const whoWeAreImage = PlaceHolderImages.find((img) => img.id === "about-intro");
  const caseStudyImage = PlaceHolderImages.find((img) => img.id === "case-studies-intro");

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Credence Africa — Strategic Advisory for Africa&apos;s Next Growth Frontier
          </h1>
          <p className="text-lg md:text-xl font-light mb-8">
            Smart insights. Practical execution. Structure that scales in complexity and across borders.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/what-we-do">Explore What We Do</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/consult">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Credence Africa is a pan-African strategic advisory and social enterprise platform. We work at the intersection of capital, governance, compliance, and public affairs — helping businesses, governments, nonprofits, and financial institutions navigate Africa’s opportunity zones where risk meets scale.
            </p>
            <Button asChild variant="link" className="p-0 text-lg">
              <Link href="/about">Our Full Story <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
          {whoWeAreImage && (
             <div className="relative h-80 rounded-lg overflow-hidden">
                <Image
                    src={whoWeAreImage.imageUrl}
                    alt={whoWeAreImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={whoWeAreImage.imageHint}
                />
            </div>
          )}
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground mb-12">
            From strategic consulting to transformative mobility solutions, we deliver tailored services for cooperatives, faith-based organizations, nonprofits, and more, driving impact across Africa’s complex markets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {whatWeDo.map((service) => (
                <div key={service.title} className="bg-card p-6 rounded-lg shadow-md flex flex-col">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <Button asChild variant="link" className="p-0 justify-start">
                        <Link href={service.href}>Learn more</Link>
                    </Button>
                </div>
            ))}
          </div>
           <div className="mt-12">
              <Button asChild size="lg">
                <Link href="/what-we-do">See All Services</Link>
              </Button>
          </div>
        </div>
      </section>

      {/* Recent Insights Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.slice(0,3).map((insight) => (
                <div key={insight.title} className="bg-card p-6 rounded-lg shadow-md">
                    <Lightbulb className="w-8 h-8 text-primary mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">{insight.date}</p>
                    <h3 className="font-bold mb-4">{insight.title}</h3>
                    <Button asChild variant="link" className="p-0">
                        <Link href="/insights">Read more</Link>
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
        <section className="py-16 md:py-24 bg-secondary">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                 {caseStudyImage && (
                    <div className="relative h-96 rounded-lg overflow-hidden">
                        <Image
                            src={caseStudyImage.imageUrl}
                            alt={caseStudyImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={caseStudyImage.imageHint}
                        />
                    </div>
                )}
                <div className="text-center md:text-left">
                    <Briefcase className="w-12 h-12 text-primary mb-4 mx-auto md:mx-0"/>
                    <h2 className="text-3xl font-bold mb-4">Our Case Studies</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        See how we’ve helped clients scale operations, attract funding, and navigate compliance across Africa.
                    </p>
                    <Button asChild size="lg">
                        <Link href="/case-studies">View Case Studies</Link>
                    </Button>
                </div>
            </div>
      </section>

      {/* Trust & Impact Section */}
      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-12">Trust & Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary">10+</p>
              <p className="text-lg text-muted-foreground mt-2">
                Years Shaping Enterprises
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary">50+</p>
              <p className="text-lg text-muted-foreground mt-2">
                Clients Served
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary">8</p>
              <p className="text-lg text-muted-foreground mt-2">
                African Markets
              </p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-primary">$25M+</p>
              <p className="text-lg text-muted-foreground mt-2">
                Capital Facilitated
              </p>
            </div>
          </div>
           <p className="mt-12 max-w-2xl mx-auto text-muted-foreground">Trusted by startups, cooperatives, fintechs, development partners, and public agencies.</p>
          <div className="mt-8">
            <Button asChild variant="link" className="text-lg">
              <Link href="/about#partners">Meet Our Partners <ArrowRight className="ml-2 h-5 w-5"/></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Shape Africa’s Growth Frontier Together</h2>
          <p className="text-lg max-w-3xl mx-auto mb-8">
            Whether raising capital, structuring ventures, or transforming mobility, Credence Africa is your trusted partner.
          </p>
           <div className="flex justify-center items-center gap-6 text-lg mb-8">
             <Link href="mailto:connect@credence.africa" className="flex items-center gap-2 hover:underline">
                <Mail className="h-5 w-5" />
                connect@credence.africa
             </Link>
             <Link href="tel:+254719468240" className="flex items-center gap-2 hover:underline">
                <Phone className="h-5 w-5" />
                +254 719 468 240
             </Link>
           </div>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consult">Book a Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contact">Send an Inquiry</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
