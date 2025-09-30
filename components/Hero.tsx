import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import {HeroHighlight} from './ui/hero-highlight'
import { motion } from "framer-motion";


const Hero = () => {

  return (
    <div className="lg:mt-4">
      <HeroHighlight>
        <div className="flex justify-center relative z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words={`Shaping Vision into Flawless User Journeys`}
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <div className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
              Hi{" "}
              <motion.span
                style={{ display: "inline-block", fontSize: "1.4rem" }}
                animate={{ rotate: [0, 20, -10, 20, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                👋
              </motion.span>
              ! I&apos;m Xthink, a ReactJs (NextJs) Frontend Developer.
            </div>

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
