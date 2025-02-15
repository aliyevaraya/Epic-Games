import { useContext, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { MdKeyboardArrowUp, MdFilterList } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { FAV } from "../../context/FavDataContext";
import { BASKET } from "../../context/BasketContext";
import { Cookies } from "react-cookie";

const Wishlist = () => {
  const { fav, setFav, addToFav } = useContext(FAV);
  const { basket, setBasket, addToBasket } = useContext(BASKET);
  const location = useLocation();
  const currentPath = location.pathname.split("/")[1];
  let data = currentPath === "wishlist" ? fav : basket;

  data.length &&
    data?.map((game) => {
      game.endSale = game.endSale
        ? new Intl.DateTimeFormat("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit",
          }).format(new Date(game.endSale))
        : "";
    });

  const filters = [
    {
      filter: "Events",
      subFilter: ["Holiday Sale"],
    },
    {
      filter: "Genre",
      subFilter: [
        "Adventure",
        "Action",
        "Indie",
        "Platformer",
        "Shooter",
        "Simulation",
      ],
    },
    {
      filter: "Features",
      subFilter: [
        "Single Player",
        "Controller Support",
        "Co-op",
        "Multiplayer",
      ],
    },
    {
      filter: "Platform",
      subFilter: ["Windows"],
    },
  ];
  const options = [
    "Recently added",
    "Alphabetical",
    "Price: Low to High",
    "Price: High to Low",
  ];
  const [selectedOption, setSelectedOption] = useState("On Sale");
  const [selectedTags, setSelectedTags] = useState([]);
  const [openFilters, setOpenFilters] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mobFilter, setMobFilter] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const handleToggleFilter = (index) => {
    setOpenFilters((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleTagFilter = (filter) => {
    setSelectedTags((prev) =>
      prev.includes(filter)
        ? prev.filter((t) => t !== filter)
        : [...prev, filter]
    );
  };

  const filteredData = data.filter((game) =>
    selectedTags.length === 0
      ? true
      : selectedTags.every((selectedTag) =>
          game.tags?.some((tag) => tag.name === selectedTag)
        )
  );

  const sortedData =
    selectedOption === "Price: Low to High"
      ? [...filteredData].sort((a, b) => a.discountPrice - b.discountPrice)
      : selectedOption === "Price: High to Low"
      ? [...filteredData].sort((a, b) => b.discountPrice - a.discountPrice)
      : selectedOption === "Alphabetical"
      ? [...filteredData].sort((a, b) => a.title.localeCompare(b.title))
      : selectedOption === "Recently added"
      ? [...filteredData].sort(
          (a, b) => new Date(b.addedAt) - new Date(a.addedAt)
        )
      : filteredData;

  return (
    <div className="bg-[#121212] text-white pb-[60px]">
      <div className="containerr">
        <div className="pb-6 lg:flex lg:flex-row-reverse justify-between items-center">
          <div className="flex flex-col lg:flex-row gap-3 mb-5 lg:mb-0 pb-5 lg:pb-0 border-b lg:border-0 border-b-[#ffffff1a]">
            <a href="#" className="group flex items-center gap-3">
              <span className="group-hover:underline flex items-center gap-1 font-medium">
                Epic Rewards <FiExternalLink />
              </span>
              <span className="bg-[#202020] px-[15px] py-[5px] rounded-full text-[14px] font-bold border border-[#f5f5f599] group-hover:border-white">
                $0.00
              </span>
            </a>
            <a href="#" className="group flex items-center gap-3">
              <span className="group-hover:underline flex items-center gap-1 font-medium">
                Epic Wallet <FiExternalLink />
              </span>
              <span className="bg-[#202020] px-[15px] py-[5px] rounded-full text-[14px] font-bold border border-[#f5f5f599] group-hover:border-white">
                $0.00
              </span>
            </a>
          </div>
          <h1 className="text-[40px] font-bold">
            {currentPath === "wishlist" ? "Your Wishlist" : "Your Cart"}
          </h1>
        </div>
        {data.length > 0 ? (
          <div
            className={`lg:flex ${
              currentPath === "wishlist"
                ? "items-baseline gap-[30px]"
                : "gap-[36px]"
            }`}
          >
            <div className=" w-full lg:w-[calc(100%-300px)]">
              {currentPath === "wishlist" && (
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <span className="text-[#ffffffa6] mr-3">Sort by:</span>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="relative"
                    >
                      <span className="flex items-center gap-1">
                        {selectedOption}
                        <MdKeyboardArrowUp
                          className={`[text-[20px] trans ${
                            isDropdownOpen ? "rotate-0" : "rotate-180"
                          }`}
                        />
                      </span>
                      {isDropdownOpen && (
                        <ul className="absolute left-0 p-1 bg-[#303034] text-white text-left rounded-xl leading-[1.3]">
                          {options.map((option, index) => (
                            <li
                              key={index}
                              onClick={() => handleOptionClick(option)}
                              className="py-[10px] px-3 hover:bg-[#ffffff26] whitespace-nowrap rounded-lg cursor-pointer"
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      )}
                    </button>
                  </div>
                  <div onClick={() => setMobFilter(!mobFilter)} className="lg:hidden flex items-center gap-1 font-medium bg-[#ffffff26] p-1 px-2 rounded-md hover:bg-[#f0eded59] cursor-pointer">
                    Filters <MdFilterList />
                  </div>
                </div>
              )}
              <div>
                {sortedData.length > 0 ? (
                  sortedData.map((item, i) => (
                    <div
                      key={i}
                      className="bg-[#202024] p-4 rounded-lg flex gap-4 mb-4"
                    >
                      <Link to={`/game/${item.id}`}>
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-[60px] h-[70px] object-cover rounded-md"
                        />
                      </Link>
                      <div className="flex flex-col justify-between w-full overflow-hidden">
                        <div className="flex flex-col md:flex-row md:justify-between">
                          <div>
                            <span className="bg-[#ffffff26] px-2 py-1 inline-block text-xs font-medium rounded-md mb-2">
                              Base Game
                            </span>
                            <Link to={`/game/${item.id}`}>
                              <h2 className="text-[20px] font-bold truncate md:whitespace-normal hover:underline">
                                {item.title}
                              </h2>
                            </Link>
                          </div>
                          <div>
                            <div className="flex items-center justify-between xxs:justify-start md:justify-between gap-2 mt-5 mb-[10px]">
                              {item.discountPerc ? (
                                <span className="bg-[#26bbff] text-black text-[12px] font-medium px-1 rounded-lg">
                                  -{item.discountPerc}%
                                </span>
                              ) : (
                                ""
                              )}
                              <div className="flex flex-col xxs:flex-row xxs:justify-between xxs:items-center xxs:gap-2">
                                {item.price !== "Free" ? (
                                  <span
                                    className={`${
                                      item.discountPrice === item.price
                                        ? "no-underline	text-white font-bold"
                                        : "line-through"
                                    } text-[14px] text-[#ffffffa6]`}
                                  >
                                    ${(item.price / 100).toFixed(2)}
                                  </span>
                                ) : (
                                  "Free"
                                )}
                                {item.discountPrice ? (
                                  <span
                                    className={`text-white font-bold ${
                                      item.discountPrice === item.price
                                        ? "hidden"
                                        : "block"
                                    }`}
                                  >
                                    ${(item.discountPrice / 100).toFixed(2)}
                                  </span>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            {item.endSale ? (
                              <p className="text-[#ffffffa6] text-[12px]">
                                Sale ends {item.endSale}
                              </p>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[20px] h-[20px]"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.3827 3.07523C10.2512 2.71987 9.74862 2.71987 9.61712 3.07523L8.69694 5.562C8.1595 7.01439 7.01439 8.1595 5.562 8.69694L3.07523 9.61712C2.71987 9.74862 2.71987 10.2512 3.07523 10.3827L5.562 11.3029C7.01439 11.8403 8.1595 12.9855 8.69694 14.4378L9.61712 16.9246C9.74862 17.28 10.2512 17.28 10.3827 16.9246L11.3029 14.4378C11.8403 12.9855 12.9855 11.8403 14.4378 11.3029L16.9246 10.3827C17.28 10.2512 17.28 9.74862 16.9246 9.61712L14.4378 8.69694C12.9855 8.1595 11.8403 7.01439 11.3029 5.562L10.3827 3.07523Z"
                              fill="#e3d669"
                            ></path>
                          </svg>
                          <span className="text-sm mt-1 text-linear leading-[1.7]">
                            Earn a boosted 10% back in Epic Rewards, offer ends
                            Jan 9.
                          </span>
                        </div>
                        <div className="flex flex-col justify-end xxs:flex-row gap-5 text-[14px] mt-5 font-semibold ">
                          <button
                            onClick={() => {
                              if (currentPath === "wishlist") {
                                const updatedFav = fav.filter(
                                  (game) => game.id !== item.id
                                );
                                setFav(updatedFav);
                                const cookie = new Cookies();
                                cookie.set("favorite", updatedFav);
                              } else {
                                const updatedBasket = basket.filter(
                                  (game) => game.id !== item.id
                                );
                                setBasket(updatedBasket);
                                const cookie = new Cookies();
                                cookie.set("basket", updatedBasket);
                              }
                            }}
                            className="text-sm text-[#ffffffa6] hover:text-white"
                          >
                            Remove
                          </button>
                          <div
                            className={`${
                              currentPath === "wishlist"
                                ? "bg-[#26bbff] hover:bg-[#61cdff] text-black "
                                : "text-[#ffffffa6]"
                            } px-3 py-1 rounded-md text-center`}
                          >
                            {currentPath === "wishlist" ? (
                              (() => {
                                const game = basket.find(
                                  (game) => game.id === item.id
                                );
                                return game ? (
                                  <Link to="/cart">View in Cart</Link>
                                ) : (
                                  <button
                                    onClick={(e) => {
                                      e.preventDefault();
                                      addToBasket(
                                        item.id,
                                        item.img,
                                        item.title,
                                        item.discountPerc,
                                        item.discount,
                                        item.discountPrice,
                                        item.price,
                                        item.endSale
                                      );
                                    }}
                                  >
                                    Add to Cart
                                  </button>
                                );
                              })()
                            ) : (
                              <button
                                onClick={(e) => {
                                  const game = fav.find(
                                    (game) => game.id === item.id
                                  );
                                  e.preventDefault();
                                  game
                                    ? ""
                                    : addToFav({
                                        id: item.id,
                                        img: item.img,
                                        title: item.title,
                                        discountPerc: item.discountPerc,
                                        discount: item.discount,
                                        discountPrice: item.discountPrice,
                                        price: item.price,
                                        endSale: item.endSale,
                                        addedAt: new Date().toISOString(),
                                        tags: item.tags,
                                      });
                                  const updatedBasket = basket.filter(
                                    (game) => game.id !== item.id
                                  );
                                  setBasket(updatedBasket);
                                  const cookie = new Cookies();
                                  cookie.set("basket", updatedBasket);
                                }}
                              >
                                Move to Wishlist
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex items-center flex-col pt-[60px]">
                    <div className="w-[50px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 45 52"
                      >
                        <g fill="none" fillRule="evenodd">
                          <path
                            d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z"
                            fill="#404044"
                          ></path>
                          <path
                            stroke="#FFF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <p className="text-[30px] 2xl:text-[40px] font-bold mt-[30px]">No results found</p>
                    <p onClick={() => setSelectedTags([])} className="underline opacity-[.6] hover:opacity-[1] text-[20px] cursor-pointer">Remove All Filters.</p>
                  </div>
                )}
              </div>
            </div>
            {currentPath === "wishlist" ? (
              <div className={`lg:w-[250px] ${mobFilter ? "block  max-lg:fixed w-full no-scrollbar md:w-[350px] lg:w-[270px] max-lg:h-screen right-0 top-0 max-lg:bg-[#18181c] max-lg:z-[5] max-lg:overflow-y-auto" : "hidden lg:block"}`}>
                <div className={`font-bold border-b border-[#ffffff26] ${mobFilter ? "px-10 py-7 mt-10" : "py-5 px-3"}`}>
                  Filters
                </div>
                {filters.map((filter, i) => (
                  <div
                    key={i}
                    className="border-b border-[#ffffff26] text-[#ffffffa6] hover:text-white"
                  >
                    <button
                      onClick={() => {
                        handleToggleFilter(i);
                      }}
                      className={`flex justify-between items-center w-full ${mobFilter ? "px-10 py-7" : "py-5 px-3"}` }
                    >
                      <span>{filter.filter}</span>
                      <MdKeyboardArrowUp
                        className={`[text-[20px] ${
                          openFilters.includes(i) ? "rotate-0" : "rotate-180"
                        }`}
                      />
                    </button>
                    {openFilters.includes(i) && (
                      <ul>
                        {filter.subFilter.map((filter, j) => (
                          <li
                            onClick={() => {
                              handleTagFilter(filter);
                            }}
                            key={j}
                            className={`rounded-md p-3 text-[#ffffffa6] hover:bg-[#ffffff26] mb-1 cursor-pointer ${
                              selectedTags.includes(filter) ? "border" : ""
                            } ${mobFilter ? "px-10 " : "py-5 px-3"}`}
                          >
                            {filter}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                <button onClick={() => setMobFilter(false)} className={`border w-[150px] py-3 rounded-lg my-[60px] ml-5 hover:opacity-[.6] ${mobFilter ? "block" : "hidden"}`}>Close</button>
              </div>
            ) : (
              <div className="w-full lg:w-[300px] text-[14px] font-medium">
                <h4 className="font-bold text-[24px] mb-5">
                  Games and Apps Summary
                </h4>
                <div className="flex justify-between mt-[15px]">
                  <span>Price</span>
                  <span>
                    $
                    {basket
                      .reduce(
                        (total, item) =>
                          item.price !== "Free"
                            ? total + +(item.price / 100).toFixed(2)
                            : total,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mt-[15px]">
                  <span>Sale Discount</span>
                  <span className="">
                    -$
                    {basket
                      .reduce(
                        (total, item) =>
                          total + +(item.discount / 100).toFixed(2),
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between mt-[15px]">
                  <span>Taxes</span>
                  <span>Calculated at Checkout</span>
                </div>
                <hr className="border-[#ffffff26] mt-5 pt-5" />
                <div className="flex justify-between font-semibold mb-6">
                  <span>Subtotal</span>
                  <span>
                    $
                    {basket
                      .reduce(
                        (total, item) =>
                          total + +(item.discountPrice / 100).toFixed(2),
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
                <button className="w-full bg-[#26bbff] text-black py-3 rounded-lg hover:bg-[#72d3ff] trans">
                  Check Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center text-center gap-3 w-full p-5 min-h-[350px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[60px] h-[60px] mb-[40px]"
              viewBox="0 0 45 52"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M4.058 0C1.094 0 0 1.098 0 4.075v35.922c0 .338.013.65.043.94.068.65-.043 1.934 2.285 2.96 1.553.683 7.62 3.208 18.203 7.573 1.024.428 1.313.529 2.081.529.685.013 1.137-.099 2.072-.53 10.59-4.227 16.66-6.752 18.213-7.573 2.327-1.23 2.097-3.561 2.097-3.899V4.075C44.994 1.098 44.13 0 41.166 0H4.058z"
                  fill="#404044"
                ></path>
                <path
                  stroke="#FFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 18l4.91 2.545-2.455 4M25.544 28.705c-1.056-.131-1.806-.14-2.25-.025-.444.115-1.209.514-2.294 1.197M29.09 21.727L25 19.5l2.045-3.5"
                ></path>
              </g>
            </svg>
            <p className="text-[30px] lg:text-[40px] 2xl:text-[50px] lg:w-[700px] font-bold lg:leading-[45px] 2xl:leading-[55px] leading-[35px]">
              {currentPath === "wishlist"
                ? "You haven't added anything to your wishlist yet."
                : "Your Cart is empty."}
            </p>
            <Link
              className="bg-[#26bbff] text-[14px] text-black font-semibold px-3 py-1 rounded-md"
              to={"/"}
            >
              Shop for Games & Apps
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
