import React from 'react'
import TrustedCompany from './TrustedCompany'

import partnyor1 from '../assets/images/partnyorlar/Group 400.png'
import partnyor2 from '../assets/images/partnyorlar/Group 401.png'
import partnyor3 from '../assets/images/partnyorlar/Group 402.png'
import partnyor4 from '../assets/images/partnyorlar/Group 403.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// Import teleb olunan modullari daxil et
import { Autoplay } from 'swiper'

// import required modules

const TrustedCompanies = () => {
  return (
    <div>
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
    
        autoplay={{
          delay: 2500 ,
          disableOnInteraction: false ,
        }}

        modules={[Autoplay]}
        
        className="mySwiper"
      >
        <SwiperSlide> <TrustedCompany  sirketinlogosu={partnyor1}/> </SwiperSlide>
        <SwiperSlide> <TrustedCompany  sirketinlogosu={partnyor2}/> </SwiperSlide>
        <SwiperSlide> <TrustedCompany  sirketinlogosu={partnyor3}/></SwiperSlide>
        <SwiperSlide> <TrustedCompany  sirketinlogosu={partnyor4}/> </SwiperSlide>

        <SwiperSlide> <TrustedCompany  sirketinlogosu={partnyor1}/> </SwiperSlide>
        <SwiperSlide> <TrustedCompany  sirketinlogosu={partnyor2}/> </SwiperSlide>
        <SwiperSlide> <TrustedCompany  sirketinlogosu={partnyor3}/></SwiperSlide>
        <SwiperSlide> <TrustedCompany  sirketinlogosu={partnyor4}/> </SwiperSlide>
        
        
      </Swiper>

        
       
        
       
        </div>
  )
}

export default TrustedCompanies