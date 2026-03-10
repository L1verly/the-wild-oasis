import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import DarkModeToggle from "../ui/DarkModeToggle";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const DarkModeToggleWrapper = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

function Login() {
  return (
    <LoginLayout>
      <DarkModeToggleWrapper>
        <DarkModeToggle size="large" />
      </DarkModeToggleWrapper>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
