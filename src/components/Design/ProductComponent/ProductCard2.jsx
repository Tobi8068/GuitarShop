import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import AddToCartBtn2 from "../../hero/AddToCartBtn2";

const ProductCard2 = ({product}) => {
    return (
        <div className='flex flex-col m-1 dark:border-gray-700 dark:border-2 rounded dark:shadow-none shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]
        md:flex-row lg:p-3 md:gap-2'>
            <ProductCard2Img/>
            <ProductCard2Content product={product}/>
        </div>
    )
}

const ProductCard2Img = () => {
    return (
        <div className='w-full aspect-square p-3 md:p-3 md:w-2/5 lg:p-0'>
            <img src="/guitar.png" className='w-full h-full object-cover rounded' />
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
            <FaStar className=" text-yellow-300" />
            <FaStar className=" text-yellow-300" />
            <FaStar className=" text-yellow-300" />
            <FaStar className=" text-yellow-300" />
            <CiStar className="text-xl" />
        </div>
    )
}

const ProductCard2Info = ({product}) => {
    return (
        <div>
            <h1 className="text-xl font-bold my-1 dark:text-gray-300">{product.product_name}</h1>
            <p className="font-semibold text-gray-500 dark:text-gray-400">
                {product.description}
            </p>
            <h2 className="text-lg font-bold my-3 text-red-600 ">$ {product.price}</h2>
            <AddToCartBtn2 />
        </div>
    )
}

export default ProductCard2