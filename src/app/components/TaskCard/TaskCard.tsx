import { TaskService } from "@/app/services/task.service";
import { Task } from "@/app/types/task.types";
import { format } from "date-fns";
import { Edit2, Trash2 } from "lucide-react";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: number) => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onEdit,
  onDelete,
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border">
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-semibold text-lg text-gray-800">{task.title}</h3>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="text-gray-600 hover:text-blue-600"
          type="button"
        >
          <Edit2 size={18} />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-gray-600 hover:text-red-600"
          type="button"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
    <p className="text-gray-600 mb-3">{task.description}</p>
    <div className="flex justify-between items-center">
      <span
        className={`px-2 py-1 rounded-full text-sm ${TaskService.getStatusColor(
          task.status
        )}`}
      >
        {task.status}
      </span>
      <span className="text-sm text-gray-500">
        Due: {format(new Date(task.dueDate), "MMM d, yyyy")}
      </span>
    </div>
  </div>
);
