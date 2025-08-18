import Image from "next/image";
import { useState } from "react";
import { FaRocket, FaSearchPlus } from "react-icons/fa";
import { TbXboxXFilled } from "react-icons/tb";
import { AnimatePresence } from "framer-motion";
import { ImageItem, TextBlock } from "@/types/project";
import Accordion from "@/components/accordion";
import Modal from "@/components/modal";

export function Features({ features }: { features: TextBlock[] }) {
  const [selectedImg, setSelectedImg] = useState<ImageItem | null>(null);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <FaRocket className="h-4 w-4" />
        <h2 className="text-xl font-bold">주요 구현 기능</h2>
      </div>

      {features?.map((feature, idx) => (
        <Accordion
          key={idx}
          title={`${feature.title}`}
          showIcon={false}
          titleStyle="w-full bg-gray-100 dark:bg-gray-100/50 dark:hover:bg-gray-100/30 px-2 py-1 text-left font-semibold hover:bg-gray-100/70"
        >
          {feature.description}
          <div className="grid grid-cols-2 gap-4 pb-4">
            {feature.img?.map((image, i) => (
              <div
                key={i}
                className="group relative h-[200px] w-[1/2] cursor-pointer transition-all duration-300 hover:scale-105"
              >
                <div
                  onClick={() => setSelectedImg(image)}
                  className="absolute inset-0 z-10 flex items-center justify-center rounded-xl bg-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <FaSearchPlus className="h-12 w-12 text-white" />
                </div>

                {image.url && (
                  <Image
                    src={image.url}
                    fill
                    className="rounded-xl object-cover object-top"
                    alt="작업 화면 이미지"
                  />
                )}
              </div>
            ))}
          </div>
        </Accordion>
      ))}

      <AnimatePresence>
        {selectedImg && (
          <div
            onClick={() => setSelectedImg(null)}
            className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-gray-950/70"
          >
            <div className="flex flex-col gap-4 rounded-xl bg-white px-8 py-4">
              <div className="flex items-center gap-4 text-blue-200">
                <h2 className="text-nowrap font-GWT text-2xl">{selectedImg.label}</h2>
                <div className="w-full border-b border-blue-200" />
                <TbXboxXFilled
                  onClick={() => setSelectedImg(null)}
                  className="h-12 w-12 cursor-pointer"
                />
              </div>
              <Image
                src={selectedImg.url}
                className="rounded-xl"
                height={600}
                width={1000}
                alt="선택한 작업 화면"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
