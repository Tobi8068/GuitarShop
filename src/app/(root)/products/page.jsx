'use client';
import ProductCard from '@/components/Design/ProductComponent/ProductCard'
import { FaFilter } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import BannerComponent from '@/components/RootComponent/BannerComponent';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchProducts } from '@/lib/features/product';
import Link from 'next/link';
import FilterPopup from '@/components/Design/PopupComponent/FilterPopup';
import ProductCardLoader from '@/components/Loader/ProductCardLoader/ProductCardLoader';
import ProductNotFound from '@/components/Design/NotFoundComponent/ProductNotFound';
import PageNumber from '@/components/hero/PageNumber';

const page = ({ searchParams }) => {
    const [sortOrder, setSortOrder] = useState({ term: 'def', sort: 'Default' })
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const dispatch = useAppDispatch()
    const products = useAppSelector((state) => state.product)
    let currPage = 1;
    if (searchParams.page > 1) {
        currPage = Number(searchParams.page)
    }

    let pgNos = []
    for (let index = currPage - 3; index < currPage + 3; index++) {
        if (index < 1) continue
        if (index > products.totalPages) break;
        pgNos.push(index)
    }

    useEffect(() => {
        dispatch(fetchProducts({ url: `product?page=${currPage}&sort=${sortOrder.term}`, minPrice, maxPrice, category: selectedCategories }))
    }, [currPage, sortOrder])

    const handleFilter = () => {
        dispatch(fetchProducts({ url: `product?sort=${sortOrder.term}`, minPrice, maxPrice, category: selectedCategories }))
    }

    return (
        <>
            <BannerComponent />
            <CategoryHeader sortOrder={sortOrder} setSortOrder={setSortOrder}
                minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice}
                selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}
                handleFilter={handleFilter}
            />
            <div className="w-full  mt-1 mb-10 px-5 grid grid-cols-2 gap-2 md:px-0 md:w-3/4 md:mx-auto lg:grid-cols-4 md:gap-4 ">
                {products.isLoading ? (
                    // Show loading indicator
                    <ProductCardLoader count={4} />
                ) : products.data.length === 0 ? (
                    // Show message when no products are found
                    null // Do not render anything here, as ProductNotFound will be rendered separately
                ) : (
                    // Render products
                    products.data.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                )}
            </div>
            {products.data.length === 0 && !products.isLoading && (
                <ProductNotFound />
            )}
            <div className='w-full font-semibold flex justify-center px-5 gap-2  md:px-0 md:w-3/4 md:mx-auto md:gap-3 '>
                <PageNumber pgNos={pgNos} searchParams={searchParams} name='products'/>
            </div>

        </>
    )
}

const CategoryHeader = ({ sortOrder, setSortOrder, minPrice, setMinPrice, maxPrice, setMaxPrice, selectedCategories, setSelectedCategories, handleFilter }) => {

    const [showModal, setShowModal] = useState(false);
    const [dropdown, setDropdown] = useState(false)

    const toggleDropDown = () => {
        setDropdown(!dropdown)
    }
    const sortProduct = (sort) => {
        setSortOrder(sort)
        setDropdown(!dropdown)
    }
    return (
        <div className='w-full flex justify-between my-5 px-5 dark:text-gray-300 md:px-0 md:w-3/4 md:mx-auto'>
            <div className="relative inline-block text-left bg-gray-100 dark:bg-inherit dark:border-2 dark:border-gray-700  transition-colors duration-300 ease-in px-2 py-1 justify-between items-center cursor-pointer rounded md:w-auto
            shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                <div onClick={toggleDropDown} >
                    Sort By:
                    <span className='ml-1 font-semibold'>{sortOrder.sort}</span>
                </div>
                {dropdown && <DropDown sortProduct={sortProduct} />}
            </div>
            <div className="flex w-5/12 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 dark:bg-inherit dark:border-2 dark:border-gray-700  transition-colors duration-300 ease-in px-2 py-1 justify-between items-center cursor-pointer rounded md:w-auto
            shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
            " onClick={() => setShowModal(true)} >
                <span className='md:mr-2'>Filter </span>
                <FaFilter />
            </div>
            {/* contains the popup modal  */}
            {showModal && <FilterPopup setShowModal={setShowModal}
                minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} handleFilter={handleFilter}
                selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories}
            />}
        </div>
    )


}

const DropDown = ({ sortProduct }) => {
    return (
        <div className="absolute left-0 z-10 mt-3 -ml-1 w-56 origin-top-right rounded-md bg-white dark:bg-gray-900 shadow-lg dark:border-gray-700 border-2" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            <div className="py-1" role="none">
                <span onClick={() => { sortProduct({ term: 'def', sort: 'Default' }) }} className="block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Default</span>
                <span onClick={() => { sortProduct({ term: 'asc', sort: 'Ascending' }) }} className="block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Ascending</span>
                <span onClick={() => { sortProduct({ term: 'desc', sort: 'Descending' }) }} className="block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Descending</span>
            </div>
        </div>
    )
}

export default page