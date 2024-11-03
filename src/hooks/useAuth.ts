import { Role } from "@/types/Role";
import { create } from "zustand";

type Store = {
  id: string | undefined;
  role: Role;
  token: string | undefined;
  setAuth: (data: any) => void;
  logout: () => void;
};

const useAuth = create<Store>()((set) => ({
  id: localStorage.getItem("id") || undefined,
  role: Role[localStorage.getItem("role") as keyof typeof Role] || Role.Guest,
  token: localStorage.getItem("token") || undefined,
  setAuth: (data) => {
    set(() => ({
      id: data.id,
      role: data.role,
      token: data.token,
    }));
    localStorage.setItem("id", data.id);
    localStorage.setItem("role", data.role);
    localStorage.setItem("token", data.token);
  },
  logout: () => {
    set(() => ({
      id: undefined,
      role: Role.Guest,
      token: undefined,
    }));
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
  },
}));

export default useAuth;
