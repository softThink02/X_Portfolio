"use client";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import Modal from "./shared/modal";
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setTimeout(() => {
            setShowModal(true);
          }, 2000);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-10 px-2 w-full">
      <AnimatePresence>
        {showModal && (
          <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0.5, scale: 0.9, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
                Copy My Email
              </h2>

              <p className="text-neutral-600 dark:text-neutral-400 font-poppins mb-6">
                Quickly copy my email address to your clipboard.
              </p>

              <motion.button
                className="relative bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white font-medium py-2.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(244, 63, 94, 0)",
                    "0 0 20px rgba(244, 63, 94, 0.5)",
                    "0 0 0px rgba(244, 63, 94, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                onClick={() => {
                  navigator.clipboard.writeText("softthink02@gmail.com");
                  setShowModal(false);
                }}
              >
                📧 Copy Email
              </motion.button>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>

      <h1 className="dark:text-white lg:heading text-[20px] text-center md:text-[28px] lg:text-[32px] xl:text-[48px] text-black">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(56, 106, 127)",
              backgroundColor:
                "linear-gradient(90deg, #020519 0%, #0b0d1c 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
