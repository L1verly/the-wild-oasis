// import { useMutation } from "@tanstack/react-query";
// import { resendConfirmEmail as resendConfirmEmailApi } from "../../services/apiAuth";
// import toast from "react-hot-toast";

// export function useResendConfirmEmail() {
//   const { isPending: isResending, mutate: resendConfirmEmail } = useMutation({
//     mutationFn: resendConfirmEmailApi,
//     onSuccess: () => {
//       toast.success("Confirmation link is sent");
//     },
//     onError: (error) => toast.error(error.message),
//   });

//   return { resendConfirmEmail, isResending };
// }
