import CartList from "@/components/CartComponent/CartList";

function Index() {
  return (
    <>
      <div className="w-full px-5 gap-2 my-8 md:my-6 md:px-0 md:w-3/4  md:mx-auto">
        {/* Cart Header  */}
        <h1 className='text-2xl font-bold md:text-3xl mb-5'>Your Cart</h1>
        {/* Cart Header  */}
        <CartList/>
      </div>
      
    {/* gap  */}
    <div className="h-52"/>
    {/* gap  */}
    </>
  );
}

export default Index;
