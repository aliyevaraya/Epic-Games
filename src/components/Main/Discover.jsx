import { useContext, useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import {
  MdKeyboardArrowUp,
  MdClose,
  MdOutlineCheckCircle,
} from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { Link, useLocation } from "react-router-dom";
import { BASKET } from "../../context/BasketContext";
import { DATA } from "../../context/DataContext";

function Discover() {
  const { sell, play, wishlist, newRelease } = useContext(DATA);
  const allGames = [...wishlist, ...newRelease, ...play, ...sell];
  const { basket } = useContext(BASKET);
  const [discover, setDiscover] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [output, setOutput] = useState("");
  const location = useLocation();

  useEffect(() => {
    setToggleSearch(false);
    setSearch("");
  }, [location.pathname]);
  useEffect(() => {
    setOutput(
      search === ""
        ? ""
        : allGames.filter((game) =>
            game.title.toLowerCase().startsWith(search.toLowerCase())
          )
    );
  }, [search.trim()]);

  return (
    <>
      <div className={`sticky top-0 z-[3] bg-[#101014] text-white`}>
        <div className="containerr">
          <div
            className={`h-[80px] w-full m-auto flex items-center justify-between ${
              toggleSearch ? "bg-[#18181c]" : "bg-[transparent]"
            }`}
          >
            <div className="flex items-center">
              <div
                className={`relative  overflow-visible
               ${
                 toggleSearch
                   ? " w-full overflow-visible"
                   : "w-fit overflow-hidden"
               }`}
              >
                <div
                  className={`w-full lg:w-fit flex justify-between items-center`}
                >
                  <div
                    className={`flex ${
                      toggleSearch ? "w-full" : "w-fit"
                    } lg:bg-[#202024] rounded-3xl focus:bg-[#202024]`}
                  >
                    <div
                      className={`max-lg:h-[40px] w-[40px] px-3 my-[10px] trans flex items-center rounded-[50%] max-lg:bg-[#18181c]
                    ${toggleSearch ? " " : "max-lg:hover:bg-[#404044]"}
                  `}
                    >
                      <GoSearch
                        onClick={() => setToggleSearch(true)}
                        className={`opacity-[.65] cursor-pointer `}
                      />
                    </div>
                    <input
                      value={search}
                      onInput={(e) => setSearch(e.target.value)}
                      type="text"
                      className={`${
                        toggleSearch ? "inline" : "hidden"
                      } lg:inline bg-transparent outline-none pl-3 text-[14px] w-full`}
                      placeholder="Search store"
                    />
                  </div>
                  <MdClose
                    onClick={() => setToggleSearch(false)}
                    className={`${
                      toggleSearch
                        ? "block mr-4 text-[20px] cursor-pointer"
                        : "hidden"
                    }`}
                  />
                </div>
                <div
                  className={`${
                    search.length || toggleSearch ? "block" : "hidden"
                  } bg-[#18181c] w-full lg:w-[500px] absolute left-0 lg:top-[120%] rounded-md py-2 px-4`}
                >
                  <ul>
                    {output &&
                      output.slice(0, 5).map((game, i) => (
                        <li key={i}>
                          <Link
                            onClick={() => {
                              setToggleSearch(false);
                              setSearch("");
                            }}
                            to={`game/${game.id}`}
                            className="flex gap-4 items-center my-3 text-[14px]"
                          >
                            <div className="w-[30px] h-[40px]">
                              <img
                                className="w-full h-full object-cover rounded-md"
                                src={game.keyImages[0].url}
                                alt={game.title}
                              />
                            </div>
                            <p className="truncate w-[70%]">{game.title}</p>
                          </Link>
                        </li>
                      ))}
                    <li
                      className={`py-3 ${search ? "block" : "hidden"} ${
                        output.length < 5 ? "hidden" : "block"
                      }`}
                    >
                      <Link className="text-[14px] opacity-[.5]">
                        View more
                      </Link>
                    </li>
                    <li
                      className={`${
                        search && output.length === 0
                          ? "block h-[30px] opacity-[.6] text-[14px]"
                          : "hidden"
                      }`}
                    >
                      Nothing matched
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`h-[80px] lg:relative static flex flex-col items-center justify-center lg:items-start ml-[20px] ${
                  toggleSearch ? "hidden" : "flex"
                } `}
              >
                <button
                  onClick={() => setDiscover(!discover)}
                  className="2xl:hidden flex items-center p-[10px]"
                >
                  Discover
                  {
                    <MdKeyboardArrowUp
                      className={`block mt-1 ml-1 trans ${
                        discover ? "rotate-0" : "rotate-180"
                      } `}
                    />
                  }
                </button>
                <div
                  className={`w-full lg:w-[200px] lg:h-auto 2xl:h-full absolute 2xl:static top-[100%] left-0 lg:top-[90%] lg:-left-[10px] z-[2] ${
                    discover ? "block" : "hidden 2xl:block "
                  }`}
                >
                  <ul
                    className={`bg-[#101014] lg:bg-[#18181c] 2xl:bg-transparent 2xl:flex 2xl:items-center rounded-[4px] w-[90%] 2xl:w-full 2xl:h-full m-auto py-[27px] px-[32px] lg:py-[10px] lg:px-[20px] 2xl:px-0`}
                  >
                    <li>
                      <a
                        className="flex items-center h-[60px] lg:h-[34px] 2xl:h-full 2xl:p-[10px]"
                        href="#"
                      >
                        Discover
                      </a>
                    </li>
                    <li className=" border-y border-[#404044] lg:border-y-0 ">
                      <a
                        className="flex items-center h-[60px] lg:h-[34px] 2xl:h-full opacity-[.6] hover:opacity-[1] trans 2xl:p-[10px]"
                        href="#"
                      >
                        Browse
                      </a>
                    </li>
                    <li className="opacity-[.6] hover:opacity-[1] trans 2xl:p-[10px]">
                      <a
                        className="flex items-center h-[60px] lg:h-[34px] 2xl:h-full"
                        href="#"
                      >
                        News
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={`flex items-center gap-5 ${
                toggleSearch ? "hidden" : "block"
              }`}
            >
              <Link to={"wishlist"}>
                <span className="hidden md:block">Wishlist</span>{" "}
                <MdOutlineCheckCircle className="md:hidden block text-[24px]" />
              </Link>
              <Link to={"cart"} className="flex relative">
                <span className="hidden md:block">Cart</span>{" "}
                <SlBasket className="md:hidden block text-[24px]" />{" "}
                <span
                  className={`${
                    basket.length
                      ? "absolute -top-[5px] left-[5px] md:static block text-[10px] md:text-[14px]"
                      : "hidden"
                  } bg-[#26bbff] text-black font-bold px-2 md:px-3 rounded-2xl ml-3`}
                >
                  {basket.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {discover || toggleSearch ? (
        <div
          onClick={() => {
            setToggleSearch(false);
            setDiscover(false);
          }}
          className="block lg:hidden fixed top-0 left-0 w-full h-screen bg-[#000000b3] z-[2] cursor-pointer"
        ></div>
      ) : (
        ""
      )}
    </>
  );
}

export default Discover;
