import { useState } from "react";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { motion } from "framer-motion";
import { SKILLS } from "@/constants/skill";
import Tab from "@/components/tab";

const categorys = ["전체", "언어", "라이브러리/프레임워크", "스타일"];
const skills = [
  { label: "JavaScript", type: "언어" },
  { label: "TypeScript", type: "언어" },
  { label: "React", type: "라이브러리/프레임워크" },
  { label: "Next.js", type: "라이브러리/프레임워크" },
  { label: "React-Query", type: "라이브러리/프레임워크" },
  { label: "Tailwind CSS", type: "스타일" },
];

export function SkillCard() {
  const [category, setCategory] = useState<string>(categorys[0]);
  const filteredSkills =
    category === "전체" ? skills : skills.filter((skill) => skill.type === category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
      className="flex flex-col gap-8 rounded-2xl bg-primary/20 p-6 dark:bg-blue-200/60 max-md:p-4"
    >
      <div className="flex items-center justify-between">
        <p className="w-fit rounded-2xl bg-white px-4 py-2 font-GWT text-2xl text-black shadow-right-down">
          스킬
        </p>
        <HiOutlineWrenchScrewdriver className="h-10 w-10 text-foreground" />
      </div>

      <div className="flex w-full flex-col gap-8">
        <Tab categorys={categorys} setCategory={setCategory} />

        <div className="flex flex-wrap items-center gap-6 px-8 max-md:gap-4">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="group relative transition-all duration-300 hover:scale-110">
              {SKILLS[skill.label]}
              <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-1 -translate-x-1/2 whitespace-nowrap rounded-xl bg-primary-foreground px-4 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white max-md:text-sm">{skill.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
