import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { MdAddCircle } from "react-icons/md";
import { sliderData } from "../../services/silderData";
import DesktopSLider from "./DesktopSLider";

function BigSlider() {
  return (
    <>
      <div className="px-4 lg:px-0 pb-[64px] ">
        <div className="relative  block md:hidden">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={"10px"}
            pagination={{
              pagination: true,
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper !px-[15px] lg:!px-0 big-slider"
          >
            {sliderData.map((item, i) => (
              <SwiperSlide
                key={i}
                className="text-white rounded-[16px] overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <img src={item.image} alt={item.title} />
                  <div className="linear-bg absolute w-full h-[80%] bottom-0 left-0"></div>
                </div>
                <div className="absolute top-[10px] right-[10px]">
                  <MdAddCircle className="fill-black w-[30px] h-[34px] rounded-[50%]" />
                </div>
                <div className="sm:max-w-[360px] absolute bottom-0 left-0 sm:p-[35px] px-5 py-[25px]">
                  <div
                    style={{ backgroundImage: `url(${item.logo})` }}
                    className={`bg-no-repeat bg-contain w-[140px] h-[55px] sm:w-[180px] sm:h-[80px] mb-5`}
                  ></div>
                  <h6 className="text-[9px] sm:text-[12px] font-bold mb-[10px]">
                    {item.time}
                  </h6>
                  <p className="mb-3 xxs:mb-[25px] text-[12px] sm:text-[16px] leading-[1.4] tracking-[.2px] font-semibold sm:leading-[1.65]">
                    {item.about}
                  </p>
                  <div>{item.cost}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:block">
          <DesktopSLider />
        </div>
      </div>
    </>
  );
}

export default BigSlider;
