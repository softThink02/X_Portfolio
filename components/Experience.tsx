"use client";

import { useRef } from "react";
import { workExperience } from "@/_lib/data";
import { Button } from "./ui/MovingBorders";

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="w-full py-12 px-4 md:px-8"
    >
      <h1 className="dark:text-white text-5xl font-extrabold tracking-tight lg:heading text-[20px] mb-2 lg:mb-4 text-center md:text-[28px] lg:text-[32px] xl:text-[48px] text-black">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:bg-transparent dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl text-black dark:text-white font-bold">
                  {card.title}
                </h1>
                <p className="text-start dark:text-white-100 mt-3 text-black font-semibold">
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
