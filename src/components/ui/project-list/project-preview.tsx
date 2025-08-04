import { PROJECTIMG } from "@/constants/project";
import { SKILLS } from "@/constants/skill";
import Image from "next/image";
import { ProjectItem } from "@/types/project";

export default function ProjectPreview({ project }: { project: ProjectItem }) {
  return (
    <div className="flex w-[500px] flex-shrink-0 flex-col gap-3 rounded-2xl bg-white p-8 shadow-right-down">
      <div className="group relative h-[200px] w-full rounded-lg shadow-right-down transition-transform duration-300 hover:scale-105">
        <Image
          src={PROJECTIMG[project.title] || "사진 업데이트 예정"}
          alt="project-img"
          fill
          className="rounded-lg object-cover object-center"
        />

        <div className="absolute inset-0 flex cursor-pointer flex-col opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div style={{ backgroundColor: project.color }} className="rounded-t-lg p-3">
            {project.logo}
          </div>
          <div className="flex h-full items-center justify-center rounded-b-lg bg-white/70">
            <button
              style={{ backgroundColor: project.color }}
              className="rounded-2xl px-4 py-2 font-GWT text-lg text-white shadow-right-down"
            >
              상세보기
            </button>
          </div>
        </div>

        <div className="absolute right-2 top-2 rounded-full bg-highlight px-2 py-4 font-GWT text-blue-200 shadow-right-down">
          {project.type}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p
          style={{ backgroundColor: project.color }}
          className="w-fit rounded-full px-4 py-1 font-GWT text-lg text-white"
        >
          {project.title}
        </p>
        <p style={{ color: project.color }} className="text-xs font-extrabold">
          {project.subtitle}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 px-2">
          {project.tools.map((tool, idx) => (
            <div key={idx}>{SKILLS[tool]}</div>
          ))}
        </div>
        <p className="text-sm font-medium text-text-secondary">{project.period}</p>
      </div>
    </div>
  );
}
