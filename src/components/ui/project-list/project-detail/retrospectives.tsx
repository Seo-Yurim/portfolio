import { TextBlock } from "@/types/project";
import Accordion from "@/components/accordion";

export function Retrospectives({ retrospectives }: { retrospectives?: TextBlock[] }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="border-b-2 border-blue-200 text-xl font-bold dark:border-white">회고</h2>
      {retrospectives?.map((retrospective, idx) => (
        <Accordion
          key={idx}
          title={retrospective.title}
          showIcon={false}
          titleStyle="w-full dark:bg-gray-100/50 dark:hover:bg-gray-100/30 bg-gray-100 px-2 py-1 text-left font-semibold hover:bg-gray-100/70"
        >
          <p>{retrospective.description}</p>
        </Accordion>
      ))}
    </div>
  );
}
