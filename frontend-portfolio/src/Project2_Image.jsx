import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./project_image.css"; 
import h1 from './assets/h1.png'
import h2 from './assets/h2.png'
import h3 from './assets/h3.png'
import h4 from './assets/h4.png'
import h5 from './assets/h5.png'
import h6 from './assets/h6.png'
import h7 from './assets/h7.png'
import h8 from './assets/h8.png'
import h9 from './assets/h9.png'
import h10 from './assets/h10.png'
import './projects.css'
const Project2_Image=()=>{
    return(
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
                  <img src={h1} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom">
                  <img src={h2} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom">
                  <img src={h3} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom">
                  <img src={h4} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom">
                  <img src={h5} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom">
                  <img src={h6} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom">
                  <img src={h7} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom">
                  <img src={h8} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom">
                  <img src={h9} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom">
                  <img src={h10} alt="Slide 1" />
                </SwiperSlide>
        </Swiper>
        </div>
    )
}
export default Project2_Image