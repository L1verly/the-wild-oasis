import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Confirmation link was sent to your email");
    },
    onError: () => {
      toast.error("There was an error creating an account");
    },
  });
  return { signup, isSigningUp };
}
