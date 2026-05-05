"use client";

import { useEffect, useState } from "react";
import { LocalStorage } from "@/_lib/utils";
import { motion } from "framer-motion";
import { FooterHeader } from "../_lib/shared/animate";
import Image from "next/image";

export default function WelcomeUser() {
  const [isClient, setIsClient] = useState(false);
  const [location, setLocation] = useState<string>("Detecting your region...");

  const isDetected =
    location.trim().toLowerCase() !== "detecting your region...";

  useEffect(() => {
    setIsClient(true);

    const stored = LocalStorage("get", { key: "location" });
    if (stored) {
      setLocation(stored);
      return;
    }

    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        const detected = data.country_name || "your country";

        setLocation(detected);

        LocalStorage("set", {
          key: "location",
          value: detected,
          ttl: 1000 * 60 * 60 * 24,
        });
      } catch (err) {
        console.error("Location fetch failed:", err);
        setLocation("your country");
      }
    };

    fetchLocation();
  }, []);

  if (!isClient) return null;

  return (
    <motion.div
      className="text-white text-lg md:text-xl font-semibold mt-12 text-center select-none"
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 120,
      }}
    >
      <motion.div
        className="font-nohemi font-[500] text-[14px] md:text-[17px] tracking-wide"
        key={isDetected ? "detected" : "detecting"}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {isDetected ? (
          <>
            <div className="relative  w-32 h-32 mx-auto my-0">
              <Image src="/location.svg" fill alt="welcome" />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hey!<FooterHeader variant="handSpan">👋</FooterHeader>there! It’s
              great to see someone from{" "}
            </motion.span>

            <motion.span
              className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-bold"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              {location}
            </motion.span>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {" "}
              — Welcome aboard!
            </motion.span>
          </>
        ) : (
          <motion.span
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
              ease: "easeInOut",
            }}
          >
            🌍 Detecting your region... hang tight!
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
