import { ReactNode } from "react";

export interface ImageItem {
  label: string;
  url: string;
  thumbnail?: string;
}
export interface RoleType {
  position: "FE" | "BE" | "Full-Stack" | "파트장";
  size?: number;
}

export interface TextBlock {
  title: string;
  description?: ReactNode;
  img?: ImageItem[];
}

export interface TroubleshootingItem {
  title: string;
  problem: ReactNode;
  cause?: ReactNode;
  solution: ReactNode;
  img?: ReactNode;
}

export interface LinkItem {
  label: string;
  url: string;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  type: "Team" | "Personal" | "Internship";
  period: string;
  teamSize?: number;
  teamRoles?: RoleType[];
  myRole?: RoleType[];
  description: ReactNode;
  color: string;
  logo: ReactNode;
  tools: string[];
  features: TextBlock[];
  contributions?: TextBlock[];
  issues?: TroubleshootingItem[];
  retrospectives?: TextBlock[];
  links: LinkItem[];
  taskScreens?: ImageItem[];
}
