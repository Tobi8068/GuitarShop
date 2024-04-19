import Link from "next/link";
import { CiUser,CiShoppingCart,CiHeart,CiHome } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

const BottomNavbar = ({setIsSidebar}) => {
  return (
    <div className='w-full h-16 px-8 fixed bottom-0 flex justify-between items-center bg-white dark:bg-inherit dark:text-gray-200 border-t z-10 border-gray-300 md:justify-center md:gap-10 lg:hidden '>
        <RxHamburgerMenu onClick={()=>{setIsSidebar(true)}} className="text-2xl cursor-pointer"/>
        <Link href='/cart'><CiShoppingCart className="text-3xl cursor-pointer"/></Link>
        <Link href='/'><CiHome className="text-3xl cursor-pointer"/></Link>
        <Link href='/wishlist'><CiHeart className="text-3xl cursor-pointer"/></Link>
        <CiUser className="text-3xl cursor-pointer"/>
    </div>
  )
}

export default BottomNavbar