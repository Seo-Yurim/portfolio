import Link from "next/link";
import { ReactNode } from "react";

interface IconTextProps {
  icon: ReactNode;
  iconStyle?: string;
  text: string;
  type?: "default" | "link";
  link?: string;
  linkText?: string;
}

export default function IconText({
  icon,
  iconStyle,
  text,
  type = "default",
  link = "",
  linkText,
}: IconTextProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={`flex items-center justify-center rounded-full ${iconStyle}`}>{icon}</div>
      <p className="font-semibold">{text}</p>
      {type === "link" && (
        <Link
          className="text-text-secondary underline"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
