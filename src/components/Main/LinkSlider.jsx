import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { RiExternalLinkLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function LinkSlider() {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={"20px"}
      pagination={{
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
      className="mini-slider !px-[15px] lg:!px-0 "
    >
      <SwiperSlide>
        <div className="relative">
          <img
            className="rounded-[8px] overflow-hidden hover:opacity-[.9]"
            src="images/fortnite-link.webp"
            alt="fortnite"
          />
          <div className="hoverLay after:hover:opacity-[1]"></div>
        </div>
        <div className="text-white mt-5 pr-[24px]">
          <h4 className="text-[20px] mb-[10px] font-bold">Fortnite Quest</h4>
          <p className="text-[14px] text-[#ffffffa6] leading-[1.7] tracking-wider mb-[25px]">
            Play Fortnite for 15 minutes to earn the Mini Shield Potion Discord
            avatar decoration. See terms and conditions.
          </p>
          <Link className="py-2 px-4  flex items-center gap-1 bg-[#ffffff26] hover:bg-[#ffffff59] rounded-md font-bold w-fit">
            Join The Quest <RiExternalLinkLine className="text-[20px]" />
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="rounded-[8px] overflow-hidden hover:opacity-[.9]"
            src="images/rivals-link.avif"
            alt="starwars"
          />
          <div className="hoverLay after:hover:opacity-[1]"></div>
        </div>
        <div className="text-white mt-5 pr-[24px]">
          <h4 className="text-[20px] mb-[10px] font-bold">Fortnite</h4>
          <p className="text-[14px] text-[#ffffffa6] leading-[1.7] tracking-wider mb-[25px]">
            Achieve absolute domination of all realities with Doom 2099, part of
            the Marvel series!
          </p>
          <Link className="py-2 px-4  flex items-center gap-1 bg-[#ffffff26] hover:bg-[#ffffff59] rounded-md font-bold w-fit">
            See In Shop <RiExternalLinkLine className="text-[20px]" />
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img
            className="rounded-[8px] overflow-hidden hover:opacity-[.9]"
            src="images/ballistic-link.avif"
            alt="reward"
          />
          <div className="hoverLay after:hover:opacity-[1]"></div>
        </div>
        <div className="text-white mt-5 pr-[24px]">
          <h4 className="text-[20px] mb-[10px] font-bold">
            LEGO® Fortnite: Odyssey
          </h4>
          <p className="text-[14px] text-[#ffffffa6] leading-[1.7] tracking-wider mb-[25px]">
            Become a hero and fight back against the Storm King in an all-new
            adventure in the LEGO Fortnite universe.
          </p>
          <Link className="py-2 px-4  flex items-center gap-1 bg-[#ffffff26] hover:bg-[#ffffff59] rounded-md font-bold w-fit">
            Play For Free <RiExternalLinkLine className="text-[20px]" />
          </Link>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default LinkSlider;
