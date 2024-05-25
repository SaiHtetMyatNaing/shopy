'use client'
import { useAddToCartStore } from "@/app/Zustandstore/store";
import React from "react";

function AddToCart() {
    const itemCount = useAddToCartStore((state) => state.itemCount);

  return (
     <button className="relative max-w-14 max-h-14">
      <span className="absolute -top-2 -right-[8px] bg-black text-white rounded-full w-[20px] h-[20px] text-sm text-center">{itemCount}</span>
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
      viewBox="0 0 24 24"
    >
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <path d="M4 19a2 2 0 104 0 2 2 0 10-4 0M15 19a2 2 0 104 0 2 2 0 10-4 0"></path>
      <path d="M17 17H6V3H4"></path>
      <path d="M6 5l14 1-1 7H6"></path>
    </svg>
    </button>
  );
}

export default AddToCart;