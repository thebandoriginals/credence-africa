import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const categories = [
    "Cooperative Growth",
    "Mobility Transformation",
    "Capital & Investment",
    "Policy & Regulation",
    "Sector-Specific Trends",
];

const featuredInsights = [
    { title: "Navigating East Africa’s Tax Landscape", date: "28 May 2025" },
    { title: "IP Strategies for African Creatives", date: "28 May 2025" },
    { title: "Blended Finance for Climate Resilience", date: "25 May 2025" },
];

export default function InsightsPage() {
  return (
    <div className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Insights for Africa’s Future
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Expert analysis on cooperatives, mobility, policy, and more.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-1/4">
                    <h3 className="font-bold text-lg mb-4">Categories</h3>
                    <div className="flex flex-wrap md:flex-col gap-2">
                        {categories.map(cat => (
                            <Button key={cat} variant="ghost" className="justify-start">{cat}</Button>
                        ))}
                    </div>
                </aside>
                <main className="w-full md:w-3/4">
                    <h2 className="text-3xl font-bold mb-8">Featured Insights</h2>
                    <div className="grid grid-cols-1 gap-8">
                        {featuredInsights.map(insight => (
                            <Card key={insight.title}>
                                <CardHeader>
                                    <CardTitle>{insight.title}</CardTitle>
                                    <CardDescription>{insight.date}</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button asChild variant="link" className="p-0">
                                        <Link href="#">Read More</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </main>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Insights
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Get strategic updates in your inbox.
          </p>
          <form className="flex max-w-md mx-auto gap-2">
            <Input type="email" placeholder="Your email address" className="flex-grow"/>
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>

    </div>
  );
}
