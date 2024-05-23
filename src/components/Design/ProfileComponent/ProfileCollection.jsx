'use client'
import { logoutUser } from '@/lib/features/user';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

const ProfileCollection = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const logout = async  () =>{
        const res = await dispatch(logoutUser())
        if (res.payload.success) {
            router.push('/login');
        }
    }
    return (
        <div className="w-full md:w-1/4 bg-inherit border mt-3 md:mt-0 p-3  grid place-items-center lg:block border-gray-200 rounded-lg shadow dark:border-gray-700">
            <div className="flex gap-2 md:flex-col  ">
                <div className="p-2 flex text-sm font-medium text-gray-900 md:text-md cursor-pointer bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <div>Cart: 2</div>
                </div>
                <div className="p-2 flex ms-2 md:ms-0 text-sm font-medium  text-gray-900 md:text-md cursor-pointer bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <div>Wishlist: 2</div>
                </div>
                <div className="p-2 flex ms-2 text-sm md:ms-0 font-medium text-gray-900 md:text-md cursor-pointer bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <div>Orders: 2</div>
                </div>
                <div className="p-2 flex ms-2 text-sm md:ms-0 font-medium text-gray-900 md:text-md cursor-pointer bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    <div onClick={logout}>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCollection