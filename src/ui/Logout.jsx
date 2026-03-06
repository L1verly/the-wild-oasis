import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/outline";
import ButtonIcon from "./ButtonIcon";
import useLogout from "../features/authentication/useLogout";
import Spinner from "./Spinner";

export default function Logout() {
  const { logout, isLoggingOut } = useLogout();
  return (
    <ButtonIcon onClick={logout} disabled={isLoggingOut}>
      {!isLoggingOut ?
        <ArrowRightEndOnRectangleIcon />
      : <Spinner size="small" />}
    </ButtonIcon>
  );
}
