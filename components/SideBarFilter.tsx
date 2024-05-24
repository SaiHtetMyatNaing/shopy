import React from 'react'
import { Card } from './ui/card'
import FilterCategoryIcon from '@/app/Icons/FilterCategoryIcon'
import { SearchIcon } from 'lucide-react'
import { useFilterStore } from '@/app/Zustandstore/store'

const SideBarFilter = () => {
  const setFilteredItem = useFilterStore((state)=> state.setFilteredItem)
  const filterItem      = useFilterStore((state)=> state.filteredItem)
  const condictional = `${"p-3 border-[1px] hover:border-slate-500 rounded-md border-slate-200 cursor-pointer w-full hover:bg-black hover:text-white"}`
  const activeState  = `${"p-3 border-[1px] hover:border-slate-500 rounded-md  border-slate-200 cursor-pointer w-full bg-black text-white"}`

  const handleFilter = (str : string) => {
    setFilteredItem(str);
}
 
  return (
    <Card className='max-w-full max-h-[700px] flex flex-col  items-center'>
       
    <div className='w-full  p-3 flex gap-2 text-2xl cursor-pointer'>
       <FilterCategoryIcon/>
       <div>Filter : </div>
    </div>

    <div className='relative '>
       <input 
        className='py-1 pl-[27px] relative h-10 rounded-md border-slate-200 border-2'
        placeholder='Search'
        onChange={(e)=> setFilteredItem(e.target.value)}
        type="text" />
        <div className='absolute top-2 left-1'>
         <SearchIcon/>
        </div>
    </div>

 
   <ul className='h-[400px] w-full flex flex-col gap-2 justify-between items-start p-3 cursor-pointer'>
       <li onClick={()=> handleFilter('')} className={filterItem === "" ? activeState : condictional}>All</li>
       <li onClick={()=> handleFilter("men's clothing")} className={filterItem === "men's clothing" ? activeState : condictional}>Men Wear</li>
       <li onClick={()=> handleFilter("women's clothing")} className={filterItem === "women's clothing" ? activeState : condictional}>Women Wear</li>
       <li onClick={()=> handleFilter("electronics")} className={filterItem === "electronics" ? activeState : condictional}>Electronics</li>
       <li onClick={()=> handleFilter("jewelery")} className={filterItem === "jewelery" ? activeState : condictional}>Jewelery</li>
    </ul>
 
</Card>
     
  )
}

export default SideBarFilter