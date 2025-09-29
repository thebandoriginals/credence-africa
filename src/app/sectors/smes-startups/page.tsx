import { Card, CardContent } from "@/components/ui/card";

export default function SmesStartupsPage() {
  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Credence Africa — SMEs & Startups</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground">
          <p>Entrepreneurship is Africa’s most powerful lever for economic transformation. Yet too often it is trapped in the micro-enterprise survival cycle undercapitalized, informal, and disconnected from scalable markets. To unlock real transformation, African entrepreneurship must move beyond subsistence trading into investment-ready, structured, and innovation-driven enterprises.</p>
          <p>At Credence Africa, we localize entrepreneurship models to African realities — building on cooperative capital, diaspora linkages, AfCFTA trade opportunities, and blended finance. Our work equips SMEs and startups to become regional growth engines, job creators, and global competitors.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6"><strong>SME Capital Access Platforms</strong><p className="mt-2 text-muted-foreground">Blended finance, angel networks, cooperative-backed funds, and diaspora investment channels.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Enterprise Structuring Programs</strong><p className="mt-2 text-muted-foreground">Legal incorporation, governance systems, tax strategy, and compliance readiness.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Market Expansion Labs</strong><p className="mt-2 text-muted-foreground">Regional growth strategies powered by AfCFTA, franchising models, and export facilitation.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Resilience & Recovery Programs</strong><p className="mt-2 text-muted-foreground">Turnaround strategies, crisis management, and SME risk insurance for vulnerable sectors.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Women & Youth Enterprise Programs</strong><p className="mt-2 text-muted-foreground">Tailored leadership, financing, and mentorship pathways for inclusive entrepreneurship.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Innovation & Digital Enterprise Hubs</strong><p className="mt-2 text-muted-foreground">Startup accelerators for fintech, agri-tech, health-tech, and mobility-tech ventures.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Diaspora & Cross-Border Entrepreneurship Models</strong><p className="mt-2 text-muted-foreground">Structuring diaspora investments, re-entry ventures, and regional scaling.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Enterprise-to-Cooperative Conversions</strong><p className="mt-2 text-muted-foreground">Supporting micro-enterprises and informal businesses to grow into cooperative-backed SMEs with scale and bargaining power.</p></CardContent></Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6">More investment-ready SMEs and startups with access to blended capital.</CardContent></Card>
            <Card><CardContent className="p-6">Reduced startup failure rates through structuring, governance, and risk management.</CardContent></Card>
            <Card><CardContent className="p-6">Inclusive entrepreneurship growth with women and youth at the center.</CardContent></Card>
            <Card><CardContent className="p-6">SMEs scaling across borders into AfCFTA, COMESA, and global markets.</CardContent></Card>
            <Card><CardContent className="p-6">Transformative entrepreneurship ecosystems driving employment, industrialization, and Africa’s long-term wealth creation.</CardContent></Card>
        </div>
      </section>
    </div>
  );
}
