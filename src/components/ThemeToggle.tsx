import { useTheme } from "next-themes";
import { FC } from "react";

import { FiMoon, FiSun } from "react-icons/fi";
interface ThemeToggleProps {}

const ThemeToggle: FC<ThemeToggleProps> = ({}) => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="text-xl flex gap-2 items-center flex-nowrap rounded-lg border hover:backdrop-blur-sm border-transparent p-2 transition-colors hover:border-gray-300 hover:bg-gray-100/30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      suppressHydrationWarning
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className="active:rotate-45  scale-100 transition-all rounded">
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </div>
    </button>
  );
};

export default ThemeToggle;
