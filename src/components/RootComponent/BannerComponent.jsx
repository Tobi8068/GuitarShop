import Image from 'next/image'
 
const BannerComponent = () => {
  return (
    <div className='w-full px-5 mt-2 md:px-0 md:flex dark:bg-gray-900 md:justify-center '>
        <div className='w-full h-32 rounded bg-gray-200 md:w-3/4 md:h-80 lg:h-96 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>
            <img src='/guitarBanner.jpg' className='w-full h-full object-cover rounded'/>
        </div>
    </div>
  )
}

export default BannerComponent