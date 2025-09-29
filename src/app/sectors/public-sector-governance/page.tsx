import { Card, CardContent } from "@/components/ui/card";

export default function PublicSectorGovernancePage() {
  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Credence Africa — Public Sector & Governance</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground">
          <p>Africa’s economic transformation hinges on one critical pillar: the credibility and capacity of public institutions. Yet across the continent, public administration remains constrained by weak governance, corruption, underfunded systems, and shallow citizen engagement. Civic spaces are shrinking, tax systems struggle to mobilize domestic revenue, and public finance often fails to translate into service delivery.</p>
          <p>At Credence Africa, we strengthen governance systems by embedding transparency, accountability, and citizen-centered service delivery. Our approach combines policy reform, institutional capacity-building, and digital governance to create governments that are responsive, credible, and capable of driving Africa’s next growth frontier.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6"><strong>Policy Reform Dialogues</strong><p className="mt-2 text-muted-foreground">Structured platforms bringing governments, civil society, and private sector together to co-create inclusive laws and policies.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Governance & Accountability Models</strong><p className="mt-2 text-muted-foreground">Anti-corruption systems, ethics frameworks, performance audits, and whistleblower protections.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Public Finance Reform Labs</strong><p className="mt-2 text-muted-foreground">Programs on revenue mobilization, tax justice, budgeting efficiency, and expenditure tracking at both national and county levels.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Digital Governance Systems</strong><p className="mt-2 text-muted-foreground">E-government platforms, open data initiatives, civic tech tools, and AI-enabled service delivery systems.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Citizen Engagement Platforms</strong><p className="mt-2 text-muted-foreground">Structured civic participation through scorecards, digital platforms, participatory budgeting, and accountability forums.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Institutional Leadership & Capacity Development</strong><p className="mt-2 text-muted-foreground">Training and coaching for civil servants, regulators, and public administrators to deliver with integrity and competence.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Decentralization & County Governance Support</strong><p className="mt-2 text-muted-foreground">Strengthening sub-national governance systems with fiscal autonomy, planning tools, and service delivery frameworks.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Civic Space Protection & Strengthening</strong><p className="mt-2 text-muted-foreground">Supporting legal and institutional frameworks that safeguard freedom of expression, assembly, and association.</p></CardContent></Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6">Transparent and accountable public institutions trusted by citizens.</CardContent></Card>
            <Card><CardContent className="p-6">Efficient and equitable mobilization of resources for development.</CardContent></Card>
            <Card><CardContent className="p-6">Digitally enabled governments delivering faster, fairer, and more reliable services.</CardContent></Card>
            <Card><CardContent className="p-6">Expanded civic space, empowering citizens to shape governance outcomes.</CardContent></Card>
            <Card><CardContent className="p-6">Public institutions capable of driving structural transformation in health, education, infrastructure, and climate resilience.</CardContent></Card>
        </div>
      </section>
    </div>
  );
}
