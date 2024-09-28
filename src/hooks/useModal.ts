/* 
create a zustand store with a type of Store
Store has two properties: open, setOpen
open is a boolean
setOpen is a function that takes a boolean and returns void
initialize the store with open set to false

export the store
*/

import { create } from "zustand";

type Store = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const useModal = create<Store>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));

export default useModal;
