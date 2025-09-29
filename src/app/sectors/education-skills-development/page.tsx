import { Card, CardContent } from "@/components/ui/card";

export default function EducationSkillsDevelopmentPage() {
  return (
    <div className="py-16 lg:py-24 space-y-16 mx-auto lg:w-85">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Credence Africa — Education & Skills Development</h1>
      </header>

      <section>
        <h2 className="text-3xl font-bold">Our Approach</h2>
        <div className="mt-4 space-y-4 text-lg text-muted-foreground">
          <p>Africa’s greatest opportunity is also its greatest challenge: a fast-growing youth population entering systems that are underfunded, misaligned with labor markets, and increasingly privatized. Education risks becoming both unaffordable and irrelevant if not urgently restructured.</p>
          <p>At Credence Africa, we bridge the gap between learning and livelihoods. We align education systems with labor market demand, enterprise growth, and national development priorities. Through partnerships with governments, training institutions, and the private sector, we drive curriculum innovation, digital adoption, and enterprise-linked skilling to build a resilient, future-ready workforce that can compete locally, regionally, and globally.</p>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Programmatic Interventions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
                <CardContent className="p-6"><strong>Curriculum Innovation Labs</strong><p className="mt-2 text-muted-foreground">Designing competency-based, industry-aligned models that connect classrooms to real economies.</p></CardContent>
            </Card>
            <Card>
                <CardContent className="p-6"><strong>Digital Learning Hubs</strong><p className="mt-2 text-muted-foreground">Scaling edtech adoption for schools, TVETs, and higher education—ensuring affordable, accessible, and quality digital education.</p></CardContent>
            </Card>
            <Card>
                <CardContent className="p-6"><strong>Institutional Leadership Programs</strong><p className="mt-2 text-muted-foreground">Strengthening governance, financial stewardship, and strategic leadership within education institutions.</p></CardContent>
            </Card>
             <Card>
                <CardContent className="p-6"><strong>Skills-to-Enterprise Pathways</strong><p className="mt-2 text-muted-foreground">Linking vocational and technical training directly to SMEs, startups, and job creation in growth sectors like agribusiness, mobility, and digital economy.</p></CardContent>
            </Card>
             <Card>
                <CardContent className="p-6"><strong>Policy Advisory Platforms</strong><p className="mt-2 text-muted-foreground">Supporting ministries and regulators to design reforms, financing models, and PPPs that expand access and improve quality.</p></CardContent>
            </Card>
            <Card>
                <CardContent className="p-6"><strong>Teacher & Trainer Professionalization</strong><p className="mt-2 text-muted-foreground">Continuous skilling for educators in modern pedagogy, applied learning, and digital fluency.</p></CardContent>
            </Card>
            <Card>
                <CardContent className="p-6"><strong>Regional Skills Frameworks</strong><p className="mt-2 text-muted-foreground">Harmonizing training standards and qualifications across EAC, COMESA, and AfCFTA to enable cross-border employability.</p></CardContent>
            </Card>
            <Card>
                <CardContent className="p-6"><strong>Education Finance & Access Solutions</strong><p className="mt-2 text-muted-foreground">Creating blended financing models, impact funds, and cooperative savings schemes to make education affordable for low- and middle-income families.</p></CardContent>
            </Card>
            <Card>
                <CardContent className="p-6"><strong>Youth Futures Accelerator™</strong><p className="mt-2 text-muted-foreground">Programs that combine training, mentorship, and enterprise incubation for young people transitioning from school to work.</p></CardContent>
            </Card>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-10">Impact Pathways</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card><CardContent className="p-6">Youth equipped with market-relevant skills and clear entry routes into work and enterprise.</CardContent></Card>
            <Card><CardContent className="p-6">Digitally enabled schools, TVETs, and universities that can scale access and improve learning outcomes.</CardContent></Card>
            <Card><CardContent className="p-6">Education institutions with professionalized governance and financial sustainability.</CardContent></Card>
            <Card><CardContent className="p-6">Policy frameworks that align education with industrialization, innovation, and national economic strategies.</CardContent></Card>
            <Card><CardContent className="p-6">Expanded access to affordable education through innovative financing and cooperative-led models.</CardContent></Card>
            <Card><CardContent className="p-6">A workforce that is regionally mobile and globally competitive, reducing underemployment and skills mismatch.</CardContent></Card>
        </div>
      </section>
    </div>
  );
}
