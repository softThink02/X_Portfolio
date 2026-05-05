"use client";

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { workExperience } from "@/_lib/data";
import { Button } from "./ui/MovingBorders";
import Modal from "../_lib/shared/modal";
import { LocalStorage } from "@/_lib/utils";
import Image from "next/image";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [showModal, setShowModal] = useState(false);

  async function checkClipboardForEmail() {
    if (typeof navigator === "undefined" || !navigator.clipboard?.readText)
      return true;
    try {
      const text = await navigator.clipboard.readText();
      if (!text.trim()) return true;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return !emailPattern.test(text.trim());
    } catch {
      return true;
    }
  }

  useEffect(() => {
    if (LocalStorage("get", { key: "emailCopied" })) return;
    if (typeof window === "undefined" || !("IntersectionObserver" in window))
      return;
    const alreadyShown = sessionStorage.getItem("emailPopupShown");
    if (alreadyShown) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setTimeout(async () => {
            const allowed = await checkClipboardForEmail();
            if (allowed) {
              setShowModal(true);
              sessionStorage.setItem("emailPopupShown", "true");
            }
          }, 2000);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full py-12 px-4 md:px-8"
    >
      <AnimatePresence>
        {showModal && (
          <Modal isOpen={showModal} onCloseAction={() => setShowModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="lg:text-2xl md:text-[16px] text-[14px] font-semibold text-neutral-800 mt-12 dark:text-neutral-100 mb-2">
                Copy My Email
              </h2>

              <p className="text-neutral-600 md:text-[16px] text-[12px] dark:text-neutral-400 font-poppins mb-6">
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
                  LocalStorage("set", {
                    key: "emailCopied",
                    value: true,
                  });
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

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              // background: "linear-gradient(90deg, #6a6b74 0%, #16161a 100%)",
              background: "black",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:w-32 relative md:w-20 w-16">
                <Image src={card.thumbnail} alt={card.title} fill />
              </div>
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl text-white font-bold">
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
}
