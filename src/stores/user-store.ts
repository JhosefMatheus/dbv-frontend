import { UserModel, UserModelProps } from "@/models";
import { create } from "zustand";

interface IUserStore {
  user: UserModel | null;
  setUser: (user: UserModel) => void;
  removeUser: () => void;
}

function getUserFromLocalStorage(): UserModel | null {
  const userFromLocalStorage: string | null = localStorage.getItem("user");

  if (userFromLocalStorage !== null) {
    const userObject: object = JSON.parse(userFromLocalStorage);

    const userHasNoId: boolean = !userObject.hasOwnProperty("id");
    const userHasNoName: boolean = !userObject.hasOwnProperty("name");
    const userHasNoEmail: boolean = !userObject.hasOwnProperty("email");
    const userHasNoRole: boolean = !userObject.hasOwnProperty("role");
    const userHasNoCreatedAt: boolean = !userObject.hasOwnProperty("createdAt");
    const userHasNoUpdatedAt: boolean = !userObject.hasOwnProperty("updatedAt");
    const userHasNoDeletedAt: boolean = !userObject.hasOwnProperty("deletedAt");

    if (userHasNoId || userHasNoName || userHasNoEmail || userHasNoRole || userHasNoCreatedAt || userHasNoUpdatedAt || userHasNoDeletedAt) {
      return null;
    }

    const roleObject: object = userObject["role" as keyof typeof userObject];

    const roleHasNoId: boolean = !roleObject.hasOwnProperty("id");
    const roleHasNoName: boolean = !roleObject.hasOwnProperty("name");
    const roleHasNoDescription: boolean = !roleObject.hasOwnProperty("description");
    const roleHasNoCreatedAt: boolean = !roleObject.hasOwnProperty("createdAt");
    const roleHasNoUpdatedAt: boolean = !roleObject.hasOwnProperty("updatedAt");
    const roleHasNoDeletedAt: boolean = !roleObject.hasOwnProperty("deletedAt");

    if (roleHasNoId || roleHasNoName || roleHasNoDescription || roleHasNoCreatedAt || roleHasNoUpdatedAt || roleHasNoDeletedAt) {
      return null;
    }

    const user: UserModel = new UserModel(userObject as UserModelProps);

    return user;
  }

  return null;
}

export const useUserStore = create<IUserStore>((set) => ({
  user: getUserFromLocalStorage(),
  setUser: (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  removeUser: () => {
    localStorage.removeItem("user");
    set({ user: null });
  }
}));