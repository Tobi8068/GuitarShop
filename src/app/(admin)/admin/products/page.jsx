'use client'
import EditProductPopup from "@/components/Design/PopupComponent/EditProductPopup"
import EditProfilePopup from "@/components/Design/PopupComponent/EditProfilePopup"
import ProductPopup from "@/components/Design/PopupComponent/ProductPopup"
import brand, {fetchBrands} from "@/lib/features/brand"
import { fetchCategory } from "@/lib/features/category"
import product, { addProduct, deleteProduct, fetchProducts, fetchSingleProduct } from "@/lib/features/product"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect, useState } from "react"

const page = ({searchParams}) => {
    const dispatch = useAppDispatch()
    const products = useAppSelector((state) => state.product)
    const categories = useAppSelector((state)=>state.category)
    const brands = useAppSelector((state)=>state.brand)
    const [addPopup,setAddPopup] = useState(false)
    const [editPopup,setEditPopup] = useState(false)

    const handleSubmit = async (e,formData) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (let key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        const result = await dispatch(addProduct(formDataToSend));
        if (addProduct.fulfilled.match(result)) {
            setAddPopup(false)
            dispatch(fetchProducts({ url: `product?limit=8` }));
            alert('Product Added Successfully');
        } else {
            alert('Unexpected Error Occured');
        }
    };

    const handleDelete = async (id) =>{
        let confirm = window.confirm("Are you sure u want to delete this product?");
        if (confirm) {
            const result = await dispatch(deleteProduct(id));
            if (deleteProduct.fulfilled.match(result)) {
                dispatch(fetchProducts({ url: `product?limit=8` }));
                alert('Product Deleted Successfully');
              } else {
                alert('Unexpected Error Occured');
              }
        }
    }

    const handleEdit = async (id) =>{
        await dispatch(fetchSingleProduct(id))
        setEditPopup(true)
    }

    useEffect(() => {
        dispatch(fetchProducts({ url: `product?limit=8` }));
        dispatch(fetchCategory());
        dispatch(fetchBrands());
    }, [])
    return (
        <>
            <ProductHeader/>
            <div className="bg-gray-50 dark:bg-gray-800 rounded mb-4 p-5 flex gap-4">
                <ProductSearchBar />
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold md:font-bold p-2 rounded" 
                    onClick={()=>{setAddPopup(true)}}
                >
                    Add Product
                </button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <ProductsTable products={products} handleDelete={handleDelete} handleEdit={handleEdit} />
            </div>
            {addPopup && <ProductPopup handleSubmit={handleSubmit} categories={categories} brands={brands} setProductPopup={setAddPopup}/>}
            {editPopup && <EditProductPopup product={products.singleProductData} fetchProducts={fetchProducts} dispatch={dispatch} categories={categories} brands={brands} setProductPopup={setEditPopup}/>}
        </>
    )
}


const ProductHeader = () => {
    return (
        <div className='text-2xl font-bold mb-4'>
            Products
        </div>
    )
}


const ProductsTable = ({ products , handleDelete, handleEdit}) => {
    return (
        <>
            {products.isLoading ? (
                // Show loading indicator
                <div>Loading</div>
            ) : products.data.length === 0 ? (
                <div>No Products Found</div>
            ) : (
                // Render products
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border dark:border-gray-800">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Brand
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.data.map((product, index) => (
                            <tr
                                key={index}
                                className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    {product.product_name}
                                </th>
                                <td className="px-6 py-4">{product.brand_id.brand_name}</td>
                                <td className="px-6 py-4">{product.category_id.category_name}</td>
                                <td className="px-6 py-4">{product.price}</td>
                                <td className="px-6 py-4">{product.quantity}</td>
                                <td className="px-6 py-4">
                                    <img src={`http://localhost:3001/products/${product.product_image}`} className="aspect-square w-10 object-cover rounded" ></img>
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        href="#"
                                        className="font-medium text-red-500 hover:underline cursor-pointer mr-2"
                                        onClick={()=>{handleDelete(product._id)}}
                                    >
                                        Delete
                                    </span>
                                    <span
                                        href="#"
                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                                        onClick={()=>{handleEdit(product._id)}}
                                    >
                                        Edit
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}

const ProductSearchBar = () => {
    return (
        <div className="flex-1 ">
            <form className="w-full mx-auto">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border outline-none border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400 dark:focus:border-gray-400"
                        placeholder="Search Products"
                        required=""
                    />

                </div>
            </form>
        </div>
    )
}

export default page