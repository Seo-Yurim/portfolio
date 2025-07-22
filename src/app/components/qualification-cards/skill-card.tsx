import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCssmodules, SiNextdotjs, SiReactquery } from "react-icons/si";
import { motion } from "framer-motion";
import Tab from "@/components/tab";

const categorys = ["전체", "언어", "프론트엔드", "백엔드"];

export function SkillCard() {
  return (
    <motion.div
      transition={{ duration: 0.5 }}
      className={`flex cursor-pointer flex-col gap-8 rounded-2xl bg-primary/20 p-6 dark:bg-blue-200/60`}
    >
      <div className="flex items-center justify-between">
        <p className="w-fit rounded-2xl bg-white px-4 py-2 font-GWT text-2xl text-black shadow-right-down">
          스킬
        </p>
        <HiOutlineWrenchScrewdriver className="h-10 w-10 text-foreground" />
      </div>

      <div className={`flex w-full flex-col gap-4`}>
        <Tab tabs={categorys} />
        <div className="grid grid-cols-5 gap-1 px-8">
          <RiJavascriptFill className="h-12 w-12 text-amber-400" />
          <BiLogoTypescript className="h-12 w-12 text-sky-600" />
          <FaReact className="h-12 w-12 text-sky-400" />
          <SiNextdotjs className="h-12 w-12" />
          <RiTailwindCssFill className="h-12 w-12 text-cyan-700" />
          <SiReactquery className="h-12 w-12 text-red-500" />
          <FaHtml5 className="h-12 w-12 text-orange-600" />
          <FaCss3Alt className="h-12 w-12 text-sky-600" />
          <SiCssmodules className="h-12 w-12" />
        </div>
      </div>
    </motion.div>
  );
}
