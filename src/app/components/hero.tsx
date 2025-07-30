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
        <div className="flex gap-8 max-md:flex-col max-md:items-center max-md:gap-4">
          <div className="group flex flex-col items-center">
            <Image
              onClick={() => setIsOpen(true)}
              className="animate-bounceAndShake cursor-pointer max-lg:h-[160px] max-lg:w-[210px]"
              src="/images/folder+cursor.svg"
              width={300}
              height={250}
              alt="folder"
            />
            <div className="flex w-fit items-center justify-center rounded-2xl bg-highlight px-4 py-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 max-md:py-1">
              <p className="text-lg text-primary max-md:text-sm">⬆ Click!</p>
            </div>
          </div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={controls}
            className="flex flex-col gap-6 py-4 max-lg:gap-2 max-lg:p-0 max-md:text-center"
          >
            <p className="text-2xl text-text-secondary max-md:text-sm">
              <span className="text-primary">사용자 경험</span>을 우선시하며, <br />
              <span className="text-primary">효율적</span>이고{" "}
              <span className="text-primary">깔끔한 코드</span>를 지향하는
            </p>
            <p className="text-4xl max-lg:text-2xl">
              프론트엔드 개발자 <br />
              <span className="text-5xl max-lg:text-4xl">서유림</span>
              입니다.
            </p>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && <ShowModal onShow={onShow} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
}
