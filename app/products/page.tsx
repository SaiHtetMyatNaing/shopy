'use client'

import { useQuery } from '@tanstack/react-query';
import Cards from '@/components/Cards';
import { useFilterStore} from '../Zustandstore/store';
import SideBarFilter from '@/components/SideBarFilter';
import { Suspense } from 'react';


export type Product = {
    id : number ,
    title : string ,
    price : number ,
    description : string  ,
    category : string ,
    image : string,
}

const Page = () => {
    
   const setFilteredItem = useFilterStore((state)=> state.setFilteredItem)
   const filterItem    = useFilterStore((state)=> state.filteredItem)

   const {data , isLoading} = useQuery({
        queryKey : ['Products'],
        queryFn : () => 
            fetch(`https://fakestoreapi.com/products`)
            .then((res)=> res.json())    
    })

   if(isLoading) return <div className='loader fixed top-[400px] left-[650px]'></div>
  
  return (
    // Main wrapper contains 2 children home and aside
    <div className="mt-20 px-4 max-w-full py-4 w-full grid grid-cols-12 gap-2"> 
   
    <Suspense fallback={<div className='loader'></div>}>
    {/* first child with sub 12 cols again, each card with 4 col span */}
    <div className='grid col-span-10 grid-cols-12 gap-2'>

       { 
          filterItem.length > 0 ?
          data && data.filter((item : Product )  => 
            
           item.category.toLowerCase().includes(filterItem.toLowerCase()) ||
           item.title.toLowerCase().includes(filterItem.toLowerCase()) ||
           item.description.toLowerCase().includes(filterItem.toLowerCase())).map((item : Product)=> {
             return (
           
             <Cards 
             key={item.id}
             id={item.id}
             title={item.title}
             category={item.category}
             price={item.price}
             image={item.image}
             description={item.description} 
             />)
          }) : 
          data && data.map((item : Product)=> {
            return (
            <Cards 
            key={item.id}
            id={item.id}
            title={item.title}
            category={item.category}
            price={item.price}
            image={item.image}
            description={item.description} />)
         })
       }
    </div>
    </Suspense>
    {/* 2nd child aside with 2 col span for filtering the products */}
    <aside className='col-span-2'>
        <SideBarFilter/>
    </aside>


 </div>


 
  )
}

export default Page