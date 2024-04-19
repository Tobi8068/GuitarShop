const OrderCardComponent = () => {
    return (
      <div className="w-full flex gap-4 p-2 rounded dark:border-gray-700 dark:border-2  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <CartImgPart />
        <CartInfoPart />
      </div>
    )
  }
  
  const CartImgPart = () => {
    return (
      <div className="w-1/3 aspect-square p-1 ">
        <img src="/guitar.png" className="w-full h-full object-cover rounded" />
      </div>
    )
  }
  
  const CartInfoPart = () => {
    return (
      <div className="w-4/6 p-1 flex flex-col justify-between text-sm lg:text-lg lg:p-3">
        <div>
          <div className="w-full flex justify-between my-1 ">
            <h1 className="text-md  lg:text-xl">Aria Guitar</h1>
            <h2>Rs. 20000</h2>
          </div>
          <h3>Acoustic</h3>
        </div>
    
        <div className="w-full flex justify-between items-center ">
          <h1 >Qty: 1</h1>
          <h2 className="font-semibold text-gray-500">See Details</h2>
        </div>
      </div>
    )
  }
  
  export default OrderCardComponent