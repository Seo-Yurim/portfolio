import { ProjectItem } from "@/types/project";

export const PROJECTIMG: Record<string, string> = {
  핏메이트: "/images/fitmate.png",
  "View My Startup": "/images/view my startup.png",
  포트폴리오: "/images/portfolio.png",
};

export const PROJECTS: ProjectItem[] = [
  {
    title: "핏메이트",
    subtitle: "1:1 맞춤형 운동 지도 연결 서비스",
    type: "Team",
    period: "25.01.06 ~ 25.02.25",
    teamSize: 6,
    teamRoles: [
      { position: "FE", size: 3 },
      { position: "BE", size: 3 },
    ],
    myRole: [{ position: "FE" }, { position: "파트장" }],
    description:
      "핏메이트는 운동 전문가(강사)와 운동을 배우고 싶은 유저를 연결하여, 1:1 맞춤형 운동 프로그램을 제공하는 서비스입니다.",
    color: "#18a8f1",
    tools: ["TypeScript", "Next.js", "React-Query", "Tailwind CSS"],
    features: [{ title: "", description: "" }],
    contribution: [{ title: "", description: "" }],
    issues: [{ problem: "", cause: "", solution: "" }],
    retrospective: [{ title: "", description: "" }],
    links: [
      { label: "개발 보고서", url: "https://y-flm.tistory.com/28" },
      { label: "팀 개발 문서", url: "https://www.notion.so/1-174b8d4b66e580bab530e11151097fe4" },
      { label: "서비스 시연 영상", url: "https://youtu.be/NYjM8X_4gFY" },
      {
        label: "서비스 발표 자료",
        url: "https://drive.google.com/file/d/1X8hgHiJc51omXCiyTml6oNJSSBNWkJMl/view?usp=sharing",
      },
      { label: "GitHub", url: "https://github.com/FS-part4-1team-FitMate/FitMate-FE" },
    ],
  },
  {
    title: "View My Startup",
    subtitle: "스타트업 정보 조회 및 모의 투자 시뮬레이션 서비스",
    type: "Team",
    period: "24.09.25 ~ 24.10.17",
    teamSize: 6,
    teamRoles: [{ position: "Full-Stack" }],
    description:
      "View My Startup은 개인 투자자들이 스타트업 정보를 쉽게 확인하고, 다양한 기준으로 비교하여 투자 시뮬레이션을 진행할 수 있는 모의 투자 서비스입니다.",
    color: "#fc5230",
    tools: ["JavaScript", "React", "Express.js", "Prisma ORM", "PostgreSQL"],
    features: [{ title: "", description: "" }],
    contribution: [{ title: "", description: "" }],
    issues: [{ problem: "", cause: "", solution: "" }],
    retrospective: [{ title: "", description: "" }],
    links: [
      { label: "개발 보고서", url: "https://y-flm.tistory.com/30" },
      { label: "서비스 시연 영상", url: "https://youtu.be/_jk3oWmMzP4" },
      {
        label: "서비스 발표 자료",
        url: "https://drive.google.com/file/d/1ExZtV_32sY927jh0KZfilNUoRRd2xMiV/view?usp=sharing",
      },
      { label: "GitHub", url: "https://github.com/orgs/season2-3team/repositories" },
    ],
  },
  {
    title: "포트폴리오",
    subtitle: "프론트엔드 개발자 서유림의 포트폴리오입니다.",
    type: "Personal",
    period: "25.06.28 ~",
    description: "",
    color: "#6D7EE7",
    tools: ["TypeScript", "Next.js", "Tailwind CSS"],
    features: [{ title: "", description: "" }],
    contribution: [{ title: "", description: "" }],
    issues: [{ problem: "", cause: "", solution: "" }],
    retrospective: [{ title: "", description: "" }],
    links: [
      { label: "개발 보고서", url: "" },
      { label: "GitHub", url: "https://github.com/Seo-Yurim/portfolio" },
    ],
  },
];
