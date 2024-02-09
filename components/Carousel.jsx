
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// ... rest of the component


const Carousel = ({ images }) => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      cssEase: "linear"
      
    };
  
     return (
        <div className="max-w-screen-md mx-auto">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="text-center">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className=" max-w-full mx-auto h-auto"
                />
              </div>
            ))}
          </Slider>
        </div>
      );
    };
  export default Carousel;