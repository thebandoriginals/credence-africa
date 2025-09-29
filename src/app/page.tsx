import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Link from "next/link";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const featuredInsights = [
    { title: "Navigating East Africa’s Evolving Tax Landscape", date: "28 May 2025" },
    { title: "Blended Finance: Unlocking Capital for Climate Resilience", date: "25 May 2025" },
    { title: "Diaspora Investment and the Rise of Legacy Structuring", date: "25 May 2025" },
];

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-home");

  return (
    <div className="flex-1">
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 p-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Credence Africa
          </h1>
          <p className="text-xl md:text-2xl font-light mb-2">
            Empowering Africa’s Future
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Strategic solutions for businesses, cooperatives, and communities to
            thrive in Africa’s dynamic markets.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/sectors">Explore Sectors</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/consult">Book a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            Transforming Africa Through Innovative Advisory
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-8 rounded-lg shadow-md text-center">
              <span className="text-4xl">🤝</span>
              <h3 className="text-2xl font-bold my-4">Cooperatives</h3>
              <p className="text-muted-foreground mb-4">
                Driving growth and sustainability.
              </p>
              <Button asChild variant="link">
                <Link href="/sectors/cooperatives">Learn More</Link>
              </Button>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md text-center">
              <span className="text-4xl">🚛</span>
              <h3 className="text-2xl font-bold my-4">Mobility</h3>
              <p className="text-muted-foreground mb-4">
                Building smarter, safer transport.
              </p>
              <Button asChild variant="link">
                <Link href="/sectors/mobility">Learn More</Link>
              </Button>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-md text-center">
              <span className="text-4xl">📈</span>
              <h3 className="text-2xl font-bold my-4">More Sectors</h3>
              <p className="text-muted-foreground mb-4">
                Discover our full expertise.
              </p>
              <Button asChild variant="link">
                <Link href="/sectors">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-12">Recent Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInsights.map((insight) => (
              <Card key={insight.title}>
                <CardHeader>
                  <CardTitle>{insight.title}</CardTitle>
                  <CardDescription>{insight.date}</CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button asChild variant="link" className="p-0">
                        <Link href="/insights">Read More</Link>
                    </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
           <div className="mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/insights">Read All Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-12">Impact Snapshot</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold text-primary">50+</p>
              <p className="text-xl text-muted-foreground mt-2">
                Clients Served
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary">8</p>
              <p className="text-xl text-muted-foreground mt-2">
                African Markets
              </p>
            </div>
            <div>
              <p className="text-5xl font-bold text-primary">$25M+</p>
              <p className="text-xl text-muted-foreground mt-2">
                Capital Facilitated
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Button asChild size="lg">
              <Link href="/case-studies">See Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Partner for Progress</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Collaborate with us to unlock growth and impact.
          </p>
          <p className="text-lg mb-8">
            📧 connect@credence.africa | 📞 +254 719 468 240
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/consult">Book a Strategy Call</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}