import { useEffect } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { DarkModeContext } from "./useDarkMode";

export default function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  useEffect(function () {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.add("light-mode");
      document.documentElement.classList.remove("dark-mode");
    }
  });

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
