import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Lightbulb,
  Scale,
  Shield,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Home() {
  const whatWeSolveItems = [
    "Capital and investment readiness for high-growth ventures",
    "Regulatory licensing and multi-agency compliance strategy",
    "Market entry across East Africa and diaspora re-entry structuring",
    "Cross-border tax and entity structuring",
    "Government relations, public policy tracking, and advocacy",
    "Monetization of IP, content, brand, and digital assets",
    "Succession, legacy, and trust planning for entrepreneurs and families",
  ];

  const featuredSolutions = [
    {
      title: "Capital Raising & Blended Finance",
      description:
        "Unlock capital and structure for impact across markets and mandates.",
      icon: TrendingUp,
      href: "/credence-consult/services",
    },
    {
      title: "Trade & Investment Structuring",
      description:
        "Enter markets confidently with strategic positioning and compliance.",
      icon: Briefcase,
      href: "/credence-consult/services",
    },
    {
      title: "Corporate Structuring & Tax Strategy",
      description:
        "Structure to scale, govern to endure, and optimize for generations.",
      icon: Scale,
      href: "/credence-consult/services",
    },
    {
      title: "IP Commercialization & Talent Strategy",
      description:
        "Protect your ideas, monetize your identity, and scale your influence.",
      icon: Lightbulb,
      href: "/credence-consult/services",
    },
    {
      title: "Regulatory Affairs & Public Policy",
      description:
        "Engage power, navigate policy, and shape the future of your industry.",
      icon: Shield,
      href: "/credence-consult/services",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-card-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Logo />
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
                  Credence Africa
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Strategic Advisory for Africa&apos;s Next Growth Frontier.
                  Smart insights. Practical execution. Structures that scale in
                  complexity and across borders.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/credence-consult/services">Explore Services</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/credence-consult/consult">
                    Book a Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="who-we-are"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Who We Are
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-card-foreground">
                  Architects of Opportunity
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Credence Africa is where strategy meets execution at
                  Africa&apos;s growth frontier. We are not just advisors — we
                  are architects of opportunity in complex markets. We operate
                  at the intersection of capital, governance, compliance, and
                  public affairs — helping businesses, governments, nonprofits,
                  and financial institutions navigate Africa’s opportunity
                  zones where risk meets scale.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        Growth Catalysts
                      </h3>
                      <p className="text-muted-foreground">
                        Unlocking capital, structuring entities, navigating
                        regulation, and scaling impact.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="h-8 w-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        Execution Partners
                      </h3>
                      <p className="text-muted-foreground">
                        Delivering actionable strategies that stand up to
                        scrutiny in high-complexity environments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="what-we-solve" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  What We Solve
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-card-foreground">
                  Navigating Complexity, Unlocking Growth
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We address the critical challenges that arise at the
                  intersection of capital, compliance, and scale in African
                  markets.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {whatWeSolveItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-card-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="featured-solutions"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Featured Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-card-foreground">
                  Integrated Advisory for Complex Challenges
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our core services are designed to provide seamless support
                  across the most critical areas of business and institutional
                  growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {featuredSolutions.map((solution, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <solution.icon className="h-8 w-8 text-primary" />
                      <CardTitle className="text-lg">
                        {solution.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {solution.description}
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="link" asChild className="p-0 h-auto">
                      <Link href={solution.href}>Learn more</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild>
                <Link href="/credence-consult/services">See All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-secondary border-t">
        <div className="container p-6 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Credence Africa. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}