import React from "react";

export default function TaskList({ tasks }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="p-4 bg-white rounded shadow flex justify-between items-center"
        >
          <div>
            <h3 className="text-lg font-bold text-[#333333]">{task.title}</h3>
            <p className="text-sm text-[#666666]">Due: {task.due_date}</p>
          </div>
          <span className="text-sm font-medium text-[#6C9BCF]">
            {task.status}
          </span>
        </div>
      ))}
    </div>
  );
}
