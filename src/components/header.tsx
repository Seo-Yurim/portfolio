"use client";

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
      className={`fixed top-0 left-0 h-screen flex flex-col justify-between w-[240px] bg-primary py-20 px-9 transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <nav className="flex flex-col gap-8 list-none text-white">
        <Accordion title="About Me">
          <li className={listStyle}>Profile</li>
          <li className={listStyle}>Qualifications</li>
        </Accordion>
        <Accordion title="Projects">
          <li className={listStyle}>List</li>
          <li className={listStyle}>Peer Review</li>
        </Accordion>
      </nav>
      <ThemeSwitcher />
    </motion.header>
  );
}
