"use client";
import { useEffect } from "react";
import { m, stagger, useAnimate } from "motion/react";

import { cn } from "@/_lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      },
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <m.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <m.span
              key={word + idx}
              className={` ${idx > 3 ? "text-purple" : "dark:text-white text-black"
                } opacity-0`}
            >
              {word}{" "}
            </m.span>
          );
        })}
      </m.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-[16px] md:text-[24px] lg:text-[28px] xl:text-[40px] text-black leading-tight tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
