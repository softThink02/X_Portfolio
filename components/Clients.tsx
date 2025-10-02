"use client";

import React from "react";

import {testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards"

const Clients = () => {
  return (
    <section id="testimonials" className="py-4 hidden flex-col lg:flex md:py-10">
      <h1 className="lg:heading text-center dark:text-white text-[20px] md:text-[28px] lg:text-[32px] xl:text-[48px] text-black leading-snug tracking-wide">
        Feedback from
        <span className="text-purple"> delighted partners</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="lg:h-[50vh] flex md:h-[30rem] rounded-md flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
