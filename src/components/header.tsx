"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 h-screen w-[240px] bg-primary py-[120px] px-[60px] text-white transition-opacity duration-300 ${show ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <div className="flex flex-col gap-4">
        <p>About Me</p>
        <p>Projects</p>
      </div>
    </header>
  );
}
