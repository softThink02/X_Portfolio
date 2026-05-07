"use client";

import { Home, FileText, Github, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const handleDownloadCV = () => {
  const cvUrl = "/cv.pdf";
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "X_CV.pdf";
  link.click();
};

const navItems = [
  { icon: <Home className="h-5 w-5" />, href: "/", label: "Home" },
  {
    icon: <X className="h-5 w-5" />,
    href: "https://twitter.com/SThink02",
    label: "X",
  },
  {
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/softThink02",
    label: "GitHub",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    href: "/docs",
    label: "Docs",
    onClick: handleDownloadCV,
  },
];

export default function FloatingDockBar() {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest > previous && latest > 80) {
      setVisible(false);
    }

    if (latest < previous) {
      setVisible(true);
    }
  });

  return (
    <motion.div
      animate={{
        opacity: visible ? 1 : 0,
      }}
      initial={{opacity: 1 }}
      transition={{
        duration: 0.25,
        ease: "easeInOut",
      }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[320px]"
    >
      <div className="flex items-center justify-center gap-3 rounded-full border border-neutral-200 bg-white py-2 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
        {navItems.map((item, i) =>
          item.onClick ? (
            <button
              onClick={item.onClick}
              key={i}
              className="flex items-center justify-center rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              {item.icon}
            </button>
          ) : (
            <Link
              key={i}
              href={item.href}
              className="flex items-center justify-center rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            >
              {item.icon}
            </Link>
          ),
        )}

        <div className="h-6 w-px bg-neutral-200 dark:bg-neutral-700" />

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          // href="/blog"
          className="rounded-full bg-black px-4 py-2 text-sm font-semibold text-white shadow-md transition dark:bg-white dark:text-black"
        >
          No Blog
        </motion.a>
      </div>
    </motion.div>
  );
}
