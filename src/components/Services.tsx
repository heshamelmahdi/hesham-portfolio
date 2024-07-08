import Bulb from "./servicesComponents/Bulb";
import ServicesGrid from "./servicesComponents/ServicesGrid";
import {
  ServicesParagraph,
  ServicesTitle,
} from "./servicesComponents/ServicesText";

const Services = () => {
  return (
    <section
      id="services"
      className="h-screen bg-primary/60 py-16 md:py-36 flex items-center relative"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <ServicesTitle />
            <ServicesParagraph />
          </div>
          {/* slider */}
          <ServicesGrid />
        </div>
      </div>
      <Bulb />
    </section>
  );
};
export default Services;
