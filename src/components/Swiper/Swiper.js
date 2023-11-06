import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import slider_1 from "../../Asset/main-2.jpg";
function Slider() {
  const slider = [slider_1];
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
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      style={{ position: "relative", marginTop: "1%" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <>
          <div
            // className="swiper-button-next"
            style={{
              position: "absolute",
              top: "45%",
              right: "3%",
              zIndex: 99,
              fontSize: 30,
              cursor: "pointer",
              color: "blue", // Add this line
            }}
            onClick={goNext}
          >
            {/* <GrNext /> */}
          </div>
          <div
            // className="swiper-button-prev"
            style={{
              position: "absolute",
              top: "45%",
              left: "3%",
              zIndex: 99,
              fontSize: 30,
              cursor: "pointer",
              color: "black", // Add this line
            }}
            onClick={goPrev}
          ></div>
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
      >
        {slider.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              style={{ width: "100%" }}
              src={item}
              alt={`Slider ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
