import { useContext, useState } from "react";
import { DATA } from "../../context/DataContext";
import { MdKeyboardArrowUp, MdKeyboardArrowLeft } from "react-icons/md";
import { useParams } from "react-router-dom";

function DetailSlider() {
  const { id } = useParams();
  const { newRelease, video, sliderImg } = useContext(DATA);
  const gameVideo = video[0]?.outputs[7]?.url;
  const mediaItems = [
    { type: "video", src: gameVideo, img: "/images/fall-guys.jpg" },
    ...sliderImg.map((img) => ({ type: "image", src: img.src })),
  ];
  const [currentMedia, setCurrentMedia] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const game = newRelease.find((game) => game.id === id);

  return (
    <div className="w-full md:w-[calc(100%-300px)]">
      <div className="relative w-full h-72 bg-black py-4 rounded-lg">
        {mediaItems[currentMedia]?.type === "video" ? (
          <video
            src={mediaItems[currentMedia]?.src}
            controls
            autoPlay
            loop
            className="w-full h-full object-cover"
          ></video>
        ) : (
          <img
            src={mediaItems[currentMedia]?.src}
            alt={`media-${currentMedia}`}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="flex justify-between md:justify-center items-center mt-4 gap-4">
        <button
          className="text-[#ffffffa6] text-[20px] hover:text-white bg-[#ffffff26] w-[30px] h-[30px] rounded-full flex items-center justify-center"
          onClick={() => {
            setCurrentMedia((prev) => {
              const newIndex = prev === 0 ? mediaItems.length - 1 : prev - 1;
              document.getElementById(`thumbnail-${newIndex}`)?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
              return newIndex;
            });
          }}
        >
          <MdKeyboardArrowLeft />
        </button>
        <div className="flex gap-2 overflow-hidden w-[200px] md:w-full overflow-x-auto no-scrollbar">
          {mediaItems.map((media, index) => (
            <div
              key={index}
              id={`thumbnail-${index}`}
              onClick={() => {
                setCurrentMedia(index);
                document.getElementById(`thumbnail-${index}`)?.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                });
              }}
              className={`w-[100px] h-12 rounded-lg cursor-pointer shrink-0 ${
                currentMedia === index ? "border-2 border-white" : "opacity-50"
              }`}
            >
              {media.type === "video" ? (
                <img
                  src={media.img}
                  alt={`video-${index}`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={media.src}
                  alt={`image-${index}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
        <button
          className="text-[#ffffffa6] hover:text-white text-[20px] bg-[#ffffff26] w-[30px] h-[30px] rounded-full flex items-center justify-center"
          onClick={() => {
            setCurrentMedia((prev) => {
              const newIndex = prev === mediaItems.length - 1 ? 0 : prev + 1;
              document.getElementById(`thumbnail-${newIndex}`)?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "center",
              });
              return newIndex;
            });
          }}
        >
          <MdKeyboardArrowLeft className="rotate-180" />
        </button>
      </div>
      <div className="mt-[50px]">
        <p>{game.description}</p>
      </div>
      <div className="py-[50px]">
        <div className="flex justify-between items-start gap-6 w-full">
          <div className="w-[49%]">
            <h3 className="text-[#ffffffa6] text-[14px] mb-2">Genres</h3>
            <div className="flex flex-wrap gap-2">
              {game.tags.slice(0, 3).map((genre, index) => (
                <span
                  key={index}
                  className="py-1 px-2 bg-[#ffffff26] hover:bg-[#ffffff59] text-[14px] font-medium rounded-[4px] cursor-pointer trans"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          </div>
          <div className="w-[49%] border-l border-[#404044] px-5">
            <h3 className="text-[#ffffffa6] text-[14px] mb-2">Features</h3>
            <div className="flex flex-wrap gap-2">
              {game.tags.slice(3, 6).map((feature, index) => (
                <span
                  key={index}
                  className="py-1 px-2 bg-[#ffffff26] hover:bg-[#ffffff59] text-[14px] font-medium rounded-[4px] cursor-pointer trans"
                >
                  {feature.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${
              isExpanded ? "h-full" : "h-[500px]"
            }  overflow-hidden relative`}
          >
            <h5 className="uppercase text-[#ee6d46] text-[17px] my-[30px]">
              Fight To Reach highpoint
            </h5>
            <p className="text-[#ffffffa6]">
              As Whitaker, your goal is to fight to reach Highpoint. To do that,
              you must traverse the Event Containment Area – an area where
              humans cannot survive. Whitaker must project his mind into a
              Needle, a robust drone capable of surviving in the harsh
              conditions of the ECA, and also of piloting your Tank. Use your
              Needle and Tank to combat the vehicles and creatures of the ECA to
              reach Highpoint.
            </p>
            <h5 className="uppercase text-[#ee6d46] text-[17px] my-5">
              Rich, Detailed Sci-Fi world
            </h5>
            <p className="text-[#ffffffa6]">
              Explore the ECA, a world torn apart by war and a mysterious
              cataclysmic event that left it uninhabitable by humans. Explore
              the Deadzone, where humans must “tele-project” their minds into
              drones in order to survive and pillage the remains of a once great
              society.
            </p>
            <p>
              On an asteroid-bound service station in an unfrequented space
              lane, Wilbur carves out a paltry living as a mechanic, repairing
              as many ships as he can to afford the ever-rising R.E.N.T payments
              to his corporate overlord, Uncle Chop. Where most of his customers
              find meaning in pastimes like worshipping deranged space gods,
              feeding random crap to a sentient black hole, endlessly digging
              for The Treasure™ or mentally enslaving donut shop workers, Wilbur
              lives a more humble life, fixing the galaxy’s ills one broken ship
              module at a time.
            </p>
            <p>
              On an asteroid-bound service station in an unfrequented space
              lane, Wilbur carves out a paltry living as a mechanic, repairing
              as many ships as he can to afford the ever-rising R.E.N.T payments
              to his corporate overlord, Uncle Chop. Where most of his customers
              find meaning in pastimes like worshipping deranged space gods,
              feeding random crap to a sentient black hole, endlessly digging
              for The Treasure™ or mentally enslaving donut shop workers, Wilbur
              lives a more humble life, fixing the galaxy’s ills one broken ship
              module at a time.
            </p>
            <div
              className={`absolute bottom-0 h-[100px] w-full show-more ${
                isExpanded ? "hidden" : "block"
              }`}
            ></div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-5 flex items-center"
          >
            <span className="flex items-center gap-1 hover:underline">
              {isExpanded ? "Show Less" : "Show More"}
              <MdKeyboardArrowUp
                className={`text-[30px] mt-1 ${
                  isExpanded ? "rotate-0" : "rotate-180"
                }`}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailSlider;
