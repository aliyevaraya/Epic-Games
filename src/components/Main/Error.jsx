import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div id="support-top" className="error h-[20vh]"></div>
      <div className="bg-[#101014] text-center pb-[60px]">
        <div className="containerr sm:w-[550px] m-auto text-white">
          <div className="flex justify-center mb-[32px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.6477 7.36397C36.1833 5.89951 33.8089 5.89951 32.3444 7.36397C30.88 8.82844 30.88 11.2028 32.3444 12.6673L40.9428 21.2656H34.9961C24.6408 21.2656 16.2461 29.6603 16.2461 40.0156V85.0156C16.2461 95.371 24.6408 103.766 34.9961 103.766H84.9961C95.3514 103.766 103.746 95.371 103.746 85.0156V40.0156C103.746 29.6603 95.3514 21.2656 84.9961 21.2656H79.0494L87.6477 12.6673C89.1122 11.2028 89.1122 8.82844 87.6477 7.36397C86.1833 5.89951 83.8089 5.89951 82.3444 7.36397L68.4428 21.2656H51.5494L37.6477 7.36397ZM96.2461 40.0156C96.2461 33.8024 91.2093 28.7656 84.9961 28.7656H34.9961C28.7829 28.7656 23.7461 33.8024 23.7461 40.0156V85.0156C23.7461 91.2288 28.7829 96.2656 34.9961 96.2656H84.9961C91.2093 96.2656 96.2461 91.2288 96.2461 85.0156V40.0156ZM52.4961 55.0156C52.4961 59.1578 49.1382 62.5156 44.9961 62.5156C40.854 62.5156 37.4961 59.1578 37.4961 55.0156C37.4961 50.8735 40.854 47.5156 44.9961 47.5156C49.1382 47.5156 52.4961 50.8735 52.4961 55.0156ZM74.9961 62.5156C79.1382 62.5156 82.4961 59.1578 82.4961 55.0156C82.4961 50.8735 79.1382 47.5156 74.9961 47.5156C70.854 47.5156 67.4961 50.8735 67.4961 55.0156C67.4961 59.1578 70.854 62.5156 74.9961 62.5156ZM4.99609 48.7656C7.06716 48.7656 8.74609 50.4446 8.74609 52.5156V77.5156C8.74609 79.5867 7.06716 81.2656 4.99609 81.2656C2.92503 81.2656 1.24609 79.5867 1.24609 77.5156V52.5156C1.24609 50.4446 2.92503 48.7656 4.99609 48.7656ZM114.996 48.7656C117.067 48.7656 118.746 50.4446 118.746 52.5156V77.5156C118.746 79.5867 117.067 81.2656 114.996 81.2656C112.925 81.2656 111.246 79.5867 111.246 77.5156V52.5156C111.246 50.4446 112.925 48.7656 114.996 48.7656ZM60 85C62.7614 85 65 82.7614 65 80C65 77.2386 62.7614 75 60 75C57.2386 75 55 77.2386 55 80C55 82.7614 57.2386 85 60 85Z"
                fill="url(#paint0_linear_7137_247371)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_7137_247371"
                  x1="118.746"
                  y1="6.26563"
                  x2="-4.964"
                  y2="95.1194"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFB061"></stop>
                  <stop offset="1" stopColor="#FF6173"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="mb-[24px] text-[32px] font-bold">
            <span>Page not found</span>
          </div>
          <p className="w-full sm:w-[480px] text-[#ffffffa6] mb-[48px] text-[18px]">
            The page you were looking for was not found. Please verify the
            link/URL or try starting back at our home page.
          </p>
          <Link
            to={"/"}
            className="bg-[#26bbff] hover:bg-[#72d3ff] trans py-3 text-black text-[14px] font-medium rounded-lg flex w-full justify-center"
          >
            Go to the home page
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error;
