import { useState } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiReactquery } from "react-icons/si";
import { motion } from "framer-motion";
import Tab from "@/components/tab";

export function SkillCard() {
  const [categorys, setCategorys] = useState<string[]>([
    "전체",
    "언어",
    "라이브러리/프레임워크",
    "스타일",
  ]);

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-8 rounded-2xl bg-primary/20 p-6 dark:bg-blue-200/60`}
    >
      <div className="flex items-center justify-between">
        <p className="w-fit rounded-2xl bg-white px-4 py-2 font-GWT text-2xl text-black shadow-right-down">
          스킬
        </p>
        <HiOutlineWrenchScrewdriver className="h-10 w-10 text-foreground" />
      </div>

      <div className={`flex w-full flex-col gap-4`}>
        <Tab tabs={categorys} />
        <div className="grid grid-cols-6 gap-1 px-8">
          <RiJavascriptFill className="h-12 w-12 text-amber-400" />
          <BiLogoTypescript className="h-12 w-12 text-sky-600" />
          <FaReact className="h-12 w-12 text-sky-400" />
          <SiNextdotjs className="h-12 w-12" />
          <RiTailwindCssFill className="h-12 w-12 text-cyan-700" />
          <SiReactquery className="h-12 w-12 text-red-500" />
        </div>
      </div>
    </motion.div>
  );
}
