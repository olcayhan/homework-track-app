import { create } from "zustand";
import { Course } from "@/types/Course";

type Store = {
  course: Course[];
  addCourse: (course: Course) => void;
  editCourse: (course: Course) => void;
  deleteCourse: (id: number) => void;
};

const useCourse = create<Store>()((set) => ({
  course: [],
  addCourse: (course) =>
    set((state) => ({ course: [...state.course, course] })),
  editCourse: (course) =>
    set((state) => ({
      course: state.course.map((item) =>
        item.id === course.id ? course : item
      ),
    })),
  deleteCourse: (id: number) =>
    set((state) => ({
      course: state.course.filter((item) => item.id !== id),
    })),
}));

export default useCourse;
