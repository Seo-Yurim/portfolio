import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CertificateCard, EducationCard, InternshipCard, SkillCard } from "./qualification-cards";

const MotionCard = motion.div;
export interface QualificationCardProps {
  expanded: boolean;
  onClick: () => void;
}

export function Qualifications() {
  const [expanded, setExpanded] = useState<
    "All" | "skill" | "education" | "certificate" | "internship"
  >("skill");
  const [viewAll, setViewAll] = useState<boolean>(false);

  const handleView = () => {
    setViewAll((prev) => !prev);
    setExpanded((prev) => (prev === "All" ? "skill" : "All"));
  };

  return (
    <section id="qualifications" className="container flex h-screen flex-col gap-8 py-16">
      <div className="flex items-center justify-between font-GWT">
        <h2 className="rounded-3xl bg-white px-6 py-2 text-3xl text-black shadow-right-down">
          Qualifications
        </h2>
        <button
          onClick={handleView}
          className={`${viewAll ? "border-[6px] border-primary-foreground bg-white px-4 py-1" : "bg-primary-foreground px-6 py-2 text-white"} rounded-3xl text-xl shadow-right-down`}
        >
          한 눈에 보기
        </button>
      </div>

      <motion.div
        layout
        transition={{ duration: 0.5 }}
        className={`${viewAll ? "grid grid-cols-2 grid-rows-2 gap-1" : "flex gap-2"} w-full`}
      >
        <SkillCard expanded={expanded === "skill"} onClick={() => setExpanded("skill")} />
        <EducationCard
          expanded={expanded === "education"}
          onClick={() => setExpanded("education")}
        />
        <CertificateCard
          expanded={expanded === "certificate"}
          onClick={() => setExpanded("certificate")}
        />
        <InternshipCard
          expanded={expanded === "internship"}
          onClick={() => setExpanded("internship")}
        />
      </motion.div>
    </section>
  );
}
