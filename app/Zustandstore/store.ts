import { create } from "zustand";
import { Product } from "../products/page";

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
     setItemCount : (val : number) => void,
}

export const useAddToCartStore = create<AddToCartStore>((set)=>({
      itemCount : 0 ,
      setItemCount :(val :number) => {
         set({itemCount : val})
      }
}))

type ItemStore = {
      finalProductCount : Object[],
      productCount : Object[] , 
      setProductCount : (val : Product)=> void,
      setFinalProductCount : (val : Product) => void,
}

// Fot Add To Cart Page 
export const useItemStore = create<ItemStore> ((set)=>({
      productCount : [] ,
      finalProductCount : [],
      setProductCount : ( val : Product)=>{
            set((state) => ({productCount : [...state.productCount , val]}))
      },
      setFinalProductCount : (val : any)=> {
            set({finalProductCount : val})
      } 
}))



