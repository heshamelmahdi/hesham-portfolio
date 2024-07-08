"use client";

import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";

export const MainTextTitle = () => {
  return (
    <motion.h2
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h2"
    >
      Captivating <span className="text-accent">stories</span> birth magnificent
      products.
    </motion.h2>
  );
};

export const MainTextSubtitle = () => {
  return (
    <motion.p
      variants={fadeIn("right", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
    >
      Three years ago, my journey with programming began. Since then, I've
      worked with everyone from startups to large enterprises. I am fueled by a
      passion for technology and innovation.{" "}
      <span className="text-accent">
        I've seen the transformative power of code.
      </span>
    </motion.p>
  );
};
