import { useDarkMode } from "../context/useDarkMode";
import ButtonIcon from "./ButtonIcon";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function DarkModeToggle({ size }) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon size={size} onClick={toggleDarkMode}>
      {isDarkMode ?
        <SunIcon />
      : <MoonIcon />}
    </ButtonIcon>
  );
}
