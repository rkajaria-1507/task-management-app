import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import useAuthStore from "../store/authStore";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}
