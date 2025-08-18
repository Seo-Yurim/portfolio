import { FaUserCog } from "react-icons/fa";
import { TextBlock } from "@/types/project";
import Accordion from "@/components/accordion";

export function Contributions({ contributions }: { contributions?: TextBlock[] }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <FaUserCog className="h-5 w-5" />
        <h2 className="text-xl font-bold">작업기여도</h2>
      </div>

      {contributions?.map((contribution, idx) => (
        <Accordion
          key={idx}
          title={contribution.title}
          showIcon={false}
          titleStyle="w-full bg-gray-100 px-2 py-1 text-left font-semibold hover:bg-gray-100/70 dark:bg-gray-100/50 dark:hover:bg-gray-100/30"
        >
          <p>{contribution.description}</p>
        </Accordion>
      ))}
    </div>
  );
}
