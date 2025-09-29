import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const featuredStudies = [
    "Unlocking Capital for a Kenyan TransCoop",
    "Scaling a Cooperative via Coop Innovate Labs",
    "Regulatory Strategy for a Fintech Startup",
    "Policy Reform for County Transport Systems",
];

export default function CaseStudiesPage() {
  return (
    <div className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Real Results, Real Impact
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            See how we’ve empowered cooperatives, mobility ventures, and
            businesses across Africa.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredStudies.map((study) => (
                <Card key={study}>
                    <CardHeader>
                        <CardTitle>{study}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button variant="link" className="p-0">Read More</Button>
                    </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container grid md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-3xl font-bold mb-4">Access Full Reports</h2>
                <p className="text-muted-foreground">Unlock in-depth case studies with a quick form.</p>
            </div>
            <Card>
                <CardContent className="p-6">
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Your Name" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="Your Email" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" placeholder="Your Phone Number" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="organization">Organization (optional)</Label>
                            <Input id="organization" placeholder="Your Organization" />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="linkedin">LinkedIn URL</Label>
                            <Input id="linkedin" placeholder="https://linkedin.com/in/..." />
                        </div>
                        <Button type="submit" className="w-full">Request Access</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}