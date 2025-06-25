import { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Modal({ children }: { children: ReactNode }) {
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
    <div className="flex items-center justify-center fixed top-0 left-0 z-10 h-screen w-screen bg-gray-950/60">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        exit={{ opacity: 0, y: 100, transition: { duration: 0.3, ease: "easeInOut" } }}
        className="mx-4 absolute bg-gray-700/60 backdrop-blur-lg rounded-xl p-8"
      >
        {children}
      </motion.div>
    </div>
  );
}
