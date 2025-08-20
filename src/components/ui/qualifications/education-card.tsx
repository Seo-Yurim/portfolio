import Image from "next/image";
import { BsFillMortarboardFill } from "react-icons/bs";
import { motion } from "framer-motion";
import IconText from "@/components/icon-text";

export function EducationCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className={`flex flex-col gap-4 rounded-2xl bg-primary/20 p-6 dark:bg-blue-200/60 max-md:p-4`}
    >
      <div className="flex items-center justify-between">
        <p className="w-fit rounded-2xl bg-white px-4 py-2 font-GWT text-2xl text-black shadow-right-down">
          교육
        </p>
        <BsFillMortarboardFill className="h-10 w-10 text-foreground" />
      </div>

      <div className="flex flex-col gap-4 pt-4">
        <div className="flex flex-col gap-1">
          <IconText
            icon={<Image src="/images/icons/대전대.svg" width={30} height={30} alt="dju logo" />}
            text="대전대학교"
            textStyle="font-GWT text-xl"
          />
          <div className="flex flex-col text-nowrap pl-9">
            <p className="text-sm font-medium text-text-secondary max-md:text-xs">
              2019.03 ~ 2023.02
            </p>
            <p className="text-lg font-bold max-md:text-base">컴퓨터공학과 전공</p>
          </div>
        </div>

        <div className="w-full border-b border-text-secondary/30" />

        <div className="flex flex-col gap-1">
          <IconText
            icon={<Image src="/images/icons/코드잇.svg" width={30} height={30} alt="codeit logo" />}
            text="코드잇"
            textStyle="font-GWT text-xl"
          />
          <div className="flex flex-col pl-9">
            <p className="text-sm font-medium text-text-secondary max-md:text-xs">
              2024.07 ~ 2025.02
            </p>
            <p className="text-lg font-bold max-md:text-base">풀스택 엔지니어 부트캠프 과정 수료</p>
            <ul className="list-disc space-y-2 text-sm font-medium max-md:text-xs">
              <li>
                React, Next.js 기반의 SPA 및 SSR 프론트엔드 개발 경험
                <br />
                (JavaScript, TypeScript 활용)
              </li>
              <li>
                Express.js와 PostgreSQL을 활용한
                <br className="max-lg:hidden" />
                RESTful API 개발 및 데이터베이스 연동 경험
              </li>
              <li>
                3회의 팀 프로젝트 중 2회 파트장 경험,
                <br className="max-lg:hidden" />
                일정 관리와 원활한 협업 환경 조성에 기여
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
