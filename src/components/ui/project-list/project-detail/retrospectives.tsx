import { FaCommentDots } from "react-icons/fa";
import { TextBlock } from "@/types/project";
import Accordion from "@/components/accordion";

export function Retrospectives({ retrospectives }: { retrospectives?: TextBlock[] }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <FaCommentDots className="h-5 w-5" />
        <h2 className="text-xl font-bold">회고</h2>
      </div>

      {retrospectives?.map((retrospective, idx) => (
        <Accordion
          key={idx}
          title={retrospective.title}
          showIcon={false}
          titleStyle="w-full dark:bg-gray-100/50 dark:hover:bg-gray-100/30 bg-gray-100 px-2 py-1 text-left font-semibold hover:bg-gray-100/70"
        >
          <ul className="list-disc px-4">{retrospective.description}</ul>
        </Accordion>
      ))}
    </div>
  );
}
