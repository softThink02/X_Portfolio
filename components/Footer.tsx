"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/_lib/data";
import MagicButton from "./MagicButton";
import { LazyMotion, domAnimation, m } from "motion/react";
import { FooterHeader } from "./ui/animate";
import Image from "next/image";

const Footer = () => {
  const openGmailCompose = () => {
    const to = "softthink02@gmail.com";
    const subject = encodeURIComponent("Hello — I'd like to connect");
    const body = encodeURIComponent("Hi,\n\nI found your portfolio and...");
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}&tf=1`;
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <footer
      className="relative w-full pt-10 md:pt-20 pb-10 overflow-hidden"
      id="contact"
    >
      <LazyMotion features={domAnimation}>
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="w-full h-full relative">
            <Image
              src="/footer-grid.svg"
              alt="grid"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center mx-4 text-center relative z-10">
          <FooterHeader
            variant="h1"
            className="lg:heading lg:max-w-[50vw] text-[22px] md:text-[32px] lg:text-[42px] xl:text-[48px] text-black dark:text-white leading-snug tracking-wide"
          >
            Prepared to elevate your digital presence to new heights?
          </FooterHeader>
          <FooterHeader
            variant="p"
            className="dark:text-white-200 text-black-300 md:mt-8 mt-5 mb-6 text-center px-[6px]"
          >
            Get in touch with me today and let&apos;s discuss how I can help you
            achieve your goals.
          </FooterHeader>

          <div onClick={openGmailCompose} className="cursor-pointer">
            <MagicButton
              title="Let’s connect"
              icon={<FaLocationArrow />}
              position="right"
            />
          </div>
        </div>

        <div className="flex mt-20 md:flex-row flex-col justify-between mx-4 items-center relative z-10">
          <p className="md:text-base text-[12px] text-center md:text-left md:text-[14px] font-poppins">
            Copyright © 2024 Oguagu Ekenechukwu David
          </p>

          <div className="relative w-40 h-40 md:w-52 md:h-52 mt-8 md:mt-0 flex justify-center items-center">
            <m.div
              className="absolute inset-0 flex justify-center items-center"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            >
              {socialMedia.map((info, idx) => (
                <m.a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute"
                  style={{
                    transform: `rotate(${
                      (idx * 360) / socialMedia.length
                    }deg) translate(80px)`,
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    filter: "drop-shadow(0px 0px 6px rgba(255,255,255,0.6))",
                  }}
                >
                  <m.div
                    className="w-12 h-12 relative flex justify-center items-center rounded-full border border-black-300 bg-black-200/60 backdrop-blur-md"
                    whileHover={{
                      scale: 1.2,
                      backgroundColor: "rgba(255,255,255,0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <Image src={info.img} alt={info.link} fill />
                  </m.div>
                </m.a>
              ))}
            </m.div>

            <m.div
              className="absolute inset-0 flex justify-center items-center"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            >
              {socialMedia.map((info, idx) => (
                <m.a
                  key={`${info.id}-mirror`}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute"
                  style={{
                    transform: `rotate(${
                      (idx * 360) / socialMedia.length
                    }deg) translate(60px)`,
                  }}
                >
                  <m.div
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-transparent border border-gray-500/40"
                    whileHover={{
                      scale: 1.3,
                      backgroundColor: "rgba(255,255,255,0.05)",
                      borderColor: "rgba(255,255,255,0.5)",
                    }}
                  />
                </m.a>
              ))}
            </m.div>
          </div>
        </div>
      </LazyMotion>
    </footer>
  );
};

export default Footer;
