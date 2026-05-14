"use client";

import Image from "next/image";
import { useState } from "react";

const About = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="about" className="w-full py-12 md:py-16 text-black">
      <div className="w-[94%] md:w-[85%] xl:w-[75%] mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div className="md:w-[50%] w-full">
          <div className="relative w-full aspect-[3/2] bg-gray-200 overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dugi9xncx/image/upload/v1778795079/me_e4oppc.jpg"
              alt="X"
              width={500}
              height={300}
              className="absolute top-0 left-0 object-cover"
            />
          </div>
        </div>

        <div className="md:w-[50%] w-full dark:text-white text-black ">
          <h2 className="text-[22px] md:text-[26px] xl:text-[30px] font-bold tracking-tight mb-4">
            About Me
          </h2>

          <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-800 dark:text-white">
            I’m a frontend engineer focused on building scalable,
            high-performance web applications with{" "}
            <span className="font-semibold">React</span> and{" "}
            <span className="font-semibold">Next.js</span>. My work goes beyond
            UI implementation — I design systems that are maintainable,
            predictable, and optimized for real-world production environments.
          </p>

          <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-gray-800 dark:text-white">
            I have a strong foundation in JavaScript internals, asynchronous
            behavior, and rendering lifecycles, allowing me to reason about
            performance and eliminate architectural bottlenecks.
          </p>

          {showAll && (
            <>
              <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-gray-800 dark:text-white">
                I work extensively with modern frontend architecture — including
                server/client boundaries, caching strategies, and API
                integration patterns — while maintaining a strong focus on
                accessibility, security, and user experience.
              </p>

              <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-gray-800 dark:text-white">
                Beyond coding, I think in systems: performance budgets,
                deployment pipelines, and how frontend decisions impact the
                overall platform. My goal is to build software that scales
                reliably under real-world usage.
              </p>
            </>
          )}

          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-4 text-sm font-semibold underline underline-offset-4"
          >
            {showAll ? "See less" : "See more"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
