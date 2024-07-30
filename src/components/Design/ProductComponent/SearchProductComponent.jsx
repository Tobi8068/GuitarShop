'use client'
import { searchProducts, setSearchData, setSearchError, setSearchLoading } from "@/lib/features/product";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect, useState } from "react";

const SearchProductComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [typingTimeout, setTypingTimeout] = useState(null);
    const dispatch = useAppDispatch();

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        if (value.length > 0) {
            dispatch(setSearchLoading(true));
            setTypingTimeout(setTimeout(() => {
                dispatch(searchProducts(value));
            }, 500));
        } else {
            dispatch(setSearchData())
            dispatch(setSearchError(false))
            dispatch(setSearchLoading(false));
        }
    };

    useEffect(() => {
        return () => {
            if (typingTimeout) {
                clearTimeout(typingTimeout);
            }
        };
    }, [typingTimeout]);
  return (
    <div className="flex-1 ">
    <form className="w-full mx-auto">
        <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
            Search
        </label>
        <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                </svg>
            </div>
            <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400 dark:focus:border-gray-400"
                placeholder="Search Products"
                value={searchTerm}
                onChange={handleInputChange}
            />

        </div>
    </form>
</div>
  )
}

export default SearchProductComponent