import { createRouter, createBrowserHistory } from "@tanstack/react-router";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";
import TaskEdit from "./pages/TaskEdit";
import TaskDetails from "./pages/TaskDetails";
import CalendarView from "./pages/CalendarView";
import Projects from "./pages/Projects";
import Settings from "./pages/Settings";

const history = createBrowserHistory();

const router = createRouter({
  history,
  routes: [
    { path: "/", component: Dashboard },
    { path: "/auth", component: AuthPage },
    { path: "/task/edit/:id", component: TaskEdit },
    { path: "/task/details/:id", component: TaskDetails },
    { path: "/calendar", component: CalendarView },
    { path: "/projects", component: Projects },
    { path: "/settings", component: Settings },
  ],
});

export default router;
