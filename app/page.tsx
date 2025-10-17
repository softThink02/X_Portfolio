"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar"
import WelcomeUser from "@/components/locationFinder";
import Modal from '@/components/shared/modal';

import { PiCertificateLight } from "react-icons/pi";
import { LuContactRound } from "react-icons/lu";
import { MdOutlineTaskAlt } from "react-icons/md";
import { CiSquareInfo } from "react-icons/ci";
import { useState } from "react";

const navItems = [
  { title: "About", href: "#about", icon: <CiSquareInfo /> },
  { title: "Projects", href: "#projects", icon: <MdOutlineTaskAlt /> },
  { title: "Testimonials", href: "#experience", icon: <PiCertificateLight /> },
  { title: "Contact", href: "#contact", icon: <LuContactRound /> },
];

const Home = () => {

  const [open, setOpen] = useState<boolean>(true)

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto lg:px-5">
      <div className="max-w-7xl w-full">
        <Modal isOpen={open} onCloseAction={() => setOpen(false)}>
          <WelcomeUser />
        </Modal>
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
