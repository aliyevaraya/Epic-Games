const accountsData = [
  {
    img: "images/epic-games-store-bg.jpg",
    title: "Epic Games Store",
    logo: "images/epic-games-store-logo.svg",
  },
  {
    img: "images/accounts-bg.jpg",
    title: "Accounts",
    logo: "images/account-icon.svg",
  },
  {
    img: "images/our-creator-program.jpg",
    title: "Our Creator Programs",
    logo: "images/support-a-creator-icon.svg",
  },
  {
    img: "images/new-payments.jpg",
    title: "Payments",
    logo: "images/payments-icon.svg",
  },
  {
    img: "images/technical-bg.jpg",
    title: "Technical",
    logo: "images/technical-icon.svg",
  },
  {
    img: "images/parental-bg.jpg",
    title: "Parent / Guardian Support",
    logo: "images/parental-icon.svg",
  },
];

function Accounts() {
  return (
    <section className="pt-[80px]">
      <div className="text-[22px] mb-[15px]">Accounts</div>
      <div className="flex flex-wrap justify-between gap-4">
        {accountsData.map((game, i) => (
          <a
            key={i}
            href=""
            className="group h-[30vh] w-full md:w-[calc(50%-12px)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full overflow-hidden rounded-[10px] ">
              <img
                className="w-full h-full object-cover group-hover:scale-[1.05] trans"
                src={game.img}
                alt={game}
              />
            </div>
            <div className="account-content w-[65%] sm:w-[200px] md:w-[240px] absolute top-0 right-0 h-[112%] flex flex-col items-end text-right p-[20px] xs:pl-[60px] bg-[#272727] rounded-r-[10px] -mx-[2px]">
              <img
                className="w-[60px] h-[60px] mb-3"
                src={game.logo}
                alt={game.title}
              />
              <p className="font-bold xs:text-[18px] ml-[30px] xs:ml-0">
                {game.title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Accounts;
