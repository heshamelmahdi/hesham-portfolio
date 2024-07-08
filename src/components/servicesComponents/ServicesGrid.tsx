"use client";

import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

export const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description:
      "Crafting Dynamic and Scalable Web Solutions to Fit Your Business Needs.",
  },
  {
    icon: <RxPencil2 />,
    title: "Web Design",
    description: "Elevate Your Brand with Intuitive and Engaging Design.",
  },
  {
    icon: <RxReader />,
    title: "Automated Integration",
    description: "Streamlining Operations Through Seamless System Integration.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Enhancing Visibility and Driving Growth Through Strategic SEO Strategies.",
  },
];

const ServicesGrid = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="w-full xl:max-w-[65%]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {serviceData.map((item, index) => (
          <div
            className={`${
              index === 2 ? "hidden md:block" : ""
            } bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300`}
            key={index}
          >
            {/* icon */}
            <div className="text-2xl md:text-4xl text-accent mb-4">
              {item.icon}
            </div>
            {/* title & description */}
            <div className="sm:mb-8">
              <div className="mb-2 text-base md:text-lg">{item.title}</div>
              <p className="max-w-[350px] text-sm md:text-base leading-normal">
                {item.description}
              </p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default ServicesGrid;
