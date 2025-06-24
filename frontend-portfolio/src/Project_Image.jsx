import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./project_image.css"; 

import b1 from './assets/b1.png'
import b2 from './assets/b2.png'
import b3 from './assets/b3.png'
import b4 from './assets/b4.png'
import b5 from './assets/b5.png'
import b6 from './assets/b6.png'
import b7 from './assets/b7.png'
const ImageSlider = () => {
  return (
    
    <div className="container-fluid d-flex justify-content-center align-items-center" data-aos="zoom-in"  data-aos-delay="30"
    data-aos-duration="1500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide-custom">
          <img src={b1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={b2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={b3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={b4} alt="Slide 4" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={b5} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={b6} alt="Slide 5" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-custom">
          <img src={b7} alt="Slide 5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ImageSlider;
