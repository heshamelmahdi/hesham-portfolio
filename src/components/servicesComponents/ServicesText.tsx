"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

export const ServicesTitle = () => {
  return (
    <motion.h2
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h2 xl:mt-8"
    >
      My services <span className="text-accent">.</span>
    </motion.h2>
  );
};

export const ServicesParagraph = () => {
  return (
    <motion.p
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="mb-4 max-w-[400px] mx-auto lg:mx-0"
    >
      I offer a suite of comprehensive services tailored to enhance your digital
      presence and propel your business forward. Whether you're a startup
      looking to establish a strong online foothold or an established enterprise
      aiming to innovate, my solutions are designed to meet your unique needs
      and exceed your expectations!
    </motion.p>
  );
};
