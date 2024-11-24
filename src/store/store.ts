import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { UserStore } from "../types/types";

export const useUserStore = create<UserStore>()(
  devtools((set) => ({
    userName: "",
    setUserName: (user: string) => {
      set({ userName: user });
    },
  }))
);
