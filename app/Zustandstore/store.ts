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

type LoadingStore = {
     loading : boolean ,
     setLoading : (str : boolean) => void,
}

export const useLoadingStore = create<LoadingStore>((set)=>({
     loading : false,
     setLoading : (str : boolean) => {
       set({loading : true});
     }
}))