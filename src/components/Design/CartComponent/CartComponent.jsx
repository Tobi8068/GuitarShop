import { capitalizeFirstLetter } from "@/utils/utils"

const CartComponent = ({item,handleRemoveFromCart}) => {
  if (!item.product_id) {
    return <div>Loading...</div>;
  }
  return (
    <div className="w-full flex gap-4 p-2 rounded dark:border-gray-700 dark:border-2  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <CartImgPart item={item}/>
      <CartInfoPart item={item} handleRemoveFromCart={handleRemoveFromCart}/>
    </div>
  )
}

const CartImgPart = ({item}) => {
  return (
    <div className="w-1/3 aspect-square p-1 ">
      <img src={`http://localhost:3001/products/${item.product_id.product_image}`} className="w-full h-full object-cover rounded" />
    </div>
  )
}

const CartInfoPart = ({item,handleRemoveFromCart}) => {
  return (
    <div className="w-4/6 p-1 flex flex-col justify-between text-sm lg:text-lg lg:p-3">
      <div>
        <div className="w-full flex justify-between my-1 ">
          <h1 className="text-md  lg:text-xl">{item.product_id.product_name}</h1>
          <h2>{item.product_id.price}</h2>
        </div>
        <h3> {capitalizeFirstLetter(item.product_id.category_id.category_name)}</h3>
      </div>
  
      <div className="w-full flex justify-between items-center ">
        <h1 >Qty: {item.quantity}</h1>
        <h2 className="text-red-500 cursor-pointer" onClick={()=>{handleRemoveFromCart(item.product_id._id)}}>Remove</h2>
      </div>
    </div>
  )
}

export default CartComponent