import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AgricultureFoodPage() {
  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Credence Africa — Agriculture & Food</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground">
          <p>We strengthen Africa’s food systems through cooperative enterprise, climate-smart farming, and agribusiness structuring. Our work links farmers, processors, and markets into integrated value chains that are productive, profitable, and resilient.</p>
          <p>By aligning agriculture with finance, technology, and regional trade frameworks, we support the shift from subsistence to enterprise, unlocking investment opportunities and driving rural transformation.</p>
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">Programmatic Interventions</h2>
          <div className="space-y-6">
            <p><strong>Agri-Finance Access Platforms</strong> — blended finance, cooperative savings, input-credit systems, and guarantees for farmers, SMEs, and processors.</p>
            <p><strong>Climate-Smart Agriculture Labs</strong> — piloting regenerative farming, water-smart irrigation, renewable-powered cold chains, and low-carbon supply chains.</p>
            <p><strong>Value Chain Modernization</strong> — processing hubs, cold storage, aggregation centers, digital traceability, and farm-to-market logistics.</p>
            <p><strong>Market Integration Programs</strong> — export readiness, AfCFTA/EAC/SADC trade facilitation, and structured market entry for SMEs and cooperatives.</p>
            <p><strong>Food Security & Resilience Initiatives</strong> — integrating agriculture with nutrition, school feeding programs, and social protection safety nets.</p>
            <p><strong>Agri-Insurance & Risk Management Models</strong> — weather-indexed insurance, cooperative crop insurance pools, and disaster recovery funds.</p>
            <p><strong>AgriTech & Digital Extension Services</strong> — precision farming tools, mobile agronomy platforms, and cooperative-level MIS systems.</p>
            <p><strong>Youth & Women in Agri-Enterprise</strong> — incubation and acceleration of gender- and youth-led agri-enterprises, with leadership and financing tracks.</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">Advisory & Consulting Services</h2>
          <div className="space-y-6">
            <p><strong>Agribusiness Structuring & Compliance</strong> — legal, tax, and governance frameworks for cooperatives, SMEs, and investors.</p>
            <p><strong>Investment Readiness & Capital Raising</strong> — preparing agri-enterprises for debt, equity, and blended finance access.</p>
            <p><strong>Trade & Policy Advisory</strong> — helping clients navigate agricultural trade agreements, tariffs, and compliance across COMESA, EAC, and AfCFTA.</p>
            <p><strong>Sustainable Land & Resource Use Planning</strong> — advisory on land titling, environmental compliance, and climate adaptation planning.</p>
            <p><strong>Public-Private Partnership Structuring</strong> — designing PPPs for irrigation schemes, food parks, agro-processing zones, and logistics infrastructure.</p>
            <p><strong>Impact Measurement & ESG Integration</strong> — designing sector-specific ESG frameworks and impact dashboards for agribusiness projects.</p>
          </div>
        </section>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
                <CardContent className="p-6">Farmers earning higher, stable incomes through cooperative structuring and access to finance.</CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">Reduced post-harvest losses via modern processing, cold storage, and efficient logistics.</CardContent>
            </Card>
            <Card>
                <CardContent className="p-6">Expanded access to regional and global markets, including AfCFTA-driven opportunities.</CardContent>
            </Card>
             <Card>
                <CardContent className="p-6">Stronger climate-aligned, resilient food systems.</CardContent>
            </Card>
             <Card>
                <CardContent className="p-6">Empowered youth and women agripreneurs scaling competitive enterprises.</CardContent>
            </Card>
             <Card>
                <CardContent className="p-6">Agricultural cooperatives driving inclusive rural economic transformation.</CardContent>
            </Card>
        </div>
      </section>

    </div>
  );
}
