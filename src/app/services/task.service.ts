import { Task, TaskStatus, SortOrder } from "../types/task.types";

export const TaskService = {
  filterAndSortTasks: (
    tasks: Task[],
    filterStatus: "all" | TaskStatus,
    sortOrder: SortOrder
  ): Task[] => {
    return tasks
      .filter((task) => filterStatus === "all" || task.status === filterStatus)
      .sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return sortOrder === "asc"
          ? dateA.getTime() - dateB.getTime()
          : dateB.getTime() - dateA.getTime();
      });
  },

  getStatusColor: (status: TaskStatus): string => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-yellow-100 text-yellow-800";
    }
  },
};
