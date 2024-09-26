import { create } from "zustand";

type Store = {
  assignment: any[];
  addAssignment: (assignment: any) => void;
};

const useAssignment = create<Store>()((set) => ({
  assignment: [],
  addAssignment: (assignment) =>
    set((state) => ({ assignment: [...state.assignment, assignment] })),
}));

export default useAssignment;
