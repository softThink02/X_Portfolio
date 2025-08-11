"use client";

import React from "react";

import {testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-4 md:py-10">
      <h1 className="heading">
        Feedback from
        <span className="text-purple"> delighted partners</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
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
