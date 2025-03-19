import React from "react";
import { useParams, useNavigate } from "@tanstack/react-router";

export default function TaskDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy task details; in a real app, fetch this by ID.
  const task = {
    title: "Sample Task",
    description: "Detailed description of the task goes here.",
    due_date: "2025-03-30",
    priority: "High",
    assignee: "Jane Doe",
    subtasks: [
      { id: 1, title: "Subtask 1" },
      { id: 2, title: "Subtask 2" },
    ],
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold text-[#333333] mb-4">
        {task.title}
      </h1>
      <div className="mb-4">
        <span className="font-semibold text-[#333333]">Due Date:</span>{" "}
        <span className="text-[#666666]">{task.due_date}</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold text-[#333333]">Priority:</span>{" "}
        <span className="text-[#6C9BCF]">{task.priority}</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold text-[#333333]">Assignee:</span>{" "}
        <span className="text-[#666666]">{task.assignee}</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold text-[#333333]">Description:</span>
        <p className="text-[#333333] mt-1">{task.description}</p>
      </div>
      <div className="mb-4">
        <span className="font-semibold text-[#333333]">Subtasks:</span>
        <ul className="list-disc list-inside">
          {task.subtasks.map((sub) => (
            <li key={sub.id} className="text-[#333333]">
              {sub.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex space-x-4">
        <button className="py-2 px-4 bg-[#6C9BCF] text-white rounded hover:bg-blue-500">
          Edit
        </button>
        <button className="py-2 px-4 bg-[#FF6F61] text-white rounded hover:bg-red-500">
          Delete
        </button>
        <button className="py-2 px-4 bg-[#6C9BCF] text-white rounded hover:bg-blue-500">
          Mark as Complete
        </button>
      </div>
    </div>
  );
}
