import { 
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect
} from "@tanstack/react-router";
import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
import ProtectedRoute from "./components/ProtectedRoute";
import useAuthStore from "./store/authStore";

// Lazy load components
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const TaskEdit = lazy(() => import("./pages/TaskEdit"));
const TaskDetails = lazy(() => import("./pages/TaskDetails"));
const CalendarView = lazy(() => import("./pages/CalendarView"));
const Projects = lazy(() => import("./pages/Projects"));
const Settings = lazy(() => import("./pages/Settings"));

// Define root route
const rootRoute = createRootRoute({
  component: () => (
    <Suspense fallback={<LoadingSpinner />}>
      <Outlet />
    </Suspense>
  ),
  // Redirect root to login if not authenticated, otherwise to dashboard
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;
    if (isAuthenticated) {
      return redirect({ to: "/dashboard" });
    }
    return redirect({ to: "/login" });
  }
});

// Public routes
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login
});

const signupRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/signup",
  component: Signup
});

// Protected routes
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard",
  component: () => (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  )
});

const taskEditRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/task/edit/$id",
  component: () => (
    <ProtectedRoute>
      <TaskEdit />
    </ProtectedRoute>
  )
});

const taskDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/task/details/$id",
  component: () => (
    <ProtectedRoute>
      <TaskDetails />
    </ProtectedRoute>
  )
});

const calendarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/calendar",
  component: () => (
    <ProtectedRoute>
      <CalendarView />
    </ProtectedRoute>
  )
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/projects",
  component: () => (
    <ProtectedRoute>
      <Projects />
    </ProtectedRoute>
  )
});

const settingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: () => (
    <ProtectedRoute>
      <Settings />
    </ProtectedRoute>
  )
});

// Register all routes
const routeTree = rootRoute.addChildren([
  loginRoute,
  signupRoute,
  dashboardRoute,
  taskEditRoute,
  taskDetailsRoute,
  calendarRoute,
  projectsRoute,
  settingsRoute
]);

// Create and export the router
const router = createRouter({ routeTree });

export default router;
