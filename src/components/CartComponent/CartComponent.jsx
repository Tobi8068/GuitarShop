const CartComponent = () => {
  return (
    <div className="w-full flex gap-4 p-2 rounded dark:border-gray-700 dark:border-2  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-1/3 aspect-square p-1 ">
        <img src="/guitar.png" className="w-full h-full object-cover rounded" />
      </div>
      <div className="w-4/6 p-1 grid grid-rows-3">
        <div className="w-full flex justify-between items-center row-span-1">
          <h1>Aria Guitar</h1>
          <h2>Rs. 20000</h2>
        </div>
        <h3 className="row-span-2 md:-mt-2">Acoustic</h3>
        <div className="w-full flex justify-between items-center row-span-1">
          <h1>Qty: 1</h1>
          <h2 className="text-red-500">Remove</h2>
        </div>
      </div>

    </div>
  )
}

export default CartComponent