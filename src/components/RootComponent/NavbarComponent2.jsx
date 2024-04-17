import Link from 'next/link'
import React from 'react'

const NavbarComponent2 = () => {
  return (
    <div className='hidden w-full dark:bg-gray-900 dark:text-gray-300 md:flex justify-center items-center h-14 mb-1'>
      <ul className='h-full flex gap-8 md:text-lg'>
        <li className='h-full flex items-center border-b-2 border-transparent transition-colors duration-300 hover:border-blue-600 cursor-pointer'>
          <Link href='/'>Home</Link>
        </li>
        <li className='h-full flex items-center border-b-2 border-transparent transition-colors duration-300 hover:border-blue-600 cursor-pointer'>
          <Link href='/category'>About</Link>
        </li>
        <li className='h-full flex items-center border-b-2 border-transparent transition-colors duration-300 hover:border-blue-600 cursor-pointer'>
          <Link href='/category'>Contact</Link>
        </li>
        <li className='h-full flex items-center border-b-2 border-transparent transition-colors duration-300 hover:border-blue-600 cursor-pointer'>
          <Link href='/category'>Category</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavbarComponent2