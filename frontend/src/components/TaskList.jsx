import React, { memo, useCallback } from 'react';

// Memoize TaskList to prevent unnecessary re-renders
const TaskList = memo(({ tasks }) => {
  // Use useCallback for event handlers to prevent unnecessary re-renders
  const handleTaskClick = useCallback((taskId) => {
    console.log('Task clicked:', taskId);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4">
      {tasks.length === 0 ? (
        <p className="text-center text-[#666666]">No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="p-4 bg-white rounded shadow flex justify-between items-center"
            onClick={() => handleTaskClick(task.id)}
          >
            <div>
              <h3 className="text-lg font-bold text-[#333333]">{task.title}</h3>
              <p className="text-sm text-[#666666]">Due: {task.due_date}</p>
            </div>
            <span className="text-sm font-medium text-[#6C9BCF]">
              {task.status}
            </span>
          </div>
        ))
      )}
    </div>
  );
});

export default TaskList;
