function Enterprise() {
  const enterpriseData = [
    {
      img: "images/unreal-engine.jpg",
      logo: "images/unreal-engine-logo.svg",
    },
    {
      img: "images/fab-tile.jpg",
      logo: "images/fab-logo.png",
    },
    {
      img: "images/unreal-editor-for-fortnite-bg.jpg",
      logo: "images/unreal-editor-for-fortnite-logo.png",
    },
    {
      img: "images/twinmotion.jpg",
      logo: "images/twinmotion-logo.svg",
    },
    {
      img: "images/epic-online-services.jpg",
      logo: "images/epic-online-services-logo.svg",
    },
    {
      img: "images/kws-full.png",
      logo: "images/kws-full-logo.png",
    },
  ];

  return (
    <section id="enterprise" className="py-[80px]">
      <div className="text-[22px] mb-[25px]">Enterprise</div>
      <div className="grid grid-cols-6 grid-rows-3 gap-[25px]">
        {enterpriseData.map((item, i) => (
          <a
            key={i}
            href=""
            className={`group relative col-span-6 rounded-xl overflow-hidden ${
              i === 0
                ? "md:col-span-6"
                : i === 1
                ? "md:col-span-3 md:row-start-2"
                : i === 2
                ? "md:col-span-3 md:col-start-4 md:row-start-2"
                : "md:col-span-2 md:row-start-3"
            }`}
          >
            <img
              className="w-full h-full object-cover group-hover:scale-[1.05] trans"
              src={item.img}
              alt="Unreal Engine"
            />
            <div
              className={`absolute inset-0 bg-black bg-opacity-[.2] flex items-center w-full ${
                i === 0
                  ? "md:justify-start justify-center pl-[50px]"
                  : "justify-center"
              }`}
            >
              <img
                className={`w-[280px] ${
                  i === 1 || i === enterpriseData.length - 1
                    ? "h-[90px]"
                    : "h-full"
                }`}
                src={item.logo}
                alt="game logo"
              />
              <img
                className={`${
                  i === enterpriseData.length - 1 ? "hidden" : "block"
                } absolute right-0 top-0`}
                src="images/arrow.svg"
                alt="arrow"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Enterprise;
