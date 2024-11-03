import { Role } from "@/types/Role";
import { create } from "zustand";

type Store = {
  role: Role;
};

const useRole = create<Store>()(() => ({
  role: Role.Teacher,
}));

export default useRole;
