import CertificateCard from "./qualification-cards/certificate-card";
import EducationCard from "./qualification-cards/education-card";
import InternshipCard from "./qualification-cards/internship-card";
import SkillCard from "./qualification-cards/skill-card";

export function Qualifications() {
  return (
    <section id="qualifications" className="container flex h-screen flex-col gap-8 py-16">
      <div className="flex items-center justify-between font-GWT">
        <h2 className="rounded-3xl bg-white px-6 py-2 text-3xl text-black shadow-right-down">
          Qualifications
        </h2>
        <button className="rounded-3xl bg-blue-200 px-6 py-2 text-xl text-white shadow-right-down">
          한 눈에 보기
        </button>
      </div>
      <div className="flex overflow-hidden">
        {/* <SkillCard />
        <EducationCard />
        <CertificateCard /> */}
        <InternshipCard />
      </div>
    </section>
  );
}
