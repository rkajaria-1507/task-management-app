import React from "react";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import { useTasks } from "../api/tasks";
import useAuthStore from "../store/authStore";

export default function Dashboard() {
  const { data: tasks, isLoading, error } = useTasks();
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold text-[#333333] mb-4">
            Welcome, {user?.email || "User"}!
          </h1>
          <div className="mb-6">
            <button className="mr-4 py-2 px-4 bg-[#6C9BCF] text-white rounded hover:bg-blue-500">
              Add Task
            </button>
            <button className="py-2 px-4 bg-[#6C9BCF] text-white rounded hover:bg-blue-500">
              Create Project
            </button>
          </div>
          <section>
            <h2 className="text-xl font-semibold text-[#333333] mb-3">
              Your Tasks
            </h2>
            {isLoading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error.message}</div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-4 bg-white rounded shadow flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-[#333333]">
                        {task.title}
                      </h3>
                      <p className="text-sm text-[#666666]">
                        Due: {task.due_date}
                      </p>
                    </div>
                    <span className="text-sm font-medium text-[#6C9BCF]">
                      {task.status}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}
