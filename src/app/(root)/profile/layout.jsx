import Link from "next/link";

export default function ProfileLayout({
    children,
  }) {
    return (
      <div className="w-full px-5 flex flex-col gap-2 my-6 md:my-6 md:px-0 md:w-3/4  md:mx-auto">
        <h1 className='text-xl font-bold md:text-3xl'>My Account</h1>
        <div className="border-b border-gray-400">
        <ul className="w-full flex justify-center gap-6 p-3 text-gray-600 dark:text-gray-400 md:text-lg md:gap-10 font-semibold uppercase">
          <li><Link href='/profile' >Profile</Link></li>
          <li><Link href='/profile/orders' >My Orders</Link></li>
          <li><Link href='/services' >Edit Profile</Link></li>
        </ul>
        </div>
        {children}
      </div>
    )
}