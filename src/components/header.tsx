"use client";

import { useEffect, useState } from "react";
import Accordion from "./accordion";

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
    <header
      className={`fixed top-0 left-0 h-screen w-[240px] bg-primary py-20 px-9 text-white transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <nav className="flex flex-col gap-8 list-none">
        <Accordion title="About Me">
          <li className={listStyle}>Profile</li>
          <li className={listStyle}>Qualifications</li>
        </Accordion>
        <Accordion title="Projects">
          <li className={listStyle}>List</li>
          <li className={listStyle}>Peer Review</li>
        </Accordion>
      </nav>
    </header>
  );
}
