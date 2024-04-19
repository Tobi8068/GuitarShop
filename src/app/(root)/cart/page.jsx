import CartComponent from "@/components/Design/CartComponent/CartComponent";
import CheckOutComponent from "@/components/Design/CartComponent/CheckOutComponent";

function Index() {
  return (
    <>
      <div className="md:flex md:w-3/4 gap-2 md:mx-auto">
        <h1 className='text-xl px-5 md:px-0 mt-2 font-bold md:text-2xl mb-2'>Your Cart</h1>
      </div>
      <div className="md:flex px-5 md:w-3/4 gap-2 md:px-0 md:mx-auto">
        {/* Cart Part  */}
        <div className="w-full flex flex-col gap-3 my-5 md:px-0 ">
          <CartComponent />
          <CartComponent />
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

export default Index;
