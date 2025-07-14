import Image from "next/image";
import Title from "@/components/title";

const highlight =
  "text-primary-foreground font-extrabold text-xl group-hover:bg-highlight group-hover:py-1 group-hover:rounded-lg";

export function Profile() {
  return (
    <section id="profile" className="animate flex h-screen flex-col gap-16 py-12">
      <Title title="About Me" />

      <div className="container flex items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="rounded-3xl bg-white px-6 py-2 font-GWT text-3xl text-black shadow-right-down">
            Profile
          </h2>
          <div className="group relative h-[250px] w-[250px] cursor-pointer overflow-hidden rounded-full bg-primary">
            <Image
              className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
              src="/images/미모티콘.png"
              alt="profile img"
              fill
            />
            <Image
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              src="/images/미모티콘2.png"
              alt="profile img hover"
              width={180}
              height={180}
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-medium text-text-secondary">2000.11.05</p>
            <p className="text-lg font-extrabold">
              서유림 <span className="font-medium">Seo-Yurim</span>
            </p>
          </div>
        </div>

        <div className="group flex cursor-pointer flex-col gap-4 text-lg font-bold text-primary">
          <p>
            <span className={highlight}>사용자 경험(UI/UX)</span>은 물론,{" "}
            <span className={highlight}>개발자 경험(DX)</span>까지 고려한 개발을 지향합니다.
          </p>
          <p>
            <span className={highlight}>
              깔끔하고 유지보수가 쉬운 구조, 협업에 도움이 되는 코드와 문서
            </span>
            를 통해
            <br />
            동료 개발자에게도 긍정적인 경험을 주는 것을 중요하게 생각합니다.
          </p>
          <p>
            <span className={highlight}>새로운 기술과 도구를 탐구</span>하는 데 즐거움을 느끼며,
            <br />더 나은 방향이 보인다면 <span className={highlight}>주도적</span>으로 실험하고
            적용하는 것을 두려워하지 않습니다.
          </p>
          <p className="text-xl">
            <span className={highlight}>지속적으로 성장하는 개발자</span>,
            <br />
            그리고 <span className={highlight}>함께 일하고 싶은 동료</span>가 되기 위해 노력하고
            있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
