"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimation, useInView } from "framer-motion";
import Title from "@/components/title";
import ShowModal from "../../components/ui/hero/show-modal";

const responsiveStyle = "max-md:gap-8 max-md:border-[24px] max-md:border-y-[56px] max-md:px-4";

export function Hero({ onShow }: { onShow: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    }
  }, [inView, controls]);

  return (
    <>
      <div
        id="hero"
        className={`mx-auto flex max-h-[700px] w-full max-w-[1200px] flex-col items-center justify-center gap-24 rounded-2xl border-[42px] border-black bg-background px-4 py-16 font-GWT shadow-2xl ${responsiveStyle}`}
      >
        <Title title="PortFolio" />
        <h1 className="rounded-xl bg-gray-100/70 px-8 py-2 text-3xl shadow-right-down">
          ⚠️ 현재 포트폴리오 공사중입니다!! 나중에 다시 방문해주세요 😉
        </h1>
      </div>
    </>
  );
}
