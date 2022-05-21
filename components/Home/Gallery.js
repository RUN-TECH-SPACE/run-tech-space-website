import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { base } from "../../util";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper";
import SkeletonLoader from "../SkeletonLoader";

function Gallery() {
  const [thumbsSwiperMobile, setThumbsSwiperMobile] = useState(null);
  const [thumbsSwiperDesktop, setThumbsSwiperDesktop] = useState(null);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    base("gallery")
      .select({ view: "Grid view" })
      .eachPage((records) => {
        setGallery(records[0].fields.Attachments);
      });
  }, []);

  return (
    <>
      <div className='container my-20' id='gallery'>
        <h2 className='heading2 mb-12'>Gallery</h2>

        {/* Mobile */}
        <div className='md:hidden'>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            centeredSlides={true}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiperMobile && !thumbsSwiperMobile.destroyed
                  ? thumbsSwiperMobile
                  : null,
            }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className='mySwiper2'
          >
            {gallery.length === 0 ? (
              <SkeletonLoader gallery />
            ) : (
              gallery.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image.url} className='object-cover' />
                </SwiperSlide>
              ))
            )}
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
            {gallery.length === 0 ? (
              <SkeletonLoader gallery />
            ) : (
              gallery &&
              gallery.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image.url} className='object-cover' />
                </SwiperSlide>
              ))
            )}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiperDesktop}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            // navigation={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs]}
            className='mySwiper-desktop'
          >
            {gallery &&
              gallery.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={image.url} className='object-cover' />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Gallery;
