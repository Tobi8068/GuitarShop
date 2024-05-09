const ProductCard2Loader = () => {
    return (
        <div role="status" className='flex flex-col m-1 animate-pulse bg-white dark:bg-inherit dark:border-gray-700 dark:border-2 rounded dark:shadow-none shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
        md:flex-row lg:p-3 md:gap-2'>
            <ProductCard2Img/>
            <ProductCard2Content />
        </div>
    )
}

const ProductCard2Img = () => {
    return (
        <div  className='w-full bg-gray-200 dark:bg-gray-700  aspect-square p-3 md:p-3 md:w-2/5 lg:p-0'>
            
        </div>
    )
}

const ProductCard2Content = ({product}) => {
    return (
        <div className="p-3 md:p-5 md:w-3/5">
            <ProductCard2Rating  product={product} />
            <ProductCard2Info  product={product} />
        </div>
    )
}

const ProductCard2Rating = () => {
    return (
        <div className='flex items-center gap-2 my-1'>
        <h1 className="w-32 h-4 my-1 bg-gray-200 dark:bg-gray-700 "></h1>
        </div>
    )
}

const ProductCard2Info = ({product}) => {
    return (
        <div>
            <h1 className="w-24 h-6 my-1 bg-gray-200 dark:bg-gray-700 "></h1>
            <p className="w-56 h-4 mb-1 mt-2 bg-gray-200 dark:bg-gray-700"></p>
            <p className="w-44 h-4 mb-2 bg-gray-200 dark:bg-gray-700"></p>
            <h2 className="w-24 h-5 bg-gray-200 dark:bg-gray-700  my-3 "></h2>
            <div className="w-32 bg-gray-200 dark:bg-gray-700 mt-5 py-5 px-4 rounded"></div>
        </div>
    )
}

export default ProductCard2Loader