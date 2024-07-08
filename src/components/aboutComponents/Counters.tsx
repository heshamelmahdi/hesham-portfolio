"use client";

import { cn } from "@/utils/cn";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variants";

const Counters = () => {
  return (
    <motion.div
      variants={fadeIn("right", 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
    >
      <div className="flex flex-1 xl:gap-x-16">
        {/* experience */}
        <CountUpWithText
          start={0}
          end={3}
          duration={3}
          text="Years of Experience"
          className="after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
        />
        {/* clients */}
        <CountUpWithText
          start={0}
          end={10}
          duration={3}
          text="Satisfied Clients"
          className="after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
        />
        {/* projects */}
        <CountUpWithText
          start={0}
          end={15}
          duration={3}
          text="Finished Projects"
        />
      </div>
    </motion.div>
  );
};

const CountUpWithText = ({
  start,
  end,
  duration,
  text,
  className,
}: {
  start: number;
  end: number;
  duration: number;
  text: string;
  className?: string;
}) => {
  return (
    <div className={cn("relative flex-1", className)}>
      <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
        <CountUp start={start} end={end} duration={duration} />+
      </div>
      <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
        {text}
      </div>
    </div>
  );
};
export default Counters;
