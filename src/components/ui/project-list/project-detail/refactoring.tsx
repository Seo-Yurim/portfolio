import Image from "next/image";
import { useState } from "react";
import { FaCog, FaSearchPlus } from "react-icons/fa";
import { RefactoringItem } from "@/types/project";
import { ImageItem } from "@/types/project";
import Accordion from "@/components/accordion";
import ImgDetailModal from "@/components/img-detail-modal";

export function Refactoring({ refactoring }: { refactoring: RefactoringItem[] }) {
  const [selectedImg, setSelectedImg] = useState<ImageItem | null>(null);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <FaCog className="h-4 w-4 max-md:h-3 max-md:w-3" />
        <h2 className="text-xl font-bold max-md:text-base">리팩토링</h2>
      </div>

      {refactoring?.map((item, idx) => (
        <Accordion
          key={idx}
          title={`${item.content.title}`}
          showIcon={false}
          titleStyle="w-full max-md:text-sm bg-gray-100 dark:bg-gray-100/50 dark:hover:bg-gray-100/30 px-2 py-1 text-left font-semibold hover:bg-gray-100/70"
        >
          <ul className="flex list-disc flex-col gap-2 px-4 max-md:text-xs">
            {item.content.description}
          </ul>

          {item.before && item.after && (
            <div className="flex flex-col gap-4 pb-4">
              <div className="flex gap-1 rounded-xl p-1 shadow-inner-all">
                <h2 className="rounded-l-xl bg-highlight px-1 py-4 font-GWT text-sm [writing-mode:vertical-rl]">
                  Before
                </h2>
                {item.before?.map((image, i) => (
                  <div key={i} className="flex h-[200px] w-full cursor-pointer flex-col gap-2">
                    <div className="group relative h-full w-full overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
                      <Image
                        src={image.graph.url}
                        className="rounded-xl object-cover object-top"
                        fill
                        alt={image.graph.label || "기존 페이지 그래프"}
                      />
                      <div
                        onClick={() => setSelectedImg(image.graph)}
                        className="absolute inset-0 z-20 hidden flex-col items-center justify-center gap-4 rounded-xl bg-blue-200/60 group-hover:flex"
                      >
                        <p className="rounded-xl bg-white px-2 py-1 font-GWT text-[10px] text-blue-200">
                          {image.graph.label}
                        </p>
                        <FaSearchPlus className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="group relative h-full w-full overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
                      <Image
                        src={image.metrics.url}
                        fill
                        alt={image.metrics.label || "기존 페이지 지표"}
                      />
                      <div
                        onClick={() => setSelectedImg(image.metrics)}
                        className="absolute inset-0 z-20 hidden flex-col items-center justify-center gap-4 rounded-xl bg-blue-200/60 group-hover:flex"
                      >
                        <p className="rounded-xl bg-white px-2 py-1 font-GWT text-[10px] text-blue-200">
                          {image.metrics.label}
                        </p>
                        <FaSearchPlus className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-1 rounded-xl p-1 shadow-inner-all">
                <h2 className="rounded-l-xl bg-highlight px-1 py-4 font-GWT text-sm [writing-mode:vertical-rl]">
                  After
                </h2>
                {item.after?.map((image, i) => (
                  <div key={i} className="flex h-[200px] w-full cursor-pointer flex-col gap-2">
                    <div className="group relative h-full w-full overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
                      <Image
                        src={image.graph.url}
                        className="rounded-xl object-cover object-top"
                        fill
                        alt={image.graph.label || "리팩토링 후 페이지 그래프"}
                      />
                      <div
                        onClick={() => setSelectedImg(image.graph)}
                        className="absolute inset-0 z-20 hidden flex-col items-center justify-center gap-4 rounded-xl bg-blue-200/60 group-hover:flex"
                      >
                        <p className="rounded-xl bg-white px-2 py-1 font-GWT text-[10px] text-blue-200">
                          {image.graph.label}
                        </p>
                        <FaSearchPlus className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="group relative h-full w-full overflow-hidden rounded-xl transition-all duration-300 hover:scale-105">
                      <Image
                        src={image.metrics.url}
                        fill
                        alt={image.metrics.label || "리팩토링 후 페이지 지표"}
                      />
                      <div
                        onClick={() => setSelectedImg(image.metrics)}
                        className="absolute inset-0 z-20 hidden flex-col items-center justify-center gap-4 rounded-xl bg-blue-200/60 group-hover:flex"
                      >
                        <p className="rounded-xl bg-white px-2 py-1 font-GWT text-[10px] text-blue-200">
                          {image.metrics.label}
                        </p>
                        <FaSearchPlus className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Accordion>
      ))}

      <ImgDetailModal selectedImg={selectedImg} onClose={() => setSelectedImg(null)} />
    </div>
  );
}
