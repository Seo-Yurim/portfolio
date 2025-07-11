"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Hero, PeerReview, Profile, ProjectList, Qualifications } from "./components";

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
      <section className="container flex h-screen items-center justify-center bg-primary py-12 max-md:px-4 max-md:py-4">
        <Hero onShow={() => setIsShow(true)} />
      </section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="ml-[240px]"
      >
        <Profile />
        <Qualifications />
        <ProjectList />
        <PeerReview />
      </motion.div>
    </main>
  );
}
