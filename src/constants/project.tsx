import Image from "next/image";
import { ReactNode } from "react";
import {
  GrDocumentPdf,
  GrDocumentText,
  GrDocumentUser,
  GrDocumentVideo,
  GrGithub,
} from "react-icons/gr";
import { IoIosLink } from "react-icons/io";
import { ProjectItem } from "@/types/project";

export const PROJECT_ROLE: Record<string, string> = {
  FE: "프론트엔드",
  BE: "백엔드",
  "Full-Stack": "풀스택",
};

export const PROJECT_IMG: Record<string, string> = {
  TetherDrop: "/images/tetherdrop.png",
  핏메이트: "/images/fitmate.png",
  "View My Startup": "/images/view my startup.png",
  포트폴리오: "/images/portfolio.png",
};

export const PROJECT_LINKS: Record<string, ReactNode> = {
  "개발 보고서": <GrDocumentText className="h-6 w-6" />,
  "팀 개발 문서": <GrDocumentUser className="h-6 w-6" />,
  "서비스 시연 영상": <GrDocumentVideo className="h-6 w-6" />,
  "서비스 발표 자료": <GrDocumentPdf className="h-6 w-6" />,
  GitHub: <GrGithub className="h-6 w-6" />,
  "기존 GitHub": <GrGithub className="h-6 w-6" />,
  "리팩토링 GitHub": <GrGithub className="h-6 w-6" />,
  "서비스 링크": <IoIosLink className="h-6 w-6" />,
};

