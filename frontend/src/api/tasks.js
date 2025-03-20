import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchTasks = async () => {
  const response = await axios.get("/api/tasks");
  return response.data;
};

export const useTasks = () => {
  return useQuery(["tasks"], fetchTasks, {
    staleTime: 60000, // 1 minute
    cacheTime: 300000, // 5 minutes
    retry: 1,
    refetchOnWindowFocus: false,
  });
};
