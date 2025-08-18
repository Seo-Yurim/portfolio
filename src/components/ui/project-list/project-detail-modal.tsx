import Image from "next/image";
import { GiSkills } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { ProjectItem } from "@/types/project";
import { PROJECT_IMG, PROJECT_ROLE } from "@/constants/project";
import Modal from "@/components/modal";
import ThemeSwitcher from "@/components/theme-switcher";
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
      <div className="flex flex-col items-center gap-6 pb-8">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-4 text-nowrap font-GWT">
            <h1
              style={{ borderColor: project.color, color: project.color }}
              className="rounded-full border px-4 py-2 text-xl"
            >
              {project.title}
            </h1>
            <h2 className="text-lg text-blue-200 dark:text-white">{project.subtitle}</h2>
          </div>

          <div className="w-36 drop-shadow-lg">
            <ThemeSwitcher size="md" />
          </div>
        </div>

        <div className="flex w-full rounded-xl text-white shadow-right-down">
          <div
            style={{ backgroundColor: project.color }}
            className="flex w-full flex-col gap-8 rounded-l-xl p-6"
          >
            {project.logo}
            <div className="flex w-fit">
              <div className="h-full border-l-2 border-white" />
              <div className="flex flex-col gap-4 text-nowrap px-2 text-sm font-semibold text-white">
                <p className="w-fit rounded-full bg-highlight px-3 py-1 font-extrabold text-blue-200 shadow-right-down">
                  {project.type} Proejct
                </p>

                <div className="flex items-center gap-2">
                  <MdDateRange className="h-6 w-6" />
                  <p>{project.period}</p>
                </div>

                {project.type !== "Personal" && (
                  <>
                    <div className="flex items-center gap-2">
                      <RiTeamFill className="h-6 w-6" />
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
                      <GiSkills className="h-6 w-6" />
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

          <div className="relative h-full min-h-[300px] w-full min-w-[600px]">
            <Image
              src={PROJECT_IMG[project.title]}
              fill
              className="rounded-r-xl object-cover object-center"
              alt="project img"
            />
          </div>
        </div>

        <div className="h-8 border-l" />

        <div className="flex flex-col gap-12 px-4 py-2 text-blue-200 dark:text-white">
          <div
            style={{ borderColor: `${project.color}` }}
            className="shadow-inner-all rounded-xl border-l-[16px] bg-white p-4 text-blue-200"
          >
            <div className="flex items-center gap-4 px-3">
              <h3 className="text-nowrap font-GWT text-lg font-bold">프로젝트 소개</h3>
              <div className="w-full border-b border-blue-200" />
            </div>
            <p className="whitespace-pre-wrap font-semibold">{project.description}</p>
          </div>
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
