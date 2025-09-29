import { Card, CardContent } from "@/components/ui/card";

export default function CreativeDigitalEconomyPage() {
  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Credence Africa — Creative & Digital Economy</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground">
          <p>Africa’s creative and digital economy is massively underdeveloped and undercapitalized, despite being one of the continent’s fastest-growing youth-driven sectors. Musicians, designers, filmmakers, athletes, influencers, and digital creators generate immense cultural value but often lack the structures, financing, and protections to monetize their work sustainably.</p>
          <p>At Credence Africa, we empower creatives and digital entrepreneurs to transform talent into enterprise. Our approach integrates IP protection, cooperative ownership, capital mobilization, and policy advocacy to formalize the sector, scale enterprises, and position Africa as a global cultural and digital powerhouse.</p>
          <p>We move creators beyond hustle economics into sustainable wealth creation, while ensuring cultural authenticity, inclusivity, and African ownership remain at the center.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
                <CardContent className="p-6"><strong>Creator Capital Models</strong><p className="mt-2 text-muted-foreground">Cooperative finance, blended capital, and investor-ready funds designed specifically for creatives and digital entrepreneurs.</p></CardContent>
            </Card>
            <Card>
                <CardContent className="p-6"><strong>IP & Ownership Systems</strong><p className="mt-2 text-muted-foreground">Licensing, royalties, trademarks, and contract structuring that secure long-term income and ownership.</p></CardContent>
            </Card>
            <Card>
                <CardContent className="p-6"><strong>Creative Enterprise Structuring</strong><p className="mt-2 text-muted-foreground">Legal, financial, and organizational models that formalize talent into scalable businesses.</p></CardContent>
            </Card>
             <Card>
                <CardContent className="p-6"><strong>Market Expansion Initiatives</strong><p className="mt-2 text-muted-foreground">AfCFTA-enabled trade, cross-border distribution, and international collaborations to grow African cultural exports.</p></CardContent>
            </Card>
             <Card>
                <CardContent className="p-6"><strong>Digital Innovation Ecosystems</strong><p className="mt-2 text-muted-foreground">Incubation hubs for e-sports, gaming, digital art, NFTs, and emerging creative-tech platforms.</p></CardContent>
            </Card>
            <Card>
                <CardContent className="p-6"><strong>Policy & Advocacy Platforms</strong><p className="mt-2 text-muted-foreground">Engaging governments to prioritize the creative sector in economic planning, trade agreements, and youth employment frameworks.</p></CardContent>
            </Card>
             <Card>
                <CardContent className="p-6"><strong>Content Commercialization Tools</strong><p className="mt-2 text-muted-foreground">Streaming, syndication, merchandising, brand partnerships, and creative-tech platforms to monetize content globally.</p></CardContent>
            </Card>
             <Card>
                <CardContent className="p-6"><strong>Creative Cooperatives & Collectives</strong><p className="mt-2 text-muted-foreground">Structures that allow artists, musicians, and creators to pool resources, negotiate better contracts, and scale through ownership.</p></CardContent>
            </Card>
            <Card>
                <CardContent className="p-6"><strong>Skills & Enterprise Labs</strong><p className="mt-2 text-muted-foreground">Programs linking creatives with entrepreneurial, legal, and financial training to bridge the skills gap.</p></CardContent>
            </Card>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
                <CardContent className="p-6">African creatives retain ownership of their intellectual property and income streams.</CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">Globally competitive African brands achieve visibility and fair value in international markets.</CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">Youth employment expands through new digital economy and creative sector opportunities.</CardContent>
            </Card>
             <Card>
                <CardContent className="p-6">Informal survival models are replaced with structured, investor-ready enterprises.</CardContent>
            </Card>
             <Card>
                <CardContent className="p-6">Africa’s cultural and digital voice is amplified in global markets, influencing culture, technology, and trade.</CardContent>
            </Card>
             <Card>
                <CardContent className="p-6">Capital flows into the creative economy through tailored investment vehicles and policy alignment.</CardContent>
            </Card>
        </div>
      </section>

    </div>
  );
}
