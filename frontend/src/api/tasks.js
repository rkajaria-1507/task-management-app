import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

const fetchTasks = async () => {
  const response = await axios.get("/api/tasks");
  return response.data;
};

export const useTasks = () => {
  return useQuery(["tasks"], fetchTasks);
};