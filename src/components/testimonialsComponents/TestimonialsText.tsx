"use client";

import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
export const TestimonialsTitle = () => {
  return (
    <motion.h2
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h2 mb-8 xl:mb-0"
    >
      What clients <span className="text-accent">say.</span>
    </motion.h2>
  );
};
