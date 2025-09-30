
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

export default function ConsultationPage() {
  return (
    <div className="py-16 lg:py-24 mx-auto lg:w-85">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Book a Consultation</h1>
          <p className="text-xl text-muted-foreground">Let’s discuss how we can help you navigate Africa's opportunity zones.</p>
          <p>A senior advisor will contact you within 24 hours to schedule a strategy call. For direct inquiries, feel free to reach out to us.</p>
          <div className="space-y-3">
             <p className="flex items-center gap-3"><Mail className="size-5 text-primary" /> <a href="mailto:connect@credence.africa" className="hover:underline">connect@credence.africa</a></p>
             <p className="flex items-center gap-3"><Phone className="size-5 text-primary" /> <a href="tel:+254719468240" className="hover:underline">+254 719 468 240</a></p>
          </div>
        </div>
        
        <Card className="p-8 shadow-lg">
          <CardContent className="p-0">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Full Name" required/>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required/>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+254 712 345678" required/>
                </div>
              </div>
               <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input id="company" placeholder="Your Company" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" placeholder="Kenya" required/>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="interest">Area of Interest</Label>
                <Select>
                  <SelectTrigger id="interest">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="capital-raising">Capital Raising & Blended Finance</SelectItem>
                    <SelectItem value="public-affairs">Public Affairs & Advocacy</SelectItem>
                    <SelectItem value="trade-investment">Trade & Investment Structuring</SelectItem>
                    <SelectItem value="enterprise-architecture">Enterprise Architecture & Transformation</SelectItem>
                    <SelectItem value="ip-commercialization">IP Commercialization & Talent Strategy</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Tell us about your project or challenge." rows={4} required/>
              </div>
              <Button type="submit" className="w-full" size="lg">Submit Request</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
