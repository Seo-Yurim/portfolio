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
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between font-GWT">
          <h1 style={{ color: project.color }} className="text-3xl">
            {project.logo}
          </h1>
          <h2 className="text-xl text-white">{project.subtitle}</h2>
        </div>

        <div className="flex">
          <div
            style={{ backgroundColor: project.color }}
            className="flex w-[200px] flex-col rounded-l-xl p-4 text-white"
          >
            <p>{project.teamSize}명</p>
            {project.teamRoles?.map((role, idx) => (
              <div key={idx} className="flex gap-2">
                <p>{role.position}</p>
                {role.size && <p>{role.size}명</p>}
              </div>
            ))}
            <div className="flex items-center gap-2">
              {project.myRole?.map((role, idx) => (
                <p key={idx}>{role.position}</p>
              ))}
            </div>
          </div>
          <div className="relative h-[300px] w-[800px] shadow-right-down">
            <Image
              src={PROJECTIMG[project.title]}
              fill
              className="rounded-r-xl object-cover object-center"
              alt="project img"
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}
