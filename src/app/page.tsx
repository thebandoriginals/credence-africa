import { Button } from "@/components/ui/button";
import PlaceHolderImages from "@/lib/placeholder-images.json";
import { ArrowRight, CheckCircle, LandPlot, Lightbulb, LineChart, Mail, Phone, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        <Image
          src={PlaceHolderImages.hero}
          alt="African Landscape"
          fill
          className="object-cover -z-10"
          data-ai-hint="african landscape"
        />
        <div className="absolute inset-0 bg-black/50 -z-10" />
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold">Strategic Advisory for Africa’s Next Growth Frontier</h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            We are a multi-disciplinary advisory firm structuring Africa’s social, economic, and cultural capital.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/consult">
              Book a Consultation <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      {/* About Us Summary */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">About Credence Africa</h2>
            <p className="mt-4 text-muted-foreground">
              We deliver strategy that reflects the real-world dynamics of doing business in Africa, combining deep local understanding with global-standard execution. Our team of lawyers, policy strategists, capital advisors, and business architects brings decades of experience across law firms, multilateral institutions, and public sector ecosystems.
            </p>
            <div className="mt-6 flex gap-4">
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-80 rounded-lg overflow-hidden">
            <Image
              src={PlaceHolderImages.about}
              alt="Team discussing strategy"
              fill
              className="object-cover"
              data-ai-hint="team meeting"
            />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">What We Do</h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">We design the strategic infrastructure that turns ambition into institution. Our services are tailored for enterprises, cooperatives, nonprofits, and governments.</p>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <LineChart className="size-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Capital & Investment</h3>
              <p className="mt-2 text-muted-foreground">Structuring investment-ready opportunities and mobilizing blended finance.</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="size-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Public Affairs & Advocacy</h3>
              <p className="mt-2 text-muted-foreground">Navigating policy, shaping influence, and strengthening institutions.</p>
            </div>
            <div className="flex flex-col items-center">
              <LandPlot className="size-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Trade & Investment</h3>
              <p className="mt-2 text-muted-foreground">Supporting cross-border structuring and market entry.</p>
            </div>
            <div className="flex flex-col items-center">
              <Lightbulb className="size-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">Enterprise & IP Strategy</h3>
              <p className="mt-2 text-muted-foreground">Building legal, financial, and governance frameworks for growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Why Partner With Us?</h2>
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">We believe in execution-ready advisory that balances influence with compliance, and integrity with growth.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <CheckCircle className="size-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Context-Driven Structuring</h3>
                <p className="mt-1 text-muted-foreground">Strategies aligned with local law, policy, and markets.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="size-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Cross-Functional Expertise</h3>
                <p className="mt-1 text-muted-foreground">Integrating finance, law, policy, and innovation.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle className="size-8 text-primary mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Growth with Integrity</h3>
                <p className="mt-1 text-muted-foreground">Sustainable, scalable, and strategically sound solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to build Africa’s future?</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">Let’s discuss how we can help you navigate Africa&apos;s opportunity zones. A senior advisor will contact you within 24 hours.</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consult">Book a Strategy Call</Link>
            </Button>
            <div className="flex items-center gap-4">
                <Link href="mailto:connect@credence.africa" className="flex items-center gap-2 hover:underline">
                    <Mail /> <span>connect@credence.africa</span>
                </Link>
                <Link href="tel:+254719468240" className="flex items-center gap-2 hover:underline">
                    <Phone /> <span>+254 719 468 240</span>
                </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
