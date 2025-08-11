import Image from "next/image";
import { ReactNode } from "react";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiNextdotjs,
  SiPrisma,
  SiRadixui,
  SiReactquery,
  SiSupabase,
} from "react-icons/si";

export const SKILLS: Record<string, ReactNode> = {
  JavaScript: <RiJavascriptFill className="h-10 w-10 text-amber-400" />,
  TypeScript: <BiLogoTypescript className="h-10 w-10 text-sky-600" />,
  React: (
    <div className="rounded-full bg-sky-950 p-1">
      <FaReact className="h-6 w-6 text-sky-400" />
    </div>
  ),
  "Next.js": <SiNextdotjs className="h-8 w-8 text-black" />,
  "Tailwind CSS": (
    <div className="rounded-full bg-sky-950 p-1">
      <RiTailwindCssFill className="h-6 w-6 text-cyan-600" />
    </div>
  ),
  "React-Query": <SiReactquery className="h-8 w-8 text-red-500" />,
  Zustand: <Image src="/images/icons/zustand.svg" width={32} height={32} alt="zustand icon" />,
  "Radix UI": <SiRadixui className="h-8 w-8" />,
  "Express.js": (
    <div className="rounded-full bg-black p-1">
      <SiExpress className="h-6 w-6 text-white" />
    </div>
  ),
  "Prisma ORM": <SiPrisma className="h-7 w-7 text-cyan-900" />,
  PostgreSQL: <BiLogoPostgresql className="h-8 w-8 text-cyan-700" />,
  Supabase: <SiSupabase className="h-8 w-8 text-emerald-500" />,
};
