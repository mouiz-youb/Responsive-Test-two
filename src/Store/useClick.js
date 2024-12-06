import { create } from "zustand";

export const useClick = create((set) => ({
  click: false,
  setClick: (callback) => set((state) => ({ click: callback(state.click) })),
}));
