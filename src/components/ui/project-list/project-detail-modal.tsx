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
      <div className="container flex">
        <div style={{ backgroundColor: project.color }} className="p-2">
          <p>{project.title}</p>
        </div>
        <Image src={PROJECTIMG[project.title]} width={200} height={100} alt="project img" />
      </div>
    </Modal>
  );
}
