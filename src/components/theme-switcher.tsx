import { useTheme } from "@/context/theme-context";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`relative flex items-center rounded-full border-[6px] border-background bg-highlight py-2 dark:bg-blue-200 ${theme === "light" ? "shadow-inner-right" : "shadow-inner-left"}`}
    >
      <div
        onClick={() => toggleTheme()}
        className={`absolute left-0 top-0 z-20 h-full w-[52%] cursor-pointer rounded-full bg-background transition-transform duration-300 ${
          theme === "light" ? "translate-x-0 shadow-right-down" : "translate-x-full shadow-left-up"
        }`}
      />
      <button
        onClick={() => toggleTheme("light")}
        className="flex w-1/2 items-center justify-center"
        aria-label="Dark mode"
      >
        <IoMdMoon className={`h-8 w-8 text-highlight`} />
      </button>

      <button
        onClick={() => toggleTheme("dark")}
        className="flex w-1/2 items-center justify-center"
        aria-label="Light mode"
      >
        <IoMdSunny className={`h-8 w-8 text-orange-400`} />
      </button>
    </div>
  );
}
