import { FormData, TaskStatus } from "../types/task.types";
import { format } from "date-fns";

export const TASK_STATUSES: TaskStatus[] = [
  "Pending",
  "In Progress",
  "Completed",
];

export const INITIAL_FORM_DATA: FormData = {
  title: "",
  description: "",
  status: "Pending",
  dueDate: format(new Date(), "yyyy-MM-dd"),
};
