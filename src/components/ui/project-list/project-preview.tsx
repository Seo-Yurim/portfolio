import Image from "next/image";
import { ProjectItem } from "@/types/project";
import { PROJECT_IMG } from "@/constants/project";
import { SKILLS } from "@/constants/skill";

interface ProjectPreviewProps {
  project: ProjectItem;
  onClick: () => void;
}

export default function ProjectPreview({ project, onClick }: ProjectPreviewProps) {
  return (
    <div className="flex w-[500px] flex-shrink-0 flex-col gap-3 rounded-2xl bg-white p-6 shadow-right-down">
      <div
        onClick={onClick}
        className="group relative h-[200px] w-full rounded-lg shadow-right-down transition-transform duration-300 hover:scale-105"
      >
        <Image
          src={PROJECT_IMG[project.title] || "사진 업데이트 예정"}
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

        <div className="absolute right-2 top-2 rounded-full bg-highlight px-4 py-3 font-GWT text-blue-200 shadow-right-down">
          {project.type}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p
            style={{ backgroundColor: project.color }}
            className="w-fit rounded-full px-4 py-1 font-GWT text-lg text-white"
          >
            {project.title}
          </p>
          <p className="text-xs font-semibold text-text-secondary">{project.period}</p>
        </div>

        <div className="w-full border-b border-gray-100" />

        <p style={{ color: project.color }} className="text-sm font-bold">
          {project.subtitle}
        </p>
      </div>

      <div className="flex w-fit items-center gap-4 rounded-xl bg-gray-100/50 p-2">
        {project.tools.map((tool, idx) => (
          <div key={idx} className="group relative transition-all duration-300 hover:scale-110">
            {SKILLS[tool]}
            <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-primary-foreground px-4 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white">{tool}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
