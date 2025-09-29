import { Button } from "@/components/ui/button";
import { BarChart, Building, FileText, Globe, Scale } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "capital-raising",
    icon: <BarChart className="size-10 text-primary" />,
    title: "Capital Raising & Blended Finance",
    description: "Unlock capital and structure for impact across markets. We design investment-ready pipelines, mobilize blended finance, and connect clients with DFIs, private equity, banks, and philanthropic funders.",
    details: [
      "Capital stack structuring & investment readiness",
      "Blended finance strategy & donor capital positioning",
      "Financial modeling & investor documentation",
      "Capital access facilitation & deal advisory",
    ]
  },
  {
    id: "public-affairs",
    icon: <Scale className="size-10 text-primary" />,
    title: "Public Affairs & Advocacy",
    description: "Shape policy, structure influence, and strengthen institutions. We provide regulatory navigation, compliance strategy, government relations, and advocacy campaigns.",
    details: [
      "Regulatory navigation & compliance strategy",
      "Government relations & institutional engagement",
      "Public policy consulting & legislative development",
      "Advocacy campaigns & influence strategy",
    ]
  },
  {
    id: "trade-investment",
    icon: <Globe className="size-10 text-primary" />,
    title: "Trade & Investment Structuring",
    description: "Enter markets confidently with strategic positioning and compliance. We support cross-border structuring, investment facilitation, and trade ecosystem alignment.",
    details: [
      "Market entry & localization strategy",
      "Licensing, permitting, & regulatory navigation",
      "Market intelligence & investment scanning",
      "Trade, incentives, & policy facilitation",
      "Diaspora market re-entry structuring",
    ]
  },
  {
    id: "enterprise-architecture",
    icon: <Building className="size-10 text-primary" />,
    title: "Enterprise Architecture & Transformation Strategy",
    description: "Design institutions, engineer growth, and structure impact. We build legal, financial, and governance frameworks for startups, cooperatives, and mission-driven organizations.",
    details: [
      "Strategic structuring & investment readiness",
      "Mission-aligned structuring for faith-based & public benefit institutions",
      "Legacy & intergenerational transition planning",
      "Institutional turnaround & governance redesign",
      "Program design & scalable delivery models",
    ]
  },
  {
    id: "ip-commercialization",
    icon: <FileText className="size-10 text-primary" />,
    title: "IP Commercialization, Brand & Talent Strategy",
    description: "Protect ideas, monetize identity, and scale influence. We help creators and enterprises structure IP portfolios, negotiate deals, and build revenue-generating models.",
    details: [
      "IP strategy, protection, & ownership structuring",
      "Licensing, franchising, & revenue modeling",
      "Talent & influencer deal structuring",
      "Digital monetization strategy",
      "IP-based wealth structuring & estate planning",
    ]
  },
];

export default function ServicesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Strategic. Sector-Driven. Built for Execution.</p>
        <p className="mt-4 max-w-4xl mx-auto">At Credence Africa, we design the strategic infrastructure that turns ambition into institution. Our services are tailored for enterprises, cooperatives, nonprofits, public benefit actors, and governments navigating complexity, unlocking capital, and driving sustainable transformation.</p>
      </div>

      <div className="mt-16 grid gap-20">
        {services.map(service => (
          <div key={service.id} id={service.id} className="grid md:grid-cols-2 gap-12 scroll-mt-24 items-center">
            <div className="space-y-4">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  {service.icon}
                  <h2 className="text-2xl font-semibold mt-4">{service.title}</h2>
                </div>
              <p className="text-muted-foreground text-center md:text-left">{service.description}</p>
              <div className="flex justify-center md:justify-start">
                  <Button asChild className="mt-4">
                    <Link href="/consult">Book a Consultation</Link>
                  </Button>
              </div>
            </div>
            <div>
              <ul className="space-y-3">
                {service.details.map(detail => (
                  <li key={detail} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
