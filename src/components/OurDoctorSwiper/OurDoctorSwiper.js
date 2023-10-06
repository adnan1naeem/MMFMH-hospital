import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import OurDoctors from "../OurDoctors/OurDoctors";
import { data } from "../../screens/AllDoctors/data";
function SliderDoctor() {
  const [isHovered, setIsHovered] = useState(false);
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        const { isEnd } = swiperRef.current.swiper;
        if (isEnd) {
          swiperRef.current.swiper.slideTo();
        } else {
          swiperRef.current.swiper.slideNext();
        }
      }
    }, 1000000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{ position: "relative", marginTop: "5%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <>
          <div
            style={{
              position: "absolute",
              top: "45%",
              right: "3%",
              zIndex: 99,
              fontSize: 20,
              cursor: "pointer",
              color: "blue",
            }}
            onClick={goNext}
          >
            <GrNext />
          </div>
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "3%",
              zIndex: 99,
              fontSize: 20,
              cursor: "pointer",
              color: "black",
            }}
            onClick={goPrev}
          >
            <GrPrevious style={{ color: "white" }} />
          </div>
        </>
      )}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        ref={swiperRef}
        speed={2000}
      >
        {data?.map((item, index) => (
          <SwiperSlide key={index}>
            <OurDoctors DoctorAllData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderDoctor;
