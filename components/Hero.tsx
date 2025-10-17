
import {HeroHighlight} from './ui/hero-highlight'
import ProfileCard from "./profileCard";


const Hero = () => {

  return (
    <div className="lg:mt-4 w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[60%] mx-auto my-0">
      <HeroHighlight>
        <ProfileCard/>
      </HeroHighlight>
    </div>
  );
};

export default Hero;
