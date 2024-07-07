import Link from "next/link";
import RatingStars from "@/components/hero/RatingStars";

const WishListCard = ({ product,handleRemoveFromWishlist }) => {
  return (
    <div className="cursor-pointer bg-white dark:bg-inherit dark:border-gray-700 dark:border-2 rounded p-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <Link href={`products/${product._id}`}>
        <WishListCardHeader product={product}/>
        <WishListCardBody product={product} />
      </Link>
      <WishListCardRating product={product} />
      <RemoveBtn product={product} handleRemoveFromWishlist={handleRemoveFromWishlist}/>
    </div>
  )
}

const WishListCardHeader = ({product}) => {
  return (
    <div className="w-full aspect-square bg-gray-200 rounded">
      <img src={`http://localhost:3001/products/${product.product_image}`} className="w-full h-full object-cover rounded" ></img>
    </div>
  )
}

const WishListCardBody = ({ product }) => {
  return (
    <div>
      <div className="w-full mt-2 mb-2">
        <WishListCardInfos product={product} />
      </div>
    </div>
  )
}

const WishListCardInfos = ({ product }) => {
  return (
    <div className='md:flex md:items-center md:justify-between'>
      <div className="font-bold mb-1 overflow-hidden dark:text-gray-300  whitespace-nowrap md:w-3/5 md:mb-0">{product.product_name}</div>
      <div className="font-bold text-gray-600 dark:text-gray-400 text-sm">$ {product.price}</div>
    </div>
  )
}


const WishListCardRating = ({product}) => {
  return (
    <div className="flex gap-1 text-lg my-3">
          <RatingStars product={product}/>
    </div>
  )
}

const RemoveBtn = ({product,handleRemoveFromWishlist}) => {
  return (
    <button className="w-full bg-red-500 hover:bg-red-700 text-white font-semibold md:font-bold py-2 rounded"
     onClick={()=>{handleRemoveFromWishlist(product._id)}}>
        Remove
    </button>
  )
}



export default WishListCard