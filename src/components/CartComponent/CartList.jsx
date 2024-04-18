import React from 'react'

const CartList = () => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-3">
                            Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Remove
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <CartComponent/>
                    <CartComponent/>
                    <CartComponent/>
                </tbody>
            </table>
        </div>
    )
}

const CartComponent = () => {
    return (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-4 flex gap-4 items-center py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div className="w-1/3 aspect-square bg-gray-200">

                    </div>
                    <div className="flex-col items-center text-gray-700 dark:text-gray-400">
                        <h1 className="text-lg font-semibold mb-2">Martin</h1>
                        <h2 className="mb-1">Type: Acoustic</h2>
                        <h2 className="underline font-semibold">See Details</h2>
                    </div>
                </th>
                <td className="px-6 py-4">
                    3
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4 font-semibold text-red-500">
                    Remove
                </td>
            </tr>
    )
}

export default CartList