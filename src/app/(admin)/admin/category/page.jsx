'use client'
import AddCategoryPopup from "@/components/Design/PopupComponent/AddCategoryPopup"
import EditCategoryPopup from "@/components/Design/PopupComponent/EditCategoryPopup"
import TableLoader from "@/components/Loader/TableLoader"
import { addCategory, deleteCategory, fetchCategory, fetchSingleCategory } from "@/lib/features/category"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect, useState } from "react"

const page = () => {
    const dispatch = useAppDispatch()
    const { searchData, searchLoading, searchError } = useAppSelector((state) => state.product);
    const categories = useAppSelector((state) => state.category)
    const [addPopup, setAddPopup] = useState(false)
    const [editPopup, setEditPopup] = useState(false)


    const handleSubmit = async (e, formData) => {
        e.preventDefault();
        const result = await dispatch(addCategory(formData));
        if (addCategory.fulfilled.match(result)) {
            setAddPopup(false)
            dispatch(fetchCategory());
            alert('Category Added Successfully');
        } else {
            alert('Unexpected Error Occured');
        }
    };

    const handleDelete = async (id) => {
        let confirm = window.confirm("Are you sure u want to delete this product?");
        if (confirm) {
            const result = await dispatch(deleteCategory(id));
            if (deleteCategory.fulfilled.match(result)) {
                dispatch(fetchCategory());
                alert('Category Deleted Successfully');
            } else {
                alert('Unexpected Error Occured');
            }
        }
    }

    const handleEdit = async (id) => {
        await dispatch(fetchSingleCategory(id))
        setEditPopup(true)
    }

    useEffect(() => {
        dispatch(fetchCategory());
    }, [])
    return (
        <>
            <CategoryHeader setAddPopup={setAddPopup}/>
            <div className="relative overflow-x-auto sm:rounded-lg">
                <CategoryTable categories={categories} handleDelete={handleDelete} handleEdit={handleEdit} searchData={searchData} searchLoading={searchLoading} searchError={searchError}
                />
            </div>
            {addPopup && <AddCategoryPopup handleSubmit={handleSubmit} setProductPopup={setAddPopup} />}
            {editPopup && <EditCategoryPopup category={categories.singleCategoryData} fetchCategory={fetchCategory} dispatch={dispatch} setProductPopup={setEditPopup} />}
        </>
    )
}


const CategoryHeader = ({setAddPopup}) => {
    return (

        <div className="bg-gray-50 dark:bg-gray-800 rounded mb-4 p-5 flex justify-between gap-4">
            <div className='text-2xl font-bold'>
                Categories
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold md:font-bold p-2 rounded"
                onClick={() => { setAddPopup(true) }}
            >
                Add Category
            </button>
        </div>
    )
}

const CategoryTable = ({ categories, handleDelete, handleEdit, searchLoading }) => {
    return (
        <>
            {categories.isLoading || searchLoading ? (
                // Show loading indicator
                <TableLoader />
            ) : (
                <>
                    {categories.data.length === 0 ? (
                        <div>No Category Found</div>
                    ) : (
                        // Render products
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border dark:border-gray-800">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">#</th>
                                    <th scope="col" className="px-6 py-3">Category Name</th>
                                    <th scope="col" className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.data.map((category, index) => (
                                    <tr
                                        key={index}
                                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                                    >
                                        <td className="px-6 py-4">{index + 1}</td>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {category.category_name}
                                        </th>
                                        <td className="px-6 py-4">
                                            <span
                                                className="font-medium text-red-500 hover:underline cursor-pointer mr-2"
                                                onClick={() => { handleDelete(category._id) }}
                                            >
                                                Delete
                                            </span>
                                            <span
                                                className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                                                onClick={() => { handleEdit(category._id) }}
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
            )}
        </>
    );
}

export default page