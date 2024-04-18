
import Link from "next/link";
import { ImCross } from "react-icons/im";
import { ThemeSwitcher } from "../UI/ThemeSwitch";
const SideBarComponent = ({ isSidebar, setIsSidebar }) => {
  return (
    isSidebar ? (
      <div className="w-5/6 h-full p-3 bg-white dark:bg-inherit fixed top-0 z-20 border-r border-gray-300 transform transition-transform duration-300 ease-in-out">
        <div className='p-3 flex justify-between items-center dark:text-gray-300 border-b border-gray-300'>
          <h1 className='text-xl font-semibold'>Menu</h1>
          <ImCross onClick={() => setIsSidebar(false)} className="text-sm cursor-pointer" />
        </div>
        <ul className="flex flex-col gap-3 mt-3 p-3 text-gray-600 dark:text-gray-400 text-lg font-semibold">
          <li><Link href='/' onClick={() => setIsSidebar(false)} >Home</Link></li>
          <li><Link href='/about' onClick={() => setIsSidebar(false)} >About</Link></li>
          <li><Link href='/' onClick={() => setIsSidebar(false)} >Services</Link></li>
          <li><Link href='/category' onClick={() => setIsSidebar(false)} >Category</Link></li>
          <li className="flex items-center gap-2">
            Mode:
            <span className="text-2xl"><ThemeSwitcher /></span>
          </li>
        </ul>
      </div>
    ) : null
  )
}

export default SideBarComponent