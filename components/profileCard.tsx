import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { useEffect, useState } from "react";
import { FooterHeader } from "./shared/animate";

export default function ProfileCard() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-[80%] mx-auto my-0">
      <div className="w-full ml-8 flex justify-start">
        <div className=" rounded-full relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] xl:h-[160px] xl:w-[160px] overflow-hidden mb-1 mt-4">
          <Image src="/me.jpg" alt="X Avatar" fill />
        </div>
      </div>
      <TextGenerateEffect
        words={`Shaping Vision into Flawless User Journeys`}
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
      />

      <div className="text-center md:tracking-wider font-poppins mb-4 font-bold text-sm md:text-lg lg:text-2xl">
        Hi <FooterHeader variant="handSpan">👋</FooterHeader>! I&apos;m Xthink,
        a ReactJs (NextJs) Frontend Developer.
      </div>

      <div className="flex items-center justify-center py-2 gap-4">
        <div className="flex items-center">
          <MagicButton
            title="Hire Me"
            icon={<FaLocationArrow size={12} />}
            position="right"
          />
        </div>

        <div
          className={`flex items-center justify-center bg-black-200 text-green-700 h-[60px] rounded-full relative overflow-hidden w-[220px] md:w-[250px] lg:w-[300px] xl:w-[350px]`}
        >
          <AnimatePresence mode="wait">
            {showText ? (
              <FooterHeader
                variant="heroDiv"
                className="absolute inset-0 flex text-[12px] font-bold md:text-[14px] lg:text-[16px] xl:text-[20px] items-center justify-center"
              >
                <span className="w-3 h-3 bg-green-500 font-poppins rounded-full mr-2"></span>
                Available for new projects
              </FooterHeader>
            ) : (
              <FooterHeader
                variant="heroImg"
                className="absolute inset-0 flex items-center justify-center text-[20px] lg:text-[24px] xl:text-[32px]"
              >
                ✈️
              </FooterHeader>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
