import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Handshake, Mic, School, Church, HeartPulse, Bus, Users, Laptop, Briefcase, Building, Plane } from "lucide-react";
import Link from "next/link";

const sectors = [
    { icon: <Leaf />, name: "Agriculture & Food", description: "Enhancing agribusiness operations, supply chain efficiency, and climate-smart farming." },
    { icon: <Handshake />, name: "Cooperatives & Social Economy", description: "Strengthening governance, leadership, and financial sustainability." },
    { icon: <Mic />, name: "Creative & Digital Economy", description: "Supporting artists, digital entrepreneurs, and content creators with commercialization and IP protection." },
    { icon: <School />, name: "Education & Skills Development", description: "Equipping educators and policymakers with modern strategies in curriculum and institutional leadership." },
    { icon: <Church />, name: "Faith-Based Organizations", description: "Providing governance, fundraising, and community impact strategies." },
    { icon: <HeartPulse />, name: "Healthcare & Wellness", description: "Improving healthcare management, financing, and digital health solutions." },
    { icon: <Plane />, name: "Hospitality & Tourism", description: "Driving sustainable tourism and business growth strategies." },
    { icon: <Bus />, name: "Mobility & Logistics", description: "Advancing smart transport, sustainable mobility, and logistics solutions." },
    { icon: <Users />, name: "Non-Profit Sector", description: "Strengthening impact measurement, fundraising, and governance." },
    { icon: <Building />, name: "Public Sector & Governance", description: "Enhancing policy development, regulatory frameworks, and governance efficiency." },
    { icon: <Briefcase />, name: "SMEs & Startups", description: "Providing business model innovation, funding access, and scaling strategies." },
    { icon: <Laptop />, name: "Technology & Digital Economy", description: "Driving innovation in fintech, AI, blockchain, and digital transformation." },
];

export default function SectorsPage() {
    return (
        <div className="py-16 lg:py-24 mx-auto lg:w-85">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Sectors We Serve</h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">At Credence Africa, our work spans multiple sectors where social enterprise, policy reform, and capital access intersect.</p>
                <p className="mt-4 max-w-4xl mx-auto">Each intervention builds resilient institutions, drives inclusive growth, and creates measurable impact.</p>
            </div>

            <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sectors.map(sector => (
                    <Card key={sector.name} id={sector.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')} className="flex flex-col">
                        <CardHeader className="flex-row items-center gap-4 space-y-0">
                            <div className="text-primary">{sector.icon}</div>
                            <CardTitle>{sector.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{sector.description}</p>
                            <Button asChild variant="link" className="p-0 mt-4">
                                <Link href="/consult">Learn More</Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <section className="mt-24 bg-secondary py-16 text-center">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold">Why Partner with Credence Africa?</h2>
                    <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <h3 className="font-semibold text-lg">Expert-Led Insights</h3>
                            <p className="text-muted-foreground mt-2">Work with seasoned industry experts, legal professionals, and policymakers.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Tailored Solutions</h3>
                            <p className="text-muted-foreground mt-2">Customized interventions addressing unique sectoral challenges.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Innovative Approaches</h3>
                            <p className="text-muted-foreground mt-2">Africa-centric strategies blending global best practices.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Measurable Impact</h3>
                            <p className="text-muted-foreground mt-2">Outcomes that drive growth, resilience, and transformation.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="mt-24 text-center">
                 <h2 className="text-3xl font-bold">Let’s Shape the Future Together</h2>
                 <div className="mt-6 flex justify-center items-center gap-6">
                    <p>📧 connect@credence.africa</p>
                    <p>☎️ +254 719 468 240</p>
                 </div>
                 <Button asChild size="lg" className="mt-8">
                    <Link href="/consult">Book a Strategy Call</Link>
                 </Button>
            </section>
        </div>
    );
}
