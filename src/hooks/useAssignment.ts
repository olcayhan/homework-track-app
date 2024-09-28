import { Assignment } from "@/components/AssignmentItem";
import { create } from "zustand";



type Store = {
  assignment: any[];
  addAssignment: (assignment: Assignment) => void;
};

const useAssignment = create<Store>()((set) => ({
  assignment: [],
  addAssignment: (assignment) =>
    set((state) => ({ assignment: [...state.assignment, assignment] })),
}));

export default useAssignment;
