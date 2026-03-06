import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      toast.success("Successfully logged in");

      queryClient.setQueryData("user", data.user);
      navigate("/dashboard", { replace: true });
    },
    onError: () => {
      toast.error("Incorrect email or password");
    },
  });
  return { isLoggingIn, login };
}
