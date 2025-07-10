import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { SiTistory } from "react-icons/si";
import IconText from "@/components/icon-text";
import Title from "@/components/title";

export function Profile() {
  return (
    <section id="profile" className="flex h-screen flex-col gap-16 py-16">
      <Title title="About Me" />

      <div className="container flex items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="rounded-3xl bg-white px-6 py-2 font-GWT text-3xl text-black shadow-right-down">
            Profile
          </h2>
          <div className="relative h-[200px] w-[200px] overflow-hidden rounded-full bg-primary">
            <Image
              className="h-full w-full object-cover"
              src="/images/미모티콘.png"
              alt="profile img"
              fill
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-medium text-text-secondary">2000.11.05</p>
            <p className="text-lg font-extrabold">
              서유림 <span className="font-medium">Seo-Yurim</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <IconText
              icon={<MdOutlineEmail className="h-4 w-4 text-background" />}
              iconStyle="bg-foreground p-1"
              text="E-mail:"
              type="link"
              link="mailto:yurim2204@gmail.com"
              linkText="yurim2204@gmail.com"
            />
            <IconText
              icon={<SiTistory className="h-3 w-3 text-background" />}
              iconStyle="bg-foreground p-[6px]"
              text="Blog:"
              type="link"
              link="https://y-flm.tistory.com"
              linkText="https://y-flm.tistory.com"
            />
            <IconText
              icon={<IoLogoGithub className="h-4 w-4 text-background" />}
              iconStyle="bg-foreground p-1"
              text="GitHub:"
              type="link"
              link="https://github.com/Seo-Yurim"
              linkText="https://github.com/Seo-Yurim"
            />
          </div>
          <div className="rounded-2xl bg-primary p-8">
            <p className="text-lg text-white">
              <span className="font-bold text-highlight">UI/UX</span> 뿐만 아니라{" "}
              <span className="font-bold text-highlight">개발자 경험(DX)</span>까지 함께 고민하며,
              <br />
              <span className="font-bold text-highlight">깔끔하고 유지보수하기 쉬운</span> 코드를
              지향합니다.
              <br />
              <span>새로운 기술</span>을 배우는 것을 즐기며,
              <br />더 나은 방향이 있다면 항상{" "}
              <span className="font-bold text-highlight">주도적으로 탐색</span>하고 적용하려
              노력합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
