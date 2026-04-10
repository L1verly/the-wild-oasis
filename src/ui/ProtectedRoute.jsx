import { useUser } from "../features/authentication/useUser";
import { useNavigate } from "react-router";
import { FullPageSpinner } from "./Spinner";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isPending, isAuthenticated, isFetching } = useUser();

  // 2. If no authenticated user redirect to /login
  useEffect(() => {
    if (!isPending && !isFetching && !isAuthenticated) {
      navigate("/login");
    }
  }, [isPending, isAuthenticated, isFetching, navigate]);

  // 3. Show Spinner during loading
  if (isPending) return <FullPageSpinner />;

  // 4. If there is a user, render the app
  if (isAuthenticated) return children;
}
