
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import TanStackProvider from "@/components/Providers/TanStackProvider";

const inter = Roboto({ weight : "500",subsets : ["cyrillic-ext"]});

export const metadata: Metadata = {
  title: "Shopy",
  description: "Shop With Us",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProvider>
           <NavBar/>
           {children}
        </TanStackProvider>
       </body>
    </html>
  );
}
