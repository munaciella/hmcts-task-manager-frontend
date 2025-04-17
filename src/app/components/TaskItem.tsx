"use client";

import { Task } from "../../../types/task";
import { deleteTask, updateTaskStatus } from "../services/api";

interface Props {
  task: Task;
  onTaskUpdated: () => void;
}

export default function TaskItem({ task, onTaskUpdated }: Props) {
    const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        await updateTaskStatus(task.id, e.target.value as Task["status"]);
        onTaskUpdated();
      };
      
      const handleDelete = async () => {
        await deleteTask(task.id);
        onTaskUpdated();
      };      

  return (
    <div className="border p-4 rounded flex justify-between items-center bg-gray-50">
      <div>
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <p className="text-xs text-gray-500">Status: {task.status}</p>
      </div>
      <div className="flex items-center gap-2">
        <select
          value={task.status}
          onChange={handleStatusChange}
          className="border p-1 rounded"
        >
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button onClick={handleDelete} className="text-red-600 text-sm">
          Delete
        </button>
      </div>
    </div>
  );
}
