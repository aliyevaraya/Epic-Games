import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdLanguage,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { data } from "../../services/epicData";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [showEpic, setShowEpic] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <header
        className={`bg-[#121216] flex justify-between py-1 px-3 sm:px-[20px] text-white ${
          showEpic ? `hidden lg:flex` : "flex"
        } ${showMenu ? "hidden" : "flex"}`}
      >
        <div className="flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setShowEpic(!showEpic)}
              className="group flex items-center py-[10px]"
            >
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="32px"
                height="32px"
                fill="white"
              >
                <path d="M11.226 8.12V6.288c0-.292-.137-.427-.42-.427h-.463v2.685h.463c.284 0 .42-.135.42-.426m-1.502 6.5-.252.628h.501z"></path>
                <path
                  fillRule="evenodd"
                  d="M5.278 2.5h13.445c1.103 0 1.505.401 1.505 1.488V17.23c0 .17-.03.477-.086.609a.9.9 0 0 1-.21.334c-.106.099-.29.202-.378.242l-7.128 3a1.1 1.1 0 0 1-.851 0l-7.127-3a1.7 1.7 0 0 1-.379-.241.9.9 0 0 1-.21-.335c-.055-.131-.086-.438-.086-.608V3.988c0-1.087.403-1.488 1.505-1.488m8.707 2.383h-1.126v7.285h1.126zm-.414 9.027h-.654l-.534.855-.532-.855h-.655v2.208h.607v-1.262l.568.858h.013l.571-.864v1.268h.616zm-2.587-9.027H9.218v7.286h1.125V9.525h.641c.915 0 1.368-.447 1.368-1.353V6.236c0-.906-.453-1.353-1.368-1.353m-2.33 0H6.15v7.286h2.524v-1.01H7.276V8.963H8.6v-1.01H7.276v-2.06h1.377zM7.86 16.067q.243-.098.421-.243v-.994H7.255v.45h.44v.267a.64.64 0 0 1-.357.091.6.6 0 0 1-.436-.172.6.6 0 0 1-.126-.194.7.7 0 0 1-.045-.246v-.006a.63.63 0 0 1 .166-.429.54.54 0 0 1 .405-.177q.166 0 .292.054a1 1 0 0 1 .248.154l.363-.431a1.4 1.4 0 0 0-.394-.237 1.4 1.4 0 0 0-.512-.085q-.26 0-.48.088a1.2 1.2 0 0 0-.382.245q-.16.156-.25.364-.09.209-.091.451v.007q0 .25.092.458.093.21.256.362.162.151.384.236.223.085.484.085.306 0 .549-.098m1.57-2.173-.952 2.224h.652l.16-.394h.861l.164.394h.663l-.951-2.224zm5.273 4.686.013-.018.004-.023a.06.06 0 0 0-.017-.041.05.05 0 0 0-.04-.017H9.346a.06.06 0 0 0-.041.017l-.013.018-.005.023a.06.06 0 0 0 .018.041q.007.008.018.012l2.58 1.095a.23.23 0 0 0 .181 0l2.6-1.095zm-.719-2.462h1.813v-.52h-1.2v-.35h1.072v-.483h-1.072v-.334h1.184v-.52h-1.796zm.594-9.945v4.705c0 .906.453 1.353 1.368 1.353h.557c.915 0 1.367-.448 1.367-1.353V9.18h-1.104v1.645c0 .291-.137.426-.42.426h-.21c-.295 0-.432-.135-.432-.426v-4.6c0-.292.136-.427.431-.427h.19c.283 0 .42.135.42.426V7.65h1.104V6.163c0-.906-.442-1.343-1.357-1.343h-.547c-.914 0-1.367.448-1.367 1.353m3.27 9.569a.7.7 0 0 0 .065-.303v-.007a.53.53 0 0 0-.223-.458 1 1 0 0 0-.264-.133 3 3 0 0 0-.346-.097 2 2 0 0 1-.19-.049 1 1 0 0 1-.118-.047.16.16 0 0 1-.061-.052.12.12 0 0 1-.017-.066v-.006q0-.06.055-.101a.3.3 0 0 1 .168-.041q.15 0 .31.055.162.055.315.163l.31-.432a1.3 1.3 0 0 0-.407-.22q-.225-.075-.513-.074-.201 0-.36.052a.8.8 0 0 0-.273.147.63.63 0 0 0-.232.508v.007a.6.6 0 0 0 .066.285q.066.115.179.192.113.078.267.127.152.048.331.09.115.025.187.048a.6.6 0 0 1 .115.05.2.2 0 0 1 .059.051q.016.027.016.062v.006a.12.12 0 0 1-.066.112.4.4 0 0 1-.19.04q-.389 0-.724-.266l-.345.407q.209.183.477.275.27.091.57.091a1.3 1.3 0 0 0 .37-.049.8.8 0 0 0 .285-.142.7.7 0 0 0 .183-.225"
                  clipRule="evenodd"
                ></path>
              </svg>
              <MdKeyboardArrowDown className="text-white" />
              <ul className="lg:group-hover:block hidden w-[550px] absolute top-[50px] left-[1%] rounded-xl bg-[#303034b3] backdrop-blur-[50px] overflow-hidden border border-[#ffffff1a] tracking-[0.02em] bg-[#101014]">
                {data.map((section, i) => (
                  <li
                    className={`w-[275px] text-left p-[32px] border-[#ffffff1a] ${
                      i == 2
                        ? "w-[280px] absolute left-[50%] top-0 border-l whitespace-nowrap"
                        : ""
                    } ${i === 0 ? "border-b" : ""}`}
                    key={i}
                  >
                    <h3 className="text-[20px] mb-[10px] pl-[6px] font-bold">
                      {section.title}
                    </h3>
                    <ul className="relative">
                      {section.list.map((item, index) => (
                        <li
                          key={index}
                          className="hover:bg-[#343437] rounded-md py-[5px]"
                        >
                          <a
                            href="#"
                            className="flex gap-[.75rem] py-1 px-[6px]"
                          >
                            <img
                              width="20px"
                              src={item.icon}
                              alt={`${item.name} logo`}
                            />
                            <span className="text-[14px]">{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </button>
          </div>
          <ul className="flex items-center">
            <li className="p-1 sm:p-5">
              <Link>
                <img width="54px" src="images/Store.svg" alt="store img" />
              </Link>
            </li>
            <li className="p-5 hidden lg:block">
              <Link>Support</Link>
            </li>
            <li className="group p-5 hidden lg:block relative">
              <Link className="flex items-center">
                Distribute
                <MdKeyboardArrowDown className="group-hover:hidden mt-1 ml-1" />
                <MdKeyboardArrowUp className="group-hover:block hidden mt-1 ml-1" />
              </Link>
              <ul className="hidden group-hover:block absolute bg-[#303034b3] backdrop-blur-[50px] min-w-[250px] top-[60px] -left-[4%] rounded-xl overflow-hidden p-2 border border-[#ffffff1a]">
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
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <button className="hidden lg:block text-[24px]">
            <MdLanguage />
          </button>
          <Link className="hidden lg:block bg-[#ffffff26] hover:bg-[#ffffff35] py-[3px] px-[8px] rounded-md">
            Sign in
          </Link>
          <a
            href="#"
            className="bg-[#26bbff] hover:bg-[#72d3ff] text-[14px] sm:text-[16px] text-black py-[3px] px-[8px] rounded-md"
          >
            Download
          </a>
          <button onClick={() => setShowMenu(!showMenu)} className="lg:hidden">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              width="1.5rem"
            >
              <path
                fillRule="evenodd"
                d="M2.25 5A.75.75 0 0 1 3 4.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 5m0 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 7a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <div
        className={`text-white relative trans ${
          showEpic ? `block lg:hidden ` : "hidden"
        }`}
      >
        <div className="bg-[#101014] flex justify-between p-[20px] absolute top-0  w-full z-[2]">
          <button
            onClick={() => setShowEpic(!showEpic)}
            className="flex items-center"
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              fill="white"
            >
              <path d="M11.226 8.12V6.288c0-.292-.137-.427-.42-.427h-.463v2.685h.463c.284 0 .42-.135.42-.426m-1.502 6.5-.252.628h.501z"></path>
              <path
                fillRule="evenodd"
                d="M5.278 2.5h13.445c1.103 0 1.505.401 1.505 1.488V17.23c0 .17-.03.477-.086.609a.9.9 0 0 1-.21.334c-.106.099-.29.202-.378.242l-7.128 3a1.1 1.1 0 0 1-.851 0l-7.127-3a1.7 1.7 0 0 1-.379-.241.9.9 0 0 1-.21-.335c-.055-.131-.086-.438-.086-.608V3.988c0-1.087.403-1.488 1.505-1.488m8.707 2.383h-1.126v7.285h1.126zm-.414 9.027h-.654l-.534.855-.532-.855h-.655v2.208h.607v-1.262l.568.858h.013l.571-.864v1.268h.616zm-2.587-9.027H9.218v7.286h1.125V9.525h.641c.915 0 1.368-.447 1.368-1.353V6.236c0-.906-.453-1.353-1.368-1.353m-2.33 0H6.15v7.286h2.524v-1.01H7.276V8.963H8.6v-1.01H7.276v-2.06h1.377zM7.86 16.067q.243-.098.421-.243v-.994H7.255v.45h.44v.267a.64.64 0 0 1-.357.091.6.6 0 0 1-.436-.172.6.6 0 0 1-.126-.194.7.7 0 0 1-.045-.246v-.006a.63.63 0 0 1 .166-.429.54.54 0 0 1 .405-.177q.166 0 .292.054a1 1 0 0 1 .248.154l.363-.431a1.4 1.4 0 0 0-.394-.237 1.4 1.4 0 0 0-.512-.085q-.26 0-.48.088a1.2 1.2 0 0 0-.382.245q-.16.156-.25.364-.09.209-.091.451v.007q0 .25.092.458.093.21.256.362.162.151.384.236.223.085.484.085.306 0 .549-.098m1.57-2.173-.952 2.224h.652l.16-.394h.861l.164.394h.663l-.951-2.224zm5.273 4.686.013-.018.004-.023a.06.06 0 0 0-.017-.041.05.05 0 0 0-.04-.017H9.346a.06.06 0 0 0-.041.017l-.013.018-.005.023a.06.06 0 0 0 .018.041q.007.008.018.012l2.58 1.095a.23.23 0 0 0 .181 0l2.6-1.095zm-.719-2.462h1.813v-.52h-1.2v-.35h1.072v-.483h-1.072v-.334h1.184v-.52h-1.796zm.594-9.945v4.705c0 .906.453 1.353 1.368 1.353h.557c.915 0 1.367-.448 1.367-1.353V9.18h-1.104v1.645c0 .291-.137.426-.42.426h-.21c-.295 0-.432-.135-.432-.426v-4.6c0-.292.136-.427.431-.427h.19c.283 0 .42.135.42.426V7.65h1.104V6.163c0-.906-.442-1.343-1.357-1.343h-.547c-.914 0-1.367.448-1.367 1.353m3.27 9.569a.7.7 0 0 0 .065-.303v-.007a.53.53 0 0 0-.223-.458 1 1 0 0 0-.264-.133 3 3 0 0 0-.346-.097 2 2 0 0 1-.19-.049 1 1 0 0 1-.118-.047.16.16 0 0 1-.061-.052.12.12 0 0 1-.017-.066v-.006q0-.06.055-.101a.3.3 0 0 1 .168-.041q.15 0 .31.055.162.055.315.163l.31-.432a1.3 1.3 0 0 0-.407-.22q-.225-.075-.513-.074-.201 0-.36.052a.8.8 0 0 0-.273.147.63.63 0 0 0-.232.508v.007a.6.6 0 0 0 .066.285q.066.115.179.192.113.078.267.127.152.048.331.09.115.025.187.048a.6.6 0 0 1 .115.05.2.2 0 0 1 .059.051q.016.027.016.062v.006a.12.12 0 0 1-.066.112.4.4 0 0 1-.19.04q-.389 0-.724-.266l-.345.407q.209.183.477.275.27.091.57.091a1.3 1.3 0 0 0 .37-.049.8.8 0 0 0 .285-.142.7.7 0 0 0 .183-.225"
                clipRule="evenodd"
              ></path>
            </svg>
            <MdKeyboardArrowUp className="text-white" />
          </button>
          <button onClick={() => setShowEpic(!showEpic)}>
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
        <ul className="bg-[#101014] tracking-[0.02em] px-4 sm:px-[4rem] py-[4rem] flex flex-col gap-10 fixed z-[1] w-full h-screen sm:top-[50px] left-0  overscroll-contain overflow-y-auto no-scrollbar">
          <li className="text-[32px] font-extrabold px-2">Epic Games</li>
          {data.map((section, i) => (
            <li key={i}>
              <h3 className="text-[20px] mb-[10px] pl-[6px] font-bold">
                {section.title}
              </h3>
              <ul>
                {section.list.map((item, index) => (
                  <li
                    key={index}
                    className="hover:bg-[#343437] rounded-md py-[5px]"
                  >
                    <a href="#" className="flex gap-[.75rem] py-1 px-[6px]">
                      <img
                        width="20px"
                        src={item.icon}
                        alt={`${item.name} logo`}
                      />
                      <span className="text-[14px]">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`text-white bg-[#101014] fixed top-0 left-0 w-full h-full ${
          showMenu ? "block lg:hidden" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center p-4 h-[4.5rem]">
          <Link>
            <img width="54px" src="images/Store.svg" alt="store img" />
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
          <div className={`absolute top-0 ${dropdown ? "right-[100%] opacity-0" : "right-0 opacity-[1]"} w-full trans`}>
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
                <Link>Support</Link>
              </li>
              <li onClick={() => setDropdown(!dropdown) } className="py-3 px-2">
                <Link className="flex justify-between items-center">
                  Distribute
                  <MdOutlineKeyboardArrowRight className="mt-1 ml-1 text-gray-400" />
                </Link>
              </li>
            </ul>
          </div>
          <div className={`absolute top-0 ${dropdown ? "right-0 opacity-[1]" : "right-[100%] opacity-0"} w-full px-4 trans`}>
            <button onClick={() => setDropdown(!dropdown) } className="flex items-center px-4 py-1 text-[18px]">
              <MdOutlineKeyboardArrowLeft className="text-[28px] mr-2" /> Back
            </button>
            <ul>
              <li className="text-[32px] font-extrabold mb-[32px] px-2">Distribute</li>
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
    </>
  );
}

export default Header;
