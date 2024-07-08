import Circles from "./aboutComponents/Circles";
import Counters from "./aboutComponents/Counters";
import { MainTextSubtitle, MainTextTitle } from "./aboutComponents/MainText";

const About = () => {
  return (
    <section
      id="about"
      className="h-screen bg-primary/60 py-32 text-center xl:text-start relative"
    >
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex-1 flex-col flex justify-center">
          <MainTextTitle />
          <MainTextSubtitle />
          {/* counters */}
          <Counters />
        </div>

        {/* Info */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]"></div>
      </div>
    </section>
  );
};

export default About;
