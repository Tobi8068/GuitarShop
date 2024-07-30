'use client'
import EditProductPopup from "@/components/Design/PopupComponent/EditProductPopup"
import ProductPopup from "@/components/Design/PopupComponent/ProductPopup"
import SearchProductComponent from "@/components/Design/ProductComponent/SearchProductComponent"
import PageNumber from "@/components/hero/PageNumber"
import TableLoader from "@/components/Loader/TableLoader"
import  { fetchBrands } from "@/lib/features/brand"
import { fetchCategory } from "@/lib/features/category"
import { addProduct, deleteProduct, fetchProducts, fetchSingleProduct } from "@/lib/features/product"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect, useState } from "react"

const page = ({ searchParams }) => {

    const dispatch = useAppDispatch()
    const products = useAppSelector((state) => state.product)
    const { searchData, searchLoading, searchError } = useAppSelector((state) => state.product);
    const categories = useAppSelector((state) => state.category)
    const brands = useAppSelector((state) => state.brand)
    const [addPopup, setAddPopup] = useState(false)
    const [editPopup, setEditPopup] = useState(false)

    let currPage = 1;
    if (searchParams.page > 1) {
        currPage = Number(searchParams.page)
    }

    let pgNos = []
    for (let index = currPage - 3; index < currPage + 3; index++) {
        if (index < 1) continue
        if (index > products.totalPages) break;
        pgNos.push(index)
    }

    const handleSubmit = async (e, formData) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        for (let key in formData) {
            formDataToSend.append(key, formData[key]);
        }
        const result = await dispatch(addProduct(formDataToSend));
        if (addProduct.fulfilled.match(result)) {
            setAddPopup(false)
            dispatch(fetchProducts({ url: `product?limit=8&page=${currPage}` }));
            alert('Product Added Successfully');
        } else {
            alert('Unexpected Error Occured');
        }
    };

    const handleDelete = async (id) => {
        let confirm = window.confirm("Are you sure u want to delete this product?");
        if (confirm) {
            const result = await dispatch(deleteProduct(id));
            if (deleteProduct.fulfilled.match(result)) {
                dispatch(fetchProducts({ url: `product?limit=8&page=${currPage}` }));
                alert('Product Deleted Successfully');
            } else {
                alert('Unexpected Error Occured');
            }
        }
    }

    const handleEdit = async (id) => {
        await dispatch(fetchSingleProduct(id))
        setEditPopup(true)
    }

    useEffect(() => {
        dispatch(fetchProducts({ url: `product?limit=8&page=${currPage}` }));
        dispatch(fetchCategory());
        dispatch(fetchBrands());
    }, [currPage])
    return (
        <>
            <ProductHeader />
            <div className="bg-gray-50 dark:bg-gray-800 rounded mb-4 p-5 flex gap-4">
                <SearchProductComponent />
                <button className="bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold md:font-bold p-2 rounded"
                    onClick={() => { setAddPopup(true) }}
                >
                    Add Product
                </button>
            </div>
            <div className="relative overflow-x-auto sm:rounded-lg">
                <ProductsTable products={products} handleDelete={handleDelete} handleEdit={handleEdit} searchData={searchData} searchLoading={searchLoading} searchError={searchError}
                    pgNos={pgNos} searchParams={searchParams}
                />
            </div>
            {addPopup && <ProductPopup handleSubmit={handleSubmit} categories={categories} brands={brands} setProductPopup={setAddPopup} />}
            {editPopup && <EditProductPopup product={products.singleProductData} currPage={currPage} fetchProducts={fetchProducts} dispatch={dispatch} categories={categories} brands={brands} setProductPopup={setEditPopup} />}
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


const ProductsTable = ({ products, handleDelete, handleEdit, searchData, searchLoading, searchError, pgNos, searchParams }) => {
    return (
        <>
            {products.isLoading || searchLoading ? (
                // Show loading indicator
                <TableLoader />
            ) : searchError ? (
                // Show error message
                <div>No Products Found</div>
            ) : (
                <>
                    {(searchData && searchData.length > 0) ? (
                        // Render search results
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border dark:border-gray-800">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Product name</th>
                                    <th scope="col" className="px-6 py-3">Brand</th>
                                    <th scope="col" className="px-6 py-3">Category</th>
                                    <th scope="col" className="px-6 py-3">Price</th>
                                    <th scope="col" className="px-6 py-3">Quantity</th>
                                    <th scope="col" className="px-6 py-3">Image</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchData.map((product, index) => (
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
                                            <img src={`http://localhost:3001/products/${product.product_image}`} className="aspect-square w-10 object-cover rounded" alt="product"></img>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className="font-medium text-red-500 hover:underline cursor-pointer mr-2"
                                                onClick={() => { handleDelete(product._id) }}
                                            >
                                                Delete
                                            </span>
                                            <span
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                                                onClick={() => { handleEdit(product._id) }}
                                            >
                                                Edit
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <>
                            {products.data.length === 0 ? (
                                <div>No Products Found</div>
                            ) : (
                                // Render products
                                <>
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border dark:border-gray-800">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">Product name</th>
                                                <th scope="col" className="px-6 py-3">Brand</th>
                                                <th scope="col" className="px-6 py-3">Category</th>
                                                <th scope="col" className="px-6 py-3">Price</th>
                                                <th scope="col" className="px-6 py-3">Quantity</th>
                                                <th scope="col" className="px-6 py-3">Image</th>
                                                <th scope="col" className="px-6 py-3">Action</th>
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
                                                        <img src={`http://localhost:3001/products/${product.product_image}`} className="aspect-square w-10 object-cover rounded" alt="product"></img>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <span
                                                            className="font-medium text-red-500 hover:underline cursor-pointer mr-2"
                                                            onClick={() => { handleDelete(product._id) }}
                                                        >
                                                            Delete
                                                        </span>
                                                        <span
                                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                                                            onClick={() => { handleEdit(product._id) }}
                                                        >
                                                            Edit
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div className='w-full font-semibold flex justify-center px-5 gap-2  mt-2 md:px-0 md:w-3/4 md:mx-auto md:gap-3 '>
                                        <PageNumber pgNos={pgNos} searchParams={searchParams} name='products' />
                                    </div>
                                </>

                            )}
                        </>
                    )}
                </>
            )}
        </>
    );
}

export default page