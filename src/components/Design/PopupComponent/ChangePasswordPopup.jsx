'use client'
import { changePassword } from '@/lib/features/user';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

const ChangePasswordPopup = ({user,dispatch,setPasswordPopup}) => {
    const [formData, setFormData] = useState({
        oldPassword:'',
        newPassword:'',
        confirmPassword:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(changePassword({id:user._id,formData}));
        if (result.payload.success) {
            alert('Password changed successfully');
            setPasswordPopup(false);
        } else {
            alert(result.payload.message);
        }
      };
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-11/12 my-6 mx-auto md:w-96">
                <div className="border-0 rounded-t-lg shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-900  dark:border-gray-700  outline-none focus:outline-none">
                    <Header setPasswordPopup={setPasswordPopup} />
                <Form data={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
                </div>
            </div>
        </div>
    )
}

const Header = ({setPasswordPopup}) => {
    return (
        <div className="flex justify-between items-center p-4 border-b border-solid border-blueGray-200 dark:border-gray-800 rounded">
        <h3 className="text-xl font-semibold">
            Change Password
        </h3>
        <FaXmark className="font-bold text-500 text-xl cursor-pointer" onClick={() => setPasswordPopup(false)} />
    </div>
    )
}

const Form = ({data,handleChange,handleSubmit}) =>{
    return (
        <form className="relative flex-auto mt-4" onSubmit={handleSubmit}>
        <div className="flex flex-wrap mb-6">
            <div className="w-full px-4">
                <label
                    className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                >
                    Current Password
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    name="oldPassword"
                    placeholder="******************"
                    required
                    value={data.oldPassword} onChange={handleChange}
                />
            </div>
        </div>
        <div className="flex flex-wrap mb-6">
            <div className="w-full px-4">
                <label
                    className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                >
                    New Password
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    name="newPassword"
                    placeholder="******************"
                    required
                    value={data.newPassword} onChange={handleChange}
                />
            </div>
        </div>
        <div className="flex flex-wrap mb-6">
            <div className="w-full px-4">
                <label
                    className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                >
                    Confirm Password
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type="password"
                    name="confirmPassword"
                    placeholder="******************"
                    required
                    value={data.confirmPassword} onChange={handleChange}
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

export default ChangePasswordPopup