"use client";
import { cn } from "@/lib/utils";

export function CardDemo({
  initialBg,
  hoverBg,
  header,
  description,
}: {
  initialBg?: string;
  hoverBg? : string;
  header : string;
  description : string,
}) {
  return (
    <div className="w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card lg:h-72 md:h-60 xl:h-96 h-52 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
          "bg-cover",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
        style={{
          backgroundImage: `url(${initialBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundImage = `url(${hoverBg})`)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundImage = `url(${initialBg})`)
        }
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            {header}
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
