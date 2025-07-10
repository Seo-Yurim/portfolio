import Image from "next/image";
import { PiCertificate } from "react-icons/pi";
import IconText from "@/components/icon-text";
import { QualificationCardProps } from "../qualifications";

export function CertificateCard({ expanded, onClick }: QualificationCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex h-[524px] gap-8 rounded-2xl bg-primary/20 p-6 transition-all duration-500 dark:bg-blue-200 ${
        expanded ? "flex-grow" : "cursor-pointer"
      }`}
    >
      <div className="flex flex-col items-center justify-between">
        <p className="vertical-text h-fit w-fit rounded-2xl bg-white px-2 py-4 font-GWT text-2xl text-black shadow-right-down">
          자격증
        </p>
        <PiCertificate className="h-10 w-10 text-foreground" />
      </div>
      <div
        className={`grid grid-cols-2 gap-4 text-nowrap transition-all duration-500 ease-in-out ${
          expanded ? "max-w-full opacity-100" : "max-w-0 opacity-0"
        }`}
        style={{ overflow: expanded ? "visible" : "hidden" }}
      >
        <Card
          icon="/images/icons/한국산업인력공단.svg"
          certificateName="정보처리기사"
          issueDate="2024.06.18"
          issuer="한국산업인력공단"
        />
        <Card
          icon="/images/icons/대한상공회의소.svg"
          certificateName="컴퓨터활용능력 1급"
          issueDate="2024.06.21"
          issuer="대한상공회의소"
        />
      </div>
    </div>
  );
}

interface CardProps {
  icon: string;
  certificateName: string;
  issueDate: string;
  issuer: string;
}

export function Card({ icon, certificateName, issueDate, issuer }: CardProps) {
  return (
    <div className="relative flex h-fit w-full flex-col gap-1 rounded-2xl bg-white py-4 pl-4 pr-6 shadow-right-down">
      <Image
        className="absolute right-6 top-0"
        src="/images/icons/bookmark.svg"
        width={20}
        height={40}
        alt="bookmark icon"
      />
      <IconText
        icon={<Image src={icon} width={20} height={20} alt={`${certificateName} logo`} />}
        text={issuer}
        textStyle="text-black font-GWT"
      />
      <div className="flex flex-col px-7">
        <p className="text-sm font-medium text-text-secondary">{issueDate}</p>
        <p className="text-lg font-bold text-black">{certificateName}</p>
      </div>
    </div>
  );
}
