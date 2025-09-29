import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const categories = [
  "Capital, Investment & Blended Finance",
  "Regulatory, Compliance & Licensing",
  "Policy, Public Affairs & Government Strategy",
  "IP, Brand & Digital Asset Strategy",
  "Corporate Structuring, Tax & Expansion",
  "Market Entry & Sector Intelligence",
];

const recentInsights = [
    {
      title: "Navigating East Africa's Evolving Tax Landscape",
      date: "28 May 2025",
      href: "#",
      category: "Regulatory, Compliance & Licensing"
    },
    {
      title: "IP Monetization Strategies for African Creators",
      date: "28 May 2025",
      href: "#",
      category: "IP, Brand & Digital Asset Strategy"
    },
    {
      title: "Blended Finance: Unlocking Capital for Climate Resilience",
      date: "25 May 2025",
      href: "#",
      category: "Capital, Investment & Blended Finance"
    },
    {
      title: "Diaspora Investment and the Rise of Legacy Structuring",
      date: "25 May 2025",
      href: "#",
      category: "Corporate Structuring, Tax & Expansion"
    },
    {
      title: "The Real Cost of Compliance in 2025: What Regulators Are Watching",
      date: "25 May 2025",
      href: "#",
      category: "Regulatory, Compliance & Licensing"
    },
     {
      title: "Market Entry Playbook for West Africa",
      date: "24 May 2025",
      href: "#",
      category: "Market Entry & Sector Intelligence"
    },
  ];


export default function InsightsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Insights
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Clarity that Powers Strategy. Intelligence that Shapes Action.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          In a fast-shifting regulatory, financial, and investment landscape,
          staying ahead means more than reading headlines—it means decoding
          complexity and translating insight into strategic moves. Credence
          Insights delivers expert briefings, regulatory intelligence, capital
          market updates, and sector-specific analysis designed for
          Africa-focused businesses, investors, policy actors, and innovators.
        </p>
      </section>

      <section className="mt-12 md:mt-16">
          <div className="bg-secondary p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tighter text-card-foreground">Subscribe to the Credence Insights Briefing</h2>
                        <p className="text-muted-foreground mt-2">Get strategic intelligence, not just information—straight to your inbox.</p>
                    </div>
                    <form className="flex gap-2">
                        <Input type="email" placeholder="Your email address" className="flex-grow"/>
                        <Button type="submit">Subscribe</Button>
                    </form>
              </div>
          </div>
      </section>


      <section className="mt-12 md:mt-16">
        <div className="grid md:grid-cols-4 gap-8">
            <aside className="md:col-span-1">
                <h3 className="font-semibold text-lg">Content Categories</h3>
                <ul className="mt-4 space-y-2">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <Link href="#" className="text-muted-foreground hover:text-primary">{cat}</Link>
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="md:col-span-3">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {recentInsights.map((insight, index) => (
                        <Card key={index} className="flex flex-col">
                        <CardHeader>
                            <p className="text-sm text-primary font-medium">{insight.category}</p>
                            <CardTitle className="text-xl font-semibold">{insight.title}</CardTitle>
                            <p className="text-sm text-muted-foreground">{insight.date}</p>
                        </CardHeader>
                        <CardContent className="flex-grow"/>
                        <div className="p-6 pt-0">
                            <Button variant="link" asChild className="p-0 h-auto">
                            <Link href={insight.href}>Read more</Link>
                            </Button>
                        </div>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
      </section>
    </div>
  );
}
