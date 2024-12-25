import { useState } from "react";

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
  
  function SelfServices() {
    const [showAll, setShowAll] = useState(false);
  return (
    <section className="py-[80px]">
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
          <div className="bg-hover flex items-center relative py-5 min-h-[90px] px-5 gap-3 !bg-[#ffffff0a] rounded-lg w-full md:w-[calc(50%-8px)] 2xl:w-[calc(33.3%-8px)] cursor-pointer">
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
    </section>
  );
}

export default SelfServices;
