"use client";

import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Home() {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refreshTasks = () => setRefreshFlag((prev) => !prev);

  return (
    <main className="max-w-2xl mx-auto mt-10 space-y-8 px-4">
      <h1 className="text-3xl font-bold text-center">Task Manager</h1>
      <TaskForm onTaskCreated={refreshTasks} />
      <TaskList refreshFlag={refreshFlag} onTaskUpdated={refreshTasks} />
      </main>
  );
}
