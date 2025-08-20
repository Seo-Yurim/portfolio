import { useTheme } from "@/context/theme-context";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

export default function ThemeSwitcherRound() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={() => toggleTheme()}
      className={`flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-[6px] border-background bg-highlight py-2 dark:bg-blue-200 ${theme === "light" ? "shadow-inner-right" : "shadow-inner-left"}`}
    >
      {theme === "light" ? (
        <IoMdSunny className="text-orange-400" />
      ) : (
        <IoMdMoon className="text-highlight" />
      )}
    </div>
  );
}
