import { ReactNode } from "react";

export function TaskScreens({ taskScreens }: { taskScreens: ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="border-b-2 border-blue-200 text-xl font-bold">작업 화면</h2>
      <div className="grid"></div>
    </div>
  );
}
