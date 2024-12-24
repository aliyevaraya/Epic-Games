import { useState } from "react";
import { CiSearch } from "react-icons/ci";

function Support() {
  const services = [
    {
      img: "images/mail-icon.svg",
      title: "Change email address",
      content: "Change the email address of your account.",
    },
    {
      img: "images/display-name.svg",
      title: "Change display name",
      content: "Change your account display name.",
    },
    {
      img: "images/ps-icon.svg",
      title: "Change password",
      content: "Change your account password.",
    },
    {
      img: "images/security.svg",
      title: "Enable two-factor authentication",
      content:
        "Secure your account by enabling two-factor authentication (2FA).",
    },
    {
      img: "images/update-email.svg",
      title: "Update email preferences",
      content:
        "Manage your email preferences for news, surveys, and special offers.",
    },
    {
      img: "images/change-country.svg",
      title: "Change country",
      content: "Change the country of your account.",
    },
    {
      img: "images/remove-linking-restriction.svg",
      title: "Remove linking restriction",
      content: "Remove a linking restriction of an unlinked platform.",
    },
    {
      img: "images/forgot-email-address.svg",
      title: "Forgot email address",
      content: "Locate the email address linked with your account.",
    },
    {
      img: "images/forgot-password.svg",
      title: "Forgot password",
      content: "Reset your password using your email address.",
    },
    {
      img: "images/recover-your-account.svg",
      title: "Recover your account",
      content: "Recover access to your account if you’re locked out.",
    },
    {
      img: "images/epic-games-store-refunds.svg",
      title: "Epic Games Store refunds",
      content: "Refund eligible Epic Games Store purchases.",
    },
    {
      img: "images/your-support-.svg",
      title: "Your support requests",
      content: "View and manage your support requests.",
    },
  ];
  const supportGames = [
    {
      img: "images/fortnite-support.jpg",
      title: "Fortnite",
    },
    {
      img: "images/lego-support.png",
      title: "Lego Fortnite",
    },
    {
      img: "images/pocket-racing.jpg",
      title: "Rocket Racing",
    },
    {
      img: "images/festival-support.jpg",
      title: "Fortnite Festival",
    },
    {
      img: "images/rocket-support.jpg",
      title: "Rocket League",
    },
    {
      img: "images/fall-guys.jpg",
      title: "Fall Guys",
    },
    {
      img: "images/sideswipe-support.jpg",
      title: "Rocket League Sideswipe",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const [showGames, setShowGames] = useState(false);

  return (
    <div className="text-white bg-[#141414]">
      <section>
        <div id="support-top">
          <div className="containerr m-auto">
            <div className="support-top">
              <div className="notify flex justify-between items-center bg-[#272727] rounded p-[15px] mb-[50px] gap-4">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden md:block"
                >
                  <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
                    <circle
                      cx="10"
                      cy="10"
                      r="10"
                      fill="#ffa640"
                      stroke="#ffa640"
                    ></circle>
                    <path
                      class="WarningSvg__symbol WarningSvg__symbol--dark"
                      d="m11.108 11.42v-6.72h-1.82v6.72h1.82zm0 3.08v-1.82h-1.82v1.82h1.82z"
                      fill="black"
                      fill-rule="nonzero"
                    ></path>
                  </g>
                </svg>
                <p>
                  Due to the large number of inquiries, our responses may take
                  longer than usual. We will do our best to reply as quickly as
                  possible. Thanks for your patience
                </p>
              </div>
              <div className="xl:flex items-baseline justify-between">
                <h1 className="text-[30px] lg:text-[40px] pr-[10px] leading-9">
                  Welcome to Epic Games Player Support
                </h1>
                <h6 className="text-[12px] py-[10px]  xl:py-0  leading-4">
                  <a
                    className="flex flex-col xxs:flex-row gap-1 tracking-[.15em] uppercase"
                    href="#"
                  >
                    Server Status:{" "}
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
      <section id="jump" className="pb-10">
        <div className="containerr">
          <div className="text-[22px] mb-[15px]">Jump to:</div>
          <div className="flex flex-col md:flex-row md:justify-center gap-4">
            <div className="relative rounded-2xl overflow-hidden h-[90px] md:w-[25%]">
              <img
                className="hover:scale-[1.07] trans w-full h-full object-cover"
                src="images/self-service.jpg"
                alt="self-service"
              />
              <p className="absolute bottom-[10px] left-2 font-bold">
                Self-service
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[90px] md:w-[25%]">
              <img
                className="hover:scale-[1.1] trans w-full h-full object-cover"
                src="images/games.jpg"
                alt="games"
              />
              <p className="absolute bottom-[10px] left-2 font-bold">Games</p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[90px] md:w-[25%]">
              <img
                className="hover:scale-[1.1] trans w-full h-full object-cover"
                src="images/accounts.jpg"
                alt="accounts"
              />
              <p className="absolute bottom-[10px] left-2 font-bold">
                Accounts
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[90px] md:w-[25%]">
              <img
                className="hover:scale-[1.1] trans w-full h-full object-cover"
                src="images/enterprise.jpg"
                alt="enterprise"
              />
              <p className="absolute bottom-[10px] left-2 font-bold">
                Enterprise
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="self-service" className="py-[80px]">
        <div className="containerr">
          <div className="text-[22px] mb-[25px]">Self-service</div>
          <div className="self-service flex flex-col md:flex-row md:flex-wrap gap-4">
            {services.slice(0, showAll ? services.length : 5).map((item, i) => (
              <div
                key={i}
                className="serv flex items-start py-4 px-5 gap-3 bg-[#ffffff0a] hover:bg-[#3a3a3a] trans rounded-lg w-full md:w-[calc(50%-16px)] 2xl:w-[calc(33.3%-16px)] cursor-pointer"
              >
                <div className="icon">
                  <img src={item.img} alt="email adress" />
                </div>
                <div className="about-serv">
                  <p className="font-bold mb-2">{item.title}</p>
                  <p className="opacity-[.7] text-[14px]">{item.content}</p>
                </div>
              </div>
            ))}
            {!showAll && (
              <div className="bg-hover flex items-center relative py-5 min-h-[90px] px-5 gap-3 bg-[#ffffff0a] rounded-lg w-full md:w-[calc(50%-8px)] 2xl:w-[calc(33.3%-8px)] cursor-pointer">
                <div className="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.75 8.5C8.75 4.77208 11.7721 1.75 15.5 1.75C16.4891 1.75 17.4304 1.96321 18.2788 2.34689C18.5031 2.44835 18.6634 2.65349 18.7076 2.89573C18.7517 3.13798 18.6742 3.38647 18.5001 3.56059L15.5607 6.5L17.5 8.43934L20.4394 5.49993C20.6135 5.32581 20.862 5.24825 21.1043 5.29242C21.3465 5.33659 21.5516 5.49685 21.6531 5.72121C22.0368 6.56961 22.25 7.51092 22.25 8.5C22.25 12.2279 19.2279 15.25 15.5 15.25C14.9788 15.25 14.4706 15.1908 13.9822 15.0785L8.03033 21.0303C6.63286 22.4278 4.36713 22.4278 2.96967 21.0303C1.5722 19.6329 1.57221 17.3671 2.96967 15.9697L8.9215 10.0178C8.80921 9.52938 8.75 9.02121 8.75 8.5ZM15.5 3.25C12.6005 3.25 10.25 5.60051 10.25 8.5C10.25 9.03166 10.3288 9.54357 10.4748 10.0254C10.5551 10.2902 10.483 10.5776 10.2874 10.7733L4.03033 17.0303C3.21865 17.842 3.21865 19.158 4.03033 19.9697C4.842 20.7813 6.15799 20.7813 6.96967 19.9697L13.2267 13.7126C13.4224 13.517 13.7098 13.4449 13.9746 13.5252C14.4564 13.6712 14.9683 13.75 15.5 13.75C18.3995 13.75 20.75 11.3995 20.75 8.5C20.75 8.12991 20.7118 7.7692 20.6392 7.42141L18.0303 10.0303C17.7374 10.3232 17.2626 10.3232 16.9697 10.0303L13.9697 7.03033C13.829 6.88968 13.75 6.69891 13.75 6.5C13.75 6.30109 13.829 6.11032 13.9697 5.96967L16.5786 3.36075C16.2308 3.28819 15.8701 3.25 15.5 3.25Z"
                      fill="white"
                      fillOpacity="0.72"
                    ></path>
                  </svg>
                </div>
                <div className="about-serv">
                  <p className="font-bold mb-2 leading-[2]">Show all tools</p>
                  <svg
                    onClick={() => setShowAll(true)}
                    className="show-all absolute right-3 bottom-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.9999 1.84349C14.0106 0.810127 13.1813 -0.0151916 12.139 0.00021216L3.22439 0.131963C0.724993 0.135528 0.719627 3.87513 3.21902 3.87156C3.21902 3.87156 5.57302 3.86399 6.26707 3.86176C6.96111 3.85952 7.12342 4.25693 6.63551 4.74349L0.548148 10.814C-0.183256 11.5434 -0.182003 12.7272 0.547628 13.4548C1.27875 14.1839 2.46835 14.1797 3.19576 13.4543L9.28312 7.38378C9.77368 6.89458 10.1695 7.05916 10.1672 7.75107L10.157 10.7904C10.1539 13.2833 13.9034 13.2775 13.907 10.785L13.9999 1.84349Z"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section id="games">
        <div className="containerr">
          <div className="text-[22px] mb-[15px]">Games</div>
          <div id="games-support">
            <div className="games flex flex-wrap gap-4 justify-between w-full">
              {supportGames.map((game, index) => (
                <a
                  href=""
                  key={index}
                  className={`${
                    index === 0
                      ? "w-[calc(100%-25ox)] md:w-[calc(60%-25px)] min-w-[100px] min-h-[170px]"
                      : "w-[calc(50%-25px)] md:w-[calc(20%-25px)] min-w-[100px] min-h-[170px]"
                  }`}
                >
                  <div className="rounded-[10px] overflow-hidden">
                    <img
                      className="w-full h-full hover:scale-[1.1] object-cover trans"
                      src={game.img}
                      alt={game.title}
                    />
                  </div>
                  <p className="game-title text-[14px] tracking-[.2px] leading-[1.125rem] py-[15px] break-all">
                    {game.title}
                  </p>
                </a>
              ))}
              <button className="bg-hover min-w-[100px] w-[calc(50%-25px)] min-h-[170px] md:w-[calc(20%-25px)] rounded-[10px] relative h-full">
                <div>
                  <img
                    className="opacity-0"
                    src="images/sideswipe-support.jpg"
                    alt=""
                  />
                </div>
                <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full">
                  <div className="flex flex-col items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="23"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.208 0a.75.75 0 0 0-.75.75V3H6.736C4.29 3 2.206 4.531 1.804 6.62L.272 14.589C.096 15.03 0 17.672 0 18.166 0 20.56 0 22.5 5 22.5c1.91 0 3.571-2.815 4.413-5.342.523-1.572 1.93-2.93 3.587-2.93h4c1.657 0 3.064 1.358 3.587 2.93C21.43 19.685 23.09 22.5 25 22.5c5 0 5-1.94 5-4.333 0-.495-.096-3.137-.272-3.58l-1.532-7.966C27.794 4.53 25.71 3 23.264 3h-6.806V.75a.75.75 0 0 0-.75-.75h-1.5ZM8.25 12a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM24 9.75a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                        fill="#fff"
                      ></path>
                    </svg>
                    <p className="font-bold mb-2 leading-[1.25rem] uppercase text-[12px]">
                      Show all Games
                    </p>
                  </div>
                </div>
                  <svg
                    onClick={() => setShowGames(true)}
                    className="show-all absolute right-2 bottom-2"
                    xmlns="http://www.w3.org/2000/svg"      
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M13.9999 1.84349C14.0106 0.810127 13.1813 -0.0151916 12.139 0.00021216L3.22439 0.131963C0.724993 0.135528 0.719627 3.87513 3.21902 3.87156C3.21902 3.87156 5.57302 3.86399 6.26707 3.86176C6.96111 3.85952 7.12342 4.25693 6.63551 4.74349L0.548148 10.814C-0.183256 11.5434 -0.182003 12.7272 0.547628 13.4548C1.27875 14.1839 2.46835 14.1797 3.19576 13.4543L9.28312 7.38378C9.77368 6.89458 10.1695 7.05916 10.1672 7.75107L10.157 10.7904C10.1539 13.2833 13.9034 13.2775 13.907 10.785L13.9999 1.84349Z"
                      fill="#fff"
                    ></path>
                  </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Support;
