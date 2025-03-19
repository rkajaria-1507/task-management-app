import React, { useState } from "react";

export default function TaskForm({ initialData = {}, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: initialData.title || "",
    description: initialData.description || "",
    due_date: initialData.due_date || "",
    priority: initialData.priority || "Low",
    assignee: initialData.assignee || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-[#333333] mb-4">
        {initialData.title ? "Edit Task" : "Create Task"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-[#333333] mb-1">Task Name</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-3 border border-[#F5F5F5] rounded focus:outline-none focus:border-[#6C9BCF] text-[#333333]"
          />
        </div>
        <div>
          <label className="block text-[#333333] mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full p-3 border border-[#F5F5F5] rounded focus:outline-none focus:border-[#6C9BCF] text-[#333333]"
          ></textarea>
        </div>
        <div>
          <label className="block text-[#333333] mb-1">Due Date</label>
          <input
            type="date"
            name="due_date"
            value={formData.due_date}
            onChange={handleChange}
            required
            className="w-full p-3 border border-[#F5F5F5] rounded focus:outline-none focus:border-[#6C9BCF] text-[#333333]"
          />
        </div>
        <div>
          <label className="block text-[#333333] mb-1">Priority</label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="w-full p-3 border border-[#F5F5F5] rounded focus:outline-none focus:border-[#6C9BCF] text-[#333333]"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <div>
          <label className="block text-[#333333] mb-1">Assignee</label>
          <input
            type="text"
            name="assignee"
            value={formData.assignee}
            onChange={handleChange}
            className="w-full p-3 border border-[#F5F5F5] rounded focus:outline-none focus:border-[#6C9BCF] text-[#333333]"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="py-2 px-4 bg-[#F5F5F5] text-[#333333] rounded hover:bg-gray-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-4 bg-[#6C9BCF] text-white rounded hover:bg-blue-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
