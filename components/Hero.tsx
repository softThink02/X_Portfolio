
import {HeroHighlight} from './ui/hero-highlight'
import ProfileCard from "./profileCard";


const Hero = () => {

  return (
    <div className="lg:mt-4">
      <HeroHighlight>
        <ProfileCard/>
      </HeroHighlight>
    </div>
  );
};

export default Hero;
