import { PROJECTIMG } from "@/constants/project";
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
      <div className="flex flex-col gap-4 text-white">
        <div className="flex">
          <div
            style={{ backgroundColor: project.color }}
            className="flex w-[200px] flex-col gap-6 rounded-l-xl p-4"
          >
            <div className="flex flex-col items-center gap-4 font-GWT">
              <div style={{ color: project.color }} className="text-3xl">
                {project.logo}
              </div>
              <h2 className="text-xs">{project.subtitle}</h2>
            </div>

            <div className="flex flex-col gap-3 px-2 text-xs font-semibold">
              <p>{project.period}</p>
              <p>{project.type} Proejct</p>
              <div className="flex items-center gap-2">
                <p>{project.teamSize}명</p>
                <div className="flex items-center gap-2">
                  (
                  {project.teamRoles?.map((role, idx) => (
                    <div key={idx} className="flex gap-1">
                      <p>{role.position}:</p>
                      {role.size && <p>{role.size}명</p>}
                    </div>
                  ))}
                  )
                </div>
              </div>

              <div className="flex items-center gap-2">
                {project.myRole?.map((role, idx) => (
                  <p key={idx}>{role.position}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[300px] w-[800px] shadow-right-down">
            <Image
              src={PROJECTIMG[project.title]}
              fill
              className="rounded-r-xl object-cover object-center"
              alt="project img"
            />
          </div>
        </div>

        <p className="text-center font-GWT">{project.description}</p>
      </div>
    </Modal>
  );
}
