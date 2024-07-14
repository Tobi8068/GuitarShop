'use client'
import { logoutUser } from '@/lib/features/user';
import { useAppDispatch } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import EditProfilePopup from '../PopupComponent/EditProfilePopup';
import ChangePasswordPopup from '../PopupComponent/ChangePasswordPopup';

const ProfileCollection = ({user}) => {
    const [editProfilePopup, setEditProfilePopup] = useState(false);
    const [passwordPopup, setPasswordPopup] = useState(false);
    const router = useRouter();
    const dispatch = useAppDispatch();
    // const user = useSelector((state) => state.user);
    const logout = async () => {
        const res = await dispatch(logoutUser())
        if (res.payload.success) {
            router.push('/login')
        }
    }

    return (
        <>
            <div className="w-full md:w-1/4 bg-inherit border mt-3 md:mt-0 p-3  grid place-items-center lg:block border-gray-200 rounded-lg shadow dark:border-gray-700">
                <div className="flex gap-2 md:flex-col  ">
                    <div  onClick={() => { setEditProfilePopup(true) }} className="p-2 flex text-sm font-medium text-gray-900 md:text-md cursor-pointer bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <div>Edit Profile</div>
                    </div>
                    <div onClick={() => { setPasswordPopup(true) }} className="p-2 flex ms-2 md:ms-0 text-sm font-medium  text-gray-900 md:text-md cursor-pointer bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <div>Edit Password</div>
                    </div>
                    <div onClick={logout} className="p-2 flex ms-2 text-sm md:ms-0 font-medium text-gray-900 md:text-md cursor-pointer bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <div >Logout</div>
                    </div>
                </div>
            </div>
            {editProfilePopup && <EditProfilePopup user={user} setEditProfilePopup={setEditProfilePopup} dispatch={dispatch} />}
            {passwordPopup && <ChangePasswordPopup setPasswordPopup={setPasswordPopup} dispatch={dispatch}/>}
            {/* <EditProfilePopup/> */}
        </>

    )
}


export default ProfileCollection