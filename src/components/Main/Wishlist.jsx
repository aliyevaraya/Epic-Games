import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdFilterList,
} from "react-icons/md";

const Wishlist = () => {
  const items = [
    {
      id: 1,
      title: "EA SPORTS FC™ 25 Standard Edition",
      discount: "-60%",
      oldPrice: "$69.99",
      newPrice: "$27.99",
      offerEnds: "1/9/2025 at 8:00 PM",
      rewardInfo: "Earn a boosted 10% back in Epic Rewards, offer ends Jan 9.",
      platform: "Windows",
      imgSrc: "path-to-image-1",
    },
    {
      id: 1,
      title: "EA SPORTS FC™ 25 Standard Edition",
      discount: "-60%",
      oldPrice: "$69.99",
      newPrice: "$27.99",
      offerEnds: "1/9/2025 at 8:00 PM",
      rewardInfo: "Earn a boosted 10% back in Epic Rewards, offer ends Jan 9.",
      platform: "Windows",
      imgSrc: "path-to-image-1",
    },
  ];
  const [openSort, setOpenSort] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <div className="bg-[#121212] text-white">
      <div className="containerr">
        <div className="mb-6 lg:flex lg:flex-row-reverse justify-between items-center">
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
          <h1 className="text-[40px] font-bold">My Wishlist</h1>
        </div>
        <div className="lg:flex gap-[30px] items-baseline">
          <div className=" w-full">
            <div className="flex justify-between items-center mb-5">
              <div>
                <span className="text-[#ffffffa6] mr-3">Sort by:</span>
                <button className="relative">
                  <span
                    onClick={() => setOpenSort(!openSort)}
                    className="flex items-center gap-1"
                  >
                    On Sale
                    {openSort ? (
                      <MdKeyboardArrowUp className="text-[20px]" />
                    ) : (
                      <MdKeyboardArrowDown className="text-[20px]" />
                    )}
                  </span>
                  <div
                    className={`${
                      openSort ? "flex" : "hidden"
                    } flex-col text-left absolute mt-1 bg-[#303034] rounded-[12px] p-[6px] w-[150px] text-[14px]`}
                  >
                    <span className="p-2 hover:bg-[#ffffff26] rounded-[8px]">
                      On Sale
                    </span>
                    <span className="p-2 hover:bg-[#ffffff26] rounded-[8px]">
                      Recently added
                    </span>
                    <span className="p-2 hover:bg-[#ffffff26] rounded-[8px]">
                      Alphabetical
                    </span>
                    <span className="p-2 hover:bg-[#ffffff26] rounded-[8px]">
                      Price: Low to High
                    </span>
                    <span className="p-2 hover:bg-[#ffffff26] rounded-[8px]">
                      Price: High to Low
                    </span>
                  </div>
                </button>
              </div>
              <div className="lg:hidden flex items-center gap-1 font-medium bg-[#ffffff26] p-1 px-2 rounded-md hover:bg-[#f0eded59]">
                Filters <MdFilterList />
              </div>
            </div>
            <div>
              {items.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#202024] p-4 rounded-lg flex gap-4 mb-4"
                >
                  <img
                    src="https://cdn1.epicgames.com/offer/b61e8ddd14e94619b7a74cf9d73f86b5/EGS_EASPORTSFC25StandardEdition_EACanada_S1_2560x1440-f650d1a50a08e78279071d931145822a?resize=1&w=480&h=270&quality=medium"
                    alt={item.title}
                    className="w-[60px] h-[70px] object-cover rounded-md"
                  />
                  <div className="flex flex-col justify-between w-full overflow-hidden">
                    <div className="flex flex-col md:flex-row md:justify-between">
                      <div>
                        <span className="bg-[#ffffff26] px-2 py-1 inline-block text-xs font-medium rounded-md mb-2">
                          Base Game
                        </span>
                        <h2 className="text-[20px] font-bold truncate">
                          {item.title}
                        </h2>
                      </div>
                      <div>
                        <div className="flex items-center justify-between xxs:justify-start md:justify-between gap-2 mt-5 mb-[10px]">
                          <span className="text-[#26bbff] text-[12px] font-bold">
                            {item.discount}
                          </span>
                          <div className="flex flex-col xxs:flex-row xxs:justify-between xxs:items-center xxs:gap-2">
                            <span className="line-through text-[14px] text-[#ffffffa6]">
                              {item.oldPrice}
                            </span>
                            <span className="text-white font-bold">
                              {item.newPrice}
                            </span>
                          </div>
                        </div>
                        <p className="text-[#ffffffa6] text-[12px]">
                          Sale ends {item.offerEnds}
                        </p>
                      </div>
                    </div>
                    {item.rewardInfo && (
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
                          {item.rewardInfo}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-col justify-end xxs:flex-row gap-5 text-[14px] mt-5 font-semibold ">
                      <button className="text-sm text-gray-400 hover:text-white">
                        Remove
                      </button>
                      <button className="bg-[#26bbff] px-3 py-1 rounded-md text-black hover:bg-[#61cdff]">
                        View In Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:block lg:w-[250px]">
            <div className="font-bold py-5 px-3 border-b border-[#ffffff26]">
              Filters
            </div>
            <div className="text-[#ffffffa6] hover:text-white py-5 px-3 flex justify-between items-center border-b border-[#ffffff26] cursor-pointer">
              <span onClick={() => setOpenFilter(!openFilter)}>Events</span>{" "}
              {openFilter ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
            <div className="text-[#ffffffa6] hover:text-white py-5 px-3 flex justify-between items-center border-b border-[#ffffff26] cursor-pointer">
              <span>Genre</span>{" "}
              {openFilter ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
            <div className="text-[#ffffffa6] hover:text-white py-5 px-3 flex justify-between items-center border-b border-[#ffffff26] cursor-pointer">
              <span>Features</span>{" "}
              {openFilter ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
            <div className="text-[#ffffffa6] hover:text-white py-5 px-3 flex justify-between items-center border-b border-[#ffffff26] cursor-pointer">
              <span>Platform</span>{" "}
              {openFilter ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
