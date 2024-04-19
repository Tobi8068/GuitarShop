import { CiUser } from "react-icons/ci";
const Profile = () => {
  return (
    <div className="w-full max-w-sm bg-inherit border mt-1 py-4 border-gray-200 rounded-lg shadow dark:border-gray-700">
      <div className="flex flex-col items-center">
        <img className="w-32 h-32 mb-3 rounded-full shadow-lg" src="guitar.jpg" alt="Bonnie image" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bijan Pradhananga</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">Ghattekulo, Ktm</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">bijan2059@gmail.com</span>
        <div className="flex mt-4 md:mt-6">
        <div href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            My Cart: 2
          </div>
          <div href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            My WishList: 2
          </div>
        </div>
      </div>
    </div>

  )
}

export default Profile