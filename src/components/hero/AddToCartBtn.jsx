import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/features/cart";
import { checkAuth } from "@/lib/features/user";

const AddToCartBtn = ({product}) => {
    const dispatch = useAppDispatch();

      const handleAddToCart = async () => {
        const res = await dispatch(checkAuth())
        if (res.payload.success) {
            const user_id = res.payload.user._id 
            dispatch(addToCart({ product_id: product._id, user_id:user_id }));
            alert('Product added to cart successfully');
        }
        else {
            alert('You Must Login First');
        }
    };
    return (
        <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold md:font-bold py-2 rounded"
        onClick={handleAddToCart}
        >
            Add To Cart
        </button>
    )
}

export default AddToCartBtn