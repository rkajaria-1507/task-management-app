import React from "react";

export default function CalendarView() {
  // Create an array of 30 days for demonstration.
  const days = Array.from({ length: 30 }, (_, i) => i + 1);
  // Dummy tasks mapped by day.
  const tasksByDay = {
    5: [{ id: 1, title: "Task on 5th" }],
    12: [{ id: 2, title: "Task on 12th" }],
    20: [{ id: 3, title: "Task on 20th" }],
  };

  return (
    <div className="p-6 bg-[#F5F5F5] min-h-screen">
      <h1 className="text-2xl font-bold text-[#333333] mb-4">Calendar</h1>
      <div className="grid grid-cols-7 gap-4">
        {days.map((day) => {
          // In a real app, add logic for a selected day.
          const isSelected = false;
          return (
            <div
              key={day}
              className={`p-2 border ${
                isSelected ? "border-[#FF6F61]" : "border-[#F5F5F5]"
              } rounded`}
            >
              <div className="text-center font-bold">{day}</div>
              {tasksByDay[day] &&
                tasksByDay[day].map((task) => (
                  <div
                    key={task.id}
                    className="mt-1 text-center bg-[#6C9BCF] text-white text-xs rounded"
                  >
                    {task.title}
                  </div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
