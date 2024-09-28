import { create } from "zustand";

type Store = {
  open: boolean;
  edit: {
    isEdit: boolean;
    id: number | null;
  };
  isEditing: (open: boolean, id: number | null) => void;
  setOpen: (open: boolean) => void;
};

const useModal = create<Store>((set) => ({
  open: false,
  edit: { isEdit: false, id: 0 },
  isEditing: (edit, id) =>
    set({
      edit: {
        isEdit: edit,
        id: id,
      },
    }),
  setOpen: (open) => set({ open }),
}));

export default useModal;
