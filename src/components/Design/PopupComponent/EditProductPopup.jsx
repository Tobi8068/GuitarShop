'use client'
import { updateProduct } from '@/lib/features/product';
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

const EditProductPopup = ({ product, fetchProducts, dispatch, setProductPopup, categories, brands }) => {
    const [formData, setFormData] = useState({
        product_name: product.product_name,
        price: product.price,
        quantity: product.quantity,
        category_id: product.category_id._id,
        brand_id: product.brand_id._id,
        description: product.description,
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === 'file') {
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
        const result = await dispatch(updateProduct({ id: product._id, formData:formDataToSend }));
        if (updateProduct.fulfilled.match(result)) {
            setProductPopup(false);
            dispatch(fetchProducts({ url: 'product?limit=8' }));
            alert('Product Updated Successfully');
        } else {
            alert('Unexpected Error Occurred');
        }
    };

    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-11/12 my-6 mx-auto md:w-96 lg:w-1/2">
                <div className="border rounded shadow-lg relative flex flex-col w-full bg-white dark:bg-gray-900 dark:border-gray-500 outline-none focus:outline-none">
                    <ProductPopupHeader setProductPopup={setProductPopup} />
                    <ProductForm
                        categories={categories}
                        brands={brands}
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                </div>
            </div>
        </div>
    );
};

const ProductPopupHeader = ({ setProductPopup }) => {
    return (
        <div className="flex justify-between items-center p-4 border-b border-solid border-blueGray-200 dark:border-gray-600 rounded-t">
            <h3 className="text-xl font-semibold">Edit Product</h3>
            <FaXmark className="font-bold text-500 text-xl cursor-pointer" onClick={() => setProductPopup(false)} />
        </div>
    );
};

const ProductForm = ({ formData, handleChange, handleSubmit, categories, brands }) => {
    return (
        <form className="relative flex-auto mt-4" onSubmit={handleSubmit}>
            <div className="flex flex-wrap mb-4">
                <div className="w-full px-4">
                    <label
                        className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                        htmlFor="product_name"
                    >
                        Product Name
                    </label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="product_name"
                        type="text"
                        name="product_name"
                        value={formData.product_name}
                        onChange={handleChange}
                        placeholder="Enter Product Name"
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-4">
                <div className="w-full md:w-1/2 px-4 md:mb-0">
                    <label
                        className="block uppercase tracking-wide mt-3 md:mt-0 text-gray-900 dark:text-white text-xs font-bold mb-2"
                        htmlFor="price"
                    >
                        Price
                    </label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="price"
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter Price"
                        required
                    />
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <label
                        className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                        htmlFor="quantity"
                    >
                        Quantity
                    </label>
                    <input
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        id="quantity"
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Enter Quantity"
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-4">
                <div className="w-full md:w-1/2 px-4 md:mb-0">
                    <label
                        className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                        htmlFor="category_id"
                    >
                        Category
                    </label>
                    <select
                        id="category_id"
                        name="category_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.category_id}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Choose a category</option>
                        {categories.data.map((category) => (
                            <option key={category._id} value={category._id}>
                                {category.category_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-4">
                    <label
                        className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                        htmlFor="brand_id"
                    >
                        Brand
                    </label>
                    <select
                        id="brand_id"
                        name="brand_id"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={formData.brand_id}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Choose a brand</option>
                        {brands.data.map((brand) => (
                            <option key={brand._id} value={brand._id}>
                                {brand.brand_name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="flex flex-wrap mb-4">
                <div className="w-full px-4">
                    <label
                        className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Write the product description here"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap mb-4">
                <div className="w-full px-4">
                    <label
                        className="block uppercase tracking-wide text-gray-900 dark:text-white text-xs font-bold mb-2"
                        htmlFor="image"
                    >
                        Image
                    </label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white file:bg-gray-100 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-gray-700 dark:file:text-neutral-300"
                        onChange={handleChange}
                        accept="image/*"
                    />
                </div>
            </div>
            <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 dark:border-gray-700 rounded-b">
                <button
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default EditProductPopup;
