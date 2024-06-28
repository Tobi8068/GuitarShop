const ProductCardLoader = ({ count }) => {
    return (
        <>
            {Array.from({ length: count || 4 }, (_, index) => (
                <div key={index} role="status" className="animate-pulse bg-white dark:bg-inherit rounded p-2 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                    {/* Container for the product card loader */}
                    <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded">
                        {/* Loader header */}
                    </div>
                    <div>
                        {/* Loader body */}
                        <div className="w-full mt-2 mb-2">
                            <div className='md:flex md:items-center md:justify-between'>
                                <div className="w-24 h-5 rounded bg-gray-200 dark:bg-gray-700 md:w-2/4 md:mb-0"></div>
                                <div className="w-16 h-4 mt-2 rounded bg-gray-200 dark:bg-gray-700 md:mt-0"></div>
                            </div>
                            <div className="w-24 h-4 rounded mt-3 bg-gray-200 dark:bg-gray-700 "></div>
                        </div>
                    </div>
                </div>
            ))}


        </>


    )
}

export default ProductCardLoader