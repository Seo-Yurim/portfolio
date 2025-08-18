import { ReactNode } from "react";
import { CgScreen } from "react-icons/cg";

export function TaskScreens({ taskScreens }: { taskScreens: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <CgScreen className="h-4 w-4" />
        <h2 className="text-xl font-bold">작업 화면</h2>
      </div>

      <div className="grid"></div>
    </div>
  );
}
