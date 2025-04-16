import axios from "axios";
import { Task } from "../../../types/task";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getTasks = async (): Promise<Task[]> => {
  const res = await axios.get(`${API_BASE_URL}/tasks`);
  return res.data;
};

export const getTaskById = async (id: number): Promise<Task> => {
  const res = await axios.get(`${API_BASE_URL}/tasks/${id}`);
  return res.data;
};

export const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
  const res = await axios.post(`${API_BASE_URL}/tasks`, task);
  return res.data;
};

export const updateTaskStatus = async (
  id: number,
  status: Task["status"]
): Promise<Task> => {
  const res = await axios.patch(`${API_BASE_URL}/tasks/${id}`, { status });
  return res.data;
};

export const deleteTask = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE_URL}/tasks/${id}`);
};
