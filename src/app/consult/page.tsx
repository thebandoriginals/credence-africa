import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ConsultPage() {
  return (
    <div className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Book a Consultation
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            A senior advisor will contact you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
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
                  <Label htmlFor="company">Company (optional)</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Your Country" />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="interest">Area of Interest</Label>
                  <Select>
                    <SelectTrigger id="interest">
                        <SelectValue placeholder="Select a sector" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="consult">Consult</SelectItem>
                        <SelectItem value="cooperatives">Cooperatives</SelectItem>
                        <SelectItem value="faith-based">Faith-Based</SelectItem>
                        <SelectItem value="mobility">Mobility</SelectItem>
                        <SelectItem value="non-profit">Non-Profit</SelectItem>
                        <SelectItem value="public-affairs">Public Affairs</SelectItem>
                        <SelectItem value="other">Other Sectors</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}