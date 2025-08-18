import { FaTools } from "react-icons/fa";
import { SKILLS } from "@/constants/skill";

export function Tools({ tools }: { tools: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <FaTools className="h-4 w-4" />
        <h2 className="text-xl font-bold">기술스택</h2>
      </div>

      <div className="flex items-center gap-4">
        {tools.map((tool, idx) => (
          <div key={idx} className="group relative transition-all duration-300 hover:scale-110">
            {SKILLS[tool]}
            <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-primary-foreground px-4 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white">{tool}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
