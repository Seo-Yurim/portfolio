interface RoleType {
  position: "FE" | "BE" | "Full-Stack" | "파트장";
  size?: number;
}

interface TextBlock {
  title: string;
  description: string;
}

interface TroubleshootingItem {
  problem: string;
  cause: string;
  solution: string;
}

interface Link {
  label: string;
  url: string;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  type: "Team" | "Personal";
  period: string;
  teamSize?: number;
  teamRoles?: RoleType[];
  myRole?: RoleType[];
  description: string;
  color: string;
  tools: string[];
  features: TextBlock[];
  contribution: TextBlock[];
  issues: TroubleshootingItem[];
  retrospective: TextBlock[];
  links: Link[];
}
