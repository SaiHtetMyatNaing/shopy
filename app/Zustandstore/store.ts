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
     setItemCount : (val : number) => any,
}

export const useAddToCartStore = create<AddToCartStore>((set)=>({
      itemCount : 0 ,
      setItemCount :(val :number)  => {
         set({itemCount : val})
      }
}))


//For Add To Cart Page
type ItemStore = {
      productCount : Object[] , 
      setProductCount : (val : Product)=> void,
}



// Fot Add To Cart Page 
export const useItemStore = create<ItemStore> ((set)=>({
      productCount : [] ,
      setProductCount : ( val : Product)=>{
         set((state) => (
            {productCount : 
            [...state.productCount,val].filter((value, index, self)=>{
            index === self.findIndex((t) => (t.id === value.id))} )}))
      },
  
}))


 



