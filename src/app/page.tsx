"use client";

import Link from "next/link";
import { useState } from "react";
import { FaArrowAltCircleUp, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Hero, PeerReview, Profile, ProjectList, Qualifications } from "./components";

const CTAStyle =
  "cursor-pointer max-md:h-8 max-md:w-8 h-12 w-12 rounded-full border-2 border-primary-foreground bg-white p-1 text-black shadow-right-down";

export default function Home() {
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);

  const isVisible = showEmail || hovered;

  return (
    <>
      <Hero />
      <div className="ml-[240px] max-lg:ml-0">
        <Profile />
        <Qualifications />
        <ProjectList />
        <PeerReview />
      </div>

      <div className="fixed bottom-0 right-0 flex flex-col gap-4 text-nowrap p-4">
        <Link
          href="https://github.com/Seo-Yurim"
          className="group relative"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={CTAStyle} />
          <div className="absolute right-14 top-[50%] hidden -translate-y-1/2 rounded-full bg-primary-foreground px-4 py-1 shadow-right-down group-hover:block max-md:right-10">
            <p className="text-nowrap font-GWT text-white max-md:text-sm">GitHub 바로가기</p>
          </div>
        </Link>

        <div
          className="relative"
          onClick={() => setShowEmail(!showEmail)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <MdEmail className={CTAStyle} />

          {isVisible && (
            <div className="absolute right-14 top-1/2 z-50 flex -translate-y-1/2 flex-col items-center gap-2 rounded-xl bg-primary-foreground px-4 py-2 font-GWT text-white shadow-right-down max-md:right-10 max-md:text-sm">
              <Link
                href="mailto:yurim2204@gmail.com"
                className="button rounded-xl p-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                이메일 보내기
              </Link>
              <button
                className="button rounded-xl p-2"
                onClick={(e) => {
                  e.stopPropagation();
                  navigator.clipboard.writeText("yurim2204@gmail.com");
                  alert("이메일 주소가 복사되었습니다!");
                }}
              >
                이메일 복사하기
              </button>
            </div>
          )}
        </div>

        <Link href="#hero" className="group relative">
          <FaArrowAltCircleUp className={CTAStyle} />
          <div className="absolute right-14 top-[50%] hidden -translate-y-1/2 rounded-full bg-primary-foreground px-4 py-1 shadow-right-down group-hover:block max-md:right-10">
            <p className="font-GWT text-white max-md:text-sm">처음으로</p>
          </div>
        </Link>
      </div>
    </>
  );
}
