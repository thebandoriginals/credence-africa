import { Card, CardContent } from "@/components/ui/card";

export default function FaithBasedOrganizationsPage() {
  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Credence Africa — Faith-Based Organizations</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground">
          <p>We partner with churches, mosques, temples, and interfaith networks to evolve from fragile, donation-reliant models into professional, transparent, and economically resilient institutions. Faith-based organizations hold unmatched influence in Africa’s social fabric—yet many remain vulnerable to financial fragility, weak governance, and limited capacity to scale their community impact.</p>
          <p>Our work restores credibility and sustainability to religious institutions by embedding governance reforms, financial stewardship, social enterprise structuring, and civic engagement strategies. In doing so, we position faith communities not only as spiritual anchors but as drivers of Africa’s inclusive growth, ethical leadership, and institutional renewal.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6"><strong>Faith Governance & Accountability Models</strong><p className="mt-2 text-muted-foreground">Strengthening boards and leadership councils with systems for financial transparency, ethical stewardship, and compliance.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Faith Ventures Structuring</strong><p className="mt-2 text-muted-foreground">Designing cooperative initiatives, social enterprises, and mission-aligned businesses to reduce reliance on offerings and donations.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Endowment & Asset Management</strong><p className="mt-2 text-muted-foreground">Establishing endowment funds, real estate trusts, and investment portfolios for long-term financial security.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Community Service & Social Impact Models</strong><p className="mt-2 text-muted-foreground">Scaling faith-driven service delivery in education, healthcare, social welfare, and community media with professional standards.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Faith & Public Policy Dialogues</strong><p className="mt-2 text-muted-foreground">Supporting leaders to engage civic processes, influence governance, and promote ethical, accountable politics.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Safeguarding & Protection Frameworks</strong><p className="mt-2 text-muted-foreground">Building institutional systems to protect children, women, and vulnerable groups against abuse and exploitation.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Faith Sector Digital Transformation</strong><p className="mt-2 text-muted-foreground">Supporting adoption of financial management systems, digital giving platforms, governance dashboards, and communication tools for modern ministry.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Conflict Mediation & Peacebuilding Platforms</strong><p className="mt-2 text-muted-foreground">Training faith leaders to mediate community disputes, prevent electoral violence, and advance interfaith harmony.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Civic Education Through Faith Institutions</strong><p className="mt-2 text-muted-foreground">Leveraging the influence of faith platforms to teach values of justice, equity, taxation, and responsible citizenship.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Faith-Based Finance & Cooperative Models</strong><p className="mt-2 text-muted-foreground">Structuring cooperative SACCOs, insurance schemes, and group-based finance systems within congregations to empower members economically.</p></CardContent></Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6">Transparent, financially sustainable institutions capable of stewarding resources with integrity.</CardContent></Card>
            <Card><CardContent className="p-6">Faith leaders as credible governance actors shaping public discourse and civic responsibility.</CardContent></Card>
            <Card><CardContent className="p-6">Professionalized delivery of education, healthcare, and social services through structured faith enterprises.</CardContent></Card>
            <Card><CardContent className="p-6">Reduced vulnerability to financial mismanagement and donor-dependency.</CardContent></Card>
            <Card><CardContent className="p-6">Stronger protection systems for children, women, and marginalized groups within faith communities.</CardContent></Card>
            <Card><CardContent className="p-6">Digitally enabled religious organizations with modern systems for finance, accountability, and communication.</CardContent></Card>
            <Card><CardContent className="p-6">Faith institutions as economic engines through ventures, cooperatives, and local enterprise models.</CardContent></Card>
            <Card><CardContent className="p-6">Strengthened peace, justice, and civic engagement anchored in Africa’s values and traditions of faith.</CardContent></Card>
        </div>
      </section>
    </div>
  );
}
