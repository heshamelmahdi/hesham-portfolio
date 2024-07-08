import { FaNodeJs, FaReact, FaStripe } from "react-icons/fa";
import {
  RiNextjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiExpress, SiFramer, SiGooglecloud, SiMongodb } from "react-icons/si";

export const Phieg = () => {
  return (
    <div className="flex gap-2 text-xl">
      <RiNextjsFill />
      <RiTailwindCssFill />
      <SiFramer />
    </div>
  );
};

export const Cairo3DPrint = () => {
  return (
    <div className="flex gap-2 text-xl">
      <RiNextjsFill />
      <RiTailwindCssFill />
      <RiSupabaseFill />
      <SiGooglecloud />
      <FaStripe />
    </div>
  );
};

export const PhiegCRM = () => {
  return (
    <div className="flex gap-2 text-xl">
      <FaReact />
      <SiMongodb />
      <SiExpress />
      <FaNodeJs />
    </div>
  );
};
