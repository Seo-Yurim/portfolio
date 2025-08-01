import { ReactNode } from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiNextdotjs, SiPrisma, SiReactquery } from "react-icons/si";

export const SKILLS: Record<string, ReactNode> = {
  JavaScript: <RiJavascriptFill />,
  TypeScript: <BiLogoTypescript />,
  React: <FaReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <RiTailwindCssFill />,
  "React-Query": <SiReactquery />,
  "Express.js": <SiExpress />,
  "Prisma ORM": <SiPrisma />,
  PostgreSQL: <BiLogoPostgresql />,
};
