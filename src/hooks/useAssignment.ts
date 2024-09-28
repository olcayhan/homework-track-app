import { Assignment } from "@/types/Assignment";
import { create } from "zustand";

type Store = {
  assignment: Assignment[];
  addAssignment: (assignment: Assignment) => void;
  editAssignment: (assignment: Assignment) => void;
};

const useAssignment = create<Store>()((set) => ({
  assignment: [],
  addAssignment: (assignment) =>
    set((state) => ({ assignment: [...state.assignment, assignment] })),
  editAssignment: (assignment) =>
    set((state) => ({
      assignment: state.assignment.map((item) =>
        item.id === assignment.id ? assignment : item
      ),
    })),
}));

export default useAssignment;
