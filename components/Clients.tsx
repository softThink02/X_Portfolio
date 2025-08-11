"use client";

import React from "react";

import {testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import {CardStack} from './ui/card-stack'

const Clients = () => {
  return (
    <section id="testimonials" className="py-4 md:py-10">
      <h1 className="heading">
        Feedback from
        <span className="text-purple"> delighted partners</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] hidden md:flex md:h-[30rem] rounded-md flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </div>

        <div className="h-[50vh] flex md:hidden md:h-[30rem] rounded-md flex-col antialiased w-full justify-center relative">
          <CardStack items={testimonials} />
        </div>
      </div>
    </section>
  );
};

export default Clients;
