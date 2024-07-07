'use client'
import withAuth from "@/app/authProvider"
import CartComponent from "@/components/Design/CartComponent/CartComponent";
import CheckOutComponent from "@/components/Design/CartComponent/CheckOutComponent";
import { fetchCartItems, removeFromCart } from "@/lib/features/cart";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

function CartPage() {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user.data);
  const {items,isLoading} = useAppSelector((state) => state.cart);
  useEffect(() => {
    if (user && user._id) {
      dispatch(fetchCartItems(user._id));
    }
  }, [dispatch, user]);

  const handleRemoveFromCart = async (product_id) =>{
    const cartData = { product_id, user_id: user._id };
    const result = await dispatch(removeFromCart(cartData));
    if (result.meta.requestStatus === 'fulfilled') {
        alert('Product removed from cart successfully');
    } else {
        alert('Failed to remove product from cart');
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="md:flex md:w-3/4 gap-2 md:mx-auto">
        <h1 className='text-xl px-5 md:px-0 mt-4 font-bold md:text-2xl mb-2'>Your Cart</h1>
      </div>
      <div className="md:flex px-5 md:w-3/4 gap-2 md:px-0 md:mx-auto">
        {/* Cart Part  */}
        <div className="w-full flex flex-col gap-3 my-5 md:px-0 ">
        { items.length > 0  ? (
            items.map((item,index) => (
              <CartComponent key={index} item={item} handleRemoveFromCart={handleRemoveFromCart}/>
            ))
          ) : (
            <div className="h-20 md:h-96">Your cart is empty</div>
          )}
        </div>
        {/* Cart Part  */}
        {/* Checkout Part  */}
        <div className="w-full  my-5 md:my-5  md:w-1/2">
          <CheckOutComponent />
        </div>
        {/* Checkout Part  */}
      </div>
    </>
  );
}

export default withAuth(CartPage);
