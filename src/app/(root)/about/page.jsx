import React from 'react'

const about = () => {
  return (
    <div className="w-full px-5 flex flex-col gap-2 my-6 md:my-6 md:px-0 md:w-3/4 lg:flex-row md:mx-auto">
      {/* about us text part  */}
      <div className='md:p-2 lg:p-3 text-justify'>
        <h1 className='text-2xl font-bold md:text-3xl'>About Us</h1>
        <p className='mt-2  '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda est molestiae voluptate quaerat similique accusantium dicta hic iusto molestias sed numquam maiores impedit omnis quia non inventore, saepe ipsa quo.
        </p>
        <p className='mt-2 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum fugiat nesciunt, consectetur nihil non illum recusandae consequatur eius sint molli
        </p>
        <h1 className='text-2xl mt-6 font-semibold'>Areas We Target</h1>
        <ul className="list-none mt-2 pr-3 pl-1 flex flex-col">
          <li className="flex mb-1">
            <span className="mr-2">●</span>
            <span>
              <span className='font-semibold mr-1'>Quality Instruments:</span> <br />
              Offering top-notch guitars crafted with premium materials for exceptional sound and durability.
            </span>
          </li>
          <li className="flex mb-1">
            <span className="mr-2">●</span>
            <span>
              <span className='font-semibold mr-1'>Extensive Variety:</span> <br />
              Providing a wide selection of guitars, from acoustic to electric, ensuring every guitarist finds their perfect match.
            </span>
          </li>
          <li className="flex mb-1">
            <span className="mr-2">●</span>
            <span>
              <span className='font-semibold mr-2'>Outstanding Customer Care:</span> <br />
              Delivering expert guidance and personalized support throughout the purchasing process, ensuring customer satisfaction and loyalty
            </span>
          </li>
        </ul>
        <p className='mt-4 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum fugiat nesciunt, consectetur illum recusandae consequatur eius sint molli
        </p>
      </div>
      {/* about us text part  */}
      {/* about us img part  */}
      <div className='w-full mt-4 p-2 md:mt-0 md:grid md:place-items-center'>
        <img src="/about.jpg" className='w-full aspect-square object-cover' />
      </div>
      {/* about us img part  */}
    </div>
  )
}

export default about