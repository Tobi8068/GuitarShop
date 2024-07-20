import { fetchSingleUserData, updateUser } from "@/lib/features/user";
import { useAppDispatch } from "@/lib/hooks";
import { FaCamera } from "react-icons/fa";
const ProfileCard = ({ user }) => {
  const dispatch = useAppDispatch();
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('image', file);
        const result = await dispatch(updateUser({id:user._id,formData}));
        if (updateUser.fulfilled.match(result)) {
          alert('Image updated successfully');
          dispatch(fetchSingleUserData(user._id));
        } else {
          alert('Unexpected Error Occured');
        }
    }
};
  return (
    <div className="w-full md:w-11/12 bg-inherit border  border-gray-200 rounded-lg shadow dark:border-gray-700">
      <div className="flex items-center gap-2 p-3 md:p-5 md:gap-5">
        <div className="relative group w-28 h-28 md:w-40 md:h-40 mb-3 rounded-full shadow-lg cursor-pointer">
          <input type="file" id="user_image" className="hidden"  accept="image/*"  onChange={handleImageChange}/>
          <img className="w-full h-full object-cover rounded-full" src={user.image ? `http://localhost:3001/users/${user.image}`: 'guitar.jpg'} alt="profile image" />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          <label htmlFor="user_image">
            <FaCamera className="absolute inset-0 m-auto w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" />
            </label>
        </div>
        <div className="flex flex-col p-2">
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white lg:text-xl">{user.first_name} {user.last_name}</h5>
          <span className="text-sm text-gray-500 dark:text-gray-400 lg:text-lg">{user.address}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 lg:text-lg">{user.phone}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400 lg:text-lg">{user.email}</span>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard