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



type AddToCartStore = {
     itemCount : number,
     setItemCount : (val : number ) => void,
}

export const useAddToCartStore = create<AddToCartStore>((set)=>({
      itemCount : 0 ,
      setItemCount :(val : number) => {
         set({itemCount : val})
      }
}))