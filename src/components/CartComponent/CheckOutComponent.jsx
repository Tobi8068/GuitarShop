const CheckOutComponent = () => {
  return (
    <>
    <div className="w-full p-3 dark:border-gray-700 dark:border-2 rounded shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <h1 className='text-xl font-bold  mb-4'>Cart Totals</h1>
        <div className="flex justify-between my-2 pb-4 border-b border-gray-400 ">
            <h1 className="font-semibold" >Total</h1>
            <h1>Rs. 20000</h1>
        </div>
        <button className="w-full bg-blue-500 my-3 hover:bg-blue-700 text-white font-semibold md:font-bold py-2 rounded">
            Checkout
        </button>
    </div>
    </>
  )
}

export default CheckOutComponent