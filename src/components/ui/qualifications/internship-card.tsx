import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { SKILLS } from "@/constants/skill";

const tools = ["TypeScript", "Next.js", "Tailwind CSS", "Zustand", "React-Hook-Form", "Radix UI"];

export function InternshipCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`flex flex-col gap-4 rounded-2xl bg-primary/20 p-6 dark:bg-blue-200/60 max-md:p-4`}
    >
      <div className="flex items-center justify-between">
        <p className="w-fit rounded-2xl bg-white px-4 py-2 font-GWT text-2xl text-black shadow-right-down">
          인턴십
        </p>
        <FaBriefcase className="h-10 w-10 text-foreground" />
      </div>

      <div className={`flex flex-col gap-4 px-2 pt-4`}>
        <div className="flex flex-col">
          <p className="font-GWT text-2xl max-md:text-xl">코드스테이션</p>
          <p className="text-sm font-medium text-text-secondary max-md:text-xs">
            2025.05 ~ 2025.06
          </p>
        </div>

        <ul className="list-disc px-5 text-sm font-medium max-md:text-xs">
          <li>거래소 수수료 페이백 서비스 웹사이트 제작 참여</li>
          <li>TypeScript와 Next.js 기반의 프론트엔드 개발 담당</li>
          <li>퍼블리싱 및 회원가입, 비밀번호 재설정 등의 로직 구현</li>
          <li>중복되는 UI 요소를 공통 컴포넌트로 구현</li>
          <li>
            실무 관계자와 직접 소통하며 QA 피드백을 반영하고,
            <br />
            UI/UX 품질을 개선하는 데 기여
          </li>
        </ul>

        <div className="flex flex-wrap items-center gap-4 overflow-visible px-5 py-2 max-md:gap-2 max-md:px-2">
          {tools.map((tool, idx) => (
            <div key={idx} className="group relative transition-all duration-300 hover:scale-110">
              {SKILLS[tool]}
              <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 -translate-x-1/2 whitespace-nowrap rounded-xl bg-primary-foreground px-4 py-1 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white">{tool}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
