import ProductCardLoader from '@/components/Loader/ProductCardLoader/ProductCardLoader'
import ProductCard from '@/components/ProductCardComponent/ProductCard'
import ProductCard2 from '@/components/ProductCardComponent/ProductCard2'

const page = () => {
  return (
    <>
      <div className="w-full my-4 md:my-6 px-5  md:px-0 md:w-3/4 md:mx-auto">
        <h1 className='font-bold text-xl text-gray-600 dark:text-gray-300 md:text-2xl'>Trending</h1>
      </div>
      <div className="w-full md-2 md:mb-10 mt-1 px-5 grid grid-cols-2 gap-2 md:px-0 md:w-3/4 md:mx-auto lg:grid-cols-4 md:gap-4 ">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
      <div className="w-full my-4 md:my-6 px-5 md:px-0 md:w-3/4 md:mx-auto">
        <h1 className='font-bold text-xl text-gray-600 dark:text-gray-300 md:text-2xl'>Deal of the Day</h1>
      </div>
      <div className='w-full my-5 px-5  md:px-0 md:w-3/4 md:mx-auto'>
          <ProductCard2/>
      </div>
    </>

  )
}

export default page