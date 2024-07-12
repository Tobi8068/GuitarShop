import { FaXmark } from 'react-icons/fa6';
const EditProfilePopup = ({ setEditProfilePopup }) => {
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-11/12 my-6 mx-auto md:w-96">
                <div className="border-0 rounded-t-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-900  dark:border-gray-700  outline-none focus:outline-none">
                    <EditProfileHeader setEditProfilePopup={setEditProfilePopup}/>
                    <EditProfileForm/>
                </div>
            </div>
        </div>
    )
}

const EditProfileHeader = ({setEditProfilePopup}) => {
    return (
        <div className="flex justify-between items-center p-4 border-b border-solid border-blueGray-200 dark:border-gray-800 rounded">
        <h3 className="text-xl font-semibold">
            Edit Profile
        </h3>
        <FaXmark className="font-bold text-500 text-xl cursor-pointer" onClick={() => setEditProfilePopup(false)} />
    </div>
    )
}

const EditProfileForm = () =>{
    return (
        <form className="relative flex-auto mt-4">
        <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                <label
                    className="block uppercase tracking-wide mt-3 md:mt-0 text-gray-900 dark:text-white text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                >
                    First Name
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="grid-first-name"
                    type="text"
                    name="first_name"

                    placeholder="Jane"
                />
            </div>
            <div className="w-full md:w-1/2 px-4">
                <label
                    className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                >
                    Last Name
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="grid-last-name"
                    type="text"
                    name="last_name"

                    placeholder="Doe"
                />
            </div>
        </div>
        <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                <label
                    className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                    htmlFor="grid-address"
                >
                    Address
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="grid-address"
                    type="text"
                    name="address"

                    placeholder="Kathmandu"
                />
            </div>
            <div className="w-full md:w-1/2 px-4">
                <label
                    className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                    htmlFor="grid-phone"
                >
                    Phone
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="grid-phone"
                    type="text"
                    name="phone"

                    placeholder="24955225"
                />
            </div>
        </div>
        <div className="flex flex-wrap mb-6">
            <div className="w-full px-4">
                <label
                    className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                    htmlFor="grid-email"
                >
                    Email
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    id="grid-email"
                    type="email"
                    name="email"

                    placeholder="name@email.com"
                    required
                />
            </div>
        </div>
        <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200  dark:border-gray-700 rounded-b">
            <button
                className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="submit">
                Submit
            </button>
        </div>

    </form>
    )
}

export default EditProfilePopup