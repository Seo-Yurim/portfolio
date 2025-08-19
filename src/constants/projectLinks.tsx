import { ReactNode } from "react";
import {
  GrDocumentPdf,
  GrDocumentText,
  GrDocumentUser,
  GrDocumentVideo,
  GrGithub,
} from "react-icons/gr";
import { IoIosLink } from "react-icons/io";

export const PROJECT_LINKS: Record<string, ReactNode> = {
  "개발 보고서": <GrDocumentText className="h-6 w-6" />,
  "팀 개발 문서": <GrDocumentUser className="h-6 w-6" />,
  "서비스 시연 영상": <GrDocumentVideo className="h-6 w-6" />,
  "서비스 발표 자료": <GrDocumentPdf className="h-6 w-6" />,
  GitHub: <GrGithub className="h-6 w-6" />,
  "기존 GitHub": <GrGithub className="h-6 w-6" />,
  "리팩토링 GitHub": <GrGithub className="h-6 w-6" />,
  "서비스 링크": <IoIosLink className="h-6 w-6" />,
};
