import Image from "next/image";
import ParticlesContainer from "./heroComponents/ParticlesContainer";
import {
  HeroSubtitle,
  HeroTitle,
  ProjectsBtnLargeScreen,
  ProjectsBtnSmallScreen,
} from "./heroComponents/FramerMotionCustomComponents";
import TopLeftImg from "./TopLeftImg";

const Hero = () => {
  return (
    <section id="home" className="bg-primary/60 h-screen">
      <TopLeftImg />

      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 pt-24 md:pt-0">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-start h-full container mx-auto">
          {/* title */}
          <HeroTitle />
          {/* subtitle */}
          <HeroSubtitle />
          {/* btn */}
          <ProjectsBtnSmallScreen />
          <ProjectsBtnLargeScreen />
        </div>
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        {/* <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div> */}
        {/* particles */}
        <ParticlesContainer />
      </div>
    </section>
  );
};
export default Hero;
