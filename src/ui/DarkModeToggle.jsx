import { useDarkMode } from "../context/useDarkMode";
import ButtonIcon from "./ButtonIcon";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ?
        <SunIcon />
      : <MoonIcon />}
    </ButtonIcon>
  );
}
