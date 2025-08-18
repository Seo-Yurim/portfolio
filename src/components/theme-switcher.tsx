import { useTheme } from "@/context/theme-context";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const sizeMap = {
  default: { height: "full", icon: "2rem", padding: "0.5rem" },
  sm: { height: "1rem", icon: "0.5rem", padding: "0.2rem" },
  md: { height: "2rem", icon: "1rem", padding: "0.5rem" },
};

export default function ThemeSwitcher({ size = "default" }: { size?: keyof typeof sizeMap }) {
  const { theme, toggleTheme } = useTheme();

  const { height, icon, padding } = sizeMap[size];

  return (
    <div
      style={{ padding: `${padding} 0` }}
      className={`relative flex items-center rounded-full border-[6px] border-background bg-highlight py-2 dark:bg-blue-200 ${theme === "light" ? "shadow-inner-right" : "shadow-inner-left"}`}
    >
      <div
        onClick={() => toggleTheme()}
        style={{ height }}
        className={`absolute left-0 top-0 z-20 h-full w-[52%] cursor-pointer rounded-full bg-background transition-transform duration-300 ${
          theme === "light" ? "translate-x-0 shadow-right-down" : "translate-x-full shadow-left-up"
        }`}
      />
      <button
        onClick={() => toggleTheme("light")}
        className="flex w-1/2 items-center justify-center"
        aria-label="Dark mode"
      >
        <IoMdMoon style={{ width: icon, height: icon }} className="text-highlight" />
      </button>

      <button
        onClick={() => toggleTheme("dark")}
        className="flex w-1/2 items-center justify-center"
        aria-label="Light mode"
      >
        <IoMdSunny style={{ width: icon, height: icon }} className="text-orange-400" />
      </button>
    </div>
  );
}
