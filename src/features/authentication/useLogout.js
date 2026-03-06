import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { logout as logoutApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export default function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: logout, isPending: isLoggingOut } = useMutation({
    mutationFn: ({ email, password }) => logoutApi({ email, password }),
    onSuccess: () => {
      toast.success("Logged out");
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
    onError: (err) => {
      toast.error("There was a problem during logging out:", err.message);
    },
  });
  return { isLoggingOut, logout };
}
