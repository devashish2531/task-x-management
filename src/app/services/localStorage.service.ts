import { Task } from "../types/task.types";

export const LocalStorageService = {
  getTasks: (): Task[] => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  },

  saveTasks: (tasks: Task[]): void => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },
};
