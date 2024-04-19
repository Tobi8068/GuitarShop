import { FaRegHeart } from "react-icons/fa";

const AddToWishlistBtn = () => {
    return (
        <button className="w-full flex justify-center items-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-semibold md:font-bold py-2 rounded">
           <FaRegHeart className="text-lg"/>  Add to WishList
        </button>
    )
}

export default AddToWishlistBtn