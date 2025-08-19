import Image from "next/image";
import { ProjectItem } from "@/types/project";

export const fitmate: ProjectItem = {
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
  description: (
    <p className="px-2">
      <strong>핏메이트</strong>는 운동 전문가와 운동을 배우고 싶은 유저를 연결하여,{" "}
      <span className="font-bold underline">1:1 맞춤형 운동 프로그램을 제공하는 서비스</span>
      입니다.
      <br />
      <span className="font-semibold text-blue-100">유저</span>는 운동 목표에 맞는 강사에게 맞춤
      지도를 받아{" "}
      <span className="font-semibold text-blue-100">효율적이고 지속 가능한 운동 계획</span>을 세울
      수 있습니다.
      <br />
      <span className="font-semibold text-blue-100">강사</span>는 유저의{" "}
      <span className="font-semibold text-blue-100">
        목표와 상황에 맞춘 체계적인 운동 계획을 제시
      </span>
      하고 지도를 통해 유저가 올바른 운동 습관을 형성하도록 돕습니다.
    </p>
  ),
  color: "#18a8f1",
  logo: (
    <Image
      src="/images/fitmate/fitmate_logo.png"
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
      img: [
        {
          label: "무한 스크롤링",
          url: "/images/fitmate/fitmate_scroll.mov",
          thumbnail: "/images/fitmate/fitmate_find_trainer.png",
        },
      ],
    },
    {
      title: "견적 보내기 / 확정 / 반려 기능",
      description: "일반 사용자와 강사 모두 견적서를 주고받고, 확정하거나 반려할 수 있는 기능 제공",
      img: [
        { label: "견적 보내기", url: "/images/fitmate/fitmate_send_quote.png" },
        { label: "견적 확정", url: "/images/fitmate/fitmate_accept_quote.png" },
      ],
    },
    {
      title: "SNS 공유 기능",
      description: "콘텐츠 공유를 위한 URL 복사, 카카오톡 공유, 페이스북 공유 기능 추가",
      img: [{ label: "SNS 공유", url: "/images/fitmate/fitmate_SNS_share.png" }],
    },
    {
      title: "데이터 정렬 및 검색 필터링",
      description: "리스트형 데이터에 대해 정렬 조건 및 검색 필터를 적용할 수 있는 기능 구현",
      img: [
        { label: "Dropdown 필터링", url: "/images/fitmate/fitmate_filter.png" },
        { label: "Checkbox 필터링", url: "/images/fitmate/fitmate_checkbox.png" },
      ],
    },
  ],
  contributions: [
    {
      title: "공통 컴포넌트 개발",
      description: "Dropdown, Search, Tab, SNS 공유 버튼, 카드/모달 컨테이너 등 UI 구성 요소 개발",
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
  taskScreens: [
    {
      label: "랜딩페이지",
      url: "/images/fitmate/fitmate_landing.mov",
      thumbnail: "/images/fitmate/fitmate_landing.png",
    },
    { label: "강사님 찾기 페이지 (비회원)", url: "/images/fitmate/fitmate_find_trainer.png" },
    { label: "강사님 찾기 페이지 (회원)", url: "/images/fitmate/fitmate_find_trainer_logged.png" },
    { label: "강사님 상세 페이지 (비회원)", url: "/images/fitmate/fitmate_trainer_detail.png" },
    {
      label: "강사님 상세 페이지 (회원)",
      url: "/images/fitmate/fitmate_trainer_detail_logged.png",
    },
    {
      label: "레슨 및 견적이 비어있을 시 표출 화면",
      url: "/images/fitmate/fitmate_empty_quote.png",
    },
    { label: "대기중인 견적 페이지 (유저 전용)", url: "/images/fitmate/fitmate_pending_quote.png" },
    { label: "진행중인 레슨 페이지 (유저 전용)", url: "/images/fitmate/fitmate_active_lesson.png" },
    { label: "받았던 레슨 페이지 (유저 전용)", url: "/images/fitmate/fitmate_past_lesson.png" },
    { label: "견적 상세 페이지 (유저 전용)", url: "/images/fitmate/fitmate_quote_detail.png" },
    { label: "레슨 내역 페이지 (유저 전용)", url: "/images/fitmate/fitmate_lesson_history.png" },
    { label: "받은 요청 페이지 (강사 전용)", url: "/images/fitmate/fitmate_received_request.png" },
    { label: "404 페이지", url: "/images/fitmate/fitmate_404.png" },
    { label: "접근 제한 페이지", url: "/images/fitmate/fitmate_access_denine.png" },
  ],
};
