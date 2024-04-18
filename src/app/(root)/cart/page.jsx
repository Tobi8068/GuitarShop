import CartList from "@/components/CartComponent/CartList";
import CartComponent from "@/components/CartComponent/CartComponent";
import CheckOutComponent from "@/components/CartComponent/CheckOutComponent";

function Index() {
  return (
    <>
    <div className="md:flex md:w-3/4 gap-2 md:mx-auto">
    <h1 className='text-2xl px-5 md:px-0 mt-2 font-bold md:text-3xl mb-2'>Your Cart</h1>
    </div>
     
      <div className="md:flex md:w-3/4 gap-2 md:mx-auto">
        {/* Cart Part  */}
        <div className="w-full px-5 flex flex-col gap-3 my-5 md:px-0 ">
        
          <CartComponent />
          <CartComponent />
        </div>
        {/* Checkout Part  */}
        <div className="w-full px-5 my-5 md:my-5 md:px-0 md  md:w-2/5">
          <CheckOutComponent/>
        </div>
        {/* Checkout Part  */}
        </div>
      {/* gap  */}
      {/* <div className="h-52" /> */}
      {/* gap  */}
    </>
  );
}

export default Index;
