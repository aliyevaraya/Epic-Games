import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function MiniSlider() {
  return (
    <div className="px-4 lg:px-0 pb-[64px]">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={"20px"}
        pagination={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
            pagination: false,
          },
        }}
        modules={[Pagination]}
        className="mini-slider !px-[15px] lg:!px-0 "
      >
        <SwiperSlide>
          <img
            className="rounded-[8px] overflow-hidden hover:opacity-[.9]"
            src="images/fortnite.avif"
            alt="fortnite"
          />
          <div className="hoverLay after:hover:opacity-[1]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-[8px] overflow-hidden hover:opacity-[.9]"
            src="images/starwars.webp"
            alt="starwars"
          />
          <div className="hoverLay after:hover:opacity-[1]"></div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-[8px] overflow-hidden hover:opacity-[.9]"
            src="images/rewards.avif"
            alt="reward"
          />
          <div className="hoverLay after:hover:opacity-[1]"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MiniSlider;
