import { SlArrowRight } from "react-icons/sl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useContext } from "react";
import { DATA } from "../../context/DataContext";
import { Link } from "react-router-dom";

function TopList() {
  const { sell, play, wishlist } = useContext(DATA);
  const title = ["Top Sellers", "Most Played", "Top Upcoming Wishlisted"];
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={0}
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
      className="mini-slider list-slider text-white !w-full !py-[64px] px-4"
    >
      {title.map((item, i) => (
        <SwiperSlide key={i} className="w-[300px] sm:!w-[33%]">
          <div>
            <h3 className="discover flex items-center text-[20px] font-bold px-4 mb-4 mr-4 cursor-pointer">
              {item}
              <SlArrowRight className="move-right text-[16px] ml-2 mt-1" />
            </h3>
            <ul>
              {(item === "Top Sellers"
                ? sell
                : item === "Most Played"
                ? play
                : wishlist
              )
                .slice(0, 5)
                .map((game, index) => {
                  return (
                    <li key={index} className="px-4 border-[#404044] border-r">
                      <Link to={`/game/${game.id}`}>
                        <div className="flex gap-2 p-[10px] rounded-md hover:bg-[#30303480]">
                          <img
                            className="!w-[48px] !h-[64px]"
                            src={game.keyImages[0].url}
                            alt={game.title}
                          />
                          <div className="overflow-hidden">
                            <h6 className="font-bold mb-2 whitespace-nowrap text-ellipsis overflow-hidden">
                              {game.title}
                            </h6>
                            <div className="text-[14px] font-medium flex items-center">
                              {game.price?.appliedRules?.[0] ? (
                                <span className="px-2 bg-[#26bbff] text-[12px] text-black font-semibold rounded-lg">
                                  -
                                  {
                                    game.price?.appliedRules?.[0]
                                      ?.discountSetting?.discountPercentage
                                  }
                                  %
                                </span>
                              ) : (
                                ""
                              )}

                              <div className=" flex flex-wrap justify-end">
                                {game.price ? (
                                  <span className={`${game.price?.price?.originalPrice === 0 ? "no-underline text-white" : "line-through"} text-[#ffffffa6] ml-2`}>
                                    { game.price?.price?.originalPrice === 0 ? "Free" : "$" + (game.price?.price?.originalPrice / 100).toFixed(2)}
                                  </span>
                                ) : (
                                  ""
                                )}
                                {
                                  game.price ? (<span className={`${game.price?.price?.discountPrice === 0 ? "hidden" : ""} ml-2`}>
                                    ${(game.price?.price?.discountPrice / 100).toFixed(2)}
                                  </span>) : "Free"
                                }
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TopList;
