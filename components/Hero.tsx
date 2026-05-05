import { HeroHighlight } from "./ui/hero-highlight";
import dynamic from "next/dynamic";
import { DivLoader } from "./loaderComp";
// import WelcomeUser from "@/components/locationFinder";
// import Modal from "@/_lib/shared/modal";
import { useState } from "react";

const ProfileCard = dynamic(() => import("./profileCard"), {
  ssr: false,
  loading: () => <DivLoader />,
});

const Hero = () => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <div className="lg:mt-4 w-full md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[60%] mx-auto my-0">
      {/* <Modal isOpen={open} onCloseAction={() => setOpen(false)}>
        <WelcomeUser />
      </Modal> */}
      <HeroHighlight>
        <ProfileCard />
      </HeroHighlight>
    </div>
  );
};

export default Hero;
