import Image from "next/image";
import IconText from "@/components/icon-text";

export default function EducationCard() {
  return (
    <div className="flex h-[524px] gap-8 rounded-2xl bg-primary/20 p-8 dark:bg-blue-200">
      <p className="vertical-text h-fit w-fit rounded-2xl bg-white px-2 py-4 font-GWT text-2xl text-black shadow-right-down">
        교육
      </p>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <IconText
            icon={<Image src="/images/icons/대전대.svg" width={30} height={30} alt="dju logo" />}
            text="대전대학교"
            textStyle="font-GWT text-xl"
          />
          <div className="flex flex-col px-9">
            <p className="text-sm font-medium text-text-secondary">2019.03 ~ 2023.02</p>
            <p className="text-lg font-bold">컴퓨터공학과 전공</p>
          </div>
        </div>

        <div className="border-b border-text-secondary/50" />

        <div className="flex flex-col gap-1">
          <IconText
            icon={<Image src="/images/icons/코드잇.svg" width={30} height={30} alt="codeit logo" />}
            text="코드잇"
            textStyle="font-GWT text-xl"
          />
          <div className="flex flex-col px-9">
            <p className="text-sm font-medium text-text-secondary">2024.07 ~ 2025.02</p>
            <p className="text-lg font-bold">풀스택 엔지니어 부트캠프 과정 수료</p>
            <ul className="list-disc space-y-2 text-sm font-medium">
              <li>
                JavaScript, TypeScript, React, Next.js를 활용하여
                <br />
                SPA 및 SSR 기반 프론트엔드 개발 역량 강화
              </li>
              <li>
                Express.js와 PostgreSQL을 이용한
                <br /> RESTful API 및 데이터베이스 연동 경험
              </li>
              <li>
                총 3회의 팀 프로젝트 중 2번의 파트장을 맡아 역할 분배 주도 및 일정 조율,
                <br />
                팀원 간의 효율적인 소통과 협업 문화를 형성하는 데 기여
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
