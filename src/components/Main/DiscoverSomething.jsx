import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SlArrowRight } from "react-icons/sl";
import { IoMdAddCircle } from "react-icons/io";

function DiscoverSomething() {
  const games = [
    {
      title: "Marvel Rivals",
      price: "Free",
      image: "images/marvel-rivals-mobil.avif",
    },
    {
      title: "Farming Simulator 25",
      price: "$36.49",
      image: "images/farming-simulator.avif",
    },
    {
      title: "ReMix",
      price: "$1.61",
      discount: "-40%",
      image: "images/remix-bip.avif",
    },
    {
      title: "Teenage Mutant Ninja Turtles",
      price: "$14.99",
      image: "images/teenage-mutant-ninja-turtles-splintered-fate.avif",
    },
    {
      title: "Necroking",
      price: "$3.29",
      image: "images/necroking.avif",
    },
    {
      title: "Marvel Rivals",
      price: "Free",
      image: "images/marvel-rivals-mobil.avif",
    },
    {
      title: "Farming Simulator 25",
      price: "$36.49",
      image: "images/farming-simulator.avif",
    },
    {
      title: "ReMix",
      price: "$1.61",
      discount: "-40%",
      image: "images/remix-bip.avif",
    },
    {
      title: "Teenage Mutant Ninja Turtles",
      price: "$14.99",
      image: "images/teenage-mutant-ninja-turtles-splintered-fate.avif",
    },
    {
      title: "Necroking",
      price: "$3.29",
      image: "images/necroking.avif",
    },
  ];
  return (
    <div className="text-white px-4 pb-[64px]">
      <h3 className="discover flex items-center text-[20px] font-bold mb-4 mr-4 cursor-pointer">
        Discover Something New{" "}
        <SlArrowRight className="move-right text-[16px] ml-2 mt-1" />
      </h3>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        slidesPerView={"auto"}
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="discover-slider"
      >
        {games.map((game, index) => (
          <SwiperSlide key={index} className="cursor-pointer">
            <div className="group">
              <div className="relative">
                <img
                  className="rounded-lg hover:opacity-[0.5]"
                  src={game.image}
                  alt={game.title}
                />
                <div className="hoverLay after:hover:opacity-[1]"></div>
              </div>
              <button
                className="opacity-0 group-hover:opacity-[1] text-[24px] absolute top-2 right-2 trans"
                title="Add to wishlist"
              >
                <IoMdAddCircle className="text-black" />
              </button>
              <span className="text-[12px] text-[#ffffffa6] inline-block mt-2">
                Base Game
              </span>
              <h3 className="font-bold">{game.title}</h3>
              <div className="flex items-center gap-2  mt-[10px]">
                {game.discount && (
                  <span className="bg-[#26bbff] px-2 text-[12px] text-black rounded-xl">
                    {game.discount}
                  </span>
                )}
                <p className="text-[14px]">{game.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DiscoverSomething;
