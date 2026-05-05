"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import FloatingDockBar from "@/components/floatingNavbar";
import About from "@/components/about"
import dynamic from "next/dynamic";
import { DivLoader } from "@/components/loaderComp";

const TechMastery = dynamic(() => import("@/components/techMastery"), {
  ssr: false,
  loading: () => <DivLoader />,
});

const Home = () => {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto lg:px-5">
      <div className="max-w-7xl w-full">
        <FloatingDockBar />
        <Hero />
        <TechMastery />
        <About />
        <RecentProjects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
