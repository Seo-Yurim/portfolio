"use client";

import { useTheme } from "@/context/theme-context";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoLinkOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import Title from "@/components/title";

export function Hero() {
  const { toggleTheme } = useTheme();
  const [light, setLight] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [counts, setCounts] = useState<{ today: number | null; total: number | null }>({
    today: null,
    total: null,
  });

  useEffect(() => {
    const isProduction = window.location.hostname !== "localhost";

    if (isProduction) {
      fetch("/api/visit", {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => setCounts(data));
    } else {
      setCounts({ today: 24, total: 216 });
    }
  }, []);

  const handleClick = () => {
    setClicked(true);
    toggleTheme();
    setLight(!light);
    setTimeout(() => setClicked(false), 600);
  };

  return (
    <section
      id="hero"
      className="container relative flex h-screen flex-col items-center justify-center bg-primary max-md:px-4 max-md:py-4"
    >
      <div className="absolute right-0 top-0 flex items-center gap-4 p-4">
        <Link
          href="https://github.com/Seo-Yurim"
          className="group relative"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-12 w-12 cursor-pointer rounded-full border-2 border-foreground bg-background p-1 shadow-right-down" />
          <div className="absolute left-[50%] top-full mt-2 -translate-x-1/2 rounded-full bg-primary-foreground px-4 py-1 opacity-0 shadow-right-down transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-nowrap font-GWT text-white">GitHub 바로가기</p>
          </div>
        </Link>
        {counts.today === null || counts.total === null ? (
          <div className="h-6 w-24 animate-pulse rounded-md bg-highlight" />
        ) : (
          <div className="rounded-lg bg-background px-4 py-2 text-sm font-bold text-primary-foreground shadow-inner-all">
            Today: {counts.today} | Total: {counts.total}
          </div>
        )}
      </div>

      {/* 조명 */}
      <div className="absolute left-1/2 top-0 flex -translate-x-12 gap-12">
        <div className="flex w-full flex-col items-center">
          <div className="h-8 w-1 bg-black" />
          <div className="h-4 w-8 rounded-t-md border border-black bg-primary-foreground" />
          <div className="h-10 w-28 rounded-t-full border border-black bg-primary-foreground" />

          <div className="relative h-4 w-8 rounded-b-full border border-black bg-orange-300">
            <AnimatePresence>
              {light && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute -left-36 top-0 h-32 w-80 bg-highlight"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(255, 200, 0, 0.7), rgba(255, 200, 0, 0))",
                    filter: "blur(20px)",
                    opacity: 0.5,
                    clipPath: "polygon(33% 0%, 67% 0%, 100% 100%, 0% 100%)",
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          onClick={handleClick}
          animate={clicked ? { y: [-20, 0, -20] } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex cursor-pointer flex-col items-center"
        >
          <div className="h-full w-[0.7px] bg-primary-foreground" />
          <div className="h-6 w-1 bg-primary-foreground" />
          <p className="text-nowrap font-GWS text-xl hover:animate-bounceAndShake">Click Me!</p>
        </motion.div>
      </div>

      {/* 컴퓨터 */}
      <div className="absolute bottom-0 flex w-full max-w-[1200px] flex-col items-center">
        <div className="flex w-full flex-col items-center gap-8 rounded-t-full bg-background px-10 py-12 font-GWT shadow-inner-all-strong max-md:py-16">
          <div className="flex flex-col pt-8">
            <p className="text-nowrap px-12 text-3xl max-md:text-lg">Seo-Yurim</p>
            <Title title="Portfolio." />
            <p className="ml-auto text-nowrap pt-2 text-2xl max-md:text-base">
              Front-End Developer
            </p>
          </div>

          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center text-text-secondary">
            <div className="flex w-full flex-col items-center gap-2 rounded-xl px-2 py-4 shadow-inner-all dark:bg-gray-200/10 dark:shadow-inner-all-white">
              <div className="flex items-center gap-4">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="rounded-full bg-primary-foreground px-4 py-1 text-4xl font-bold text-white max-md:text-base"
                >
                  UI/UX 중심
                </motion.span>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <IoLinkOutline className="h-10 w-10 text-primary-foreground max-md:h-8 max-md:w-8" />
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="rounded-full bg-primary-foreground px-4 py-1 text-4xl font-bold text-white max-md:text-base"
                >
                  DX 고려
                </motion.span>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-2xl max-md:text-sm"
              >
                모두 아우르는 개발을 지향합니다.
              </motion.p>
            </div>

            <h2 className="text-2xl max-md:text-lg">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="text-4xl font-bold text-blue-100 dark:text-highlight max-md:text-xl"
              >
                사용자
              </motion.span>
              와{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="text-4xl font-bold text-blue-100 dark:text-highlight max-md:text-xl"
              >
                개발자
              </motion.span>{" "}
              <br className="hidden max-md:block" />
              모두에게{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="text-4xl font-bold text-primary-foreground max-md:text-xl"
              >
                좋은 경험
              </motion.span>
              을 만들고 싶은
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="text-3xl font-bold text-primary-foreground max-md:text-xl"
              >
                프론트엔드 개발자{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="text-4xl text-blue-100 dark:text-highlight max-md:text-2xl"
              >
                서유림
              </motion.span>
              입니다.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
