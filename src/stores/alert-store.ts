import { AlertVariant } from "@/enums";
import { create } from "zustand";

interface AlertStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;

  variant: AlertVariant;
  setVariant: (variant: AlertVariant) => void;

  message: string;
  setMessage: (message: string) => void;
}

export const useAlertStore = create<AlertStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set(() => ({ isOpen })),

  variant: AlertVariant.DEFAULT,
  setVariant: (variant: AlertVariant) => set(() => ({ variant })),

  message: "",
  setMessage: (message: string) => set(() => ({ message })),
}));