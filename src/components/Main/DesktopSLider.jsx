import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { sliderData } from "../../services/silderData";
import { IoIosAddCircleOutline } from "react-icons/io";

function DesktopSLider() {
  return (
    <Swiper
      cssMode={true}
      autoplay={{
        delay: 7000,
      }}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          const data = sliderData[index];
          if (!data) return "";
          return `<div class="${className} custom-pagination">
                    <div class="flex items-center relative !z-[3]">
                      <img src=${data.image} alt="${data.title}"/>
                      <span>${data.title}</span>
                    </div>
                    <div class="moving-overlay z-[1]"></div>
                </div>`;
        },
      }}
      modules={[Autoplay, Pagination]}
      className="desktop-slider"
    >
      {sliderData.map((item, i) => (
        <SwiperSlide
          key={i}
          className="text-white rounded-[16px] overflow-hidden cursor-pointer"
        >
          <div className="relative z-[2]">
            <img src={item.imagePc} alt={item.title} />
            <div className="linear-bg-right absolute w-[40%] h-full top-0 left-0"></div>
          </div>
          <div className="w-[400px] absolute bottom-0 left-0 sm:p-[35px] px-5 py-[25px] z-[2]">
            <div
              style={{ backgroundImage: `url(${item.logo})` }}
              className={`bg-no-repeat bg-contain w-[140px] h-[55px] sm:w-[180px] sm:h-[80px] mb-5`}
            ></div>
            <h6 className="text-[9px] sm:text-[12px] font-bold mb-[10px]">
              {item.time}
            </h6>
            <p className="mb-3 xxs:mb-[25px] text-[12px] sm:text-[16px] leading-[1.4] tracking-[.2px] sm:leading-[1.65]">
              {item.about}
            </p>
            <div>{item.cost}</div>
            <div className="flex items-center gap-4 mt-2 text-[15px] font-semibold">
              <button className="bg-white text-black px-[40px] py-3 rounded-lg">
                Play Now
              </button>
              <button className="flex items-center gap-3 pl-4 pr-5 py-3 rounded-lg hover:bg-[#ffffff23] trans">
                <IoIosAddCircleOutline /> Add to Wishlist
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default DesktopSLider;
