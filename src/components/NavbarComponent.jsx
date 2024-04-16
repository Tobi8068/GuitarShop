import { CiUser,CiShoppingCart,CiHeart } from "react-icons/ci";

const NavbarComponent = () => {
    return (
        <nav className='sticky top-0 flex flex-col items-center p-5 bg-white dark:bg-gray-900 border-b-2 border-gray-100 dark:border-black md:flex-row md:justify-between md:px-10 md:py-6 md:border-gray-200'>
            <div className='flex items-center text-2xl font-bold mb-3 md:mb-0 md:text-3xl'>
                <h1 className="dark:text-white">GuitarShop</h1>  
                <img src="/logo.png" className="w-12 h-12 object-cover md:w-14 md:h-14" />              
            </div>
            <div className='w-full md:w-3/5'>
                <input className='w-full shadow appearance-none border rounded py-2 px-3 dark:bg-inherit text-gray-700 dark:text-gray-300 leading-tight dark:border-gray-400 focus:outline-none focus:shadow-outline'
                    type="text" placeholder='Enter something to search' />
            </div>
            <div className="hidden lg:flex items-center gap-2 dark:text-gray-300">
                    <CiUser className="text-3xl cursor-pointer"/>
                    <CiShoppingCart className="text-3xl cursor-pointer"/>
                    <CiHeart className="text-3xl cursor-pointer"/>
                </div>
        </nav>
    )
}

export default NavbarComponent