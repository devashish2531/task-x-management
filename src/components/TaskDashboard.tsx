"use client";
import { INITIAL_FORM_DATA } from "@/app/constants/task.constants";
import { LocalStorageService } from "@/app/services/localStorage.service";
import { TaskService } from "@/app/services/task.service";
import { Task, TaskStatus } from "@/app/types/task.types";
import { useState, useEffect } from "react";
import { DeleteConfirmation } from "./DeleteConfirmation/DeleteConfirmation";
import { TaskFilters } from "./Filters/TaskFilters";
import { Header } from "./Header";
import { TaskCard } from "./TaskCard/TaskCard";
import { TaskForm } from "./TaskForm/TaskForm";
import { FormData } from "../app/types/task.types";
import { SearchBar } from "./../components/SearchBar/SearchBar";

export const TaskDashboard: React.FC = () => {
  // State management
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filterStatus, setFilterStatus] = useState<"all" | TaskStatus>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Load tasks from localStorage on mount
  useEffect(() => {
    setTasks(LocalStorageService.getTasks());
  }, []);

  // Save tasks to localStorage when they change
  useEffect(() => {
    LocalStorageService.saveTasks(tasks);
  }, [tasks]);

  // Form handlers
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.title || !formData.dueDate) return;

    if (editingTask) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id ? { ...formData, id: task.id } : task
        )
      );
    } else {
      setTasks([...tasks, { ...formData, id: Date.now() }]);
    }

    handleCloseModal();
  };

  const handleCloseModal = () => {
    setFormData(INITIAL_FORM_DATA);
    setIsModalOpen(false);
    setEditingTask(null);
  };

  // Task operations
  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setFormData(task);
    setIsModalOpen(true);
  };

  const handleDelete = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setDeleteConfirm(null);
  };

  const handleSortChange = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  // Get filtered and sorted tasks
  const filteredAndSortedTasks = TaskService.filterAndSortTasks(
    tasks,
    filterStatus,
    sortOrder,
    searchQuery
  );

  return (
    <div className="min-h-screen">
      <div className="">
        {/* Header Component */}
        <Header onNewTask={() => setIsModalOpen(true)} />

        <div className="p-4 max-w-6xl mx-auto">
          {/* Filters Component */}
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <div className="flex-1">
              <SearchBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div>

            <div className="flex-1 md:flex md:justify-end">
              <TaskFilters
                filterStatus={filterStatus}
                sortOrder={sortOrder}
                onFilterChange={setFilterStatus}
                onSortChange={handleSortChange}
              />
            </div>
          </div>
        </div>
        <div className="p-4 max-w-6xl mx-auto">
          {/* Task Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAndSortedTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={handleEdit}
                onDelete={(taskId) => setDeleteConfirm(taskId)}
              />
            ))}
          </div>

          {/* Task Form Modal */}
          {isModalOpen && (
            <TaskForm
              formData={formData}
              isEditing={!!editingTask}
              onSubmit={handleSubmit}
              onClose={handleCloseModal}
              onChange={handleInputChange}
            />
          )}

          {/* Delete Confirmation Modal */}
          {deleteConfirm && (
            <DeleteConfirmation
              onConfirm={() => handleDelete(deleteConfirm)}
              onCancel={() => setDeleteConfirm(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskDashboard;
