import Image from "next/image";
import { useState } from "react";
import { CgScreen } from "react-icons/cg";
import { FaSearchPlus } from "react-icons/fa";
import { ImageItem } from "@/types/project";
import ImgDetailModal from "@/components/img-detail-modal";

export function TaskScreens({ taskScreens }: { taskScreens: ImageItem[] }) {
  const [selectedImg, setSelectedImg] = useState<ImageItem | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2 border-b-2 border-blue-200 dark:border-white">
        <CgScreen className="h-5 w-5 max-md:h-4 max-md:w-4" />
        <h2 className="text-xl font-bold max-md:text-base">작업 화면</h2>
      </div>

      <div className="grid grid-cols-3 gap-2 rounded-xl bg-primary-foreground/70 p-2 max-md:grid-cols-2">
        {taskScreens?.map((image, i) => {
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
                className="absolute inset-0 z-20 hidden flex-wrap items-center justify-center gap-4 rounded-xl bg-blue-200/60 p-4 group-hover:flex"
              >
                <p className="rounded-xl bg-white px-2 py-1 font-GWT text-lg text-blue-200 max-md:text-xs">
                  {image.label}
                </p>
                <FaSearchPlus className="h-10 w-10 text-white max-md:h-5 max-md:w-5" />
              </div>
            </div>
          );
        })}
      </div>

      <ImgDetailModal selectedImg={selectedImg} onClose={() => setSelectedImg(null)} />
    </div>
  );
}
