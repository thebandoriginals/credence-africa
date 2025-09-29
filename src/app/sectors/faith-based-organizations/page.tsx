import { Card, CardContent } from "@/components/ui/card";
import { Check, Shield, Handshake, Landmark, HandHelping, Users, HeartHand, Monitor, Swords, School, CircleDollarSign, Church } from "lucide-react";

export default function FaithBasedOrganizationsPage() {
  const interventions = [
    { icon: <Shield className="size-8 text-primary" />, title: "Faith Governance & Accountability", text: "Strengthening leadership with systems for financial transparency and ethical stewardship." },
    { icon: <Handshake className="size-8 text-primary" />, title: "Faith Ventures Structuring", text: "Designing social enterprises to reduce reliance on donations." },
    { icon: <Landmark className="size-8 text-primary" />, title: "Endowment & Asset Management", text: "Establishing funds and trusts for long-term financial security." },
    { icon: <HandHelping className="size-8 text-primary" />, title: "Community Service & Social Impact", text: "Scaling faith-driven service delivery in education, healthcare, and welfare." },
    { icon: <Users className="size-8 text-primary" />, title: "Faith & Public Policy Dialogues", text: "Supporting leaders to engage civic processes and promote ethical politics." },
    { icon: <HeartHand className="size-8 text-primary" />, title: "Safeguarding & Protection Frameworks", text: "Building systems to protect children, women, and vulnerable groups." },
    { icon: <Monitor className="size-8 text-primary" />, title: "Faith Sector Digital Transformation", text: "Supporting adoption of digital tools for modern ministry." },
    { icon: <Swords className="size-8 text-primary" />, title: "Conflict Mediation & Peacebuilding", text: "Training faith leaders to mediate disputes and advance interfaith harmony." },
    { icon: <School className="size-8 text-primary" />, title: "Civic Education Through Faith", text: "Leveraging faith platforms to teach values of justice and responsible citizenship." },
    { icon: <CircleDollarSign className="size-8 text-primary" />, title: "Faith-Based Finance & Cooperatives", text: "Structuring SACCOs and insurance schemes to empower members economically." },
  ];

  const impactPathways = [
    "Transparent, financially sustainable institutions stewarding resources with integrity.",
    "Faith leaders as credible governance actors shaping public discourse.",
    "Professionalized delivery of education, healthcare, and social services.",
    "Reduced vulnerability to financial mismanagement and donor-dependency.",
    "Stronger protection systems for children, women, and marginalized groups.",
    "Digitally enabled religious organizations with modern systems.",
    "Faith institutions as economic engines through ventures and cooperatives.",
    "Strengthened peace, justice, and civic engagement anchored in faith traditions."
  ];

  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <div className="flex justify-center mb-4">
          <Church className="size-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Faith-Based Organizations</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold text-center">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground max-w-4xl mx-auto">
          <p>We partner with churches, mosques, temples, and interfaith networks to evolve from fragile, donation-reliant models into professional, transparent, and economically resilient institutions. Faith-based organizations hold unmatched influence in Africa’s social fabric—yet many remain vulnerable to financial fragility, weak governance, and limited capacity to scale their community impact.</p>
          <p>Our work restores credibility and sustainability to religious institutions by embedding governance reforms, financial stewardship, social enterprise structuring, and civic engagement strategies. In doing so, we position faith communities not only as spiritual anchors but as drivers of Africa’s inclusive growth, ethical leadership, and institutional renewal.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {interventions.map(item => (
                 <Card key={item.title}>
                    <CardContent className="p-6">
                        <div className="mb-4">{item.icon}</div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        <p className="mt-2 text-muted-foreground">{item.text}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactPathways.map((item, index) => (
                <Card key={index}>
                    <CardContent className="p-6 flex items-start gap-4">
                        <Check className="size-6 text-primary mt-1 shrink-0" />
                        <p>{item}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>
    </div>
  );
}
