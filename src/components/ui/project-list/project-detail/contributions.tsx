import Image from "next/image";
import { useState } from "react";
import { FaSearchPlus, FaUserCog } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { AnimatePresence } from "framer-motion";
import { ImageItem, TextBlock } from "@/types/project";
import Accordion from "@/components/accordion";

export function Contributions({ contributions }: { contributions?: TextBlock[] }) {
  const [selectedImg, setSelectedImg] = useState<ImageItem | null>(null);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <FaUserCog className="h-5 w-5" />
        <h2 className="text-xl font-bold">작업기여도</h2>
      </div>

      {contributions?.map((contribution, idx) => (
        <Accordion
          key={idx}
          title={contribution.title}
          showIcon={false}
          titleStyle="w-full bg-gray-100 px-2 py-1 text-left font-semibold hover:bg-gray-100/70 dark:bg-gray-100/50 dark:hover:bg-gray-100/30"
        >
          <p>{contribution.description}</p>
          <div className="grid grid-cols-2 gap-4 pb-4">
            {contribution.img?.map((image, i) => {
              const isVideo = image.url.endsWith(".mov") || image.url.endsWith(".mp4");

              return (
                <div
                  key={i}
                  className="group relative h-[200px] w-full cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  {isVideo ? (
                    <div className="relative h-full w-full overflow-hidden rounded-xl">
                      <Image
                        src={image.thumbnail || "이미지 준비 중 ..."}
                        fill
                        className="rounded-xl object-cover object-top"
                        alt={image.label || "작업 화면 썸네일"}
                      />

                      <video
                        src={image.url}
                        muted
                        playsInline
                        loop
                        className="absolute inset-0 z-10 hidden h-full w-full rounded-xl object-cover object-top group-hover:block"
                      />
                    </div>
                  ) : (
                    <Image
                      src={image.url}
                      fill
                      className="rounded-xl object-cover object-top"
                      alt={image.label || "작업 화면 이미지"}
                    />
                  )}
                  <div
                    onClick={() => setSelectedImg(image)}
                    className="absolute inset-0 z-20 hidden items-center justify-center gap-4 rounded-xl bg-blue-200/60 group-hover:flex"
                  >
                    <p className="rounded-xl bg-white px-2 py-1 font-GWT text-lg text-blue-200">
                      {image.label}
                    </p>
                    <FaSearchPlus className="h-10 w-10 text-white" />
                  </div>
                </div>
              );
            })}
          </div>
        </Accordion>
      ))}

      <AnimatePresence>
        {selectedImg && (
          <div
            onClick={() => setSelectedImg(null)}
            className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-gray-950/70"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-[90%] max-w-[90%] flex-col gap-4 overflow-auto rounded-xl bg-white px-8 py-4 dark:bg-blue-200"
            >
              <div className="flex items-center gap-4 text-blue-200 dark:text-white">
                <h2 className="text-nowrap font-GWT text-2xl">{selectedImg.label}</h2>
                <div className="w-full border-b border-blue-200 dark:border-white" />
                <TbXboxXFilled
                  onClick={() => setSelectedImg(null)}
                  className="h-12 w-12 cursor-pointer"
                />
              </div>

              {selectedImg.url.endsWith(".mov") || selectedImg.url.endsWith(".mp4") ? (
                <video
                  src={selectedImg.url}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="max-h-[70vh] w-full rounded-xl"
                />
              ) : (
                <Image
                  src={selectedImg.url}
                  className="rounded-xl"
                  height={600}
                  width={1000}
                  alt="선택한 작업 화면"
                />
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
