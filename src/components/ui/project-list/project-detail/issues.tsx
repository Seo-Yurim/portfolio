import { MdReportProblem } from "react-icons/md";
import { TroubleshootingItem } from "@/types/project";
import Accordion from "@/components/accordion";

export function Issues({ issues }: { issues?: TroubleshootingItem[] }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <MdReportProblem className="h-5 w-5" />
        <h2 className="text-xl font-bold">트러블 슈팅</h2>
      </div>

      {issues?.map((issue, idx) => (
        <Accordion
          key={idx}
          title={issue.title}
          showIcon={false}
          titleStyle="w-full dark:bg-gray-100/50 dark:hover:bg-gray-100/30 bg-gray-100 px-2 py-1 text-left font-semibold hover:bg-gray-100/70"
        >
          <p>{issue.problem}</p>
          <p>{issue.cause}</p>
          <p>{issue.solution}</p>
        </Accordion>
      ))}
    </div>
  );
}
