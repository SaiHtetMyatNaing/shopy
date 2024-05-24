// app/dashboard/layout.tsx

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Products",
  description: "Shop With Us",
};


export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div >
       {children}
    </div>
  );
}