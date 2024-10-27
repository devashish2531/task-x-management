import { TASK_STATUSES } from "@/app/constants/task.constants";
import { TaskStatus } from "@/app/types/task.types";

interface TaskFiltersProps {
  filterStatus: "all" | TaskStatus;
  sortOrder: "asc" | "desc";
  onFilterChange: (value: "all" | TaskStatus) => void;
  onSortChange: () => void;
}

export const TaskFilters: React.FC<TaskFiltersProps> = ({
  filterStatus,
  sortOrder,
  onFilterChange,
  onSortChange,
}) => (
  <div className="flex flex-wrap gap-4">
    <select
      value={filterStatus}
      onChange={(e) => onFilterChange(e.target.value as "all" | TaskStatus)}
      className="px-3 py-2 border rounded-lg"
    >
      <option value="all">All Status</option>
      {TASK_STATUSES.map((status) => (
        <option key={status} value={status}>
          {status}
        </option>
      ))}
    </select>

    <button
      onClick={onSortChange}
      className="px-4 py-2 border rounded-lg bg-white hover:bg-gray-50"
      type="button"
    >
      Sort by Date {sortOrder === "asc" ? "↑" : "↓"}
    </button>
  </div>
);
