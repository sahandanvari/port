import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "prose" | "wide";
  id?: string;
}

export function SectionWrapper({
  children,
  className = "",
  maxWidth = "wide",
  id,
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const widthClass = maxWidth === "prose" ? "max-w-3xl" : "max-w-5xl";

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mx-auto px-6 py-sp-16 md:py-sp-24 ${widthClass} ${className}`}
    >
      {children}
    </motion.section>
  );
}
