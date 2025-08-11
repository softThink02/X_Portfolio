import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import {HeroHighlight} from './ui/hero-highlight'
import { useState, useEffect} from "react";


const Hero = () => {
  const [text, setText] = useState<string>("Beautiful");

  useEffect(() => {
    setTimeout(() => {
      setText('Flawless')
    }, 3000)
  }, [])

  return (
    <div className="md:pb-10 mb-6 pt-12 md:pt-20">
      <HeroHighlight>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Interactive Web Experiences with Next.js
            </p>

            <TextGenerateEffect
              words={`Shaping Vision into ${text} User Journeys`}
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi! I&apos;m Xthink, a Frontend Developer based in Nigeria.
            </p>

            <a href="#about">
              <MagicButton
                title="Explore My Projects"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </HeroHighlight>
    </div>
  );
};

export default Hero;
