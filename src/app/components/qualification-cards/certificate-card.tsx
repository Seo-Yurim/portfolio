import Image from "next/image";
import { PiCertificate } from "react-icons/pi";
import { motion } from "framer-motion";
import IconText from "@/components/icon-text";

export function CertificateCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`flex flex-col gap-8 rounded-2xl bg-primary/20 p-6 dark:bg-blue-200/60`}
    >
      <div className="flex items-center justify-between">
        <p className="w-fit rounded-2xl bg-white px-4 py-2 font-GWT text-2xl text-black shadow-right-down">
          자격증
        </p>
        <PiCertificate className="h-10 w-10 text-foreground" />
      </div>
      <div className={`grid w-full grid-cols-2 gap-4`}>
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
    </motion.div>
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
    <div className="relative flex h-fit flex-col gap-1 rounded-2xl bg-white px-6 py-4 shadow-right-down">
      <Image
        className="absolute right-6 top-0"
        src="/images/icons/bookmark.svg"
        width={30}
        height={50}
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
