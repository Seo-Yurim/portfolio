import Tab from "@/components/tab";

export default function SkillCard() {
  return (
    <div className="flex h-[524px] gap-8 rounded-2xl bg-primary/20 p-8 dark:bg-blue-200">
      <p className="vertical-text h-fit w-fit rounded-2xl bg-white px-2 py-4 font-GWT text-2xl text-black shadow-right-down">
        스킬
      </p>
      <div className="flex flex-col">
        <Tab />
        <div className="grid"></div>
      </div>
    </div>
  );
}
