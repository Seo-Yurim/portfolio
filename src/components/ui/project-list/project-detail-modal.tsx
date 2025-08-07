import { PROJECTIMG } from "@/constants/project";
import { SKILLS } from "@/constants/skill";
import Image from "next/image";
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
      <div className="flex flex-col gap-4">
        <div className="flex w-full max-w-[1200px] rounded-xl text-white shadow-right-down">
          <div
            style={{ backgroundColor: project.color }}
            className="flex w-fit flex-col gap-6 rounded-l-xl p-4"
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

                {project.type === "Team" && (
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

        <div className="flex flex-col gap-4 px-4 text-black">
          <p className="font-medium">{project.description}</p>

          <div className="flex items-center gap-2">
            <span className="">기술스택:</span>
            {project.tools.map((tool, idx) => (
              <div key={idx}>{SKILLS[tool]}</div>
            ))}
          </div>

          {project.features.map((feature, idx) => (
            <div key={idx}>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}

          {project.contributions.map((contribution, idx) => (
            <div key={idx}>
              <h2>{contribution.title}</h2>
              <p>{contribution.description}</p>
            </div>
          ))}

          {project.issues.map((issue, idx) => (
            <div key={idx}>
              <h2>{issue.problem}</h2>
              <p>{issue.cause}</p>
              <p>{issue.solution}</p>
            </div>
          ))}

          {project.retrospectives.map((retrospective, idx) => (
            <div key={idx}>
              <h2>{retrospective.title}</h2>
              <p>{retrospective.description}</p>
            </div>
          ))}

          {project.links.map((link, idx) => (
            <div key={idx} className="flex items-center">
              <h2>{link.label}</h2>
              <p>{link.url}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
