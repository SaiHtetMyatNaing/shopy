import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import AddToCart from './AddToCart'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'


async function NavBar() {
  const session = await getServerSession(options);
  return (
    // main Top Nav Bar Wrapper for every Page
     <nav className='p-4 gap-3 flex justify-between z-20 bg-white items-center max-w-full w-full top-0 left-0 fixed right-0 shadow-md'>

        <div className='pl-7'>
            <h1 className='font-bold text-2xl transform -skew-y-[5deg] text-black cursor-pointer'>Shopy</h1>
        </div>

        <ul className='flex items-center justify-between cursor-pointer text-black'>
            <li className='w-44 text-center p-3 hover:text-blue-500'>
              <Link href="/">Home</Link>
            </li>
            <li className='w-44 text-center p-3 hover:text-blue-500'>
              <Link href="/products">Products</Link>
            </li>
            <li className='w-44 text-center p-3 hover:text-blue-500'>
              <Link href="/about">About</Link>
            </li>
        </ul>

       
        <div className='flex justify-between items-center gap-4 max-w-[220px]'>
             <AddToCart/>
            <Button>
              {
                session? 
                <Link href='/api/auth/signout'>Sign Out</Link> 
                :<Link href='/api/auth/signin'>Sign In</Link>
              }
              </Button>
            <Button variant="outline" className='border-black'>Sign Up</Button>
        </div>



     </nav>
  )
}

export default NavBar