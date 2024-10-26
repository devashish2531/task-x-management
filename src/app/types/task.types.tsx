export type TaskStatus = "Pending" | "In Progress" | "Completed";
export type SortOrder = "asc" | "desc";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
}

export interface FormData {
  title: string;
  description: string;
  status: TaskStatus;
  dueDate: string;
}
