import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const services = [
  {
    id: "capital-raising",
    title: "Capital Raising & Blended Finance Advisory",
    subtitle: "Unlock Capital. Engineer Impact. Bridge Markets.",
    description: "At Credence Africa, we help organizations navigate the evolving capital landscape across Africa—where financing is no longer just about access, but alignment. We support enterprises, cooperatives, public entities, and social ventures to structure and secure the right mix of funding—from concessional finance and catalytic grants to equity, guarantees, and blended capital—designed to scale impact and meet today’s complex mandates.",
    capabilities: [
      {
        title: "Capital Stack Structuring & Investment Readiness",
        points: [
            "Design layered financing models: equity, concessional debt, mezzanine, guarantees, and grant capital",
            "Align your financing strategy with business model maturity, sector requirements, and institutional growth plans",
            "Create governance and compliance frameworks tailored for blended finance and mission-driven investment",
        ],
      },
      {
        title: "Blended Finance Strategy & Donor Capital Positioning",
        points: [
             "Structure fundable proposals that match the logic of DFIs, climate funds, philanthropic capital, and sovereign platforms",
             "Map and navigate capital flows linked to thematic mandates—climate, gender, agri, education, health, and mobility",
             "Engage development platforms like GCF, FSD Africa, AfDB, IFC, BII, and catalytic donor-backed facilities",
        ]
      },
       {
        title: "Financial Modelling & Investor Documentation",
        points: [
             "Build dynamic financial models with stress testing, return simulations, and milestone-based forecasting",
             "Prepare complete investment collateral: use-of-funds memos, theory of change, impact metrics, ESG positioning",
             "Support due diligence readiness: virtual data rooms, governance policies, risk frameworks, and audit alignment",
        ]
      },
      {
        title: "Capital Access Facilitation & Deal Advisory",
        points: [
            "Connect ventures with a curated network of VCs, DFIs, PE firms, catalytic funders, donor partners, and PPP windows",
            "Support pipeline development for fund managers, accelerators, and investment promotion agencies",
            "Advise on deal structuring, valuations, cap table strategies, and investor negotiation dynamics",
        ]
      }
    ],
    whoWeServe: [
        "SACCOs, Credit Unions & Investment Cooperatives seeking long-term capital beyond member deposits",
        "Digital Financial Services (DFS) Platforms & Fintechs scaling infrastructure and embedded finance models",
        "Social Enterprises, Impact Startups & Hybrid Ventures seeking values-aligned capital across blended models",
        "County Governments, PPP Units & Public Entities financing infrastructure, climate resilience, and service delivery",
        "Microfinance Institutions (MFIs) entering underserved or climate-aligned markets",
        "Fund Managers & Impact Investment Platforms developing pipelines, designing blended portfolios, or syndicating deals",
        "Diaspora Foundations & Philanthropic Ventures structuring capital with legacy, social, or cross-border focus",
    ],
    whyUs: "In Africa’s capital landscape, success depends not just on having a strong vision—but on structuring it in a way investors, donors, and catalytic funders can trust. Credence Africa brings the technical acumen, policy insight, and ecosystem fluency required to de-risk your structure, align your model with capital mandates, translate your impact into investor-ready language, and connect you to real capital opportunities. We don’t just help you raise funds. We help you raise the right capital—with structure, credibility, and purpose."
  },
  {
    id: "public-affairs",
    title: "Public Affairs & Advocacy Advisory",
    subtitle: "Engage Power. Navigate Policy. Shape Systems.",
    description: "At Credence Africa, we offer a full-spectrum public affairs advisory practice that supports enterprises, cooperatives, public institutions, development partners, and civil society organizations in navigating Africa’s complex policy, regulatory, and institutional terrain. We equip our clients to not only comply with public systems—but to shape them.",
    capabilities: [
        {
            title: "Regulatory Navigation and Compliance Strategy",
            points: [
                "Mapping legal and regulatory obligations across government ministries, agencies, and counties",
                "Advising on licensing, permits, and operating frameworks in finance, healthcare, mobility, agriculture, and technology",
                "Developing corporate compliance programs with emphasis on anti-money laundering, counter-terrorism, and anti-corruption measures",
            ]
        },
        {
            title: "Government Relations and Institutional Engagement",
            points: [
                 "Developing formal liaison protocols and public sector engagement strategies",
                 "Facilitating relationship-building with government actors, regulatory officials, and legislative institutions",
            ]
        },
        {
            title: "Public Policy Consulting and Legislative Development",
            points: [
                "Tracking legislation, analyzing political trends, and monitoring regulatory developments",
                "Drafting white papers, legislative proposals, regulatory frameworks, and public submissions",
            ]
        }
    ],
     whoWeServe: [
        "Development Finance Institutions and Bilateral Agencies supporting regulatory reform and enabling environments",
        "NGOs, Foundations, and Think Tanks working on social justice, inclusive growth, and democratic governance",
        "Startups, Fintechs, and Digital Platforms facing emerging or ambiguous regulatory challenges",
        "Faith-Based and Public Benefit Organizations influencing public services, policy, and community development",
    ],
    whyUs: "In Africa, policy outcomes are shaped not only by law—but by timing, relationships, communication, and credibility. We bring together a multidisciplinary team of public affairs specialists, compliance professionals, political strategists, and legal advisors to provide a one-stop solution for navigating public systems. Our advisory combines legal depth with strategic foresight, offering both technical design and real-world implementation capacity. If you need to shape the system—not just survive it—we help you lead from the front."
  },
  {
    id: "trade-investment",
    title: "Trade & Investment Advisory",
    subtitle: "Enter Markets Confidently. Build Strategically. Comply Seamlessly.",
    description: "Africa’s opportunity is real but rarely simple. Growth is regional, fragmented, and policy-bound. At Credence Africa, we work with businesses, cooperatives, social enterprises, development investors, and diaspora leaders to translate ambition into intelligent, compliant, and sustainable expansion.",
    capabilities: [
      {
        title: "Market Entry & Localization Strategy",
        points: ["Tailored entry blueprints aligned to your business model, sector, and target geography", "Entity structuring guidance: subsidiary, branch, JV, SPV, holding company, franchise"]
      },
       {
        title: "Licensing, Permitting & Regulatory Navigation",
        points: ["Sector-specific regulatory mapping for fintech, healthcare, manufacturing, energy, and logistics", "Navigation of multi-agency approvals at national and county levels"]
      },
      {
        title: "Diaspora Market Re-Entry Structuring",
        points: ["Design of bankable structures for diaspora-led businesses, real estate ventures, and family enterprises", "Legal frameworks for land ownership, succession planning, repatriation, and shareholding design"]
      },
    ],
    whoWeServe: [
        "Multinationals & Corporates entering African markets with complex compliance requirements",
        "Diaspora Entrepreneurs & HNWIs establishing regulated or asset-backed ventures",
        "Regulated Startups & Tech Platforms preparing for formal market launch",
    ],
     whyUs: "Because entering a new market is never just about potential it’s about precision. At Credence Africa, we bring together legal and regulatory foresight, investment structuring intelligence, sector-specific route-to-market strategy, and a strong public-private interface across Africa’s investment ecosystem. We clear pathways. While others hand you compliance lists, we deliver roadmaps, relationships, and results helping you move faster, scale smarter, and stay ahead of the curve."
  },
   {
    id: "enterprise-architecture",
    title: "Enterprise Architecture & Transformation Strategy",
    subtitle: "Designing Institutions. Engineering Growth. Structuring Impact.",
    description: "At Credence Africa, we don’t deliver templates—we build institutions. We design the legal, financial, and governance architecture that enables Africa’s next-generation enterprises and mission-led organizations to scale with integrity, compete with clarity, and endure with purpose.",
    capabilities: [
      {
        title: "Strategic Structuring & Investment Readiness",
        points: [
            "Multi-jurisdictional entity structuring (Kenya, Mauritius, Dubai, BVI, Delaware)",
            "Cap table design, ESOPs, cooperative trading shares, and listing strategy",
        ]
      },
      {
        title: "Mission-Aligned Structuring for Faith-Based & Public Benefit Institutions",
        points: [
            "Hybrid legal structures for dual-purpose institutions (schools, clinics, training centers, media arms)",
            "Governance firewalls, donor-aligned revenue separation, and compliance safeguards",
        ]
      },
       {
        title: "Legacy & Intergenerational Transition Planning",
        points: [
            "Founder exit strategy, SME succession, and cooperative governance transition",
            "Estate planning, family trust structuring, and diaspora-aligned ownership models",
        ]
      },
    ],
    whoWeServe: [
        "Startups & Growth-Stage SMEs",
        "Cooperatives & TransCoops",
        "Nonprofits, NGOs & PBOs",
        "Faith-Based Institutions & Religious Enterprises",
        "Family Enterprises & Diaspora Ventures"
    ],
     whyUs: "Because transformation in Africa is not theoretical it’s operational, political, and deeply institutional. We bring legal, capital, and governance structuring under one roof, institutional fluency across public, private, and mission-driven sectors, and context-aware strategy that withstands political shifts, donor fatigue, and founder transitions. At Credence Africa, we help you build the kind of institution that earns trust, attracts investment, and delivers impact—not just today, but for generations to come."
  },
   {
    id: "ip-commercialization",
    title: "IP Commercialization, Brand & Talent Strategy",
    subtitle: "Protect Your Ideas. Monetize Your Identity. Scale Your Influence.",
    description: "In today’s creator-led, digital-first economy, intellectual property is capital—and talent is a business. At Credence Africa, we help innovators, artists, public figures, and media entrepreneurs structure their creative and reputational assets into revenue-generating enterprises.",
    capabilities: [
      {
        title: "IP Strategy, Protection & Ownership Structuring",
        points: [
             "Register and enforce IP portfolios: trademarks, copyrights, industrial designs, patents, and NIL (Name, Image, Likeness) rights",
             "Structure ownership of creative works, collaborations, and commissioned content",
        ]
      },
       {
        title: "Licensing, Franchising & Revenue Modeling",
        points: [
            "Draft and negotiate licensing, merchandising, and royalty agreements",
            "Structure franchising models for growing product or content brands",
        ]
      },
       {
        title: "Talent & Influencer Deal Structuring",
        points: [
            "Negotiate endorsement, sponsorship, and co-branding agreements",
            "Conduct brand safety checks and risk audits for public partnerships",
        ]
      },
    ],
    whoWeServe: [
        "Influencers, Athletes, Musicians, and Public Figures monetizing their name, image, and creative content",
        "Agencies, Studios & Media Entrepreneurs building IP-backed digital or entertainment platforms",
        "Fashion, Gaming, and Creative Startups scaling brand IP, product lines, and licensing deals",
    ],
     whyUs: "Most people create. Few structure. We offer the legal, commercial, and tax frameworks that convert influence into infrastructure—and creativity into capital. Whether you’re building a business around your voice, name, art, brand, or technology—Credence Africa is your strategic partner in protecting, positioning, and monetizing your intellectual power."
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Our Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Strategic. Sector-Driven. Built for Execution.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          At Credence Africa, we design the strategic infrastructure that turns
          ambition into institution. Our services are tailored for enterprises,
          cooperatives, nonprofits, public benefit actors, and governments
          working at the forefront of Africa’s transformation.
        </p>
      </section>

      <div className="mt-16 md:mt-24 space-y-16">
        {services.map((service) => (
          <section id={service.id} key={service.id} className="scroll-mt-24">
            <div className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
                {service.title}
                </h2>
                <p className="mt-2 font-semibold">{service.subtitle}</p>
                <p className="mt-4 text-muted-foreground">
                {service.description}
                </p>

                <div className="mt-8">
                    <h3 className="font-bold text-xl mb-4">Our Core Capabilities</h3>
                    <Accordion type="single" collapsible className="w-full">
                        {service.capabilities.map((capability, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger>{capability.title}</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                        {capability.points.map((point, i) => <li key={i}>{point}</li>)}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                 <div className="mt-8">
                    <h3 className="font-bold text-xl mb-4">Who We Serve</h3>
                     <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        {service.whoWeServe.map((client, i) => <li key={i}>{client}</li>)}
                    </ul>
                </div>
                <div className="mt-8 bg-secondary p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-2">Why Credence Africa?</h3>
                    <p className="text-muted-foreground">{service.whyUs}</p>
                </div>
            </div>
          </section>
        ))}
      </div>

       <section className="mt-16 md:mt-24 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                Let’s Build the Future of African Business Together
            </h2>
            <p className="mx-auto max-w-xl mt-4 text-muted-foreground">
                From launching a startup to unlocking capital, from navigating policy to structuring for scale—Credence Africa is your execution partner.
            </p>
            <div className="mt-8 flex justify-center gap-4">
                <Button asChild size="lg">
                    <Link href="/credence-consult/consult">Book a Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <a href="#">Download Our Service Guide</a>
                </Button>
            </div>
             <div className="mt-8 text-muted-foreground">
                  <p>
                    Visit us: credence.africa/credence-consult
                    <span className="mx-2">|</span>
                    <a href="mailto:connect@credence.africa" className="hover:text-primary">connect@credence.africa</a>
                    <span className="mx-2">|</span>
                    <a href="tel:+254719468240" className="hover:text-primary">+254 719 468 240</a>
                  </p>
                </div>
        </section>
    </div>
  );
}
