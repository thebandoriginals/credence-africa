import { Card, CardContent } from "@/components/ui/card";

export default function HospitalityTourismPage() {
  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Credence Africa — Hospitality & Tourism</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground">
          <p>We strengthen Africa’s hospitality and tourism ecosystems through ESG compliance, professional service excellence, and SME-driven growth. By equipping operators with access to capital, digital tools, and sustainable models, we build resilient tourism economies that attract investment, create jobs, and showcase Africa’s cultural and natural assets to the world.</p>
          <p>Tourism in Africa faces dual pressures: fragile infrastructure and global shocks on one hand, and immense opportunities for domestic, regional, and international growth on the other. Our interventions are designed to bridge this gap — professionalizing operators, unlocking capital, and embedding sustainability in ways that scale long-term competitiveness.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6"><strong>Tourism Recovery & Resilience Platforms</strong><p className="mt-2 text-muted-foreground">equipping hotels, lodges, tour operators, and small enterprises to withstand shocks like pandemics, climate events, and economic downturns.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Sustainable Tourism Models</strong><p className="mt-2 text-muted-foreground">mainstreaming ESG standards, eco-lodges, and regenerative tourism practices that protect natural ecosystems while boosting revenues.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Customer Experience Hubs</strong><p className="mt-2 text-muted-foreground">improving guest relations, digital bookings, and data-driven service excellence.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Tourism Investment Facilitation</strong><p className="mt-2 text-muted-foreground">linking SMEs to blended finance, equity, and credit tools for expansion.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Heritage & Culture Integration</strong><p className="mt-2 text-muted-foreground">positioning African identity, art, and culture as differentiators in global tourism.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Destination Marketing & Branding</strong><p className="mt-2 text-muted-foreground">supporting governments and industry groups in developing Africa-branded campaigns to boost both domestic and foreign arrivals.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Hospitality Workforce Development</strong><p className="mt-2 text-muted-foreground">upskilling staff in risk management, multilingual guest services, and digital systems adoption.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Infrastructure & SME Linkages</strong><p className="mt-2 text-muted-foreground">connecting small operators to wider hospitality value chains, from catering and transport to conferencing and events.</p></CardContent></Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6">A sustainable, shock-resilient tourism industry anchored in ESG.</CardContent></Card>
            <Card><CardContent className="p-6">Increased foreign exchange earnings and expanded domestic tourism markets.</CardContent></Card>
            <Card><CardContent className="p-6">Greater SME participation in regional and global tourism value chains.</CardContent></Card>
            <Card><CardContent className="p-6">African heritage and cultural identity driving competitiveness.</CardContent></Card>
            <Card><CardContent className="p-6">Professionalized hospitality services raising international quality benchmarks.</CardContent></Card>
            <Card><CardContent className="p-6">Enhanced resilience of local operators through financing, training, and digital integration.</CardContent></Card>
        </div>
      </section>
    </div>
  );
}
