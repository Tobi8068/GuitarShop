import ProductCard from "@/components/Design/ProductComponent/ProductCard"

const Wishlist = () => {
    return (
        <>
            <div className="md:flex md:w-3/4 gap-2 md:mx-auto">
                <h1 className='text-xl px-5 md:px-0 mt-2 font-bold md:text-2xl mb-2'>WishList</h1>
            </div>
            <div className="w-full md-2 md:mb-10 mt-4 px-5 grid grid-cols-2 gap-2 md:px-0 md:w-3/4 md:mx-auto md:grid-cols-3 lg:grid-cols-4 md:gap-4 ">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </>
    )
}

export default Wishlist