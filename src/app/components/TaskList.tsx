"use client";

import { useEffect, useState } from "react";

import TaskItem from "./TaskItem";
import { Task } from "../../../types/task";
import { getTasks } from "../services/api";

interface Props {
    refreshFlag: boolean;
    onTaskUpdated: () => void;
  }

export default function TaskList({ refreshFlag, onTaskUpdated }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
      setLoading(false);
    };

    fetchTasks();
  }, [refreshFlag]);

  if (loading) return <p className="p-4">Loading tasks...</p>;

  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onTaskUpdated={onTaskUpdated} />
        ))
      )}
    </div>
  );
}
