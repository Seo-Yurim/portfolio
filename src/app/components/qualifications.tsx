import { CertificateCard, EducationCard, InternshipCard, SkillCard } from "./qualification-cards";

export function Qualifications() {
  return (
    <section id="qualifications" className="container flex h-screen flex-col gap-8 py-8">
      <div className="flex items-center justify-between font-GWT">
        <h2 className="rounded-3xl bg-white px-6 py-2 text-3xl text-black shadow-right-down">
          Qualifications
        </h2>
      </div>

      <div className="grid auto-rows-[minmax(200px,_auto)] grid-cols-2 gap-4">
        <SkillCard />
        <CertificateCard />
        <EducationCard />
        <InternshipCard />
      </div>
    </section>
  );
}
