import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {

  const openGmailCompose = () => {
    const to = "softthink02@gmail.com";
    const subject = encodeURIComponent("Hello — I'd like to connect");
    const body = encodeURIComponent("Hi,\n\nI found your portfolio and...");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}&tf=1`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="w-full pt-10 mt:pt-20 pb-6 md:pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[50vw]">
          Prepared to elevate <span className="text-purple">your</span> digital
          presence to new heights?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Get in touch with me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>

        <div onClick={openGmailCompose} className="cursor-pointer">
          <MagicButton
            title="Let’s connect"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Oguagu Ekenechukwu David (Xthink)
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                <img src={info.img} alt="icons" width={20} height={20} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
