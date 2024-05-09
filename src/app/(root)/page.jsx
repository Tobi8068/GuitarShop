'use client'
import ProductCard from '@/components/Design/ProductComponent/ProductCard'
import ProductListSlider from '@/components/Design/ProductComponent/ProductListSlider'
import BannerComponent from '@/components/RootComponent/BannerComponent'
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { fetchProducts, fetchTopRatedProduct } from '@/lib/features/product';
import { useEffect } from 'react';
import ProductCardLoader from '@/components/Loader/ProductCardLoader/ProductCardLoader';

const page = () => {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.product)
  useEffect(() => {
    dispatch(fetchProducts({ url: `product` }))
    dispatch(fetchTopRatedProduct())
  }, [])

  return (
    <>
      <BannerComponent />
      {/* Trending Component  */}
      <div className="w-full my-4 md:my-6 px-5  md:px-0 md:w-3/4 md:mx-auto">
        <h1 className='font-bold text-xl text-gray-600 dark:text-gray-300 md:text-2xl'>Trending</h1>
      </div>
      <div className="w-full md-2 md:mb-10 mt-1 px-5 grid grid-cols-2 gap-2 md:px-0 md:w-3/4 md:mx-auto lg:grid-cols-4 md:gap-4 ">
        {products.isLoading ? (
          // Show loading indicator
          <ProductCardLoader count={4} />
        ) : (
          // Render products
          products.topRated.map((product, index) => (
            <ProductCard key={product._id} product={product} />
          ))
        )}
      </div>
      {/* Trending Component  */}
      {/* Deal of the day  */}
      <div className="w-full mt-4 md:my-6 px-5 md:px-0 md:w-3/4 md:mx-auto">
        <h1 className='font-bold text-xl text-gray-600 dark:text-gray-300 md:text-2xl'>Deal of the Day</h1>
      </div>
      <div className="w-full mt-3 px-5 md:px-3  md:w-3/4 md:mx-auto">
        <ProductListSlider products={products} />    
      </div>
      {/* Deal of the day  */}
    </>

  )
}

export default page