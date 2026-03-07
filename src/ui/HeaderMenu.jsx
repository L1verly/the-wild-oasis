import styled from "styled-components";
import Logout from "./Logout";
import ButtonIcon from "./ButtonIcon";
import { UserIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")} title="User account">
          <UserIcon />
        </ButtonIcon>
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
