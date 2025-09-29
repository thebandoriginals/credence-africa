import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="flex-1">
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Have a question? Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">General Inquiry</h2>
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
          <div>
            <h2 className="text-3xl font-bold mb-6">Sector-Specific Contacts</h2>
            <div className="space-y-8">
                <div>
                    <h3 className="font-semibold text-xl mb-2">Cooperatives</h3>
                    <p className="text-muted-foreground">📧 connect@coopsafrica.com</p>
                    <p className="text-muted-foreground">📞 +254 705 462 363</p>
                </div>
                 <div>
                    <h3 className="font-semibold text-xl mb-2">Mobility</h3>
                    <p className="text-muted-foreground">📧 mobility@credence.africa</p>
                    <p className="text-muted-foreground">📞 +254 759 203 069</p>
                </div>
                 <div>
                    <h3 className="font-semibold text-xl mb-2">General</h3>
                    <p className="text-muted-foreground">📧 connect@credence.africa</p>
                    <p className="text-muted-foreground">📞 +254 719 468 240</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}