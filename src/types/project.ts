import { ReactNode } from "react";

interface RoleType {
  position: "FE" | "BE" | "Full-Stack" | "파트장";
  size?: number;
}

interface TextBlock {
  title: string;
  description?: string;
}

interface TroubleshootingItem {
  problem: string;
  cause?: string;
  solution: string;
}

interface Link {
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
  description: string;
  color: string;
  logo: ReactNode;
  tools: string[];
  features?: TextBlock[];
  contributions?: TextBlock[];
  issues?: TroubleshootingItem[];
  retrospectives?: TextBlock[];
  links: Link[];
}
