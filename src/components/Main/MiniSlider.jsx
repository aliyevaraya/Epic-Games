import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function MiniSlider() {
  return (
    <div className="px-4 pb-[64px] relative">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={"20px"}
        pagination={{
          enabled: true,
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: false,
          },
        }}
        modules={[Pagination]}
        className="mySwiper !px-[15px]"
      >
        <SwiperSlide>
          <img
            className="rounded-[8px] overflow-hidden"
            src="images/fortnite.avif"
            alt="fortnite"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-[8px] overflow-hidden"
            src="images/starwars.webp"
            alt="starwars"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-[8px] overflow-hidden"
            src="images/rewards.avif"
            alt="reward"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MiniSlider;
