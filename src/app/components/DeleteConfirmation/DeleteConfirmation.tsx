import { AlertCircle } from "lucide-react";

interface DeleteConfirmationProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  onConfirm,
  onCancel,
}) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-lg p-6 max-w-sm w-full">
      <div className="flex items-center gap-3 mb-4">
        <AlertCircle className="text-red-600" size={24} />
        <h2 className="text-xl font-semibold">Delete Task</h2>
      </div>
      <p className="text-gray-600 mb-6">
        Are you sure you want to delete this task? This action cannot be undone.
      </p>
      <div className="flex gap-3">
        <button
          onClick={onCancel}
          className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
          type="button"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          type="button"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);
