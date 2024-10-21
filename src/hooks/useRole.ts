import { create } from "zustand";

type Store = {
  role: "student" | "teacher";
};

const useRole = create<Store>()(() => ({
  role: "student",
}));

export default useRole;
