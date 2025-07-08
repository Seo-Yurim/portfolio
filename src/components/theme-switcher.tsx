import { useEffect, useState } from "react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved as "light" | "dark");
      document.documentElement.classList.toggle("dark", saved === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        setTheme("dark");
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = (value?: "light" | "dark") => {
    const newTheme = value || (theme === "light" ? "dark" : "light");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div
      className={`relative flex items-center py-2 bg-highlight border-[6px] border-background rounded-full dark:bg-blue-200 ${theme === "light" ? "shadow-inner-right" : "shadow-inner-left"}`}
    >
      <div
        onClick={() => toggleTheme()}
        className={`cursor-pointer absolute z-20 top-0 left-0 w-[52%] h-full bg-background rounded-full transition-transform duration-300 ${
          theme === "light" ? "translate-x-0 shadow-right-down" : "translate-x-full shadow-left-up"
        }`}
      />
      <button
        onClick={() => toggleTheme("light")}
        className="w-1/2 flex justify-center items-center"
        aria-label="Dark mode"
      >
        <IoMdMoon className={`w-8 h-8 text-highlight`} />
      </button>

      <button
        onClick={() => toggleTheme("dark")}
        className="w-1/2 flex justify-center items-center"
        aria-label="Light mode"
      >
        <IoMdSunny className={`w-8 h-8 text-orange-400`} />
      </button>
    </div>
  );
}
