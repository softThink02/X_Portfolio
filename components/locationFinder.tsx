import { useEffect, useState } from "react";
import {LocalStorage} from '@/_lib/utils'
import { motion } from "framer-motion";

function WelcomeUser() {
  const [location, setLocation] = useState<string>(LocalStorage("get", { key: "location" }) || 'Detecting User Region...');
  const isDetected = location.trim().toLowerCase() !== "detecting user region...";
  useEffect(() => {
    if (location !== "Detecting User Region...") return;
    const fetchLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setLocation(data.city || data.region || data.country_name);
        LocalStorage("set", {
          key: "location",
          value: location,
          ttl: 1000 * 60 * 60 * 24
        });

      } catch (err) {
        console.error("Location fetch failed:", err);
      }
    };

    fetchLocation();
  }, []);

  return (
    <motion.div
      className="text-white text-lg font-semibold"
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 120,
      }}
    >
      <motion.p
        className="font-nohemi font-[500] text-[14px] md:text-[16px]"
        key={isDetected ? "detected" : "detecting"}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        {isDetected ? (
          <>
            Welcome! from{" "}
            <motion.span
              className="text-green-400 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 1] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              {location}
            </motion.span>{" "}
            👋
          </>
        ) : (
          <>Welcome! glad to have you 👋</>
        )}
      </motion.p>
    </motion.div>
  );
}

export default WelcomeUser;
