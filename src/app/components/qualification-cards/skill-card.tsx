import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiCssmodules,
  SiJavascript,
  SiNextdotjs,
  SiReactquery,
  SiTypescript,
} from "react-icons/si";
import Tab from "@/components/tab";
import { QualificationCardProps } from "../qualifications";

const categorys = ["전체", "언어", "프레임워크/라이브러리", "스타일", "상태 관리", "기타"];

export function SkillCard({ expanded, onClick }: QualificationCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex h-[524px] gap-8 overflow-hidden rounded-2xl bg-primary/20 p-6 transition-all duration-500 dark:bg-blue-200 ${
        expanded ? "flex-grow" : "w-24 cursor-pointer"
      }`}
    >
      <div className="flex flex-col items-center justify-between">
        <p className="vertical-text h-fit w-fit rounded-2xl bg-white px-2 py-4 font-GWT text-2xl text-black shadow-right-down">
          스킬
        </p>
        <HiOutlineWrenchScrewdriver className="h-10 w-10 text-foreground" />
      </div>

      <div className={`flex flex-col gap-4`}>
        <Tab tabs={categorys} />
        <div className="grid grid-cols-4 gap-2 px-8">
          <SiJavascript className="h-16 w-16 rounded-md" />
          <SiTypescript className="h-16 w-16" />
          <FaReact className="h-16 w-16" />
          <SiNextdotjs className="h-16 w-16" />
          <RiTailwindCssFill className="h-16 w-16" />
          <SiReactquery className="h-16 w-16" />
          <FaHtml5 className="h-16 w-16" />
          <FaCss3Alt className="h-16 w-16" />
          <SiCssmodules className="h-16 w-16" />
        </div>
      </div>
    </div>
  );
}
