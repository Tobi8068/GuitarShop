import ProductCard from '@/components/ProductCardComponent/ProductCard'
import { FaSort,FaSortUp,FaSortDown, FaFilter } from "react-icons/fa";
import React from 'react'

const page = () => {
    return (
        <>  
            <CategoryHeader/>
            <div className="w-full  mt-1 px-5 grid grid-cols-2 gap-2 md:px-0 md:w-3/4 md:mx-auto lg:grid-cols-4 md:gap-4 ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    )
}

const CategoryHeader = () =>{
    return (
        <div className='w-full flex justify-between my-5 px-5 dark:text-gray-300 md:px-0 md:w-3/4 md:mx-auto'>
            <div  className="flex w-5/12 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-inherit dark:border-2 dark:border-gray-700  transition-colors duration-300 ease-in  px-2 py-1 justify-between items-center cursor-pointer rounded md:w-auto md:mr-4
                shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            ">
                <span className='md:mr-2'>Sort By Price</span>
            </div>
            <div className="flex w-5/12 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-inherit dark:border-2 dark:border-gray-700  transition-colors duration-300 ease-in px-2 py-1 justify-between items-center cursor-pointer rounded md:w-auto
            shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            ">
                <span className='md:mr-2'>Filter </span>
                <FaFilter />
            </div>
        </div>
    )


}

export default page