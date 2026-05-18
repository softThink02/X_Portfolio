import { LazyMotion, domAnimation, m } from "motion/react";
import Image from "next/image";
import Link from "next/link";

type projects = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}[];

export const DesktopProjectsView = ({ projects }: { projects: projects }) => {
  return (
    <div className="md:grid hidden grid-cols-1 sm:grid-cols-2 gap-10 px-6">
      <LazyMotion features={domAnimation}>
        {projects.map((project, i) => (
          <m.div
            key={project.id}
            initial={{ opacity: 0.8, y: 80, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              rotate: [-0.5, 0.5, 0],
              boxShadow: "0 10px 25px rgba(0,0,0,0.10)",
            }}
            className="bg-black rounded-2xl overflow-hidden backdrop-blur-lg border border-zinc-800 shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
          >
            <div className="relative h-40 w-[100%] overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                fill
                sizes="auto"
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="p-5 space-y-3">
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-white text-sm line-clamp-3">{project.des}</p>

              <div className="flex flex-wrap gap-3 mt-3">
                {project.iconLists.map((icon, idx) => (
                  <m.img
                    key={idx}
                    src={icon}
                    alt="tech"
                    className="h-6 w-6"
                    animate={{
                      y: [0, -5, 0, 5, 0],
                      rotate: [0, 15, -15, 10, -10, 0],
                      scale: [1, 1.1, 0.95, 1.05, 1],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: Math.random() * 1.5,
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 360,
                      transition: { duration: 0.8 },
                    }}
                  />
                ))}
              </div>

              <div className="pt-3">
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm font-medium"
                >
                  Visit Project →
                </Link>
              </div>
            </div>
          </m.div>
        ))}
      </LazyMotion>
    </div>
  );
};
