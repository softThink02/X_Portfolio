"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { useEffect, useState } from "react";
import { FooterHeader } from "./shared/animate";

export default function ProfileCard() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowText((prev) => !prev), 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-[80%] mx-auto my-0 relative"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <motion.div
        className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 blur-3xl opacity-40"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {["💻", "🚀", "🎨"].map((emoji, i) => (
        <motion.span
          key={i}
          className="absolute text-2xl md:text-3xl"
          style={{
            top: "100px",
            left: "50%",
            transformOrigin: "0px 100px",
          }}
          animate={{
            rotate: [0, 360],
            x: [0, 20, -20, 0],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {emoji}
        </motion.span>
      ))}

      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: [0, -3, 3, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 8,
        }}
        className="rounded-full relative w-[120px] h-[120px] md:w-[140px] md:h-[140px] lg:w-[160px] lg:h-[160px] xl:w-[180px] xl:h-[180px] overflow-hidden shadow-[0_0_60px_10px_rgba(147,51,234,0.3)]"
      >
        <Image src="/me.jpg" alt="X Avatar" fill />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: { duration: 1, ease: "easeOut", delay: 0.5 },
        }}
      >
        <TextGenerateEffect
          words="Shaping Vision into Flawless User Journeys"
          className="text-center text-[32px] md:text-5xl lg:text-6xl font-bold"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center md:tracking-wider font-poppins mb-4 font-bold text-sm md:text-lg lg:text-2xl"
      >
        Hi <FooterHeader variant="handSpan">👋</FooterHeader>! I&apos;m{" "}
        <span className="text-purple-500">Xthink</span>, a React (Next.js)
        Frontend Developer.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { delay: 1.5, duration: 0.8, ease: "easeOut" },
        }}
        className="flex flex-col md:flex-row items-center justify-center py-2 gap-4"
      >
        <MagicButton
          title="Hire Me"
          icon={<FaLocationArrow size={12} />}
          position="right"
        />

        <motion.div
          className="flex items-center justify-center bg-black-200 text-green-700 h-[60px] rounded-full relative overflow-hidden w-[220px] md:w-[250px] lg:w-[300px] xl:w-[350px]"
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 rgba(34,197,94,0)",
              "0 0 15px rgba(34,197,94,0.4)",
              "0 0 0 rgba(34,197,94,0)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
