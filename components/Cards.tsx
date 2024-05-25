import titleLimitation, { descriptionLimitation } from '@/app/helper/helper'
import { Product } from '@/app/products/page'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import AddToCartButton from './AddToCartButton'
import Link from 'next/link'



const Cards = ({id , title , description , image , price , category} : Product ) => {
  return (
    <Card className='max-w-sm col-span-4 shadow-md'>

         <CardHeader>
             <CardDescription>{titleLimitation(title)}</CardDescription>
          </CardHeader>

        <CardContent className='w-full overflow-hidden h-[200px] object-cover flex items-center justify-center'>
            <Image 
            className='object-contain hover:scale-75 duration-500 ease-in-out cursor-pointer'
             src={image}
             alt={title}
             width={140}
             height={300}></Image>
        </CardContent>

        <CardFooter className='flex flex-col'>
          <p className='text-sm'>
          {descriptionLimitation(description)}
          ...<span className='text-gary-400 cursor-pointer hover:font-semibold'>
             <Link href={`/products/${id}`}>Read More</Link>
            </span></p>
          
           <div className='w-full flex items-center justify-between mt-4 px-2 py-2'>
               <span className='font-bold text-2xl -skew-x-6'>${price}</span>
              <AddToCartButton 
              id={id}
              title ={title} 
              category ={category}
              description={description} 
              image ={image} 
              price={price} />
           </div>
        </CardFooter>

    </Card>
  )
}

export default Cards
