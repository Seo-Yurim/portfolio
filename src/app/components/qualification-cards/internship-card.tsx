import Image from "next/image";
import { FaBriefcase } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRadixui,
  SiReacthookform,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { QualificationCardProps } from "../qualifications";

export function InternshipCard({ expanded, onClick }: QualificationCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex h-[524px] gap-8 rounded-2xl bg-primary/20 p-6 transition-all duration-500 dark:bg-blue-200 ${
        expanded ? "flex-grow" : "cursor-pointer"
      }`}
    >
      <div className="flex flex-col items-center justify-between">
        <p className="vertical-text h-fit w-fit rounded-2xl bg-white px-2 py-4 font-GWT text-2xl text-black shadow-right-down">
          인턴십
        </p>
        <FaBriefcase className="h-10 w-10 text-foreground" />
      </div>

      <div
        className={`flex flex-col gap-3 text-nowrap py-4 transition-all duration-500 ease-in-out ${
          expanded ? "max-w-full opacity-100" : "max-w-0 opacity-0"
        }`}
        style={{ overflow: expanded ? "visible" : "hidden" }}
      >
        <div className="flex flex-col">
          <p className="font-GWT text-2xl">코드스테이션</p>
          <p className="text-sm font-medium text-text-secondary">2025.05 ~ 2025.06</p>
        </div>

        <ul className="list-disc px-5 text-sm font-medium">
          <li>거래소 수수료 페이백 서비스 웹사이트 제작 참여</li>
          <li>TypeScript와 Next.js 기반의 프론트엔드 개발 담당</li>
          <li>퍼블리싱 및 회원가입, 비밀번호 재설정 등의 로직 구현</li>
          <li>중복되는 UI 요소를 공통 컴포넌트로 구현</li>
          <li>실무 관계자와 직접 소통하며 QA 피드백을 반영하고, UI/UX 품질을 개선하는 데 기여</li>
        </ul>

        <div className="flex items-center gap-2 px-5 py-2">
          <SiTypescript className="h-10 w-10 text-sky-600" />
          <SiNextdotjs className="h-10 w-10 text-black" />
          <div className="rounded-full bg-sky-950 p-1">
            <SiTailwindcss className="h-8 w-8 text-teal-600" />
          </div>
          <Image src="/images/icons/zustand.svg" width={45} height={40} alt="zustand icon" />
          <div className="rounded-full bg-pink-500 p-2">
            <SiReacthookform className="h-6 w-6 text-white" />
          </div>
          <div className="rounded-full bg-black p-2">
            <SiRadixui className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
