import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCountStore = create(
  //   (set) => ({
  //   count: 10,
  //   setCount: () => set((state) => ({ count: state.count + 1 })),
  // }));

  persist(
    (set, get) => ({
      count: 9,
      setCount: () => set({ count: get().count + 1 }),
    }),
    {
      name: "count-storage", // name of the item in the storage (must be unique)
    }
  )
);
export default useCountStore;
