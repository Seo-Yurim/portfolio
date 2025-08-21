import Image from "next/image";
import { ProjectItem } from "@/types/project";

export const portfolio: ProjectItem = {
  title: "포트폴리오",
  subtitle: "개인 프론트엔드 포트폴리오",
  type: "Personal",
  period: "25.06.28 ~",
  teamSize: 1,
  teamRoles: [{ position: "FE" }],
  myRole: [{ position: "FE" }],
  description: (
    <p className="px-2">
      개발자로서의 역량과 프로젝트 경험을 정리한 <strong>개인 포트폴리오 사이트</strong>입니다.
      <br />
      <br />
      TypeScript, Next.js 등을 활용해 콘텐츠를 구성하고, 다크모드 / 반응형 디자인 등{" "}
      <span className="underline">사용자 편의성을 고려해 개발</span>했습니다.
    </p>
  ),
  color: "#6D7EE7",
  logo: (
    <Image
      src="/images/portfolio/미모티콘2.png"
      className="max-md:h-[50px] max-md:w-[50px]"
      width={70}
      height={70}
      alt="portfolio logo"
    />
  ),
  tools: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
  features: [
    {
      title: "다크 / 라이트 테마 전환 기능",
      description: (
        <li>사용자의 선호나 시스템 설정에 따라 테마를 자동 혹은 수동으로 전환할 수 있도록 구현</li>
      ),
    },
    {
      title: "공통 컴포넌트 구현",
      description: <li>Header, Accordion, Modal, Tab 등 재사용 가능한 UI 요소 개발</li>,
    },
    {
      title: "애니메이션 및 hover 효과 활용으로 인터랙션 강화",
      description: (
        <li>
          CSS transition, framer-motion 등을 활용하여 사용자 경험을 개선하고 직관적인 UI 피드백 제공
        </li>
      ),
    },
    {
      title: "반응형 웹 UI 구성",
      description: (
        <li>
          다양한 해상도와 디바이스 환경에서도 최적의 사용자 경험을 제공하기 위해 미디어 쿼리와
          유동적인 레이아웃 설계
        </li>
      ),
    },
  ],
  retrospectives: [
    {
      title: "프로젝트 설계 및 일정 관리 미흡",
      description: (
        <>
          <li>
            기획, 디자인, 개발을 병행하며 작업하다 보니 디자인 변경과 데이터 구조 수정이 동시에
            일어나 일정 관리가 어려웠고, <br />
            그로 인해 작업 효율도 떨어졌습니다.
          </li>
          <li>
            또한, 명확한 기능 우선순위 없이 UI 구현과 애니메이션 작업을 병행해 개발 흐름이
            비효율적이었습니다.
          </li>
          <li>
            <span className="rounded-full bg-primary-foreground px-2 py-1 text-xs font-bold text-white max-md:text-[10px]">
              개선 계획
            </span>
            <br />
            다음부터는 전체 기능을 우선 정리하고,{" "}
            <strong>
              디자인 확정 → 데이터 구조 설계 → UI 구현 → UX/애니메이션 → 디테일 디자인 수정
            </strong>
            의 순서로 개발 일정을 체계화할 예정입니다.
          </li>
          <li>
            또한, 처음으로 기획부터 개발까지 모든 과정을 혼자 진행하다 보니 작업 우선순위를 놓치거나
            흐름이 꼬이는 경우가 많았습니다.
            <br />
            앞으로는 단계별 체크리스트를 만들어 진행 상황을 정리하고, 중간중간 진행 내용을 스스로
            점검하는 시간을 가져 일정 관리에 더 신경 쓸 계획입니다.
          </li>
        </>
      ),
    },
  ],
  links: [{ label: "GitHub", url: "https://github.com/Seo-Yurim/portfolio" }],
  taskScreens: [
    { label: "Hero", url: "/images/portfolio/hero-section.png" },
    { label: "Profile", url: "/images/portfolio/profile-section.png" },
    {
      label: "Qualifications",
      url: "/images/portfolio/qualifications-section.png",
    },
    { label: "Project List", url: "/images/portfolio/project-list-section.png" },
    {
      label: "Project Detail",
      url: "/images/portfolio/project-detail.mov",
      thumbnail: "/images/portfolio/project-detail-thumbnail.png",
    },
    { label: "Peer Review", url: "/images/portfolio/peer-review-section.png" },
  ],
};
