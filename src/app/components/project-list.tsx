"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/types/project";
import { PROJECTS } from "@/constants/project";
import Tab from "@/components/tab";
import Title from "@/components/title";
import ProjectDetailModal from "@/components/ui/project-list/project-detail-modal";
import ProjectPreview from "@/components/ui/project-list/project-preview";

const categorys = ["All", "Team", "Personal"];

export function ProjectList() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [category, setCategory] = useState<string>(categorys[0]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (selectedProject) return;
      container.scrollLeft += e.deltaY;
      e.preventDefault();
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [selectedProject]);

  return (
    <section id="project-list" className="flex h-screen flex-col gap-8 py-10">
      <Title title="Projects" />
      <div className="container flex flex-col gap-4">
        <Tab width="30rem" categorys={categorys} setCategory={setCategory} />
        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-foreground"
        >
          <div className="mb-2 flex h-[430px] w-max gap-4 rounded-2xl bg-primary p-6">
            {PROJECTS.map((project) => (
              <ProjectPreview
                key={project.title}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
