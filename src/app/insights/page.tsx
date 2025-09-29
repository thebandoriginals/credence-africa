import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BarChart, Scale, FileText, Building, Globe, Landmark } from "lucide-react";
import Link from "next/link";

const categories = [
    { icon: <BarChart />, title: "Capital, Investment & Blended Finance", description: "Funding trends, investor mandates, and catalytic finance models." },
    { icon: <Scale />, title: "Regulatory, Compliance & Licensing", description: "Legislation updates, licensing pathways, and compliance navigation." },
    { icon: <Landmark />, title: "Policy, Public Affairs & Government Strategy", description: "Bills, policy reforms, ESG mandates, and advocacy intelligence." },
    { icon: <FileText />, title: "IP, Brand & Digital Asset Strategy", description: "IP monetization, NIL rights, and influencer strategy." },
    { icon: <Building />, title: "Corporate Structuring, Tax & Expansion", description: "Cross-border structuring, tax efficiency, and jurisdictional risk." },
    { icon: <Globe />, title: "Market Entry & Sector Intelligence", description: "Localization playbooks, sector outlooks, and trade updates." },
];

const recentInsights = [
    { title: "Navigating East Africa’s Evolving Tax Landscape", date: "28 May 2025" },
    { title: "IP Monetization Strategies for African Creators", date: "28 May 2025" },
    { title: "Blended Finance: Unlocking Capital for Climate Resilience", date: "25 May 2025" },
    { title: "Diaspora Investment and the Rise of Legacy Structuring", date: "25 May 2025" },
    { title: "The Real Cost of Compliance in 2025: What Regulators Are Watching", date: "25 May 2025" },
];


export default function InsightsPage() {
    return (
        <div className="py-16 lg:py-24">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Credence Insights</h1>
                <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Clarity that Powers Strategy. Intelligence that Shapes Action.</p>
                <p className="mt-4 max-w-4xl mx-auto">Credence Insights delivers expert briefings, regulatory intelligence, capital market updates, and sector-specific analysis for Africa-focused businesses, investors, and innovators.</p>
            </div>

            <section id="content-categories" className="mt-16">
                 <h2 className="text-3xl font-bold text-center mb-10">Content Categories</h2>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                     {categories.map(category => (
                         <Card key={category.title}>
                             <CardHeader className="flex-row gap-4 items-center">
                                <div className="text-primary">{category.icon}</div>
                                <CardTitle>{category.title}</CardTitle>
                             </CardHeader>
                             <CardContent>
                                 <p className="text-muted-foreground">{category.description}</p>
                             </CardContent>
                         </Card>
                     ))}
                 </div>
            </section>
            
            <section id="recent-insights" className="mt-24">
                <h2 className="text-3xl font-bold text-center mb-10">Recent Insights</h2>
                <div className="mt-10 grid gap-6">
                    {recentInsights.map((insight) => (
                      <div key={insight.title} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg">
                        <div>
                          <h3 className="font-semibold text-lg">{insight.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{insight.date}</p>
                        </div>
                        <Button asChild variant="link" className="mt-2 sm:mt-0">
                          <Link href="#">Read More</Link>
                        </Button>
                      </div>
                    ))}
                  </div>
            </section>

            <section id="subscribe" className="mt-24 bg-secondary py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold">Subscribe to the Credence Insights Briefing</h2>
                    <p className="mt-4 text-muted-foreground">Get strategic intelligence straight to your inbox.</p>
                    <form className="mt-8 max-w-md mx-auto flex gap-2">
                        <Input type="email" placeholder="Enter your email" className="flex-grow" />
                        <Button type="submit">Subscribe</Button>
                    </form>
                </div>
            </section>

        </div>
    );
}
