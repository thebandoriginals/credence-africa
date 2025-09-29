import { Card, CardContent } from "@/components/ui/card";

export default function NonProfitSectorPage() {
  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Credence Africa — Non-Profit Sector</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground">
          <p>Africa’s nonprofit, philanthropy, and development sector is at a crossroads. For decades, aid has driven programs, but too often it has created dependency, fragmented priorities, and shallow impact. Meanwhile, African societies are grappling with youth unemployment, fragile health systems, climate risks, and governance gaps that require bold, locally led solutions.</p>
          <p>At Credence Africa, we reposition nonprofits, foundations, and social enterprises to move from aid-dependence to enterprise-driven sustainability and systemic influence. We focus on governance, financial resilience, and policy engagement, equipping organizations to align with Africa’s growth agenda and deliver measurable impact at scale.</p>
          <p>Our model builds professional, investable, and trusted institutions — nonprofits that can partner credibly with governments, attract blended capital, and influence national and continental policy priorities.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6"><strong>Impact Measurement & Learning Systems</strong><p className="mt-2 text-muted-foreground">Dashboards, evaluation frameworks, and observatories that track outcomes and strengthen accountability.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Fundraising & Donor Diversification</strong><p className="mt-2 text-muted-foreground">Multi-stream financing strategies that blend grants, philanthropy, social enterprise, and impact investment.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Social Enterprise Structuring</strong><p className="mt-2 text-muted-foreground">Hybrid models that generate income while delivering mission impact, reducing reliance on foreign aid.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Nonprofit Governance Labs</strong><p className="mt-2 text-muted-foreground">Board strengthening, compliance systems, anti-corruption safeguards, and professionalized leadership training.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Advocacy & Civic Engagement Platforms</strong><p className="mt-2 text-muted-foreground">Collective advocacy for legal reforms, public accountability, and inclusive policymaking.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Philanthropy Innovation Models</strong><p className="mt-2 text-muted-foreground">New African-led philanthropic frameworks, endowments, pooled funds, and diaspora-backed giving models.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Localization & Aid Transition Support</strong><p className="mt-2 text-muted-foreground">Helping organizations adapt as international aid contracts shift towards locally led development.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Development Partnerships & Policy Influence</strong><p className="mt-2 text-muted-foreground">Structured pathways for nonprofits to influence government budgets, regional frameworks (EAC, AfCFTA), and global donor agendas.</p></CardContent></Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6">Financially resilient nonprofits with diversified funding models.</CardContent></Card>
            <Card><CardContent className="p-6">Professionalized governance and transparency, enhancing trust and credibility.</CardContent></Card>
            <Card><CardContent className="p-6">Nonprofits positioned as development partners, not subcontractors.</CardContent></Card>
            <Card><CardContent className="p-6">Locally led institutions shaping policy and development priorities.</CardContent></Card>
            <Card><CardContent className="p-6">Stronger civic space, with nonprofits championing accountability and citizen engagement.</CardContent></Card>
            <Card><CardContent className="p-6">Shift from aid-dependence to enterprise-driven sustainability across Africa’s development sector.</CardContent></Card>
        </div>
      </section>
    </div>
  );
}
