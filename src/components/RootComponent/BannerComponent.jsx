import Image from 'next/image'
 
const BannerComponent = () => {
  return (
    <div className='w-full px-5 mt-2 md:px-0 md:flex dark:bg-gray-900 md:justify-center'>
        <div className='w-full h-32 rounded bg-gray-200 md:w-3/4 md:h-80 lg:h-96'>
            <img src='/guitarBanner.jpg' className='w-full h-full object-cover rounded'/>
        </div>
    </div>
  )
}

export default BannerComponent