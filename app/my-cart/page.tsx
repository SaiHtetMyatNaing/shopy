'use client'
import Image from 'next/image'
import React from 'react'
import { useAddToCartStore, useFilterStore, useItemStore } from '../Zustandstore/store'
import { Product } from '../products/page'

const Page = () => {

    const { productCount  , setProductCount} = useItemStore();
    const {setItemCount , itemCount} = useAddToCartStore()

    // I don't know how to write this one in typescript and move to helper function
    const filteredData = productCount.filter((value, index, self)  =>{
     return index === self.findIndex((t) => (t.id === value.id)) 
    })

    
  return (
    <main className='grid grid-cols-12 mt-24 px-10'>

        <div className='col-span-8   grid space-y-6 grid-cols-8'>

            <div className='w-full  col-span-full items-center  px-2 flex h-28  justify-between'>
                <h1 className='text-3xl bold '>Shopping Cart</h1>
                <h1 className='text-sm text-gray-400'>{itemCount} ITEMS</h1>
            </div>
           
            {
                productCount.length > 0 && productCount && filteredData.map((item)=> {     
                    return (
                <div key={item.id} className='col-span-full justify-between flex items-center p-3'>
                  <div className='max-w-md h-32 object-contain overflow-hidden'>
                  <Image 
                   src={item.image}
                   alt={item.title}
                   height={40}
                   width={100}>
                   </Image>
                  </div>
                

                  <div>
                     <h1 className='text-gray-400 w-[120px] text-center'>{item.category}</h1>
                  </div> 

                  <div className='flex items-end gap-2  justify-between w-24'>
                    <button> - </button>
                    <span> 1 </span>
                    <button> + </button>
                  </div>

                  <div className='w-24'>
                     <p>${item.price}</p>
                  </div>

                  <button className='font-2xl text-gray-400 hover:text-red-500'> x </button>
            </div>
                    )
                })
            }
        </div>


    </main>

  )
}

export default Page