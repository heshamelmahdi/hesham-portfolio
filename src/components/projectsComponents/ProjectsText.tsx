"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export const ProjectsSectionTitle = () => {
  return (
    <motion.h2
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h2 xl:mt-8"
    >
      Featured projects <span className="text-accent">.</span>
    </motion.h2>
  );
};

export const ProjectsTitle = ({
  normal,
  accented,
}: {
  normal: string;
  accented: string;
}) => {
  return (
    <motion.h3
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h3 xl:mt-8"
    >
      {normal} <span className="text-accent">{accented}</span>
    </motion.h3>
  );
};

export const ProjectsDescription = ({ text }: { text: string }) => {
  return (
    <motion.p
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="mb-4 max-w-[400px] mx-auto lg:mx-0"
    >
      {text}
    </motion.p>
  );
};
