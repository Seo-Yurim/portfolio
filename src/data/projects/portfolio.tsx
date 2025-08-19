import Image from "next/image";
import { ProjectItem } from "@/types/project";

export const portfolio: ProjectItem = {
  title: "포트폴리오",
  subtitle: "개인 프론트엔드 포트폴리오",
  type: "Personal",
  period: "25.06.28 ~",
  description: `
        개발자로서의 역량과 프로젝트 경험을 체계적으로 정리한 개인 포트폴리오 사이트입니다.
        TypeScript, Next.js 등을 활용해 콘텐츠를 구성하고, 다크모드 / 반응형 디자인 등 사용자 편의성을 고려해 개발했습니다.`,
  color: "#6D7EE7",
  logo: <Image src="/images/portfolio/미모티콘2.png" width={70} height={70} alt="portfolio logo" />,
  tools: ["TypeScript", "Next.js", "Tailwind CSS", "Vercel"],
  features: [
    { title: "다크/라이트 테마 전환 기능" },
    { title: "공통 컴포넌트 구현: Header, Accordion, Modal, Tab 등" },
    { title: "애니메이션 및 hover 효과 활용으로 인터랙션 강화" },
    { title: "반응형 웹 UI 구성" },
  ],
  retrospectives: [
    {
      title: "",
      description:
        "처음 기획부터 디자인, 개발까지 전 과정에 참여했지만디자인과 데이터를 동시에 수정하다 보니 일정 지연이 심했고 개발 순서도 비효율적이었음, 개선 계획: 다음 프로젝트부터는 1. 디자인 픽스 2. 데이터 정리 3. UI 구현 4. UX/애니메이션 구현 5. 이후 디자인 수정의 순서로 일정을 짜서 효율성을 높일 예정",
    },
  ],
  links: [{ label: "GitHub", url: "https://github.com/Seo-Yurim/portfolio" }],
  taskScreens: <></>,
};
