import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import SelfServices from "./SelfServices";
import SupportGames from "./SupportGames";
import Accounts from "./Accounts";
import Enterprise from "./Enterprise";

function Support() {
  const [isExpanded, setIsExpanded] = useState(true);

  const selfService = [
    {
      img: "images/self-service.jpg",
      title: "Self-service",
    },
    {
      img: "images/games.jpg",
      title: "Games",
    },
    {
      img: "images/accounts.jpg",
      title: "Accounts",
    },
    {
      img: "images/enterprise.jpg",
      title: "Enterprise",
    },
  ];

  return (
    <div className="text-white bg-[#141414]">
      <section>
        <div id="support-top">
          <div className="containerr m-auto">
            <div className="support-top">
              <div className="notify flex justify-between md:items-center items-baseline overflow-hidden bg-[#272727] rounded p-[15px] mb-[50px] gap-4">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block ml-4 w-[40px]"
                >
                  <g transform="translate(1 1)" fill="none" fillRule="evenodd">
                    <circle
                      cx="10"
                      cy="10"
                      r="10"
                      fill="#ffa640"
                      stroke="#ffa640"
                    ></circle>
                    <path
                      className="WarningSvg__symbol WarningSvg__symbol--dark"
                      d="m11.108 11.42v-6.72h-1.82v6.72h1.82zm0 3.08v-1.82h-1.82v1.82h1.82z"
                      fill="black"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
                <p
                  className={`font-semibold truncate
                  ${
                    isExpanded
                      ? "truncate md:whitespace-normal md:overflow-visible md:text-clip"
                      : "whitespace-normal overflow-visible"
                  }
                  `}
                >
                  Due to the large number of inquiries, our responses may take
                  longer than usual. We will do our best to reply as quickly as
                  possible. Thanks for your patience.
                </p>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="md:hidden"
                >
                  {isExpanded ? (
                    <MdOutlineKeyboardArrowDown />
                  ) : (
                    <MdOutlineKeyboardArrowUp />
                  )}
                </button>
              </div>
              <div className="xl:flex items-baseline justify-between">
                <h1 className="text-[30px] lg:text-[40px] pr-[10px] leading-9">
                  Welcome to Epic Games Player Support
                </h1>
                <h6 className="text-[12px] py-[10px] xl:py-0 leading-4">
                  <a
                    className="flex flex-col xs:flex-row gap-1 tracking-[.15em] uppercase"
                    href="#"
                  >
                    Server Status:
                    <span className="server-status font-bold flex items-center gap-1">
                      All Systems Operational
                    </span>
                  </a>
                </h6>
              </div>
              <div className="flex items-center relative gap-3 whitespace-nowrap bg-white rounded-[5px] my-5">
                <CiSearch className="text-black absolute left-2" />
                <input
                  className="bg-transparent py-3 pr-4 pl-[35px] w-full text-black"
                  type="search"
                  placeholder="SEARCH HELP CENTER..."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="containerr">
        <section id="jump" className="pb-10">
          <div className="text-[22px] mb-[15px]">Jump to:</div>
          <div className="flex flex-col md:flex-row md:justify-center gap-4">
            {selfService.map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden h-[90px] md:w-[25%]"
              >
                <img
                  className="hover:scale-[1.07] trans w-full h-full object-cover"
                  src={item.img}
                  alt="self-service"
                />
                <p className="absolute bottom-[10px] left-2 font-bold">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>
        <SelfServices />
        <SupportGames />
        <Accounts />
        <Enterprise />
      </div>
    </div>
  );
}

export default Support;
