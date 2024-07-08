"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="#projects"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt="See Projects Button"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
};

export const ProjectsBtnSmallScreen = () => {
  return (
    <div className="flex justify-center xl:hidden relative">
      <ProjectsBtn />
    </div>
  );
};

export const ProjectsBtnLargeScreen = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.4)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex"
    >
      <ProjectsBtn />
    </motion.div>
  );
};

export const HeroTitle = () => {
  return (
    <motion.h1
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="h1"
    >
      Transforming Ideas <br /> Into{" "}
      <span className="text-accent">Digital Reality</span>
    </motion.h1>
  );
};

export const HeroSubtitle = () => {
  return (
    <motion.p
      variants={fadeIn("down", 0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
    >
      I excel at crafting innovative web solutions and robust software for
      startups, enterprises, and everything in between.
    </motion.p>
  );
};
