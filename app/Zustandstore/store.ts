import { create } from "zustand";

type FilterStore = {
    filteredItem : string,
    setFilteredItem : (str : string)  => void,
}

export const useFilterStore = create<FilterStore>((set)=>({
      filteredItem : "",
      setFilteredItem : (str : string) => {
        set({filteredItem : str })
      }
}))