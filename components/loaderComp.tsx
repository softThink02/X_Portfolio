"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoaderComp() {
  const controls = useAnimationControls();
  const [isDone, setIsDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let active = true;

    const sequence = async () => {
      await controls.start("visible");
      await new Promise((res) => setTimeout(res, 1500));

      if (!active) return;
      await controls.start("explode");

      setTimeout(() => {
        if (active) setIsDone(true);
      }, 800);
    };

    sequence();

    return () => {
      active = false;
    };
  }, [mounted, controls]);

  if (isDone) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isDone ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:20px_20px]"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        variants={{
          hidden: { scale: 0.5, opacity: 0 },
          visible: {
            scale: [0.5, 1.3, 1],
            opacity: [0, 1, 1],
            rotate: [0, 90, 0],
          },
          explode: {
            scale: [1, 4, 0],
            opacity: [1, 1, 0],
            rotate: [0, 720, 0],
          },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="relative w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 shadow-[0_0_80px_10px_rgba(147,51,234,0.5)]"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 border-[2px] border-blue-400 rounded-full opacity-60"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-2 border-[2px] border-pink-400 rounded-full opacity-60"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: [0, 1, 1, 0], y: [40, 0, 0, -40] }}
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        className="absolute text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500 tracking-widest"
      >
        XTHINK ⚡
      </motion.h1>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1, 2], opacity: [0, 0.6, 0] }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute w-[300px] h-[300px] rounded-full bg-white/30 blur-3xl"
      />
    </motion.div>
  );
}
