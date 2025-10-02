import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { useEffect, useState } from "react";
import {FooterHeader} from './shared/animate'

export default function ProfileCard() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <TextGenerateEffect
        words={`Shaping Vision into Flawless User Journeys`}
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
      />
      <div className=" rounded-full relative w-[96px] h-[96px] overflow-hidden mb-6">
        <Image src="/avatar.jpeg" alt="X Avatar" fill />
      </div>

      <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
        Hi{" "}
        <motion.span
          style={{ display: "inline-block", fontSize: "1.4rem" }}
          animate={{ rotate: [0, 20, -10, 20, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          👋
        </motion.span>
        ! I&apos;m Xthink, a ReactJs (NextJs) Frontend Developer.
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
              <FooterHeader variant="heroDiv" className="absolute inset-0 flex text-[12px] font-bold md:text-[14px] lg:text-[16px] xl:text-[20px] items-center justify-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                Available for new project
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
