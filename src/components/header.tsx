"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Accordion from "./accordion";
import ThemeSwitcher from "./theme-switcher";

const listStyle = "button cursor-pointer w-fit";

export default function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ x: -240, opacity: 0 }}
      animate={{
        x: show ? 0 : -240,
        opacity: show ? 1 : 0,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      className={`fixed left-0 top-0 z-40 flex h-screen w-fit flex-col justify-between bg-primary px-9 py-20 transition-opacity duration-300 max-lg:h-fit max-lg:w-screen max-lg:flex-row max-lg:py-4 max-md:px-2 ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      {/* PC */}
      <nav className="flex w-fit list-none flex-col gap-8 text-white max-lg:hidden">
        <Accordion
          title="About Me"
          titleStyle="font-GWT text-2xl transition-colors duration-300 max-md:text-lg hover:text-white/70"
          childrenStyle="pl-8 text-lg font-medium max-md:text-sm"
        >
          <Link href="#profile">
            <li className={listStyle}>Profile</li>
          </Link>
          <Link href="#qualifications">
            <li className={listStyle}>Qualifications</li>
          </Link>
        </Accordion>
        <Accordion
          title="Projects"
          titleStyle="font-GWT text-2xl transition-colors max-md:text-lg duration-300 hover:text-white/70"
          childrenStyle="pl-8 text-lg max-md:text-sm font-medium"
        >
          <Link href="#project-list">
            <li className={listStyle}>List</li>
          </Link>
          <Link href="#peer-review">
            <li className={listStyle}>Peer Review</li>
          </Link>
        </Accordion>
      </nav>

      {/* 태블릿 + 모바일 */}
      <nav className="hidden items-center gap-8 text-white max-lg:flex max-md:gap-2">
        <Link href="#profile">
          <li className={listStyle}>Profile</li>
        </Link>
        <Link href="#qualifications">
          <li className={listStyle}>Qualifications</li>
        </Link>
        <Link href="#project-list">
          <li className={listStyle}>Projects</li>
        </Link>
        <Link href="#peer-review">
          <li className={listStyle}>Reviews</li>
        </Link>
      </nav>
      <ThemeSwitcher />
    </motion.header>
  );
}
