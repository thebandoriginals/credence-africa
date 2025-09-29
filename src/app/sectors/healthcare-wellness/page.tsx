import { Card, CardContent } from "@/components/ui/card";

export default function HealthcareWellnessPage() {
  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Credence Africa — Healthcare & Wellness</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground">
          <p>We strengthen Africa’s healthcare ecosystem by combining professionalism with entrepreneurial and digital models. Our approach recognizes that healthcare in Africa is not only a service but also a cornerstone of economic and social stability. We link hospitals, clinics, policymakers, insurers, and private investors to design systems that are financially viable, accessible, and patient-centered.</p>
          <p>By addressing financing gaps, fragmented supply chains, workforce shortages, and slow adoption of digital health solutions, we enable healthcare institutions to transition from fragile and donor-dependent models to sustainable, scalable systems of care. We also integrate healthcare with broader development goals, including climate resilience, gender equity, and cooperative-led service delivery.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6"><strong>Healthcare Finance Platforms</strong><p className="mt-2 text-muted-foreground">blended finance, risk guarantees, and insurance-backed solutions for hospitals, clinics, and community health programs.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Digital Health & Telemedicine</strong><p className="mt-2 text-muted-foreground">leveraging mobile platforms, AI diagnostics, and telemedicine to expand access to remote, underserved, and crisis-affected populations.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Healthcare Supply Chain Programs</strong><p className="mt-2 text-muted-foreground">modernizing procurement, warehousing, and distribution to improve access to medicines, consumables, and medical technology.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Patient Safety & Quality Standards</strong><p className="mt-2 text-muted-foreground">building systems for ethics, accreditation, and continuous compliance across both public and private facilities.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Workforce Skilling & Entrepreneurship</strong><p className="mt-2 text-muted-foreground">equipping doctors, nurses, and allied health professionals with clinical, managerial, and enterprise skills to run viable health ventures.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Healthcare Infrastructure Solutions</strong><p className="mt-2 text-muted-foreground">supporting facility expansion, PPP models, and climate-smart hospitals powered by renewable energy and efficient design.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Community Health & Preventive Care Models</strong><p className="mt-2 text-muted-foreground">advancing grassroots-led health initiatives that reduce pressure on tertiary systems by focusing on early detection, vaccination, and primary care.</p></CardContent></Card>
            <Card><CardContent className="p-6"><strong>Health Data & Insights Platforms</strong><p className="mt-2 text-muted-foreground">enabling real-time monitoring of health outcomes, disease surveillance, and evidence-based policymaking through digital dashboards.</p></CardContent></Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6">Expanded healthcare access and affordability for underserved and remote populations.</CardContent></Card>
            <Card><CardContent className="p-6">Digitally enabled health systems reducing barriers to timely and quality care.</CardContent></Card>
            <Card><CardContent className="p-6">Financially resilient health institutions sustained by blended finance, insurance, and investment-ready models.</CardContent></Card>
            <Card><CardContent className="p-6">Empowered health workers as professionals, entrepreneurs, and cooperative leaders.</CardContent></Card>
            <Card><CardContent className="p-6">Improved supply chain integrity ensuring steady access to essential drugs, consumables, and medical technologies.</CardContent></Card>
            <Card><CardContent className="p-6">Stronger preventive care systems reducing long-term health burdens and costs.</CardContent></Card>
            <Card><CardContent className="p-6">Climate-smart hospitals and clinics aligned with sustainability and resilience goals.</CardContent></Card>
            <Card><CardContent className="p-6">Restored public trust in healthcare systems through accountability, professionalism, and quality assurance.</CardContent></Card>
        </div>
      </section>
    </div>
  );
}
