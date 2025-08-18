import { FaRocket } from "react-icons/fa";
import { TextBlock } from "@/types/project";
import Accordion from "@/components/accordion";

export function Features({ features }: { features: TextBlock[] }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <FaRocket className="h-4 w-4" />
        <h2 className="text-xl font-bold">주요 구현 기능</h2>
      </div>

      {features?.map((feature, idx) => (
        <Accordion
          key={idx}
          title={`${feature.title}`}
          showIcon={false}
          titleStyle="w-full bg-gray-100 dark:bg-gray-100/50 dark:hover:bg-gray-100/30 px-2 py-1 text-left font-semibold hover:bg-gray-100/70"
        >
          <p>{feature.description}</p>
        </Accordion>
      ))}
    </div>
  );
}
