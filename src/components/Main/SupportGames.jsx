import React, { useState } from "react";

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
function SupportGames() {
  const [showGames, setShowGames] = useState(false);
  return (
    <section>
      <div className="text-[22px] mb-[15px]">Games</div>
      <div id="games-support">
        <div className="games flex flex-wrap justify-between gap-4 w-full">
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
                  className="w-full h-full hover:scale-[1.05] object-cover trans"
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
                    fillRule="evenodd"
                    clipRule="evenodd"
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
    </section>
  );
}

export default SupportGames;
