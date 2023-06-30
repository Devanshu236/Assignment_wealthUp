//import React, { useRef, useState } from "react";
// Import Swiper React components
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from '../page.module.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import pic3 from "../images/avatarimg.png"
import Image from 'next/image'

// import required modules
import { Pagination } from "swiper";

const Sliding = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className={styles.swiperSlide}>
       
        <Image 
      src={pic3}
      width={100}
      height={70}
      alt="Picture of the author"
      className={styles.ccc} 
    />
        <h1 className={styles.pp}>Devanshu Gupta<br></br>Journalist<br></br>The Print,Gurugram</h1>
        <p className={styles.swiper}>
        "I was afraid to learn about investments and savings<br></br>
         because it seemed to fly over my head, but Ankit was<br></br> extremely patient and walked me through everything... 
         I<br></br> now feel more confident to handle my own money{" "}
        </p>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="images/profile2.jpg" alt="profile" className={styles.ccc} />
        <h1 className={styles.pp}>Aman Sharma<br></br>Journalist<br></br>The Print,Gurugram</h1>
        <p className={styles.swiper}>
        "I was afraid to learn about investments and savings<br></br>
         because it seemed to fly over my head, but Ankit was<br></br> extremely patient and walked me through everything... 
         I<br></br> now feel more confident to handle my own money{""}
         </p>
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="images/profile3.jpg" alt="profile" className={styles.ccc} />
        <h1 className={styles.pp}>Aditi Jangir<br></br>Journalist<br></br>The Print,Gurugram</h1>
        <p className={styles.swiper}>
        "I was afraid to learn about investments and savings<br></br>
         because it seemed to fly over my head, but Ankit was<br></br> extremely patient and walked me through everything... 
         I<br></br> now feel more confident to handle my own money{" "}
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Sliding;