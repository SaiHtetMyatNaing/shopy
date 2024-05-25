import React from 'react'
import { Button } from './ui/button'
import { useAddToCartStore } from '@/app/Zustandstore/store'

const AddToCartButton = () => {
    const setItemCount = useAddToCartStore((state) => state.setItemCount)
    const itemCount    = useAddToCartStore((state) => state.itemCount)

  return (
    <Button
    className='w-28'
    onClick={()=> setItemCount(itemCount + 1)}>
        Buy
    </Button>
  )
}

export default AddToCartButton