'use client'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard2 from './ProductCard2';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

// custom next and previous buttons for slider 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <MdNavigateNext onClick={onClick} className='text-4xl absolute top-1/2 transform -translate-y-1/2 -right-5 cursor-pointer' />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <MdNavigateBefore onClick={onClick} className='text-4xl absolute top-1/2 transform -translate-y-1/2 -left-5 cursor-pointer' />
  );
}
// custom next and previous buttons for slider 

const ProductListSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // For desktop
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480, // For phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]

  };
  return (
    <>
      {/* Deal of the day  */}
      <Slider {...settings}>
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
        <ProductCard2 />
      </Slider>
      {/* Deal of the day  */}
    </>
  )
}

export default ProductListSlider