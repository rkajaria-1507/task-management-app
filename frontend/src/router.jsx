import { createRouter, createBrowserHistory } from "@tanstack/react-router";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TaskEdit from "./pages/TaskEdit";
import TaskDetails from "./pages/TaskDetails";
import CalendarView from "./pages/CalendarView";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";
import ProtectedRoute from "./components/ProtectedRoute";

const history = createBrowserHistory();

const router = createRouter({
  history,
  routes: [
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
    {
      path: "/",
      component: () => (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/task/edit/:id",
      component: () => (
        <ProtectedRoute>
          <TaskEdit />
        </ProtectedRoute>
      ),
    },
    {
      path: "/task/details/:id",
      component: () => (
        <ProtectedRoute>
          <TaskDetails />
        </ProtectedRoute>
      ),
    },
    {
      path: "/calendar",
      component: () => (
        <ProtectedRoute>
          <CalendarView />
        </ProtectedRoute>
      ),
    },
    {
      path: "/projects",
      component: () => (
        <ProtectedRoute>
          <Projects />
        </ProtectedRoute>
      ),
    },
    {
      path: "/settings",
      component: () => (
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      ),
    },
  ],
});

export default router;
