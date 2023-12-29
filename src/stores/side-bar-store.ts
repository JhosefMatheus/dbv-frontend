import { create } from "zustand";

interface SideBarStore {
  isOpen: boolean;
  toggle: () => void;
}

export const useSideBarStore = create<SideBarStore>((set) => ({
  isOpen: localStorage.getItem("sideBar") === "true" ? true : localStorage.getItem("sideBar") === "false" ? false : true,
  toggle: () => {
    const sideBarOpenLocalStorage: null | string = localStorage.getItem("sideBar");
    if (sideBarOpenLocalStorage === "true") {
      localStorage.setItem("sideBar", "false");
      set({ isOpen: false });
    } else if (sideBarOpenLocalStorage === "false") {
      localStorage.setItem("sideBar", "true");
      set({ isOpen: true });
    } else {
      localStorage.setItem("sideBar", "false");
      set({ isOpen: false });
    }
  }
}));