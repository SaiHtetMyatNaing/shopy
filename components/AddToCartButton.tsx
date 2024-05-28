import React from 'react'
import { Button } from './ui/button'
import { useAddToCartStore, useItemStore } from '@/app/Zustandstore/store'
import { Product } from '@/app/products/page'

const AddToCartButton = ({id , title , price , description , category , image} : Product) => {
    const { productCount ,setProductCount  } =useItemStore()
    const {setItemCount , itemCount} = useAddToCartStore()

    // const filteredData = productCount.filter((value, index, self)  =>{
    //   return index === self.findIndex((t) => (t.id === value.id)) 
    //  })
 


  return (
    <Button
    className='w-28'
    onClick={()=>{
      setItemCount(productCount.length)
      setProductCount({id , title , price , description , category ,image})}
    }>
        Buy
    </Button>
  )
}

export default AddToCartButton