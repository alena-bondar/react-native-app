import { create } from "zustand";

type StoreState = {
  tasks: Task[];
  addTask: (task: Task) => void;
  deleteTask: (id: string) => void;
};

const taskStore = create<StoreState>((set) => ({
  tasks: [],

  addTask: (newTask: Task) =>
    set((state) => ({
      tasks: [...state.tasks, newTask],
    })),
  deleteTask: (id: string) =>
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      })),
}));

export default taskStore;
