"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export const ContactTitle = () => {
  return (
    <motion.h2
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h2 text-center mb-12"
    >
      Let's <span className="text-accent">connect.</span>
    </motion.h2>
  );
};
