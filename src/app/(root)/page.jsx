import ProductCardLoader from '@/components/Loader/ProductCardLoader/ProductCardLoader'
import ProductCard from '@/components/ProductCardComponent/ProductCard'
import ProductCard2 from '@/components/ProductCardComponent/ProductCard2'
import { ThemeSwitcher } from '@/components/UI/ThemeSwitch'

const page = () => {
  return (
    <>
    {/* Trending Component  */}
      <div className="w-full my-4 md:my-6 px-5  md:px-0 md:w-3/4 md:mx-auto">
        <h1 className='font-bold text-xl text-gray-600 dark:text-gray-300 md:text-2xl'>Trending</h1>
      </div>
      <div className="w-full md-2 md:mb-10 mt-1 px-5 grid grid-cols-2 gap-2 md:px-0 md:w-3/4 md:mx-auto lg:grid-cols-4 md:gap-4 ">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
     {/* Trending Component  */}
     {/* Deal of the day  */}
      <div className="w-full mt-4 md:my-6 px-5 md:px-0 md:w-3/4 md:mx-auto">
        <h1 className='font-bold text-xl text-gray-600 dark:text-gray-300 md:text-2xl'>Deal of the Day</h1>
      </div>
      <div className='w-full mt-3 px-5 flex flex-col gap-2 md:gap-3 md:px-0 md:w-3/4 md:mx-auto lg:flex-row'>
          <ProductCard2/>
          <ProductCard2/>
      </div>
      {/* Deal of the day  */}
    </>

  )
}

export default page