import axios from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";

// Create Task Mutation
export const useCreateTask = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (newTask) => axios.post("/api/tasks", newTask).then((res) => res.data),
    {
      onMutate: async (newTask) => {
        await queryClient.cancelQueries(["tasks"]);
        const previousTasks = queryClient.getQueryData(["tasks"]);
        // Optimistically add the new task (assigning a temporary id)
        queryClient.setQueryData(["tasks"], (old) => [
          ...old,
          { ...newTask, id: Date.now(), status: "Pending" },
        ]);
        return { previousTasks };
      },
      onError: (err, newTask, context) => {
        queryClient.setQueryData(["tasks"], context.previousTasks);
      },
      onSettled: () => {
        queryClient.invalidateQueries(["tasks"]);
      }
    }
  );
};

// Update Task Mutation
export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ({ taskId, updates }) =>
      axios.put(`/api/tasks/${taskId}`, updates).then((res) => res.data),
    {
      onMutate: async ({ taskId, updates }) => {
        await queryClient.cancelQueries(["tasks"]);
        const previousTasks = queryClient.getQueryData(["tasks"]);
        queryClient.setQueryData(["tasks"], (old) =>
          old.map((task) =>
            task.id === taskId ? { ...task, ...updates } : task
          )
        );
        return { previousTasks };
      },
      onError: (err, variables, context) => {
        queryClient.setQueryData(["tasks"], context.previousTasks);
      },
      onSettled: () => {
        queryClient.invalidateQueries(["tasks"]);
      }
    }
  );
};

// Delete Task Mutation
export const useDeleteTask = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (taskId) => axios.delete(`/api/tasks/${taskId}`).then((res) => res.data),
    {
      onMutate: async (taskId) => {
        await queryClient.cancelQueries(["tasks"]);
        const previousTasks = queryClient.getQueryData(["tasks"]);
        queryClient.setQueryData(["tasks"], (old) =>
          old.filter((task) => task.id !== taskId)
        );
        return { previousTasks };
      },
      onError: (err, taskId, context) => {
        queryClient.setQueryData(["tasks"], context.previousTasks);
      },
      onSettled: () => {
        queryClient.invalidateQueries(["tasks"]);
      }
    }
  );
};
