"use client";

import { motion, useInView, Variants } from "framer-motion";
import React, { ReactNode } from "react";

interface TimelineContentProps {
  children: ReactNode;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | null>;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  customVariants?: Variants;
  once?: boolean;
  // Allow passing through any extra props (e.g. onClick, fill, etc.)
  [key: string]: unknown;
}

export const TimelineContent = ({
  children,
  animationNum,
  timelineRef,
  className,
  as = "div",
  customVariants,
  once = false,
  ...props
}: TimelineContentProps) => {
  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
  };

  const sequenceVariants = customVariants || defaultVariants;

  const isInView = useInView(timelineRef, { once });

  const MotionComponent = motion[
    as as keyof typeof motion
  ] as typeof motion.div;

  return (
    <MotionComponent
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sequenceVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};
