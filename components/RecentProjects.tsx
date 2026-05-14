"use client";

import { projects } from "@/_lib/data";
import { MobileProjectsView } from "@/components/mobileProjectsView";
import { DesktopProjectsView } from "@/components/desktopProjectsView";

export default function RecentProjects() {
  return (
    <section className="py-16 w-[100%] md:w-[80%] mx-auto my-0">
      <h1 className="dark:text-white text-5xl font-extrabold tracking-tight lg:heading text-[20px] mb-2 lg:mb-4 text-center md:text-[28px] lg:text-[32px] xl:text-[48px] text-black">
        Recent <span className="text-purple">Projects</span>
      </h1>

      <MobileProjectsView projects={projects} />
      <DesktopProjectsView projects={projects} />
    </section>
  );
}
