import React, { useEffect } from "react";
import { useNavigate, Outlet } from "@tanstack/react-router";
import useAuthStore from "../store/authStore";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate({ to: "/login" });
    }
  }, [isAuthenticated, navigate]);

  // If not authenticated, we return null (empty) while we redirect
  // If authenticated, we render the child route via <Outlet />
  return isAuthenticated ? <Outlet /> : null;
}
