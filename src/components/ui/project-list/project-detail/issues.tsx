import { MdReportProblem } from "react-icons/md";
import { TroubleshootingItem } from "@/types/project";
import Accordion from "@/components/accordion";

export function Issues({ issues }: { issues?: TroubleshootingItem[] }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <MdReportProblem className="h-5 w-5 max-md:h-4 max-md:w-4" />
        <h2 className="text-xl font-bold max-md:text-base">트러블 슈팅</h2>
      </div>

      {issues?.map((issue, idx) => (
        <Accordion
          key={idx}
          title={issue.title}
          showIcon={false}
          titleStyle="w-full max-md:text-sm dark:bg-gray-100/50 dark:hover:bg-gray-100/30 bg-gray-100 px-2 py-1 text-left font-semibold hover:bg-gray-100/70"
        >
          <div className="flex items-baseline gap-2 max-md:text-xs">
            <p className="text-nowrap rounded-full bg-primary-foreground px-2 py-1 text-xs font-semibold text-white max-md:text-[10px]">
              문제점
            </p>
            {issue.problem}
          </div>
          <div className="flex items-baseline gap-2 max-md:text-xs">
            <p className="text-nowrap rounded-full bg-primary-foreground px-2 py-1 text-xs font-semibold text-white max-md:text-[10px]">
              문제 분석
            </p>
            {issue.cause}
          </div>
          <div className="flex items-baseline gap-2 max-md:text-xs">
            <p className="text-nowrap rounded-full bg-primary-foreground px-2 py-1 text-xs font-semibold text-white max-md:text-[10px]">
              해결 과정
            </p>
            {issue.solution}
          </div>
        </Accordion>
      ))}
    </div>
  );
}
