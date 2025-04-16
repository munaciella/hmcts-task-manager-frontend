"use client";

import { useEffect, useState } from "react";

import TaskItem from "./TaskItem";
import { Task } from "../../../types/task";
import { getTasks } from "../services/api";

interface Props {
  refreshFlag: boolean;
  onRefreshed: () => void;
}

export default function TaskList({ refreshFlag, onRefreshed }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
      setLoading(false);
      onRefreshed();
    };

    fetchTasks();
  }, [refreshFlag, onRefreshed]);

  if (loading) return <p className="p-4">Loading tasks...</p>;

  return (
    <div className="space-y-2">
      {tasks.length === 0 ? (
        <p className="text-gray-500">No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onTaskUpdated={onRefreshed} />
        ))
      )}
    </div>
  );
}
