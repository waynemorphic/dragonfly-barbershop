import barbercut from "../../assets/barbercut.png";
import shop from "../../assets/shop.jpg";

// Swiper js imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Navigation, FreeMode, Autoplay } from "swiper";

import "./ImagesCarousel.css";

export default function ImagesCarousel() {
  return (
    <Swiper
      effect={"cube"}
      slidesPerView = {1}      
      loop = {true}
      grabCursor={true}
      cubeEffect = {{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }}
      freeMode = {true}
      autoplay = {{delay: 2000}}
      navigation = {true}
      pagination = {{clickable: true}}
      modules={[EffectCube, Pagination, Navigation, FreeMode, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
        className="carousel-images"
          src={barbercut}
          alt="barber shop image 1"
        />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img className="carousel-images"
          src={shop}
          alt="barber shop image 1"
        />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img
        className="carousel-images"
          src={barbercut}
          alt="barber shop image 1"
        />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img className="carousel-images"
          src={shop}
          alt="barber shop image 1"
        />{" "}
      </SwiperSlide>
    </Swiper>   
  );
}
