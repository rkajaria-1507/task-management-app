import React from "react";
import { useParams, useNavigate } from "@tanstack/react-router";
import TaskForm from "../components/TaskForm";

export default function TaskEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real scenario, fetch task data using id.
  const initialData = {
    title: "Sample Task",
    description: "This is a sample task description.",
    due_date: "2025-03-30",
    priority: "Medium",
    assignee: "John Doe",
  };

  const handleSave = (data) => {
    console.log("Saving data:", data);
    // TODO: Call API to update the task.
    navigate({ to: "/dashboard" });
  };

  const handleCancel = () => {
    navigate({ to: "/dashboard" });
  };

  return (
    <div className="p-6">
      <TaskForm
        initialData={initialData}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
}
