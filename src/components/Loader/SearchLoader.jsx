import React from 'react'

const SearchLoader = ({count}) => {
    return (
        <>
        {Array.from({ length: count || 4 }, (_, index) => (
            <div role="status" className="animate-pulse p-2 border-b border-gray-200 dark:border-gray-600 flex gap-2">
            <div className='aspect-square p-8 md:p-10 bg-gray-200 dark:bg-gray-700'>
            </div>
            <div>
                <p className='bg-gray-200 w-36 h-4 mb-2 dark:bg-gray-700'></p>
                <p className='bg-gray-200 w-32 h-4 dark:bg-gray-700'></p>
            </div>
        </div>
         ))}
        </>

    )
}

export default SearchLoader