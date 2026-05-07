"use client";

import { motion } from "framer-motion";
import { Code2, Zap, Cpu, Terminal } from "lucide-react";
import { memo } from "react";

const techStack = [
  {
    icon: <Code2 className="w-10 h-10" />,
    name: "React.js",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    name: "Node.js",
    color: "from-green-400 to-emerald-500",
  },
  {
    icon: <Cpu className="w-10 h-10" />,
    name: "TypeScript",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: <Terminal className="w-10 h-10" />,
    name: "Next.js",
    color: "from-gray-700 to-black",
  },
];

function TechMastery() {

  return (
    <section className="relative p-4 md:my-8 my-4  text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-red-500/10 blur-3xl"
      />

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="text-center text-5xl font-extrabold mb-20 tracking-tight"
      >
        <h1 className="dark:text-white lg:heading text-[20px] mb-2 lg:mb-4 text-center md:text-[28px] lg:text-[32px] xl:text-[48px] text-black">
          Technical Mastery <span className="text-purple">My Stack</span>
        </h1>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 relative z-10">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, rotate: 90, opacity: 0 }}
            whileInView={{
              scale: 1,
              rotate: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                delay: index * 0.15,
              },
            }}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              boxShadow: "0 0 30px rgba(255,0,100,0.4)",
            }}
            className={`flex flex-col items-center justify-center w-40 h-40 rounded-3xl bg-gradient-to-br ${tech.color} text-white font-semibold tracking-wide transform transition-transform duration-300`}
          >
            <motion.div
              whileHover={{
                rotate: [0, 15, -15, 0],
                transition: { duration: 0.8 },
              }}
              className="mb-3"
            >
              {tech.icon}
            </motion.div>
            {tech.name}
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, type: "spring" }}
        className="text-center text-gray-400 mt-20 md:text-[16px] lg:text-lg text-[14px] max-w-2xl mx-auto"
      >
        Pushing boundaries of web engineering with precision, velocity, and code
        that *never blinks*.
      </motion.p>
    </section>
  );
}

export default memo(TechMastery);
