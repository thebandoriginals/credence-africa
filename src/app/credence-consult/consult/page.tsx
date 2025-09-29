import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ConsultationPage() {
  const areasOfInterest = [
    "Capital Raising & Blended Finance",
    "Public Affairs & Advocacy",
    "Trade & Investment Advisory",
    "Enterprise Architecture & Transformation",
    "IP Commercialization, Brand & Talent Strategy",
    "Other",
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-24">
      <div className="max-w-3xl mx-auto">
        <section className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
            Book a Consultation
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Let’s discuss how Credence Africa can help you achieve your
            strategic goals. A senior advisor will contact you within 24 hours.
          </p>
        </section>

        <section className="mt-12">
          <div className="p-8 rounded-lg border bg-card text-card-foreground shadow-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your Full Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Your Country" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <Select name="interest">
                    <SelectTrigger id="interest">
                      <SelectValue placeholder="Select an area" />
                    </SelectTrigger>
                    <SelectContent>
                      {areasOfInterest.map((area) => (
                        <SelectItem key={area} value={area}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us a bit about your needs."
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Submit Request
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
