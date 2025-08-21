"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TbTargetArrow } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import Title from "@/components/title";

const introduce = [
  "UI/UX를 중시하는 개발자",
  "지속적으로 성장하는 개발자",
  "끊임없이 도전하는 개발자",
  "함께 일하고 싶은 동료",
  "긍정적인 에너지를 주는 동료",
];
const tags = ["열정", "협업", "자기주도적", "배려", "책임감"];
const highlight =
  "text-primary-foreground font-extrabold text-3xl font-extrabold max-lg:text-2xl max-md:text-xl group-hover:underline";

export function Profile() {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % introduce.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="profile"
      className="relative flex h-full flex-col items-end gap-16 py-12 max-lg:py-20"
    >
      <Title title="About Me" />

      <div className="container flex items-center justify-center gap-8 max-md:flex-col max-md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <h2 className="rounded-3xl bg-white px-6 py-2 font-GWT text-3xl text-black shadow-right-down max-lg:px-4 max-lg:py-1 max-lg:text-2xl">
            Profile
          </h2>

          <div className="group relative h-[250px] w-[250px] cursor-pointer overflow-hidden rounded-full bg-primary max-lg:h-[150px] max-lg:w-[150px]">
            <Image
              className="absolute inset-0 h-full w-full object-cover opacity-100 transition-opacity duration-300 group-hover:opacity-0"
              src="/images/portfolio/미모티콘.png"
              alt="profile img"
              fill
            />
            <Image
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-lg:h-[100px] max-lg:w-[100px]"
              src="/images/portfolio/미모티콘2.png"
              alt="profile img hover"
              width={180}
              height={180}
            />
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-sm font-medium text-text-secondary">2000.11.05</p>
            <p className="text-lg font-extrabold max-lg:text-base">
              서유림 <span className="font-medium">Seo-Yurim</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-8 max-lg:gap-4"
        >
          <div className="flex items-center gap-2 font-GWT text-2xl max-lg:text-xl max-md:text-sm">
            <TbTargetArrow className="h-8 w-8 text-red-500 max-md:h-5 max-md:w-5" />
            <p className="text-primary">나의 지향점: </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={introduce[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-fit rounded-2xl bg-primary-foreground px-4 py-1 text-white shadow-right-down"
              >
                {introduce[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="group flex cursor-pointer flex-col gap-2 rounded-2xl border border-primary-foreground p-4 font-GWS text-2xl font-semibold text-primary max-lg:text-xl max-md:text-lg">
            <p>
              <span className={highlight}>사용자 경험(UI/UX)</span>은 물론,{" "}
              <span className={highlight}>개발자 경험(DX)</span>까지 고려한 개발을 지향합니다.
            </p>
            <p>
              <span className={highlight}>
                깔끔하고 유지보수가 쉬운 구조, 협업에 도움이 되는 코드와 문서
              </span>
              를 통해
              <br />
              동료 개발자에게도 긍정적인 경험을 주는 것을 중요하게 생각합니다.
            </p>
            <p>
              <span className={highlight}>새로운 기술과 도구를 탐구</span>하는 데 즐거움을 느끼며,
              <br />더 나은 방향이 보인다면 <span className={highlight}>주도적</span>으로 실험하고
              적용하는 것을 두려워하지 않습니다.
            </p>
          </div>

          <div className="flex items-center gap-2 max-lg:mx-auto">
            {tags.map((tag, i) => (
              <motion.p
                key={tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="text-nowrap rounded-full bg-primary-foreground px-4 py-1 font-GWS text-xl font-semibold text-white max-lg:text-base max-md:px-2"
              >
                #{tag}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
