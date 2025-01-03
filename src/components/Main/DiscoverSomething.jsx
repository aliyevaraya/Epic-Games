import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SlArrowRight } from "react-icons/sl";
import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FAV } from "../../context/FavDataContext";

function DiscoverSomething({ data }) {
  const { fav, addToFav } = useContext(FAV);
  return (
    <div className="text-white px-4 pb-[64px] relative">
      <h3 className="discover md:absolute md:top-3 flex items-center text-[20px] font-bold mb-4 mr-4 cursor-pointer">
        {data.some((item) => item.offerType)
          ? "Top New Releases"
          : "Discover Something New"}
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
        {data &&
          data.map((game, index) => {
            const price = game.price?.price?.originalPrice ?? game.price;
            const discountedPrice = game.price?.price?.discountPrice;
            let discount = null;
            if (game.price?.appliedRules?.length) {
              discount =
                game.price?.appliedRules[0]?.discountSetting
                  ?.discountPercentage;
            }
            return (
              <SwiperSlide key={index} className="cursor-pointer">
                <Link to={`/game/${game.id}`}>
                  <div className="group">
                    <div className="relative">
                      <img
                        className="rounded-lg hover:opacity-[0.5] object-cover"
                        src={game.image ?? game.keyImages[2].url}
                        alt={game.title}
                      />
                      <div className="hoverLay after:hover:opacity-[1]"></div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        addToFav(
                          game.id,
                          game.keyImages[2].url,
                          game.title,
                          game.price?.appliedRules?.[0]?.discountSetting
                            ?.discountPercentage,
                          game.price?.price?.discountPrice,
                          game.price?.price?.originalPrice,
                          game.price?.appliedRules?.[0]?.endDate
                        );
                      }}
                      className="opacity-0 group-hover:opacity-[1] text-[24px] absolute top-2 right-2 trans"
                      title="Add to wishlist"
                    >
                      {fav.find((item) => item.id === game.id) ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="bg-black w-[22px] h-[22px] p-1 rounded-full border"
                          viewBox="-10 -10 468.8 468.8"
                        >
                          <path
                            fill="currentColor"
                            strokeWidth="10"
                            stroke="currentColor"
                            d="M142.8 323.85L35.7 216.75 0 252.45l142.8 142.8 306-306-35.7-35.7z"
                          ></path>
                        </svg>
                      ) : (
                        <IoMdAddCircle className="text-white border-2 bg-black text-[26px] rounded-full" />
                      )}
                    </button>
                    <span className="text-[12px] text-[#ffffffa6] inline-block mt-2">
                      Base Game
                    </span>
                    <h3 className="font-bold">{game.title}</h3>
                    <div className="flex items-center gap-2  mt-[10px]">
                      {
                        <span
                          className={`bg-[#26bbff] px-2 text-[12px] text-black rounded-xl ${
                            game.price?.appliedRules?.length
                              ? "block"
                              : "hidden"
                          }`}
                        >
                          {discount}%
                        </span>
                      }
                      <p
                        className={`text-[14px] opacity-[.8] ${
                          discount ? "line-through" : ""
                        }`}
                      >
                        {price > 100
                          ? `$${(price / 100).toFixed(2)}`
                          : price === "Free"
                          ? "Free"
                          : `$${price}`}
                      </p>
                      <p className="text-[14px]">
                        {discount &&
                          discountedPrice &&
                          "$" + (discountedPrice / 100).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default DiscoverSomething;
