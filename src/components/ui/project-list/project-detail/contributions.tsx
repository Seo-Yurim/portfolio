import { TextBlock } from "@/types/project";
import Accordion from "@/components/accordion";

export function Contributions({ contributions }: { contributions?: TextBlock[] }) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="border-b-2 border-blue-200 text-xl font-bold">작업기여도</h2>
      {contributions?.map((contribution, idx) => (
        <Accordion
          key={idx}
          title={contribution.title}
          showIcon={false}
          titleStyle="w-full bg-gray-100 px-2 py-1 text-left font-semibold hover:bg-gray-100/70"
        >
          <p>{contribution.description}</p>
        </Accordion>
      ))}
    </div>
  );
}
