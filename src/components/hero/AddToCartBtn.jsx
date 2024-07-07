import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToCart } from "@/lib/features/cart";
import { checkAuth } from "@/lib/features/user";
import { decrementQuantity } from "@/lib/features/product";

const AddToCartBtn = ({product,quantity}) => {
    const dispatch = useAppDispatch();
    // console.log(product);
      const handleAddToCart = async () => {
        const res = await dispatch(checkAuth())
        if (res.payload.success) {
            const user_id = res.payload.user._id 
            await dispatch(addToCart({ product_id: product._id, user_id:user_id, quantity }));
            dispatch(decrementQuantity({quantity}))
            alert('Product added to cart successfully');
        }
        else {
            alert('Please Log In First');
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