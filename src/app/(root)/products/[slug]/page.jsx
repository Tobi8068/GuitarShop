'use client'
import AddToCartBtn from "@/components/hero/AddToCartBtn";
import WishListBtn from "@/components/hero/AddToWishlistBtn";
import RatingStars from "@/components/hero/RatingStars";
import { fetchSingleProduct } from "@/lib/features/product";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

const ProductDetails = ({ params }) => {
    const dispatch = useAppDispatch();
    const product = useAppSelector((state) => state.product)
    const data = product.singleProductData
    useEffect(() => {
        dispatch(fetchSingleProduct(params.slug))
    }, [])

    return (
        <>
            {product.isLoading ? (
                // Display loading indicator
                <div>Loading...</div>
            ) : (
                // Display product details if data is available
                data && data.category_id ? (
                    <div className="w-full mt-4 px-5 lg:flex lg:gap-6 md:mb-10 md:px-0 md:w-3/5 lg:w-3/4 md:mx-auto ">
                        <div className="w-full lg:w-2/4 mb-4 ">
                            <img src="/guitar.jpg" className="w-full p-2 aspect-square object-cover shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" />
                        </div>
                        <div className="flex flex-col p-2">
                            <h1 className="text-2xl font-semibold mb-2">{data.product_name}</h1>
                            <p className="mb-2 dark:text-gray-400">
                                {data.description}
                            </p>
                            <ProductRating product={data}/>
                            <h2 className="font-semibold text-lg mb-1">Price: ${data.price}</h2>
                            <h2 className="dark:text-gray-400 font-semibold text-lg mb-3">
                                {/* Display category in first letter capital */}
                                Category: {data.category_id.category_name}
                            </h2>
                            <div className="flex flex-col gap-3 md:flex-row lg:mt-2 md:w-3/4 lg:w-2/4">
                                <AddToCartBtn />
                                <WishListBtn />
                            </div>
                        </div>
                    </div>
                ) : (
                    // If data is not available, display a message or handle the case appropriately
                    <div>Loading...</div>
                )
            )}

        </>
    )
}

export default ProductDetails

const ProductRating = ({product}) => {
    return (
        <div className="flex gap-1 text-lg my-2">
               <RatingStars product={product}/>
        </div>
    )
}