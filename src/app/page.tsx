"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AboutMe, Contact, Hero, Projects, Qualifications } from "./_ui";

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (isShow) {
      const timer = setTimeout(() => {
        setShowContent(true);
        document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isShow]);

  return (
    <div className={`${!isShow ? "h-screen overflow-hidden" : "h-auto overflow-auto"}`}>
      <AnimatePresence>
        {!isShow && (
          <motion.section
            key="hero"
            initial={{ opacity: 1 }}
            animate={isShow ? { opacity: 0 } : { opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="container flex h-screen items-center bg-primary justify-center py-12 max-md:px-4 max-md:py-4"
          >
            <Hero isShow={isShow} onShow={() => setIsShow(true)} />
          </motion.section>
        )}
      </AnimatePresence>

      {showContent && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div id="about-me">
            <AboutMe />
          </div>
          <Qualifications />
          <Projects />
          <Contact />
        </motion.div>
      )}

      {isShow && (
        <motion.section
          className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen border-black border-[48px] rounded-2xl"
          initial={{ scale: 0.7, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        />
      )}
    </div>
  );
}
