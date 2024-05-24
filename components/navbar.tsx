import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    // main Top Nav Bar Wrapper for every Page
     <nav className='p-4 gap-3 flex justify-between z-20 bg-white items-center max-w-full w-full top-0 left-0 fixed right-0 shadow-md'>

        <div className='pl-7'>
            <h1 className='font-bold text-2xl transform -skew-y-[5deg]'>Shopy</h1>
        </div>

        <ul className='flex items-center justify-between cursor-pointer'>
            <li className='w-44 text-center p-3'>
              <Link href="/">Home</Link>
            </li>
            <li className='w-44 text-center p-3'>
              <Link href="/products">Products</Link>
            </li>
            <li className='w-44 text-center p-3'>
              <Link href="/about">About</Link>
            </li>
        </ul>

        <div className='flex justify-between items-center  w-[180px]'>
            <Button>Sign In</Button>
            <Button variant="outline" className='border-black'>Sign Up</Button>
        </div>



     </nav>
  )
}

export default NavBar