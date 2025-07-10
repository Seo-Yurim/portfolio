import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import Tab from "@/components/tab";
import { QualificationCardProps } from "../qualifications";

export function SkillCard({ expanded, onClick }: QualificationCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex h-[524px] gap-8 rounded-2xl bg-primary/20 p-6 transition-all duration-500 dark:bg-blue-200 ${
        expanded ? "flex-grow" : "cursor-pointer"
      }`}
    >
      <div className="flex flex-col items-center justify-between">
        <p className="vertical-text h-fit w-fit rounded-2xl bg-white px-2 py-4 font-GWT text-2xl text-black shadow-right-down">
          스킬
        </p>
        <HiOutlineWrenchScrewdriver className="h-10 w-10 text-foreground" />
      </div>

      <div
        className={`flex flex-col transition-all duration-500 ease-in-out ${
          expanded ? "max-w-full opacity-100" : "max-w-0 opacity-0"
        }`}
        style={{ overflow: expanded ? "visible" : "hidden" }}
      >
        <Tab />
        <div className="grid"></div>
      </div>
    </div>
  );
}
