import Image from "next/image";
import { ProjectItem } from "@/types/project";

export const tetherdrop: ProjectItem = {
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
  description: (
    <p className="px-2">
      <strong>테더드랍</strong>은 암호화폐 거래소 이용자들이 페이백 및 수수료 할인 혜택을 받을 수
      있도록 지원하는 <span className="underline">제휴·셀퍼럴 플랫폼</span>입니다.
    </p>
  ),
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
      title: "로그인 / 회원가입 기능",
      description: (
        <ul className="list-disc px-4">
          <li>
            이메일, 비밀번호 확인, 추천인 코드 입력, 가입 경로 선택, 약관 동의 기능 등을 포함한
            회원가입 폼을 구현하였으며,
          </li>
          react-hook-form과 zod로 실시간 유효성 검사를 처리하고, 회원가입 시 약관 전체 동의 여부에
          따른 제한 로직도 포함했습니다.
          <br />
          <li>
            또한, 비밀번호 보기 토글, 가입 경로 아코디언, toast 메시지 등 UX 개선 요소도
            반영했습니다.
          </li>
        </ul>
      ),
      img: [
        { label: "Tetherdrop 로그인 페이지", url: "/images/tetherdrop/tetherdrop_signin.png" },
        { label: "Tetherdrop 회원가입 페이지", url: "/images/tetherdrop/tetherdrop_signup.png" },
      ],
    },
    {
      title: "비밀번호 찾기 기능",
      description: (
        <ul className="list-disc px-4">
          <li>
            zustand 기반 상태 저장소를 통해 인증 과정에서 필요한 이메일 및 인증 토큰 상태를
            관리하고,
          </li>
          react-hook-form과 zod를 사용하여 각 단계에서의 유효성 검증을 적용했습니다.
          <br />
          <li>
            사용자 경험 강화를 위해 인증 타이머 표시, 인증 실패 처리, 완료 후 로그인 유도 등의
            요소를 구현하였습니다.
          </li>
        </ul>
      ),
      img: [
        {
          label: "Tetherdrop 비밀번호 찾기 페이지 Step 1",
          url: "/images/tetherdrop/tetherdrop_find_pw_1.png",
        },
        {
          label: "Tetherdrop 비밀번호 찾기 페이지 Step 2",
          url: "/images/tetherdrop/tetherdrop_find_pw_2.png",
        },
        {
          label: "Tetherdrop 비밀번호 찾기 페이지 Step 3",
          url: "/images/tetherdrop/tetherdrop_find_pw_3.png",
        },
        {
          label: "Tetherdrop 비밀번호 찾기 페이지 Step 4",
          url: "/images/tetherdrop/tetherdrop_find_pw_4.png",
        },
      ],
    },
    {
      title: "회원 탈퇴 기능",
      description: (
        <ul className="list-disc px-4">
          <li>사용자가 자신의 계정을 직접 삭제할 수 있는 회원 탈퇴 기능을 구현하였습니다.</li>
          <li>
            탈퇴 요청 후 세션을 안전하게 종료하고, 홈 페이지로 리디렉션 되도록 처리하였습니다.
          </li>
          <li>탈퇴 실패 시에는 적절한 에러 메시지를 토스트로 안내합니다.</li>
        </ul>
      ),
      img: [
        {
          label: "Tetherdrop 회원 탈퇴 페이지",
          url: "/images/tetherdrop/tetherdrop_user_delete.png",
        },
      ],
    },
  ],
  contributions: [
    {
      title: "다양한 화면 퍼블리싱",
      description:
        "로그인, 회원가입, 아이디/비밀번호 찾기, 서비스 소개, 마이페이지, UID 검색 결과 등",
      img: [
        {
          label: "Tetherdrop 비회원 랜딩 페이지",
          url: "/images/tetherdrop/tetherdrop_landing.mov",
          thumbnail: "/images/tetherdrop/tetherdrop_main_img.png",
        },
        {
          label: "Tetherdrop 회원 랜딩 페이지",
          url: "/images/tetherdrop/tetherdrop_logged_landing.mov",
          thumbnail: "/images/tetherdrop/thumbnail/logged_landing_thumbnail.png",
        },
        {
          label: "Tetherdrop 서비스 소개 페이지",
          url: "/images/tetherdrop/tetherdrop_services.mov",
          thumbnail: "/images/tetherdrop/thumbnail/services_thumbnail.png",
        },
        {
          label: "Tetherdrop 서비스 이용방법 페이지",
          url: "/images/tetherdrop/tetherdrop_service_guide.mov",
          thumbnail: "/images/tetherdrop/thumbnail/service_guide_thumbnail.png",
        },
        {
          label: "Tetherdrop UID 검색 결과 페이지",
          url: "/images/tetherdrop/tetherdrop_UID_result.png",
        },
        {
          label: "Tetherdrop 마이페이지",
          url: "/images/tetherdrop/tetherdrop_mypage.mov",
          thumbnail: "/images/tetherdrop/thumbnail/mypage_thumbnail.png",
        },
        { label: "Tetherdrop 파트너 페이지", url: "/images/tetherdrop/tetherdrop_partner.png" },
        {
          label: "Tetherdrop 아이디 찾기 페이지",
          url: "/images/tetherdrop/tetherdrop_find_id.png",
        },
      ],
    },
    {
      title: "공통 컴포넌트 구현",
      description: "거래소 테이블, Header, Footer 등",
      img: [
        {
          label: "Tetherdrop 거래소 테이블",
          url: "/images/tetherdrop/tetherdrop_common_table.png",
        },
        {
          label: "Tetherdrop 로고 애니메이션 구현",
          url: "/images/tetherdrop/tetherdrop_logo_animation.mov",
          thumbnail: "/images/tetherdrop/thumbnail/logo_animation_thumbnail.png",
        },
      ],
    },
    {
      title: "QA 반영 및 UI/UX 개선",
      description:
        "실무 관계자와 직접 소통하며 QA 피드백을 반영하고, UI/UX 품질을 개선하는 데 기여",
    },
    {
      title: "반응형 UI 구성",
      description: "반응형 UI 구성으로 모든 디바이스에 최적화된 레이아웃 제공",
    },
  ],
  links: [{ label: "서비스 링크", url: "https://www.tetherdrop.io/" }],
};
