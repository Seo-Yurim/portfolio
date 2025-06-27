"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AboutMe, Contact, Hero, Projects, Qualifications } from "./_ui";

export default function Home() {
  const [isShow, setIsShow] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // useEffect(() => {
  //   if (isShow) {
  //     const timer = setTimeout(() => {
  //       setShowContent(true);
  //       document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" });
  //     }, 500);

  //     return () => clearTimeout(timer);
  //   }
  // }, [isShow]);

  return (
    <main className={"flex flex-col"}>
      <section className="container flex h-screen items-center bg-primary justify-center py-12 max-md:px-4 max-md:py-4">
        <Hero onShow={() => setIsShow(true)} />
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-screen border-[48px] border-black"
      >
        <AboutMe />
        <Qualifications />
        <Projects />
        <Contact />
      </motion.div>

      {/* {isShow && (
        <motion.section
          className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen border-black border-[48px] rounded-2xl"
          initial={{ scale: 0.7, opacity: 1 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
      )} */}
    </main>
  );
}