export const PROJECTS: ProjectItem[] = [
  {
    title: "TetherDrop",
    subtitle: `암호화폐 거래소의 페이백 및 수수료 할인 혜택을 제공하는 제휴/셀퍼럴 플랫폼`,
    type: "Internship",
    period: "25.05.18 ~ 25.06.18",
    teamSize: 4,
    teamRoles: [
      { position: "FE", size: 2 },
      { position: "BE", size: 2 },
    ],
    myRole: [{ position: "FE" }],
    description: `
      테더드랍은 암호화폐 거래소 이용자들이 페이백 및 수수료 할인 혜택을 받을 수 있도록 지원하는 제휴·셀퍼럴 플랫폼입니다.`,
    color: "#34d399",
    logo: (
      <div className="flex w-fit items-center gap-1 rounded-xl bg-white p-2">
        <Image src="/images/icons/tetherdrop_logo.svg" width={45} height={45} alt="fitmate logo" />
        <h1 className="text-3xl font-extrabold text-[#34d399]">TetherDrop</h1>
      </div>
    ),
    tools: [
      "TypeScript",
      "Next.js",
      "Zustand",
      "Radix UI",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "Supabase",
      "Vercel",
    ],
    features: [
      {
        title: "로그인/회원가입 기능",
        description: `이메일, 비밀번호 확인, 추천인 코드 입력, 가입 경로 선택, 약관 동의 기능 등을 포함한 회원가입 폼을 구현하였으며,
react-hook-form과 zod를 활용해 실시간 유효성 검사를 처리하고, 
회원가입 시에는 약관 전체 동의 여부에 따른 제한 로직도 포함했습니다.
또한, 비밀번호 보기 토글, 가입 경로 아코디언, toast 메시지 등 UX 개선 요소도 반영했습니다.`,
      },
      {
        title: "비밀번호 찾기 기능",
        description: `zustand 기반 상태 저장소를 통해 인증 과정에서 필요한 이메일 및 인증 토큰 상태를 관리하고,
react-hook-form과 zod를 사용하여 각 단계에서의 유효성 검증을 적용했습니다.
사용자 경험 강화를 위해 인증 타이머 표시, 인증 실패 처리, 완료 후 로그인 유도 등의 요소를 구현하였습니다.`,
      },
      {
        title: "회원 탈퇴 기능",
        description: `사용자가 자신의 계정을 직접 삭제할 수 있는 회원 탈퇴 기능을 구현하였습니다.
탈퇴 요청 후 세션을 안전하게 종료하고, 홈 페이지로 리디렉션 되도록 처리하였습니다.
탈퇴 실패 시에는 적절한 에러 메시지를 토스트로 안내합니다.`,
      },
    ],
    contributions: [
      {
        title: "다양한 화면 퍼블리싱",
        description:
          "로그인, 회원가입, 아이디/비밀번호 찾기, 서비스 소개, 마이페이지, UID 검색 결과 등",
      },
      { title: "공통 컴포넌트 구현", description: "거래소 테이블, Header, Footer 등" },
      { title: "QA 반영 및 UI/UX 개선", description: "실무자와 소통하며 피드백을 UI에 즉각 반영" },
      {
        title: "반응형 UI 구성",
        description: "반응형 UI 구성으로 모든 디바이스에 최적화된 레이아웃 제공",
      },
    ],
    links: [{ label: "서비스 링크", url: "https://www.tetherdrop.io/" }],
    taskScreens: <></>,
  },
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
    description: `
    핏메이트는 운동 전문가(강사)와 운동을 배우고 싶은 유저를 연결하여, 1:1 맞춤형 운동 프로그램을 제공하는 서비스입니다.

    유저는 운동 목표에 맞는 강사에게 맞춤 지도를 받아 효율적이고 지속 가능한 운동 계획을 세울 수 있습니다.
    강사는 유저의 목표와 상황에 맞춘 체계적인 운동 계획을 제시하고 지도를 통해 유저가 올바른 운동 습관을 형성하도록 돕습니다.`,
    color: "#18a8f1",
    logo: (
      <Image
        src="/images/fitmate_logo.png"
        className="rounded-xl bg-white px-2"
        width={180}
        height={100}
        alt="fitmate logo"
      />
    ),
    tools: ["TypeScript", "Next.js", "React-Query", "Tailwind CSS"],
    features: [
      {
        title: "무한 스크롤링",
        description:
          "콘텐츠를 스크롤할 때 자동으로 다음 페이지 데이터를 불러오는 무한 스크롤 기능 구현",
      },
      {
        title: "견적 요청/확정/반려 기능",
        description:
          "일반 사용자와 강사 모두 견적서를 주고받고, 확정하거나 반려할 수 있는 기능 제공",
      },
      {
        title: "SNS 공유 기능",
        description: "콘텐츠 공유를 위한 URL 복사, 카카오톡 공유, 페이스북 공유 기능 추가",
      },
      {
        title: "데이터 정렬 및 검색 필터링",
        description: "리스트형 데이터에 대해 정렬 조건 및 검색 필터를 적용할 수 있는 기능 구현",
      },
    ],
    contributions: [
      {
        title: "공통 컴포넌트 개발",
        description:
          "Dropdown, Search, Tab, SNS 공유 버튼, 카드/모달 컨테이너 등 UI 구성 요소 직접 개발",
      },
      {
        title: "12개 페이지 구현",
        description:
          "일반 유저: 강사 찾기, 레슨 현황, 레슨 내역 등 / 강사: 받은 요청 페이지 / 공통: 랜딩, 404, 접근 제한 페이지",
      },
      {
        title: "UI 개선 작업",
        description: "기존 피그마 디자인과 불일치한 UI 요소 수정 및 hover 효과 적용",
      },
      {
        title: "PR 템플릿 도입",
        description: "팀원 간 코드 리뷰 효율성을 높이기 위한 PR 템플릿 작성",
      },
      {
        title: "쿼리 파일 분리 관리",
        description: "React Query 관련 로직을 모듈화하여 유지보수 효율성 증대",
      },
      {
        title: "반응형 UI 구현",
        description: "반응형 UI 구성으로 모든 디바이스에 최적화된 레이아웃 제공",
      },
    ],
    issues: [
      {
        title: "사용자 로그인 시 데이터 불일치",
        problem:
          "문제점: 리액트 쿼리를 이용한 데이터 페칭 시, 로그아웃 후 다른 계정으로 로그인했을 때 이전 사용자의 데이터가 계속 화면에 표시되는 문제가 발생",
        cause:
          "문제 분석: React Query는 쿼리 키를 기준으로 캐시를 관리하는데, 키가 사용자별로 고유하지 않아 로그아웃 이후에도 캐시된 이전 사용자 데이터가 재사용되고 있었음.",
        solution:
          "해결 과정: 쿼리 키에 사용자 고유 ID(userId)를 포함시켜 캐시를 사용자 단위로 분리, 이후에는 현재 로그인된 사용자 데이터만 정상적으로 렌더링됨",
      },
    ],
    retrospectives: [
      {
        title: "과도한 컴포넌트 세분화",
        description:
          "과도한 컴포넌트 분리로 인해 Prop drilling이 발생, 처음엔 코드 간결함을 위해 세분화했지만, 오히려 유지보수가 어려워짐, 이후에는 재사용성, 상태 흐름, 전역 상태 도입 등을 고려한 설계가 필요하다는 점을 배웠음",
      },
    ],
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
    taskScreens: <></>,
  },
  {
    title: "View My Startup",
    subtitle: `스타트업 정보 조회 및 모의 투자 시뮬레이션 서비스`,
    type: "Team",
    period: "24.09.25 ~ 24.10.17",
    teamSize: 6,
    teamRoles: [{ position: "Full-Stack" }],
    myRole: [{ position: "Full-Stack" }],
    description: `
    ViewMyStartup은 투자금, 매출 등을 기준으로 스타트업을 비교·분석하고, 투자 결과를 확인할 수 있는 모의 투자 서비스입니다.
    로그인 없이 닉네임과 비밀번호만으로 참여 가능하며, 분석을 통해 최적의 투자 대상을 판단할 수 있습니다.`,
    color: "#fc5230",
    logo: <Image src="/images/VMS_logo.svg" width={150} height={100} alt="VMS logo" />,
    tools: ["JavaScript", "React", "Express.js", "Prisma ORM", "PostgreSQL"],
    features: [
      {
        title: "기업 투자 기능",
        description: "사용자들이 기업에 투자할 수 있는 입력 및 제출 기능 구현",
      },
      {
        title: "투자 수정 및 삭제 기능",
        description: "투자 내역을 사용자가 직접 수정하거나 삭제할 수 있는 기능 제공",
      },
    ],
    contributions: [
      {
        title: "프론트엔드",
        description:
          "공통 컴포넌트 구현: 네비게이션 바, 컨펌 모달 등 재사용 가능한 UI 요소 개발, 화면 개발: 투자 현황 페이지 및 기업 상세 페이지 구현, 유효성 검사 커스텀 훅: 사용자 입력에 대한 커스텀 유효성 검사 로직 개발, 반응형 UI 구현: 다양한 기기 해상도에 대응하는 레이아웃 구성",
      },
      {
        title: "백엔드",
        description:
          "투자 관련 API 구현: 투자 목록 조회, 생성, 수정, 삭제 API 개발, Render 서버 배포: Render 플랫폼을 통한 초기 백엔드 배포 진행 (현재는 중단)",
      },
    ],
    issues: [
      {
        title: "투자 생성 시 id 필드 중복 오류",
        problem:
          "문제점: 투자 생성 시, 클라이언트에서는 실패 메시지가 나타나고, 서버 로그에는 id 필드 중복 오류가 발생",
        cause:
          "문제 분석: id 필드는 Autoincrement로 설정되어 있어 자동 증가가 되어야 했으나 초기 Mock Data 삽입 시 수동으로 id 값을 입력하여 시퀀스가 정상 작동하지 않음",
        solution:
          "해결 과정: SELECT setval(...) 쿼리를 통해 PostgreSQL 시퀀스를 현재 최대 id 기준으로 수동 초기화, 이후 데이터 충돌 없이 생성 가능해짐",
      },
    ],
    retrospectives: [{ title: "", description: "" }],
    links: [
      { label: "개발 보고서", url: "https://y-flm.tistory.com/30" },
      { label: "서비스 시연 영상", url: "https://youtu.be/_jk3oWmMzP4" },
      {
        label: "서비스 발표 자료",
        url: "https://drive.google.com/file/d/1ExZtV_32sY927jh0KZfilNUoRRd2xMiV/view?usp=sharing",
      },
      { label: "기존 GitHub", url: "https://github.com/orgs/season2-3team/repositories" },
      {
        label: "리팩토링 GitHub",
        url: "https://github.com/Seo-Yurim/season2-View-My-Startup-3team-FE",
      },
    ],
    taskScreens: <></>,
  },
  {
    title: "포트폴리오",
    subtitle: "개인 프론트엔드 포트폴리오",
    type: "Personal",
    period: "25.06.28 ~",
    description: `
    개발자로서의 역량과 프로젝트 경험을 체계적으로 정리한 개인 포트폴리오 사이트입니다.
    TypeScript, Next.js 등을 활용해 콘텐츠를 구성하고, 다크모드 / 반응형 디자인 등 사용자 편의성을 고려해 개발했습니다.`,
    color: "#6D7EE7",
    logo: <Image src="/images/미모티콘2.png" width={70} height={70} alt="portfolio logo" />,
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
  },
];
