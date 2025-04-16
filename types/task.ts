export interface Task {
    id: number;
    title: string;
    description: string;
    status: "todo" | "in-progress" | "done";
    due_date: string | null;
  }
  