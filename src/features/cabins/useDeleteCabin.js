import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";
import toast from "react-hot-toast";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin deleted successfully");
      // Invalidate the cabins query to refetch the updated list of cabins
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (error) => toast.error(error.message),
  });

  return { deleteCabin, isDeleting };
}
