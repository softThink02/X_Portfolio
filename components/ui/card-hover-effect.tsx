import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";
import { CardDemo } from "./CardDemo";
import { useState } from "react";
import animationData from "@/data/confetti.json"
import { IoCopyOutline } from "react-icons/io5";
import MagicButton from "../MagicButton";

const Lottie = dynamic(() => import("react-lottie"), { ssr: false });

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    InitBg?: string;
    hoverBg?: string;
    hasEmail?: boolean;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "softthink02@gmail.com";
    navigator.clipboard.writeText(text).then(() => setCopied(true));
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            {item.hoverBg && item.InitBg ? (
              <CardDemo
                header={item.title}
                description={item.description}
                initialBg={item?.InitBg}
                hoverBg={item.hoverBg}
              />
            ) : (
              <div className="relative">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
                {item.hasEmail && (
                  <div className="relative">
                    <div
                      className={`absolute -bottom-5 right-0 ${
                        copied ? "block" : "block"
                      }`}
                    >
                      {copied && animationData && (
                        <Lottie
                          options={defaultOptions}
                          height={200}
                          width={400}
                        />
                      )}
                    </div>

                    <MagicButton
                      title={
                        copied ? "Email is Copied!" : "Copy my email address"
                      }
                      icon={<IoCopyOutline />}
                      position="left"
                      handleClick={handleCopy}
                      otherClasses="!bg-[#161A31]"
                    />
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return typeof children === "string" ? (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  ) : (
    <div>{children}</div>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
