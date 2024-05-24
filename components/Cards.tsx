import titleLimitation, { descriptionLimitation } from '@/app/helper/helper'
import { Product } from '@/app/products/page'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'



const Cards = ({id , title , description , image , price , category} : Product ) => {
  return (
    <Card className='max-w-sm col-span-4'>

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

        <CardFooter>
          <p
           className='text-sm'
           >{descriptionLimitation(description)}...<span className='text-gary-400 cursor-pointer hover:font-semibold'>Read More</span></p>
        </CardFooter>

    </Card>
  )
}

export default Cards
