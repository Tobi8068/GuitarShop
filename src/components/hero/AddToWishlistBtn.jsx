import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { checkAuth } from "@/lib/features/user";
import { addToWishlist } from "@/lib/features/wishlist";


const AddToWishlistBtn = ({product}) => {
    const dispatch = useAppDispatch();
    const {error} = useAppSelector((state) => state.wishlist);
    const handleAddToWishlist = async () => {
        const res = await dispatch(checkAuth())
        if (res.payload.success) {
            const user_id = res.payload.user._id 
            const response = await dispatch(addToWishlist({ product_id: product._id, user_id:user_id }));
            if (response.payload.success) {
                alert('Product Added To Wishlist');
            }else{
                alert('Product Already in Wishlist');
            }
        }
        else {
            alert('Please Log In First');
        }
    };
    return (
        <button onClick={handleAddToWishlist} className="w-full flex justify-center items-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold md:font-bold py-2 rounded">
            Add to Wishlist
        </button>

    )
}

export default AddToWishlistBtn