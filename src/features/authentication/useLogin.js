import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      toast.success("Successfully logged in");
      navigate("/dashboard");
    },
    onError: () => {
      toast.error("Incorrect email or password");
    },
  });
  return { isLoggingIn, login };
}
