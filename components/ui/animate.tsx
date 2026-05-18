import {m } from "framer-motion";

export const FooterHeader = ({
  className,
  variant,
  children,
}: {
  className?: string;
  variant: "h1" | "p" | "heroDiv" | "heroImg" | "handSpan";
  children?: React.ReactNode | any;
}) => {
  if (variant === "h1") {
    return (
      <m.h1
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        viewport={{ once: false, amount: 0.3 }}
        className={className}
      >
        {children}
      </m.h1>
    );
  }
  if (variant === "p") {
    return (
      <m.p
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        viewport={{ once: false, amount: 0.3 }}
        className={className}
      >
        {children}
      </m.p>
    );
  }
  if (variant === "heroDiv") {
    return (
      <m.div
        key="text"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 60 }}
        transition={{ duration: 0.6 }}
        className={className}
      >
        {children}
      </m.div>
    );
  }
  if (variant === "heroImg") {
    return (
      <m.div
        key="plane"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8 }}
        className={className}
      >
        {children}
      </m.div>
    );
  }
  if (variant === "handSpan") {
    return (
      <m.span
        className={className}
        style={{ display: "inline-block", fontSize: "1.4rem" }}
        animate={{ rotate: [0, 20, -10, 20, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {children}
      </m.span>
    );
  }
};
