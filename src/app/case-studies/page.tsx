import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const featuredStudies = [
  "Unlocking Venture Capital for a Kenyan Mobility Startup",
  "Cross-Border IP Structuring for a Creative Tech Company",
  "Tax Optimization for an Agro-Export Business",
  "Regulatory Licensing for a Pan-African Fintech Platform",
];

export default function CaseStudiesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Case Studies</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">Strategy That Works. Results That Scale.</p>
        <p className="mt-4 max-w-4xl mx-auto">Explore how Credence Africa has supported businesses, governments, cooperatives, and digital ventures with practical, execution-ready advisory.</p>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-center mb-8">Featured Case Studies</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredStudies.map(study => (
            <Card key={study} className="bg-secondary">
              <CardContent className="p-6">
                <p className="font-semibold">{study}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
            <h2 className="text-3xl font-bold">Access Full Reports</h2>
            <p className="text-muted-foreground">Complete the form to unlock in-depth case study downloads and gain access to our full library of reports on strategy and execution in African markets.</p>
        </div>
        <Card className="p-8">
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="John Doe" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+254 123 456789" />
                </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
             <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="position">Position / Title</Label>
                    <Input id="position" placeholder="CEO" />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                    <Input id="linkedin" placeholder="linkedin.com/in/..." />
                </div>
            </div>
             <div className="space-y-2">
                <Label htmlFor="organization">Organization / Company Name (Optional)</Label>
                <Input id="organization" placeholder="Your Company Inc." />
            </div>
             <div className="space-y-2">
                <Label htmlFor="message">Message / Specific Areas of Interest (Optional)</Label>
                <Textarea id="message" placeholder="I'm interested in..." />
            </div>
            <Button type="submit" className="w-full" size="lg">Request Access</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
