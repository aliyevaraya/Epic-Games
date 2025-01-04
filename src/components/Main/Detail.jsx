import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DATA } from "../../context/DataContext";
import { BASKET } from "../../context/BasketContext";
import DetailSlider from "./DetailSlider";
import { FAV } from "../../context/FavDataContext";

function Detail() {
  const { id } = useParams();
  const { basket, addToBasket } = useContext(BASKET);
  const { fav, addToFav } = useContext(FAV);
  const { sell, play, wishlist, newRelease } = useContext(DATA);
  const allGames = [ ...wishlist, ...newRelease, ...play, ...sell];
  const game = allGames.find((game) => game.id === id);

  if (game) {
    game.releaseDate = new Intl.DateTimeFormat("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date(game && game.releaseDate));
  }
  return (
    game && (
      <div className="bg-[#101014] text-white">
        <div className="containerr">
          <h1 className="text-[24px] font-bold pt-5">{game.title}</h1>
          <div className="flex items-center gap-5 mb-5">
            <button className="border-b-[3px] border-[#26bbff] py-2">
              Overview
            </button>
            <button className="opacity-[.6]">Achievements</button>
          </div>
          <div className="md:flex flex-row gap-6 relative">
            <DetailSlider allGames={allGames}/>
            <div className="md:sticky md:w-[400px] top-0 h-full">
              <div className="flex">
                <div className="w-full rounded-xl overflow-hidden">
                  <img
                    className="w-full h-full md:h-[200px] object-cover object-top"
                    src={game.keyImages[0].url}
                    alt="Slide 1"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-4">
                <div className="w-full border border-[#ffffff26] hover:border-[#fff] rounded-[10px] p-4 mt-4">
                  <img className="w-[50px]" src="/images/age.png" alt="age" />
                </div>
                <span className="text-[14px] font-semibold py-[3px] px-2 bg-[#ffffff26] rounded-[4px]">
                  Base Game
                </span>
                <span>
                  {game.price?.price?.originalPrice ? (game.price.price.originalPrice / 100).toFixed(2) + "$" : "Free"}
                </span>
                <div className="flex flex-col w-full gap-2 text-[14px] font-medium">
                  <button className="py-3 px-5 bg-[#26bbff] text-black rounded-[10px] hover:bg-[#61cdff]">
                    Buy Now
                  </button>
                  <div className="py-3 px-5 text-center bg-[#ffffff26] hover:bg-[#ffffff59] rounded-[10px]">
                    {basket.find((item) => item.id === game.id) ? (
                      <Link to="/cart">View in Cart</Link>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToBasket(
                            game.id,
                            game.keyImages[2].url,
                            game.title,
                            game.price?.appliedRules?.[0]?.discountSetting
                            ?.discountPercentage || 0,
                            game.price?.price?.discount || 0,
                            game.price?.price?.discountPrice || 0,
                            game.price?.price?.originalPrice || "Free",
                            game.price?.appliedRules?.[0]?.endDate
                          );
                        }}
                      >
                        Add to Cart
                      </button>
                    )}
                  </div>
                  <div className="py-3 px-5 text-center bg-[#ffffff26] hover:bg-[#ffffff59] rounded-[10px]">
                    {fav.find((item) => item.id === game.id) ? (
                      <Link to="/wishlist">View in Wishlist</Link>
                    ) : (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          addToFav(
                            game.id,
                            game.keyImages[2].url,
                            game.title,
                            game.price?.appliedRules?.[0]?.discountSetting
                            ?.discountPercentage || 0,
                            game.price?.price?.discount || 0,
                            game.price?.price?.discountPrice || 0,
                            game.price?.price?.originalPrice || "Free",
                            game.price?.appliedRules?.[0]?.endDate
                          );
                        }}
                      >
                        Add to Wishlist
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="py-5">
                <table className="detail w-full border-collapse mb-4">
                  <tbody className="text-[#ffffffa6]">
                    <tr>
                      <td className="py-[10px]">Epic Rewards</td>
                      <td className="flex items-center justify-end gap-2 text-white mt-2">
                        Earn 10% Back
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[20px] h-[20px]"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.3827 3.07523C10.2512 2.71987 9.74862 2.71987 9.61712 3.07523L8.69694 5.562C8.1595 7.01439 7.01439 8.1595 5.562 8.69694L3.07523 9.61712C2.71987 9.74862 2.71987 10.2512 3.07523 10.3827L5.562 11.3029C7.01439 11.8403 8.1595 12.9855 8.69694 14.4378L9.61712 16.9246C9.74862 17.28 10.2512 17.28 10.3827 16.9246L11.3029 14.4378C11.8403 12.9855 12.9855 11.8403 14.4378 11.3029L16.9246 10.3827C17.28 10.2512 17.28 9.74862 16.9246 9.61712L14.4378 8.69694C12.9855 8.1595 11.8403 7.01439 11.3029 5.562L10.3827 3.07523Z"
                            fill="#26bbff"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-[10px]">Refund Type</td>
                      <td className="flex items-center justify-end gap-2 text-white lowercase mt-2">
                        {game.refundType.replace(/_/g, "-")}
                        <svg
                          aria-hidden="true"
                          className="fill-white"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2.75-6.5A1.75 1.75 0 1 1 12 11.25a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-.337a3.251 3.251 0 1 0-4-3.163.75.75 0 0 0 1.5 0"></path>
                          <path
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-[10px]">Developer</td>
                      <td className="text-right text-white">
                        {game.developerDisplayName}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-[10px]">Publisher</td>
                      <td className="text-right text-white">
                        {game.publisherDisplayName}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-[10px]">Release Date</td>
                      <td className="text-right text-white">
                        {game.releaseDate}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-[10px]">Platform</td>
                      <td className="flex justify-end items-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[20px] h-[20px] mt-[10px]"
                          viewBox="0 0 512 512"
                        >
                          <title>Windows</title>
                          <g>
                            <path
                              fill="currentColor"
                              d="M0.175 256l-0.175-156.037 192-26.072v182.109zM224 69.241l255.936-37.241v224h-255.936zM479.999 288l-0.063 224-255.936-36.008v-187.992zM192 471.918l-191.844-26.297-0.010-157.621h191.854z"
                            ></path>
                          </g>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-between w-full text-[14px] font-medium mt-[30px]">
                  <button className="w-[49%] bg-[#ffffff26] flex gap-1 text-white justify-center py-1 rounded-md hover:bg-[#ffffff59]">
                    <svg
                      aria-hidden="true"
                      className="fill-white"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M16.5 3.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M12.25 6a4.25 4.25 0 1 1 .937 2.662l-3.655 1.993a4.25 4.25 0 0 1 0 2.69l3.655 1.993a4.25 4.25 0 1 1-.72 1.316l-3.654-1.992a4.25 4.25 0 1 1 0-5.323l3.654-1.994A4.3 4.3 0 0 1 12.25 6M5.5 9.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m11 6a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 1 0 0-5.5"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    Share
                  </button>
                  <button className="w-[49%] bg-[#ffffff26] flex gap-1 text-white justify-center py-1 rounded-md hover:bg-[#ffffff59]">
                    <svg
                      aria-hidden="true"
                      className="fill-white"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6.5 2.25A2.25 2.25 0 0 0 4.25 4.5V21a.75.75 0 0 0 1.5 0v-7.25H20a.75.75 0 0 0 .586-1.219L16.96 8l3.625-4.531A.75.75 0 0 0 20 2.25zM5.75 4.5a.75.75 0 0 1 .75-.75h11.94l-3.026 3.781a.75.75 0 0 0 0 .938l3.025 3.781H5.75z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                    Report
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[50px]">
            <h4 className="text-[20px] font-semibold mb-5">
              {game.title} System Requirements
            </h4>
            <div className=" w-full 2xl:w-[60%] bg-[#202024] text-white px-2 py-4 md:p-6 rounded-xl">
              <div>
                <span className="border-b-[2px] border-[#26bbff] py-1">
                  Windows
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-[40px]">
                <div>
                  <h2 className="font-semibold text-[14px] md:text-[16px]">
                    Minimum
                  </h2>
                  <ul className="mt-2">
                    <li className="flex flex-col gap-1 my-[13px]">
                      OS version
                      <span className="text-[#ffffffa6]">Windows 10</span>
                    </li>
                    <li className="flex flex-col gap-1 my-[13px]">
                      CPU
                      <span className="text-[#ffffffa6]">Intel Core i5</span>
                    </li>
                    <li className="flex flex-col gap-1 my-[13px]">
                      Memory <span className="text-[#ffffffa6]">4 GB</span>
                    </li>
                    <li className="flex flex-col gap-1 my-[13px]">
                      GPU
                      <span className="text-[#ffffffa6]">Nvidia GTX 660</span>
                    </li>
                    <li className="flex flex-col gap-1 my-[13px]">
                      Storage <span className="text-[#ffffffa6]">10 GB</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="font-semibold text-[14px] md:text-[16px]">
                    Recommended
                  </h2>
                  <ul className="mt-2">
                    <li className="flex flex-col gap-1 my-[13px]">
                      OS version
                      <span className="text-[#ffffffa6]">Windows 11</span>
                    </li>
                    <li className="flex flex-col gap-1 my-[13px]">
                      CPU
                      <span className="text-[#ffffffa6]">Intel Core i7</span>
                    </li>
                    <li className="flex flex-col gap-1 my-[13px]">
                      Memory <span className="text-[#ffffffa6]">6 GB</span>
                    </li>
                    <li className="flex flex-col gap-1 my-[13px]">
                      GPU
                      <span className="text-[#ffffffa6]">Nvidia GTX 1060</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6">
                <p className="flex flex-col my-5">
                  Login Accounts Required
                  <span className="text-[#ffffffa6]">Epic ID</span>
                </p>
                <p className="flex flex-col my-5">
                  Languages Supported
                  <span className="text-[#ffffffa6]">Audio: N/A</span>
                </p>
                <p className="flex flex-col my-5">
                  Text: English, Spanish (Spain), French, German, Chinese
                  (Simplified), Korean, Russian, Portuguese (Brazil), Japanese
                </p>
              </div>

              <div className="mt-[60px] text-sm text-[#ffffffa6]">
                <p>
                  © 2024 Headup GmbH, all rights reserved. © 2024 Sunny Peak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Detail;
