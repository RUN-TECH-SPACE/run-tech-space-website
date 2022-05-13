import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

function Gallery() {
  const [thumbsSwiperMobile, setThumbsSwiperMobile] = useState(null);
  const [thumbsSwiperDesktop, setThumbsSwiperDesktop] = useState(null);

  return (
    <>
      <div className='container my-20'>
        <h2 className='heading2 mb-12'>Gallery</h2>

        {/* Mobile */}
        <div className='md:hidden'>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiperMobile && !thumbsSwiperMobile.destroyed
                  ? thumbsSwiperMobile
                  : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper2'
          >
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
            </SwiperSlide>
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiperMobile}
            loop={true}
            spaceBetween={10}
            slidesPerView={2}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className='mySwiper'
          >
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Desktop */}
        <div className='hidden md:block'>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiperDesktop && !thumbsSwiperDesktop.destroyed
                  ? thumbsSwiperDesktop
                  : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper2-desktop'
          >
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
            </SwiperSlide>
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiperDesktop}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            navigation={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className='mySwiper-desktop'
          >
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-1.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-2.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-3.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-4.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-5.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-6.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-7.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-8.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-9.jpg' />
            </SwiperSlide>
            <SwiperSlide>
              <img src='https://swiperjs.com/demos/images/nature-10.jpg' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Gallery;
