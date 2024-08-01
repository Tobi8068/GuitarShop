'use client'
import ProductNotFound from "@/components/Design/NotFoundComponent/ProductNotFound";
import AddToCartBtn from "@/components/hero/AddToCartBtn";
import WishListBtn from "@/components/hero/AddToWishlistBtn";
import OutOfStockComponent from "@/components/hero/OutOfStockComponent";
import RatingStars from "@/components/hero/RatingStars";
import { fetchSingleProduct } from "@/lib/features/product";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { capitalizeFirstLetter } from "@/utils/utils";
import { useEffect, useState } from "react";

const ProductDetails = ({ params }) => {
    const dispatch = useAppDispatch();
    const product = useAppSelector((state) => state.product);
    const { singleProductData: data, isLoading } = product;
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(fetchSingleProduct(params.slug));
    }, [dispatch, params.slug]);

    const handleIncreaseQuantity = () => {
        if (quantity < data.quantity) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {data && data.category_id ? (
                <div className="w-full mt-4 px-5 lg:flex lg:gap-6 md:mb-10 md:px-0 md:w-3/5 lg:w-3/4 md:mx-auto ">
                    <div className="w-full lg:w-2/4 mb-4 ">
                        <img src={`http://localhost:3001/products/${data.product_image}`}
                            className="w-full p-2 aspect-square object-cover shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" />
                    </div>
                    <div className="flex flex-col p-2">
                        <h1 className="text-2xl font-semibold mb-2">{data.product_name}</h1>
                        <p className="mb-2 dark:text-gray-400">
                            {data.description}
                        </p>
                        <ProductRating product={data} />
                        <h2 className="font-semibold text-lg mb-1">Price: Rs.{data.price}</h2>
                        <h2 className="font-semibold text-lg mb-1">Quantity: {data.quantity}</h2>
                        <h2 className="dark:text-gray-400 font-semibold text-lg mb-1">
                            Category: {capitalizeFirstLetter(data.category_id.category_name)}
                        </h2>
                        <h2 className="dark:text-gray-400 font-semibold text-lg mb-3">
                            Brand: {capitalizeFirstLetter(data.brand_id.brand_name)}
                        </h2>
                         <div className="flex items-center gap-2 mb-3">
                            <button
                                onClick={handleDecreaseQuantity}
                                className="px-3 py-1 border rounded-md border-gray-300"
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                onClick={handleIncreaseQuantity}
                                className="px-3 py-1 border rounded-md border-gray-300"
                                disabled={quantity >= data.quantity}
                            >
                                +
                            </button>
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row lg:mt-2 md:w-3/4 lg:w-2/4">
                            {data.quantity === 0 ? (
                                <OutOfStockComponent />
                            ) : (
                                <AddToCartBtn product={data} quantity={quantity}/>
                            )}
                            <WishListBtn product={data} />
                        </div>
                    </div>
                </div>
            ) : (
                <ProductNotFound/>
               
            )}
        </>
    );
};
export default ProductDetails

const ProductRating = ({ product }) => {
    return (
        <div className="flex gap-1 text-lg my-2">
            <RatingStars product={product} />
        </div>
    )
}