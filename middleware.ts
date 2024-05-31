import { NextRequest, NextResponse } from "next/server";
export { default } from 'next-auth/middleware'


export const config = {
    // * means 0 or more parameter 
    // + means 1 or more parameter
    // ? means 0 or 1 
    matcher : [
        '/my-cart',
        '/about' ,
        '/products/:id+'
    ]
}