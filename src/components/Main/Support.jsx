import { CiSearch } from "react-icons/ci";

function Support() {
  return (
    <div className="text-white bg-[#141414]">
      <section>
        <div id="support-top">
          <div className="container m-auto">
            <div className="support-top">
              <div className="notify flex justify-between items-center bg-[#272727] rounded p-[15px] mb-[30px] gap-4">
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
                <h1 className="text-[30px] pr-[10px] leading-9">
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
        <div className="container">
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
    </div>
  );
}

export default Support;
