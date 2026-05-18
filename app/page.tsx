"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import FloatingDockBar from "@/components/floatingNavbar";
import About from "@/components/about";
import dynamic from "next/dynamic";
import { DivLoader } from "@/components/loaderComp";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "@/components/error/errorFallback";

const TechMastery = dynamic(() => import("@/components/techMastery"), {
  ssr: false,
  loading: () => <DivLoader />,
});

const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  ssr: false,
  loading: () => <DivLoader />,
});

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto lg:px-5">
      <div className="max-w-7xl w-full">
        <FloatingDockBar />
        <Hero />
        <About />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <TechMastery />
        </ErrorBoundary>
        <Experience />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <RecentProjects />
        </ErrorBoundary>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
