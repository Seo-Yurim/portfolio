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
  description: (
    <p className="px-2">
      <strong>ViewMyStartup</strong>은 투자금, 매출 등을 기준으로 스타트업을 비교·분석하고, 투자
      결과를 확인할 수 있는 <span className="font-bold underline">모의 투자 서비스</span>입니다.
      <br />
      로그인 없이 닉네임과 비밀번호만으로 참여 가능하며, 분석을 통해 최적의 투자 대상을 판단할 수
      있습니다.
    </p>
  ),
  color: "#fc5230",
  logo: (
    <Image src="/images/view_my_startup/VMS_logo.svg" width={150} height={100} alt="VMS logo" />
  ),
  tools: ["JavaScript", "React", "Express.js", "Prisma ORM", "PostgreSQL"],
  features: [
    {
      title: "기업 투자 및 투자 수정 / 삭제 기능",
      description: (
        <>
          <li>사용자들이 기업에 투자할 수 있는 입력 및 제출 기능 구현</li>
          <li>
            사용자가 설정했던 비밀번호 인증 후 투자 내역을 직접 수정하거나 삭제할 수 있는 기능 제공
          </li>
        </>
      ),
      img: [
        { label: "기업 투자하기", url: "/images/view_my_startup/VMS_create_invest.png" },
        { label: "기업 수정하기", url: "/images/view_my_startup/VMS_edit_invest.png" },
      ],
    },
  ],
  contributions: [
    {
      title: "프론트엔드",
      description: (
        <>
          <li>
            <span className="rounded-full bg-primary-foreground px-2 py-1 text-xs font-bold text-white">
              공통 컴포넌트 구현
            </span>{" "}
            네비게이션 바, 컨펌 모달 등 재사용 가능한 UI 요소 개발
          </li>
          <li>
            <span className="rounded-full bg-primary-foreground px-2 py-1 text-xs font-bold text-white">
              화면 개발
            </span>{" "}
            투자 현황 페이지 및 기업 상세 페이지 구현
          </li>
          <li>
            <span className="rounded-full bg-primary-foreground px-2 py-1 text-xs font-bold text-white">
              유효성 검사 커스텀 훅
            </span>{" "}
            사용자 입력에 대한 커스텀 유효성 검사 로직 개발
          </li>
          <li>
            <span className="rounded-full bg-primary-foreground px-2 py-1 text-xs font-bold text-white">
              반응형 UI 구현
            </span>{" "}
            다양한 기기 해상도에 대응하는 레이아웃 구성
          </li>
        </>
      ),
    },
    {
      title: "백엔드",
      description: (
        <>
          <li>
            <span className="rounded-full bg-primary-foreground px-2 py-1 text-xs font-bold text-white">
              투자 관련 API 구현
            </span>{" "}
            투자 목록 조회, 생성, 수정, 삭제 API 개발
          </li>
          <li>
            <span className="rounded-full bg-primary-foreground px-2 py-1 text-xs font-bold text-white">
              Render 서버 배포
            </span>{" "}
            Render 플랫폼을 통한 초기 백엔드 배포 진행 (현재는 중단)
          </li>
        </>
      ),
    },
  ],
  issues: [
    {
      title: "투자 생성 시 id 필드 중복 오류",
      problem: (
        <p>
          투자 생성 시, 클라이언트에서는 실패 메시지가 나타나고,{" "}
          <span className="underline">서버 로그에는 id 필드 중복 오류</span>가 발생
        </p>
      ),
      cause: (
        <p>
          id 필드는 Autoincrement로 설정되어 있어 자동 증가가 되어야 했으나,
          <br />
          초기 Mock Data 삽입 시{" "}
          <span className="font-bold text-red-400">
            수동으로 id 값을 입력하여 시퀀스가 정상 작동하지 않음
          </span>
        </p>
      ),
      solution: (
        <p>
          <span className="font-bold text-red-400">
            SELECT setval(...) 쿼리를 통해 PostgreSQL 시퀀스를 현재 최대 id 기준으로 수동 초기화
          </span>
          <br />→ 이후 데이터 충돌 없이 생성 가능
        </p>
      ),
    },
  ],
  refactoring: [
    {
      content: {
        title: "공통 컴포넌트 정리",
        description: (
          <>
            <li>
              버튼, 인풋, 드롭다운, 테이블 리스트 등 중복되는 UI 요소를 공통 컴포넌트로 재구성
            </li>
            <li>컨펌 모달 통합: props를 통한 다양한 유형의 모달 분기 처리</li>
          </>
        ),
      },
    },
    {
      content: {
        title: "React Query 도입",
        description: (
          <>
            <li>서버 상태 관리 및 캐싱 도입으로 데이터 갱신 흐름 최적화</li>
            <li>
              기존에는 데이터를 새로고침으로 갱신했지만 이를 최적화함으로써 비동기 처리 효율화
            </li>
          </>
        ),
      },
    },
    {
      content: {
        title: "코드 및 폴더 구조 리팩토링",
        description: (
          <>
            <li>과도하게 분할된 컴포넌트를 통합하거나, 역할이 많은 컴포넌트는 기능별로 세분화</li>
            <li>정적 데이터(정렬 옵션)를 constants 폴더로 분리 관리</li>
          </>
        ),
      },
    },
    {
      content: {
        title: "웹 접근성 및 SEO 개선",
        description: (
          <>
            <li>시맨틱 태그, meta/title 태그 추가</li>
            <li>Lighthouse 기준 Performance / Best Practices / SEO: 100점 달성</li>
          </>
        ),
      },
      before: [
        {
          graph: {
            label: "기존 랜딩페이지 그래프",
            url: "/images/view_my_startup/refactoring/기업_그래프.png",
          },
          metrics: {
            label: "기존 랜딩페이지 지표",
            url: "/images/view_my_startup/refactoring/기업_지표.png",
          },
        },
        {
          graph: {
            label: "기존 기업 상세 페이지 그래프",
            url: "/images/view_my_startup/refactoring/기업상세_그래프.png",
          },
          metrics: {
            label: "기존 기업 상세 페이지 지표",
            url: "/images/view_my_startup/refactoring/기업상세_지표.png",
          },
        },
        {
          graph: {
            label: "기존 기업 비교 페이지 그래프",
            url: "/images/view_my_startup/refactoring/기업비교_그래프.png",
          },
          metrics: {
            label: "기존 기업 비교 페이지 지표",
            url: "/images/view_my_startup/refactoring/기업비교_지표.png",
          },
        },
        {
          graph: {
            label: "기존 비교 현황 페이지 그래프",
            url: "/images/view_my_startup/refactoring/비교현황_그래프.png",
          },
          metrics: {
            label: "기존 비교 현황 페이지 지표",
            url: "/images/view_my_startup/refactoring/비교현황_지표.png",
          },
        },
        {
          graph: {
            label: "기존 투자 현황 페이지 그래프",
            url: "/images/view_my_startup/refactoring/투자현황_그래프.png",
          },
          metrics: {
            label: "기존 투자 현황 페이지 지표",
            url: "/images/view_my_startup/refactoring/투자현황_지표.png",
          },
        },
      ],
      after: [
        {
          graph: {
            label: "랜딩페이지 리팩토링 그래프",
            url: "/images/view_my_startup/refactoring/기업_리팩토링_그래프.png",
          },
          metrics: {
            label: "랜딩페이지 리팩토링 지표",
            url: "/images/view_my_startup/refactoring/기업_리팩토링_지표.png",
          },
        },
        {
          graph: {
            label: "기업 상세 페이지 리팩토링 그래프",
            url: "/images/view_my_startup/refactoring/기업상세_리팩토링_그래프.png",
          },
          metrics: {
            label: "기업 상세 페이지 리팩토링 지표",
            url: "/images/view_my_startup/refactoring/기업상세_리팩토링_지표.png",
          },
        },
        {
          graph: {
            label: "기업 비교 페이지 리팩토링 그래프",
            url: "/images/view_my_startup/refactoring/기업비교_리팩토링_그래프.png",
          },
          metrics: {
            label: "기업 비교 페이지 리팩토링 지표",
            url: "/images/view_my_startup/refactoring/기업비교_리팩토링_지표.png",
          },
        },
        {
          graph: {
            label: "비교 현황 페이지 리팩토링 그래프",
            url: "/images/view_my_startup/refactoring/비교현황_리팩토링_그래프.png",
          },
          metrics: {
            label: "비교 현황 페이지 리팩토링 지표",
            url: "/images/view_my_startup/refactoring/비교현황_리팩토링_지표.png",
          },
        },
        {
          graph: {
            label: "투자 현황 페이지 리팩토링 그래프",
            url: "/images/view_my_startup/refactoring/투자현황_리팩토링_그래프.png",
          },
          metrics: {
            label: "투자 현황 페이지 리팩토링 지표",
            url: "/images/view_my_startup/refactoring/투자현황_리팩토링_지표.png",
          },
        },
      ],
    },
  ],
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
  taskScreens: [
    { label: "랜딩페이지", url: "/images/view_my_startup/VMS_landing.png" },
    { label: "기업 상세 페이지", url: "/images/view_my_startup/VMS_startup_detail.png" },
    { label: "투자 현황 페이지", url: "/images/view_my_startup/VMS_invest.png" },
    { label: "투자 완료 모달", url: "/images/view_my_startup/VMS_invest_success.png" },
    { label: "비밀번호 인증 모달", url: "/images/view_my_startup/VMS_pw_verify.png" },
    { label: "비밀번호 인증 실패 모달", url: "/images/view_my_startup/VMS_pw_wrong.png" },
    { label: "컨펌 모달", url: "/images/view_my_startup/VMS_delete_confirm.png" },
  ],
};
