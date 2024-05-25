'use client'
import AddToCartButton from '@/components/AddToCartButton'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




const Page = ({params} : {params : { productId : string}}) => {

  const {data , isLoading} = useQuery({
    queryKey : ['product detail'],
    queryFn : () => 
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
        .then((res)=> res.json())    
})
  console.log(data);

  if(isLoading) return <div className='loader relative top-[400px] left-[660px]'></div>
  
  return (
    data && <main className='mt-32 max-w-3xl mx-auto  gap-4   grid grid-cols-12 border-2 rounded-md bg-white/40 backdrop:blur-md p-2'>
      <div className='col-span-12 flex items-center gap-64 p-2 mb-4'>
         <Button variant='ghost' className='max-w-20 border'>
          <Link href="/products">Back</Link>
          </Button>
         <h1 className='text-md uppercase'>{data.category}</h1>
      </div>
      {/* Need to put back Keys and image */}
      <div className='col-span-6'>
        <div>
           <Image
             src={data.image}
            alt={data.title}
            height={400}
            width={600}
           >
           </Image>
        </div>
      </div>

      {/* Need to put Product detail */}
      <div className='col-span-6 flex flex-col gap-2 h-full justify-evenly items-start p-5'>
        <h1 className='text-xl'>{data.title}</h1>
        <p>{data.description}</p>
        <div className='flex w-full justify-between p-2 items-center'>
            <span className='font-bold text-2xl -skew-x-6'>${data.price}</span>
            <AddToCartButton/>
        </div>
      </div>

    </main>
  )
}

export default Page