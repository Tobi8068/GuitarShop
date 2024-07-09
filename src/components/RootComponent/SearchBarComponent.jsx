'use client';
import { searchProducts, setSearchLoading } from '@/lib/features/product';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useState, useEffect } from 'react';
import SearchLoader from '../Loader/SearchLoader';
import Link from 'next/link';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [typingTimeout, setTypingTimeout] = useState(null);
    const dispatch = useAppDispatch();
    const { searchData, searchLoading, error } = useAppSelector((state) => state.product);

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
        <div className="relative w-full md:w-3/5">
            <input
                className="w-full shadow appearance-none border rounded py-2 px-3 dark:bg-inherit text-gray-700 dark:text-gray-300 leading-tight dark:border-gray-400 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Enter something to search"
                value={searchTerm}
                onChange={handleInputChange}
            />
            {/* search results  */}
            {searchTerm.length > 0 && (
                <div className="absolute left-0 right-0 mt-2 p-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-400 rounded shadow-lg">
                    {searchLoading ? (
                        <SearchLoader count={2} />
                    ) : error ? (
                        <p>{error}</p>
                    ) : searchData.length > 0 ? (
                        searchData.map((product) => (
                            <SearchResults product={product}  setSearchTerm={setSearchTerm}/>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            )}
             {/* search results  */}
        </div>
    );
};

const SearchResults = ({ product,setSearchTerm }) => {
    return (
        <Link href={`/products/${product._id}`} onClick={()=>{setSearchTerm('') }}>
            <div key={product._id} className="p-2 border-b border-gray-200 dark:border-gray-600 flex gap-2">
                <div className='aspect-square p-8 md:p-10 bg-gray-300' style={{
                    backgroundImage: `url(http://localhost:3001/products/${product.product_image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                </div>
                <div>
                    <p className='font-semibold'>{product.product_name}</p>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>{product.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default SearchComponent;
