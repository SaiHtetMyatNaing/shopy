import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className='w-[382px] h-[440px] col-span-4 flex justify-between start flex-col border border-gray-300 rounded-md p-1'>

             <Skeleton className=' w-56 h-10 mt-2'></Skeleton>

             <Skeleton className='w-88 h-52'></Skeleton>

             <Skeleton className='w-full h-20'></Skeleton>

             <div className='w-full flex justify-between p-1'>
                <Skeleton className='w-24 h-14 rounded-md'></Skeleton>
                <Skeleton className='w-24 h-14 rounded-md'></Skeleton>
             </div>
      

    </div>
  )
}

export default Loading