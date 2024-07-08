'use client'
import { registerUser } from '@/lib/features/user'
import { useAppDispatch } from '@/lib/hooks';
import Link from 'next/link'
import { useState } from 'react';

const page = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files.length > 0) {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    // console.log(formData);
    const result = await dispatch(registerUser(formDataToSend));
    if (registerUser.fulfilled.match(result)) {
      alert('User registered successfully');
    } else {
      alert('Registration failed');
    }
  };
  return (
    <section className=" bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center py-2 md:px-6 md:py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <ReigsterHeader/>
            <RegisterForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
          </div>
        </div>
      </div>
    </section>
  )
}

const ReigsterHeader = () =>{
  return (
    <h1 className="font-bold leading-tight tracking-tight text-gray-900 text-2xl dark:text-white">
    Sign Up
  </h1>
  )
}

const RegisterForm = ({formData,handleChange,handleSubmit}) => {
  return (
<form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="Jane"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
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
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Doe"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
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
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Kathmandu"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
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
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="24955225"
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
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
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@email.com"
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Password
                    </label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="grid-password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="******************"
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label
                        className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                        htmlFor="grid-image"
                    >
                        Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="grid-image"
                        className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white file:bg-gray-100 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-neutral-300"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign Up
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-4">
        Already have an account ?{" "}
        <Link
          href="/login"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Sign In
        </Link>
      </p>
        </form>
  )

}

export default page