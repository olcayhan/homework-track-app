import { create } from "zustand";

type MODAL_MODE = "create" | "edit" | null;

type STORE = {
  isOpen: boolean;
  mode: MODAL_MODE;
  id: number | null;
  openModal: (mode: MODAL_MODE, id?: number) => void;
  closeModal: () => void;
};

const useModal = create<STORE>((set) => ({
  isOpen: false,
  mode: null,
  id: null,
  openModal: (mode, id) =>
    set({
      isOpen: true,
      mode,
      id,
    }),
  closeModal: () =>
    set({
      isOpen: false,
      mode: null,
      id: null,
    }),
}));

export default useModal;
