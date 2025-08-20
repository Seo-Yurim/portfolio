import Image from "next/image";
import { BiSolidMegaphone } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { MdCancel, MdDateRange } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { ProjectItem } from "@/types/project";
import { PROJECT_IMG } from "@/constants/projectImg";
import { PROJECT_ROLE } from "@/constants/projectRole";
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
import { Refactoring } from "./project-detail/refactoring";

export default function ProjectDetailModal({
  project,
  onClose,
}: {
  project: ProjectItem;
  onClose: () => void;
}) {
  return (
    <Modal onClose={onClose}>
      <div className="flex flex-col items-center gap-6 pb-8 max-lg:gap-4">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4 text-nowrap font-GWT max-lg:gap-2">
            <h1
              style={{ backgroundColor: project.color }}
              className="rounded-full px-4 py-2 text-xl text-white max-lg:px-3 max-lg:py-1 max-lg:text-base"
            >
              {project.title}
            </h1>
            <h2 className="text-lg text-blue-200 dark:text-white max-lg:text-base max-md:hidden">
              {project.subtitle}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-28 drop-shadow-lg max-lg:w-fit">
              <ThemeSwitcher size="md" />
            </div>
            <MdCancel onClick={onClose} className="h-8 w-8 cursor-pointer" />
          </div>
        </div>

        <div className="flex w-full rounded-xl text-white shadow-right-down max-lg:flex-col">
          <div
            style={{ backgroundColor: project.color }}
            className="flex w-fit flex-col gap-8 rounded-l-xl p-6 max-lg:w-full max-lg:gap-4 max-lg:rounded-b-none max-lg:rounded-t-xl"
          >
            {project.logo}

            <div className="flex w-fit">
              <div className="h-full border-l-2 border-white max-lg:hidden" />
              <div className="flex flex-col gap-4 text-nowrap px-2 text-sm font-semibold text-white max-lg:px-1">
                <p className="w-fit rounded-full bg-highlight px-3 py-1 font-extrabold text-blue-200 shadow-right-down max-lg:hidden">
                  {project.type} Proejct
                </p>

                <div className="flex flex-col flex-wrap gap-4 max-lg:flex-row max-md:gap-2 max-md:text-xs">
                  <div className="flex items-center gap-2 max-md:gap-1">
                    <MdDateRange className="h-6 w-6 max-md:h-4 max-md:w-4" />
                    <p>{project.period}</p>
                  </div>

                  <div className="flex items-center gap-2 max-md:gap-1">
                    <RiTeamFill className="h-6 w-6 max-md:h-4 max-md:w-4" />
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

                  <div className="flex items-center gap-2 max-md:gap-1">
                    <GiSkills className="h-6 w-6 max-md:h-4 max-md:w-4" />
                    <div className="flex items-center gap-1">
                      {project.myRole?.map((role, idx) => (
                        <p key={idx}>{PROJECT_ROLE[role.position] || role.position}</p>
                      ))}
                      <span>담당</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-full min-h-[300px] w-full max-lg:min-h-[350px] max-md:min-h-[200px]">
            <Image
              src={PROJECT_IMG[project.title]}
              fill
              className="rounded-r-xl object-cover object-center max-lg:rounded-b-xl max-lg:rounded-t-none"
              alt="project img"
            />
          </div>
        </div>

        <div className="h-8 border-l" />

        <div className="flex w-full flex-col gap-12 text-blue-200 dark:text-white max-lg:gap-8">
          <div
            style={{ borderColor: `${project.color}` }}
            className="flex flex-col gap-2 rounded-xl border-l-[16px] bg-white p-4 shadow-inner-all dark:bg-blue-200 max-md:text-sm"
          >
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <BiSolidMegaphone className="h-5 w-5 max-md:h-4 max-md:w-4" />
                <h3 className="text-nowrap font-GWT text-lg font-bold max-md:text-base">
                  프로젝트 소개
                </h3>
              </div>
              <div className="w-full border-b border-blue-200 dark:border-white" />
            </div>

            {project.description}
          </div>

          <Tools tools={project.tools} />
          <Features features={project.features} />
          {project.contributions && <Contributions contributions={project.contributions} />}
          {project.issues && <Issues issues={project.issues} />}
          {project.retrospectives && <Retrospectives retrospectives={project.retrospectives} />}
          {project.refactoring && <Refactoring refactoring={project.refactoring} />}
          <Links links={project.links} />
          {project.taskScreens && <TaskScreens taskScreens={project.taskScreens} />}
        </div>
      </div>
    </Modal>
  );
}
