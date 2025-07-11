import Tab from "@/components/tab";
import Title from "@/components/title";

export function ProjectList() {
  return (
    <section id="project-list" className="flex h-screen flex-col gap-8 py-16">
      <Title title="Projects" />
      <div className="container flex flex-col gap-4">
        <Tab />
        <div className="flex h-[400px] gap-4 overflow-x-scroll rounded-2xl bg-primary p-8">
          <div className="w-[400px] flex-shrink-0 rounded-2xl bg-text-background p-8"></div>
          <div className="w-[400px] flex-shrink-0 rounded-2xl bg-text-background p-8"></div>
          <div className="w-[400px] flex-shrink-0 rounded-2xl bg-text-background p-8"></div>
          <div className="w-[400px] flex-shrink-0 rounded-2xl bg-text-background p-8"></div>
          <div className="w-[400px] flex-shrink-0 rounded-2xl bg-text-background p-8"></div>
        </div>
      </div>
    </section>
  );
}
