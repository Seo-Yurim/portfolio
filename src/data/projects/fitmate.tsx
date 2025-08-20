import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
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
      className="rounded-xl bg-white px-2 max-md:h-[40px] max-md:w-[140px]"
      width={180}
      height={100}
      alt="fitmate logo"
    />
  ),
  tools: ["TypeScript", "Next.js", "React-Query", "Tailwind CSS"],
  features: [
    {
      title: "무한 스크롤링",
      description: (
        <li>콘텐츠를 스크롤할 때 자동으로 다음 페이지 데이터를 불러오는 무한 스크롤 기능 구현</li>
      ),
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
      description: (
        <li>일반 사용자와 강사 모두 견적서를 주고받고, 확정하거나 반려할 수 있는 기능 제공</li>
      ),
      img: [
        { label: "견적 보내기", url: "/images/fitmate/fitmate_send_quote.png" },
        { label: "견적 확정", url: "/images/fitmate/fitmate_accept_quote.png" },
      ],
    },
    {
      title: "SNS 공유 기능",
      description: <li>콘텐츠 공유를 위한 URL 복사, 카카오톡 공유, 페이스북 공유 기능 구현</li>,
      img: [{ label: "SNS 공유", url: "/images/fitmate/fitmate_SNS_share.png" }],
    },
    {
      title: "데이터 정렬 및 검색 필터링",
      description: <li>데이터에 대해 정렬 조건 및 검색 필터를 적용할 수 있는 기능 구현</li>,
      img: [
        { label: "Dropdown 필터링", url: "/images/fitmate/fitmate_filter.png" },
        { label: "Checkbox 필터링", url: "/images/fitmate/fitmate_checkbox.png" },
      ],
    },
    {
      title: "접근 제어 및 라우팅 보안 처리",
      description: <li>roleGuard 유틸 함수를 구현하여 비회원, 유저, 강사 권한별 접근 제어</li>,
    },
  ],
  contributions: [
    {
      title: "공통 컴포넌트 개발",
      description: (
        <li>Dropdown, Search, Tab, SNS 공유 버튼, 카드/모달 컨테이너 등 UI 구성 요소 개발</li>
      ),
    },
    {
      title: "12개 페이지 구현",
      description: (
        <>
          <li>
            <span className="rounded-full bg-primary-foreground px-2 py-1 text-xs font-bold text-white">
              유저 전용 페이지
            </span>{" "}
            강사 목록, 강사 상세 정보, 대기중인 견적, 견적 상세, 진행중인 레슨, 받았던 레슨, 레슨
            내역 페이지
          </li>
          <li>
            <span className="rounded-full bg-primary-foreground px-2 py-1 text-xs font-bold text-white">
              강사 전용 페이지
            </span>{" "}
            받은 요청 페이지
          </li>
          <li>
            <span className="rounded-full bg-primary-foreground px-2 py-1 text-xs font-bold text-white">
              공통 페이지
            </span>{" "}
            랜딩, 404, 접근 제한 페이지
          </li>
        </>
      ),
    },
    {
      title: "UI 개선 작업",
      description: (
        <li>
          전체 UI/UX 피드백 반영 및 리디자인, 피그마 기준 여백 / 간격 / 컬러 수정 및 hover 효과
          적용으로 직관성 향상
        </li>
      ),
    },
    {
      title: "PR 템플릿 도입",
      description: (
        <li>
          <div className="flex items-center gap-2">
            <p>팀원 간 코드 리뷰 효율성을 높이기 위한 PR 템플릿 작성</p>
            <Link
              href="https://y-flm.tistory.com/31"
              className="flex w-fit items-center gap-2 rounded-xl bg-primary-foreground px-3 py-1 text-xs font-semibold text-white hover:bg-primary-foreground/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              관련 블로그 보러가기
              <FaExternalLinkAlt className="h-3 w-3" />
            </Link>
          </div>
        </li>
      ),
    },
    {
      title: "쿼리 파일 분리 관리",
      description: (
        <li>
          <div className="flex items-center gap-2">
            <p>React Query 관련 로직을 모듈화하여 유지보수 효율성 증대</p>
            <Link
              href="https://y-flm.tistory.com/33"
              className="flex w-fit items-center gap-2 rounded-xl bg-primary-foreground px-3 py-1 text-xs font-semibold text-white hover:bg-primary-foreground/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              관련 블로그 보러가기
              <FaExternalLinkAlt className="h-3 w-3" />
            </Link>
            <Link
              href="https://github.com/FS-part4-1team-FitMate/FitMate-FE/blob/dev/src/lib/api/queries/lesson.ts"
              className="flex w-fit items-center gap-2 rounded-xl bg-primary-foreground px-3 py-1 text-xs font-semibold text-white hover:bg-primary-foreground/70"
              target="_blank"
              rel="noopener noreferrer"
            >
              해당 코드 일부
              <FaExternalLinkAlt className="h-3 w-3" />
            </Link>
          </div>
        </li>
      ),
    },
    {
      title: "반응형 UI 구현",
      description: <li>반응형 UI 구성으로 모든 디바이스에 최적화된 레이아웃 제공</li>,
    },
  ],
  issues: [
    {
      title: "사용자 로그인 시 데이터 불일치",
      problem: (
        <p>
          데이터 페칭 시, 로그아웃 후 다른 계정으로 로그인했을 때{" "}
          <span className="font-semibold text-red-400">
            이전 사용자의 데이터가 계속 화면에 표시
          </span>
          되는 문제 발견
        </p>
      ),
      cause: (
        <p>
          React Query는 <span className="underline">쿼리 키를 기준으로 캐시를 관리</span>하는데,
          <br />
          <span className="font-bold text-red-400">키가 사용자별로 고유하지 않아서</span> 로그아웃
          이후에도 캐시된 이전 사용자 데이터가 재사용되고 있었음.
        </p>
      ),
      solution: (
        <p>
          <span className="font-semibold text-red-400">
            쿼리 키에 사용자 고유 ID(userId)를 포함
          </span>
          시켜 캐시를 사용자 단위로 분리
          <br />→ <span className="underline">현재 로그인된 사용자 데이터만 정상적으로 렌더링</span>
        </p>
      ),
    },
  ],
  retrospectives: [
    {
      title: "과도한 컴포넌트 세분화",
      description: (
        <>
          <li>
            코드의 간결함을 목표로 컴포넌트를 많이 분리했지만, 오히려 <strong>Prop Drilling</strong>
            으로 인해 코드가 복잡해지고 유지보수가 어려워지는 문제를 겪었습니다.
          </li>
          <li>
            이 경험을 통해, 단순한 세분화보다는{" "}
            <strong>재사용성, 상태 관리, 역할 분리를 고려한 설계</strong>가 우선되어야 함을
            깨달았습니다.
          </li>
          <li>
            같은 상황이 온다면,{" "}
            <strong>
              Context API나 상태 관리 라이브러리 도입, 불필요한 Props 전달 최소화, 역할 기반
              컴포넌트 분리
            </strong>{" "}
            등으로 더 효율적인 구조를 만들고자 합니다.
          </li>
        </>
      ),
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
