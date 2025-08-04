import { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Modal({ children, onClose }: { children: ReactNode; onClose: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

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
    <div
      onClick={onClose}
      className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-gray-950/60"
    >
      <motion.div
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        exit={{ opacity: 0, y: 100, transition: { duration: 0.3, ease: "easeInOut" } }}
        className="absolute mx-4 rounded-xl bg-gray-700/60 p-8 backdrop-blur-lg"
      >
        {children}
      </motion.div>
    </div>
  );
}
