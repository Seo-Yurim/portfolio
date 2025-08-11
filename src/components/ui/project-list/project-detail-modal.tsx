import { PROJECTIMG, PROJECT_LINKS } from "@/constants/project";
import { SKILLS } from "@/constants/skill";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/types/project";
import Modal from "@/components/modal";

export default function ProjectDetailModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col gap-4 pb-8">
        <div className="flex rounded-xl text-white shadow-right-down">
          <div
            style={{ backgroundColor: project.color }}
            className="flex w-full flex-col gap-6 rounded-l-xl p-4"
          >
            <div className="flex flex-col items-center gap-4 font-GWT">
              <div style={{ color: project.color }} className="text-3xl">
                {project.logo}
              </div>
              <h2 className="text-lg">{project.subtitle}</h2>
            </div>

            <div className="flex">
              <div className="h-full border-l-2 border-white" />
              <div className="flex flex-col gap-3 px-2 text-sm font-semibold">
                <p className="w-fit rounded-full bg-highlight px-3 py-1 font-extrabold text-blue-200 shadow-right-down">
                  {project.type} Proejct
                </p>
                <p>
                  <span className="mr-2 w-fit rounded-full bg-white px-2 font-bold text-primary-foreground">
                    기간
                  </span>
                  {project.period}
                </p>

                {project.type !== "Personal" && (
                  <>
                    <div className="flex items-center gap-1">
                      <p>
                        <span className="mr-2 w-fit rounded-full bg-white px-2 font-bold text-primary-foreground">
                          팀 구성
                        </span>
                        {project.teamSize}명
                      </p>

                      <div className="flex items-center gap-2">
                        -
                        {project.teamRoles?.map((role, idx) => (
                          <div key={idx} className="flex">
                            <p>{role.position}</p>
                            {role.size && <p>: {role.size}명</p>}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="w-fit rounded-full bg-white px-2 font-bold text-primary-foreground">
                        역할
                      </span>
                      {project.myRole?.map((role, idx) => (
                        <p key={idx}>{role.position}</p>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="relative min-h-[300px] min-w-[600px]">
            <Image
              src={PROJECTIMG[project.title]}
              fill
              className="rounded-r-xl object-cover object-center"
              alt="project img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-8 px-4 text-blue-200">
          <p className="font-medium">{project.description}</p>

          <div className="flex flex-col gap-2">
            <h2 className="border-b-2 border-blue-200 font-bold">기술스택</h2>
            <div className="flex items-center gap-4">
              {project.tools.map((tool, idx) => (
                <div key={idx}>{SKILLS[tool]}</div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="border-b-2 border-blue-200 font-bold">주요 구현 기능</h2>
            {project.features.map((feature, idx) => (
              <div key={idx}>
                <h2>{feature.title}</h2>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="border-b-2 border-blue-200 font-bold">작업기여도</h2>
            {project.contributions.map((contribution, idx) => (
              <div key={idx}>
                <h2>{contribution.title}</h2>
                <p>{contribution.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="border-b-2 border-blue-200 font-bold">트러블슈팅</h2>
            {project.issues.map((issue, idx) => (
              <div key={idx}>
                <h3>{issue.problem}</h3>
                <p>{issue.cause}</p>
                <p>{issue.solution}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="border-b-2 border-blue-200 font-bold">회고</h2>
            {project.retrospectives.map((retrospective, idx) => (
              <div key={idx}>
                <h2>{retrospective.title}</h2>
                <p>{retrospective.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="border-b-2 border-blue-200 font-bold">서비스 관련 자료</h2>
            <div className="flex items-center gap-8">
              {project.links.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.url}
                  className="flex items-center gap-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="group relative w-fit rounded-full border-2 border-blue-200 p-2 transition-colors duration-300 hover:bg-blue-200 hover:text-white">
                    {PROJECT_LINKS[link.label]}

                    <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-200 px-4 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <p className="text-white">{link.label}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
