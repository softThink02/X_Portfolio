"use client";

import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { FooterHeader } from "./ui/animate";

export default function ProfileCard() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col items-center justify-center w-[80%] mx-auto relative">
        <m.div
          className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 blur-3xl opacity-40"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <m.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
          className="rounded-full relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] overflow-hidden shadow-[0_0_40px_rgba(147,51,234,0.25)]"
        >
          <Image
            src="https://res.cloudinary.com/dugi9xncx/image/upload/v1778795082/myEmoji_uu5v2x.jpg"
            alt="X Avatar"
            fill
            sizes="140px"
            priority
          />
        </m.div>

        <div className="mt-6">
          <TextGenerateEffect
            words="Shaping Vision into Flawless User Journeys"
            className="text-center text-[28px] md:text-5xl font-bold"
          />
        </div>

        <div className="text-center mt-4 font-bold text-sm md:text-lg">
          Hi <FooterHeader variant="handSpan">👋</FooterHeader>! I&apos;m{" "}
          <span className="text-purple-500">David X</span>, a React (Next.js)
          Frontend Developer.
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
          <MagicButton
            title="Hire Me"
            icon={<FaLocationArrow size={12} />}
            position="right"
          />

          <div className="flex items-center justify-center bg-black-200 text-green-700 h-[60px] rounded-full w-[260px] md:w-[300px] relative overflow-hidden">
            <m.div
              className="absolute inset-0 flex items-center justify-center text-[14px] md:text-[16px] font-bold"
              animate={{ opacity: [1, 0.7, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
              Available for new projects
            </m.div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
