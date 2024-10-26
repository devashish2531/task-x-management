import React from "react";
import { ClipboardList } from "lucide-react";

interface EmptyStateProps {
  onCreateTask: () => void;
}

const EmptyTaskState: React.FC<EmptyStateProps> = ({ onCreateTask }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 mx-auto max-w-2xl text-center rounded-lg border-2  border-gray-100 bg-gray-50">
      <div className="space-y-6">
        <ClipboardList className="w-16 h-16 mx-auto text-gray-400" />

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-gray-900">No tasks yet</h3>
          <p className="text-gray-500 max-w-sm mx-auto">
            Get started by creating your first task. Stay organized and track
            your progress!
          </p>
        </div>

        <button
          onClick={onCreateTask}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span className="mx-2">Create Task</span>
        </button>
      </div>
    </div>
  );
};

export default EmptyTaskState;
