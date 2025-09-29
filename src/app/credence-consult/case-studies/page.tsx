import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const featuredCaseStudies = [
  "Unlocking Venture Capital for a Kenyan Mobility Startup",
  "Cross-Border IP Structuring for a Creative Tech Company",
  "Tax Optimization for an Agro-Export Business",
  "Regulatory Licensing for a Pan-African Fintech Platform",
];

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <section className="text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
          Case Studies
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Strategy That Works. Results That Scale.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          Explore how Credence Africa has supported businesses, governments,
          cooperatives, and digital ventures across Africa with practical,
          execution-ready advisory. These real-life case studies highlight how
          our capital strategies, structuring expertise, policy navigation, and
          compliance solutions translate into measurable impact.
        </p>
      </section>

      <section className="mt-12 md:mt-20">
        <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl text-card-foreground">
          Featured Case Studies
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCaseStudies.map((study, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{study}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  An in-depth look at the strategies and outcomes.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16 md:mt-24 bg-secondary py-16 rounded-lg">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-card-foreground">
              Access Full Reports
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our full case studies provide in-depth walkthroughs of strategies
              used, outcomes achieved, and key lessons from real-world
              projects. Please complete the form to unlock full case study
              downloads.
            </p>
             <p className="mt-2 text-sm text-muted-foreground">We respect confidentiality and never spam.</p>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Request Full Case Study Access</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" placeholder="Your Name" required/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="your.email@example.com" required/>
                      </div>
                  </div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Your Phone" required/>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="title">Position / Title</Label>
                        <Input id="title" placeholder="Your Title" required/>
                      </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
                    <Input id="linkedin" placeholder="https://linkedin.com/in/yourprofile" required/>
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="organization">Organization / Company</Label>
                    <Input id="organization" placeholder="Your Company"/>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Specific Areas of Interest</Label>
                    <Textarea id="message" placeholder="Tell us what you're interested in" />
                  </div>
                  <Button type="submit" className="w-full">
                    Request Access
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
