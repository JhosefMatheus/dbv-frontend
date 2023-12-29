import { create } from "zustand";

interface ITokenStore {
  token: string;
  setToken: (token: string) => void;
  removeToken: () => void;
}

export const useTokenStore = create<ITokenStore>((set) => ({
  token: localStorage.getItem("token") || "",
  setToken: (token) => {
    localStorage.setItem("token", token);
    set({ token })
  },
  removeToken: () => {
    localStorage.removeItem("token");
    set({ token: "" })
  },
}));