import { useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiReactquery } from "react-icons/si";
import { motion } from "framer-motion";
import Tab from "@/components/tab";

const categorys = ["전체", "언어", "라이브러리/프레임워크", "스타일"];
const skills = [
  { icon: RiJavascriptFill, category: "언어", color: "text-amber-400" },
  { icon: BiLogoTypescript, category: "언어", color: "text-sky-600" },
  { icon: FaReact, category: "라이브러리/프레임워크", color: "text-sky-400" },
  { icon: SiNextdotjs, category: "라이브러리/프레임워크", color: "text-black" },
  { icon: SiReactquery, category: "라이브러리/프레임워크", color: "text-red-500" },
  { icon: RiTailwindCssFill, category: "스타일", color: "text-cyan-700" },
];

export function SkillCard() {
  const [category, setCategory] = useState<string>(categorys[0]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
      className="flex flex-col gap-8 rounded-2xl bg-primary/20 p-6 dark:bg-blue-200/60"
    >
      <div className="flex items-center justify-between">
        <p className="w-fit rounded-2xl bg-white px-4 py-2 font-GWT text-2xl text-black shadow-right-down">
          스킬
        </p>
        <HiOutlineWrenchScrewdriver className="h-10 w-10 text-foreground" />
      </div>

      <div className="flex w-full flex-col gap-4">
        <Tab categorys={categorys} setCategory={setCategory} />
        <div className="grid grid-cols-6 gap-1 px-8">
          {skills.map((skill, idx) => {
            const isActive = category === "전체" || category === skill.category;
            const Icon = skill.icon;
            return (
              <Icon
                key={idx}
                className={`h-12 w-12 transition-colors duration-500 ${
                  isActive ? skill.color : "text-gray-400"
                }`}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
