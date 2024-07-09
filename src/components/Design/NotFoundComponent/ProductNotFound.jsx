import Link from "next/link"

const ProductNotFound = () => {
    return (
        <div className="w-full flex flex-grow items-center justify-center px-5 ">
            <div className="rounded-lg aspect-square bg-white p-8 text-center shadow-xl grid items-center">
                <div>
                    <h1 className="mb-4 text-4xl font-bold">404</h1>
                    <p className="text-gray-600"> The product you are looking for could not be found.</p>
                    <Link href="/products" className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"> Go back to Products </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductNotFound