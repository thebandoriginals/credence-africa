import { Card, CardContent } from "@/components/ui/card";

export default function TechnologyDigitalEconomyPage() {
  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Credence Africa — Technology & Digital Economy</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground">
          <p>Technology in Africa must move beyond hype cycles to become a practical enabler of transformation across agriculture, health, finance, mobility, education, and governance. The continent’s challenge is not inventing the next Silicon Valley—it is embedding technology into operations, systems, and institutions so that it solves real problems and drives inclusive growth.</p>
          <p>At Credence Africa, we focus on applied digital transformation: fintech for cooperative banking, AI for public service delivery, blockchain for supply chain trust, and edtech for skills delivery. We bridge capital, regulation, and innovation to ensure technology serves Africa’s social and economic priorities rather than becoming extractive or exclusionary.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6"><strong>Fintech Growth Platforms</strong><p className="mt-2 text-muted-foreground">Compliance, funding, and adoption models for financial inclusion, cooperative banking, and SME growth.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>AI & Data Economy Labs</strong><p className="mt-2 text-muted-foreground">Applied AI for agriculture, healthcare diagnostics, governance analytics, and education—built with ethics and local datasets.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Blockchain & Digital Assets Programs</strong><p className="mt-2 text-muted-foreground">Transparent systems for land registries, supply chains, tokenized cooperatives, and climate finance.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Digital Policy & Regulation Platforms</strong><p className="mt-2 text-muted-foreground">Supporting governments to design enabling frameworks for fintech, data protection, AI safety, and cross-border digital trade.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Digital Inclusion Initiatives</strong><p className="mt-2 text-muted-foreground">Affordable connectivity, digital literacy for women and youth, and community-based tech adoption hubs.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Sector-Specific Tech Integration</strong><p className="mt-2 text-muted-foreground">Embedding digital tools in agri-value chains, mobility logistics, hospital systems, tourism platforms, and nonprofit impact measurement.</p></CardContent></Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6">Operational efficiency across sectors through applied tech adoption.</CardContent></Card>
            <Card><CardContent className="p-6">Scaled African-led digital enterprises creating solutions relevant to local markets.</CardContent></Card>
            <Card><CardContent className="p-6">Capital mobilized into frontier technology aligned with development outcomes.</CardContent></Card>
            <Card><CardContent className="p-6">Regulatory systems that protect citizens while supporting innovation ecosystems.</CardContent></Card>
            <Card><CardContent className="p-6">Broader digital inclusion across gender, youth, rural, and urban populations.</CardContent></Card>
            <Card><CardContent className="p-6">Technology as infrastructure for transformation, not an end in itself.</CardContent></Card>
        </div>
      </section>
    </div>
  );
}
