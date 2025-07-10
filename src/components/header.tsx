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
      className={`fixed left-0 top-0 flex h-screen w-[240px] flex-col justify-between bg-primary px-9 py-20 transition-opacity duration-300 ${show ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <nav className="flex list-none flex-col gap-8 text-white">
        <Accordion title="About Me">
          <Link href="#profile">
            <li className={listStyle}>Profile</li>
          </Link>
          <Link href="#qualifications">
            <li className={listStyle}>Qualifications</li>
          </Link>
        </Accordion>
        <Accordion title="Projects">
          <Link href="#project-list">
            <li className={listStyle}>List</li>
          </Link>
          <Link href="#peer-review">
            <li className={listStyle}>Peer Review</li>
          </Link>
        </Accordion>
      </nav>
      <ThemeSwitcher />
    </motion.header>
  );
}
