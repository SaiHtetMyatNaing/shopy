'use client'
import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query';
import Cards from '@/components/Cards';
import FilterCategoryIcon from '../Icons/FilterCategoryIcon';

export type Product = {
    id : number ,
    title : string ,
    price : number ,
    description : string  ,
    category : string ,
    image : string,
}

const Page = () => {

    const [change , setChange ] = useState("")

    const handleFilter = (str : string) => {
        setChange(str);
    }

    const condictional = `${"p-3 border-[1px] hover:border-slate-500 rounded-md border-slate-200 cursor-pointer w-full hover:bg-black hover:text-white"}`
    const activeState  = `${"p-3 border-[1px] hover:border-slate-500 rounded-md  border-slate-200 cursor-pointer w-full bg-black text-white"}`

    const {data} = useQuery({
        queryKey : ['Products'],
        queryFn : () => 
            fetch(`https://fakestoreapi.com/products`)
            .then((res)=> res.json())     
    })

  
  return (
    // Main wrapper contains 2 children home and aside
    <div className="mt-20 px-10 py-4 grid grid-cols-12 gap-2"> 

    {/* first child with sub 12 cols again, each card with 4 col span */}
    <div className='grid col-span-10 grid-cols-12 gap-2'>

       { 
          change.length > 0 ?
          data && data.filter((item : Product ) => item.category === change).map((item : Product)=> {
             return (<Cards 
             key={item.id}
             id={item.id}
             title={item.title}
             category={item.category}
             price={item.price}
             image={item.image}
             description={item.description} />)
          }) : 
          data && data.map((item : Product)=> {
            return (<Cards 
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
    {/* 2nd child aside with 2 col span for filtering the products */}
    <aside className='col-span-2'>
    <Card className='max-w-full max-h-[700px]'>
         <div className='w-full  p-3 flex gap-2 text-2xl cursor-pointer'>
            <FilterCategoryIcon/>
            <div>Filter : </div>
         </div>

        <ul className='h-[400px] w-full flex flex-col gap-2 justify-between items-start p-3 cursor-pointer'>
            <li onClick={()=> handleFilter('')} className={change === "" ? activeState : condictional}>All</li>
            <li onClick={()=> handleFilter("men's clothing")} className={change === "men's clothing" ? activeState : condictional}>Men Wear</li>
            <li onClick={()=> handleFilter("women's clothing")} className={change === "women's clothing" ? activeState : condictional}>Women Wear</li>
            <li onClick={()=> handleFilter("electronics")} className={change === "electronics" ? activeState : condictional}>Electronics</li>
            <li onClick={()=> handleFilter("jewelery")} className={change === "jewelery" ? activeState : condictional}>Jewelery</li>

         </ul>
      
    </Card>
 
    </aside>


 </div>


 
  )
}

export default Page