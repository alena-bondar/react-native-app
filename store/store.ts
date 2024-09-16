import { create } from "zustand";

type StoreState = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

const taskStore = create<StoreState>((set) => ({
  tasks: [],

  addTask: (newTask: Task) =>
    set((state) => ({
      tasks: [...state.tasks, newTask],
    })),
}));

export default taskStore;
