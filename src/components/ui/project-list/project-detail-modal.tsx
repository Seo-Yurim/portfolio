import Image from "next/image";
import { GiSkills } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { ProjectItem } from "@/types/project";
import { PROJECT_IMG, PROJECT_ROLE } from "@/constants/project";
import Modal from "@/components/modal";
import {
  Contributions,
  Features,
  Issues,
  Links,
  Retrospectives,
  TaskScreens,
  Tools,
} from "./project-detail";

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
        <div className="flex w-fit rounded-xl text-white shadow-right-down">
          <div
            style={{ backgroundColor: project.color }}
            className="flex flex-col gap-6 rounded-l-xl p-6"
          >
            <div className="flex flex-col items-center gap-4">
              {project.logo}
              <h2 className="whitespace-pre-line text-center font-GWT text-white">
                {project.subtitle}
              </h2>
            </div>

            <div className="flex">
              <div className="h-full border-l-2 border-white" />
              <div className="flex flex-col gap-3 px-2 text-sm font-semibold">
                <p className="w-fit rounded-full bg-highlight px-3 py-1 font-extrabold text-blue-200 shadow-right-down">
                  {project.type} Proejct
                </p>

                <div className="flex items-center gap-2">
                  <MdDateRange className="h-6 w-6 text-white" />
                  <p>{project.period}</p>
                </div>

                {project.type !== "Personal" && (
                  <>
                    <div className="flex items-center gap-2">
                      <RiTeamFill className="h-6 w-6 text-white" />
                      <p>{project.teamSize}명</p>

                      <div className="flex items-center gap-1">
                        (
                        {project.teamRoles?.map((role, idx) => (
                          <div key={idx} className="flex">
                            <p>{role.position}</p>
                            {role.size && <p>: {role.size}명</p>}
                          </div>
                        ))}
                        )
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <GiSkills className="h-6 w-6 text-white" />
                      <div className="flex items-center gap-1">
                        {project.myRole?.map((role, idx) => (
                          <p key={idx}>{PROJECT_ROLE[role.position] || role.position}</p>
                        ))}
                        <span>담당</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="relative min-h-[300px] min-w-[600px]">
            <Image
              src={PROJECT_IMG[project.title]}
              fill
              className="rounded-r-xl object-cover object-center"
              alt="project img"
            />
          </div>
        </div>

        <div className="flex flex-col gap-12 px-4 text-blue-200">
          <p className="text-center font-medium">{project.description}</p>
          <Tools tools={project.tools} />
          <Features features={project.features} />
          {project.contributions && <Contributions contributions={project.contributions} />}
          {project.issues && <Issues issues={project.issues} />}
          {project.retrospectives && <Retrospectives retrospectives={project.retrospectives} />}
          <Links links={project.links} />
          <TaskScreens taskScreens={project.taskScreens} />
        </div>
      </div>
    </Modal>
  );
}
