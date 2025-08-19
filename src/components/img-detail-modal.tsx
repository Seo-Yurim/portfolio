import Image from "next/image";
import { TbXboxXFilled } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import { ImageItem } from "@/types/project";

export default function ImgDetailModal({
  selectedImg,
  onClose,
}: {
  selectedImg: ImageItem | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {selectedImg && (
        <motion.div
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          exit={{ opacity: 0, transition: { duration: 0.2, ease: "easeInOut" } }}
          className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-gray-950/70"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute max-h-[80%] max-w-[90%] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary-foreground"
          >
            <div className="mx-2 flex flex-col gap-4 rounded-xl bg-white px-8 py-4 dark:bg-blue-200">
              <div className="flex items-center gap-4 text-blue-200 dark:text-white">
                <h2 className="text-nowrap font-GWT text-2xl">{selectedImg.label}</h2>
                <div className="w-full border-b border-blue-200 dark:border-white" />
                <TbXboxXFilled onClick={onClose} className="h-12 w-12 cursor-pointer" />
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
                  height={400}
                  width={800}
                  alt="선택한 작업 화면"
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
