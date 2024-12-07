import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Discover() {
  const [discover, setDiscover] = useState(false);
  return (
    <>
      <div className={`sticky top-0 z-[3] bg-[#101014] text-white`}>
        <div className="w-[90%] lg:w-full h-[80px] m-auto flex items-center justify-between">
          <div className="h-[40px] px-3 my-[10px] trans flex items-center rounded-[50%] lg:rounded-3xl lg:bg-[#202024] hover:bg-[#404044] ">
            <GoSearch className="opacity-[.65]" />
            <input
              type="search"
              className="hidden lg:inline bg-transparent outline-none pl-3 text-[14px]"
              placeholder="Search store"
            />
          </div>
          <div className="h-[80px] lg:relative static flex flex-col items-center m-auto w-[80%] justify-center lg:items-start ml-[20px]">
            <button
              onClick={() => setDiscover(!discover)}
              className="2xl:hidden flex items-center p-[10px]"
            >
              Discover{" "}
              {discover ? (
                <MdKeyboardArrowUp className="block mt-1 ml-1" />
              ) : (
                <MdKeyboardArrowDown className="block mt-1 ml-1" />
              )}
            </button>
            <div
              className={`w-full lg:w-[200px] h-screen lg:h-auto 2xl:h-full absolute 2xl:static top-[100%] left-0 lg:top-[90%] lg:-left-[10px] z-[2] ${
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
      </div>
      {discover ? (
        <div className="block lg:hidden fixed top-0 left-0 w-full h-screen bg-[#000000b3] z-[2]"></div>
      ) : (
        ""
      )}
    </>
  );
}

export default Discover;
