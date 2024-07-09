import { CiUser, CiShoppingCart, CiHeart } from "react-icons/ci";
import { ThemeSwitcher } from "../UI/ThemeSwitch";
import Link from "next/link";
import SearchBarComponent from "./SearchBarComponent";

const NavbarComponent = () => {
    return (
        <nav className='sticky top-0 flex flex-col z-10 items-center p-5 bg-white dark:bg-gray-900 border-b-2 border-gray-100 dark:border-black md:flex-row md:justify-between md:px-10 md:py-6 md:border-gray-200'>
            <Link href={'/'}>
            <div className='flex items-center text-2xl font-bold mb-3 md:mb-0 md:text-3xl'>
                <h1 className="dark:text-white">GuitarShop</h1>
                <img src="/logo.png" className="w-12 h-12 object-cover md:w-14 md:h-14" />
            </div>
            </Link>
            <SearchBarComponent />
            <Links/>
        </nav>
    )
}

const Links = () => {
    return (
        <div className="hidden text-3xl lg:flex items-center gap-2 dark:text-gray-300">
            <Link href='/profile'>
                <CiUser className=" cursor-pointer" />
            </Link>

            <Link href='/cart'>
                <CiShoppingCart className="cursor-pointer" />
            </Link>
            <Link href='/wishlist'>
                <CiHeart className="cursor-pointer" />
            </Link>
            <ThemeSwitcher />
        </div>
    )
}

export default NavbarComponent