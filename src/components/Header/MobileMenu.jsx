import { useState } from "react";
import {
  MdLanguage,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Link } from "react-router-dom";

function MobileMenu({showMenu, setShowMenu}) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div
      className={`text-white bg-[#101014] fixed top-0 left-0 w-full h-screen z-[5] ${
        showMenu ? "block lg:hidden" : "hidden"
      }`}
    >
      <div className="flex justify-between items-center p-4 h-[4.5rem]">
        <Link>
          <img width="54px" src="/images/Store.svg" alt="store img" />
        </Link>
        <div className="flex gap-5 items-center">
          <a
            href="#"
            className="bg-[#26bbff] hover:bg-[#72d3ff] text-black py-[3px] px-[8px] rounded-md"
          >
            Download
          </a>
          <button onClick={() => setShowMenu(!showMenu)}>
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="24px"
            >
              <path
                fillRule="evenodd"
                d="M4.47 4.47a.75.75 0 0 1 1.06 0L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1 0-1.06"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="relative">
        <div
          className={`absolute top-0 ${
            dropdown ? "right-[100%] opacity-0" : "right-0 opacity-[1]"
          } w-full trans`}
        >
          <div className="flex justify-end gap-5 px-4 py-1">
            <button className="block text-[24px]">
              <MdLanguage />
            </button>
            <Link className="block bg-[#ffffff26] hover:bg-[#ffffff35] py-1 px-3 rounded-md">
              Sign in
            </Link>
          </div>
          <ul className="p-4 sm:p-[4rem]">
            <li className="text-[32px] font-bold mb-[32px]">Menu</li>
            <li className="py-3 px-2">
              <Link to={"/support"}>Support</Link>
            </li>
            <li onClick={() => setDropdown(!dropdown)} className="py-3 px-2">
              <Link className="flex justify-between items-center">
                Distribute
                <MdOutlineKeyboardArrowRight className="mt-1 ml-1 text-gray-400" />
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`absolute top-0 ${
            dropdown ? "right-0 opacity-[1]" : "right-[100%] opacity-0"
          } w-full px-4 trans`}
        >
          <button
            onClick={() => setDropdown(!dropdown)}
            className="flex items-center px-4 py-1 text-[18px]"
          >
            <MdOutlineKeyboardArrowLeft className="text-[28px] mr-2" /> Back
          </button>
          <ul>
            <li className="text-[32px] font-extrabold mb-[32px] px-2">
              Distribute
            </li>
            <li className="hover:bg-[#4a4a4d] rounded-md py-[10px] px-4 whitespace-nowrap">
              <a href="">Distribute on Epic Games Store</a>
            </li>
            <li className="hover:bg-[#4a4a4d] rounded-md py-[10px] px-4">
              <a href="">Developer Forums</a>
            </li>
            <li className="hover:bg-[#4a4a4d] rounded-md py-[10px] px-4">
              <a href="">Documentation</a>
            </li>
            <li className="hover:bg-[#4a4a4d] rounded-md py-[10px] px-4">
              <a href="">Learning</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
