import CheckOutComponent from "@/components/Design/CartComponent/CheckOutComponent";
import AddToCartBtn from "@/components/hero/AddToCartBtn";
import BuyNowBtn from "@/components/hero/AddToWishlistBtn";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
const ProductDetails = () => {
    return (
        <div className="w-full mt-4 px-5 lg:flex  lg:gap-6 md:mb-10  md:px-0 md:w-3/5 lg:w-3/4 md:mx-auto ">
            <div className="w-full lg:w-2/4 mb-4 ">
                <img src="/guitar.jpg" className="w-full p-2 aspect-square object-cover shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" />
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl font-semibold mb-2">Martin X</h1>
                <p className="mb-2 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur icing  Autem eligendi 
                    at pariatur, dignissimos earum aspernatur distinctio  quo!
                </p>
                <ProductCardRating/>
                <h2 className="font-semibold text-lg mb-1">Price: Rs.20000</h2>
                <h2 className="dark:text-gray-400 font-semibold text-lg mb-3">Category: Acoustic</h2>
                <div className=" flex flex-col gap-3 md:flex-row lg:mt-2 md:w-3/4 lg:w-2/4">
                    <AddToCartBtn/>
                    <BuyNowBtn/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails

const ProductCardRating = () =>{
    return (
      <div className="flex gap-1 text-lg my-2">
        <FaStar className=" text-yellow-300"/>
        <FaStar className=" text-yellow-300"/>
        <FaStar className=" text-yellow-300"/>
        <CiStar className="text-xl"/>
        <CiStar className="text-xl"/>
      </div>
    )
  }