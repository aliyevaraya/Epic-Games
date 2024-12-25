import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { LiaCaretSquareUp } from "react-icons/lia";

function Footer() {
  const handleScrollToTop = () =>{
    scrollTo({top: 0, behavior: 'smooth'})
  }
  
  return (
    <footer className="bg-[#202020] text-white  p-[1.5em] lg:px-[40px] leading-[1.5rem]">
      <div className="flex justify-between items-center text-[#ccc] text-[1.75em] px-4">
        <div className="flex gap-3">
          <FaFacebook className="hover:text-[#0078f2] trans" />
          <FaTwitter className="hover:text-[#0078f2] trans" />
          <FaYoutube className="hover:text-[#0078f2] trans" />
        </div>
        <div className="text-[38px]">
          <LiaCaretSquareUp onClick={handleScrollToTop} className="hover:text-[#0078f2] trans" />
        </div>
      </div>
      <div className="text-[#e7e7e7] text-[.86em] font-semibold py-5 px-4">
        <div className="pb-4">
          <div className="text-[#ccc] opacity-[.4] text-[.9rem]">Resources</div>
          <div className="xxs:flex">
            <ul className="pr-[24px]">
              <li>
                <a className="hoverBlue trans" href="">
                  Support-A-Creator
                </a>
              </li>
              <li>
                <a className="hoverBlue trans" href="">
                  Distribute on Epic Games
                </a>
              </li>
              <li>
                <a className="hoverBlue trans" href="">
                  Careers
                </a>
              </li>
              <li>
                <a className="hoverBlue trans" href="">
                  Company
                </a>
              </li>
            </ul>
            <div className=" xs:flex">
              <ul className=" pr-[24px]">
                <li>
                  <a className="hoverBlue trans" href="">
                    Fan Art Policy
                  </a>
                </li>
                <li>
                  <a className="hoverBlue trans" href="">
                    UX Research
                  </a>
                </li>
                <li>
                  <a className="hoverBlue trans" href="">
                    Store EULA
                  </a>
                </li>
              </ul>
              <ul className="mt-2 xs:mt-0">
                <li>
                  <a className="hoverBlue trans" href="">
                    Online Services
                  </a>
                </li>
                <li>
                  <a className="hoverBlue trans" href="">
                    Community Rules
                  </a>
                </li>
                <li>
                  <a className="hoverBlue trans" href="">
                    Epic Newsroom
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-4">
          <div className="text-[#ccc] opacity-[.4] text-[.9rem]">
            Made By Epic Games
          </div>
          <div className="flex">
            <ul className="pr-4">
              <li>
                <a className="hoverBlue trans" href="">
                  Battle Breakers
                </a>
              </li>
              <li>
                <a className="hoverBlue trans" href="">
                  Fortnite
                </a>
              </li>
              <li>
                <a className="hoverBlue trans" href="">
                  Infinity Blade
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="hoverBlue trans" href="">
                  Robo Recall
                </a>
              </li>
              <li>
                <a className="hoverBlue trans" href="">
                  Shadow Complex
                </a>
              </li>
              <li>
                <a className="hoverBlue trans" href="">
                  Unreal Tournament
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border border-[#333]" />
      <div className="w-full xl:w-1/2 text-[.71em] leading-[2em] px-4 text-[#ccc] py-4 mt-4">
        <p>
          © 2024, Epic Games, Inc. All rights reserved. Epic, Epic Games, the
          Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine,
          the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament
          logo are trademarks or registered trademarks of Epic Games, Inc. in
          the United States of America and elsewhere. Other brands or product
          names are the trademarks of their respective owners.
        </p>
        <p>
          Our websites may contain links to other sites and resources provided
          by third parties. These links are provided for your convenience only.
          Epic Games has no control over the contents of those sites or
          resources, and accepts no responsibility for them or for any loss or
          damage that may arise from your use of them.
        </p>
      </div>
      <div className="text-center md:flex items-center justify-between px-4">
        <div className="md:flex items-center gap-4 text-[.75em] text-[#e7e7e7] my-4">
          <p className="hoverBlue trans">Terms of Service</p>
          <p className="hoverBlue trans">Privacy Policy</p>
          <p className="hoverBlue trans">Store Refund Policy</p>
        </div>
        <div className="flex justify-center pt-3">
          <a href="">
            <img
              width="65px"
              src="/images/footer-logo.png"
              alt="epic games and unreal engine"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
