import { gridItems } from "@/data/index";
import {HoverEffect} from './ui/card-hover-effect'
import Image from "next/image";
import {BoxesCore} from '@/components/ui/backgroundBox'

const Grid = () => {
  return (
    <section id="about">
      <BoxesCore />
      <div className="w-[94%] px-2 shadow-md shadow-purple md:w-[85%] xl:w-[70%] mx-auto flex flex-col md:flex-row items-start justify-between py-6 md:py-8 xl:py-16 text-gray-200">
        <div className="md:w-[65%]">
          <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-6 text-green-500">
            aboutMe(<span className="text-white"> )</span>
          </h2>
          <p className="font-[500] text-[12px] md:text-[14px] xl:text-[16px] font-poppins text-gray-300">
            I’m a dedicated frontend developer specializing in{" "}
            <span className="text-green-500 font-semibold">
              React.js (Next.js)
            </span>
            , with a strong focus on building high-performance, responsive, and
            intuitive web applications. My expertise in{" "}
            <span className="text-green-500 font-semibold">HTML</span>,{" "}
            <span className="text-green-500 font-semibold">CSS</span>, and{" "}
            <span className="text-green-500 font-semibold">JavaScript</span>{" "}
            enables me to craft clean, scalable, and maintainable code that
            aligns with modern development standards. I’m deeply passionate
            about creating tailored digital experiences that not only meet but
            surpass user and client expectations, ensuring every project I
            deliver is efficient, purposeful, and impactful.
          </p>
        </div>

        <div className="md:w-[30%] mt-6 md:mt-0  flex justify-center">
          <div className="bg-[#2b2b2b] rounded-xl p-2 shadow-md w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] flex flex-col items-center">
            <div className="relative w-[160px] h-[160px]  overflow-hidden rounded-md md:rounded-full">
              <Image src="/me.jpg" alt="X" fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
      <HoverEffect items={gridItems} />
    </section>
  );
};

export default Grid;
