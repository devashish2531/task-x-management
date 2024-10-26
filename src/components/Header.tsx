import { PlusCircle } from "lucide-react";

interface HeaderProps {
  onNewTask: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNewTask }) => (
  <div className="bg-gray-900 text-white">
    <div className="max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex justify-between items-center py-4 shadow-md">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button
          onClick={onNewTask}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          type="button"
        >
          <PlusCircle size={20} />
          New Task
        </button>
      </div>
    </div>
  </div>
);
