'use client'
import withAuth from "@/app/authProvider"
import WishListCard from "@/components/Design/WishListComponent/WishListCard"
import ProductCardLoader from "@/components/Loader/ProductCardLoader/ProductCardLoader"
import { fetchWishlistItems, removeFromWishlist } from "@/lib/features/wishlist"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect } from "react"

const Wishlist = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.data);
  const {items,isLoading} = useAppSelector((state) => state.wishlist);
  useEffect(() => {
    if (user && user._id) {
      dispatch(fetchWishlistItems(user._id));
    }
  }, [dispatch, user]);

  const handleRemoveFromWishlist = async (product_id) =>{
    const cartData = { product_id, user_id: user._id };
    const result = await dispatch(removeFromWishlist(cartData));
    if (result.meta.requestStatus === 'fulfilled') {
        alert('Product removed from wishlist successfully');
    } else {
        alert('Failed to remove product from cart');
    }
  }

  return (
    <>
<div className="md:flex md:w-3/4 gap-2 md:mx-auto">
  <h1 className='text-xl px-5 md:px-0 mt-4 font-bold md:text-2xl mb-2'>WishList</h1>
</div>
<div className="w-full md-2 md:mb-10 mt-4 px-5 grid grid-cols-2 gap-2 md:px-0 md:w-3/4 md:mx-auto lg:grid-cols-4 md:gap-4">
  {isLoading ? (
    // Show loading indicator
    <ProductCardLoader count={4} />
  ) : items.length === 0 ? (
    <div>
      Your wishlist is empty.
    </div>
  ) : (
    // Render products
    items.map((item) => (
      <WishListCard
        key={item.product_id._id}
        product={item.product_id}
        handleRemoveFromWishlist={handleRemoveFromWishlist}
      />
    ))
  )}
</div>

</>
  )
}

export default withAuth(Wishlist) 