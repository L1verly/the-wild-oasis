import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { useResendConfirmEmail } from "../features/authentication/useResendConfirmEmail";
// import { useUser } from "../features/authentication/useUser";
// import { useNavigate } from "react-router";

const StyledConfirmEmail = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

export default function ConfirmEmail() {
  // const navigate = useNavigate();
  const { resendConfirmEmail, isResending } = useResendConfirmEmail();
  // const { isAuthenticated, isFetching, isPending } = useUser();
  //   useEffect(() => {
  //     if (!isFetching && !isPending && isAuthenticated) navigate("/dashboard");
  //   }, [isFetching, isPending, isAuthenticated, navigate]);

  return (
    <StyledConfirmEmail>
      <Heading as="h3">Confirm email</Heading>
      <p>
        Please confirm your registration by confirming it via link sent to your
        email
      </p>

      <div>
        <Button disabled={isResending} onClick={resendConfirmEmail}>
          Resend verification link
        </Button>
      </div>
    </StyledConfirmEmail>
  );
}
