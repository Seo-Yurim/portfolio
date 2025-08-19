import Image from "next/image";
import { ProjectItem } from "@/types/project";

export const viewMyStartup: ProjectItem = {
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
  logo: (
    <Image src="/images/view_my_startup/VMS_logo.svg" width={150} height={100} alt="VMS logo" />
  ),
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
  taskScreens: [],
};
