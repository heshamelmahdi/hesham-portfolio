import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { ProjectsDescription, ProjectsTitle } from "./ProjectsText";
import { Cairo3DPrint, Phieg, PhiegCRM } from "./ProjectTechStack";
import Image from "next/image";

const ProjectCard = ({ id }: { id: number }) => {
  const projectMap = [
    {
      src: "/websites/phieg.png",
      titleNormal: "",
      titleAccented: "Phieg",
      description:
        "Built a company website for Phieg. Includes advanced animations and is fully responsive.",
      stack: <Phieg />,
    },
    {
      src: "/websites/cairo3dprint.png",
      titleNormal: "",
      titleAccented: "CAIRO3DPRINT",
      description:
        "Built an e-commerce website for Cairo3DPrint. Website includes a shopping cart, live 3D viewer, and a custom admin panel.",
      stack: <Cairo3DPrint />,
    },
    {
      src: "/websites/phiegcrm.png",
      titleNormal: "",
      titleAccented: "PhiegCRM",
      description:
        "Built a full-stack CRM system for Phieg. The system includes full automation for distributing leads to agents. Lead tracking for the agents with statistics and reports.",
      stack: <PhiegCRM />,
    },
  ];

  const proj = projectMap[id];

  return (
    <div className="flex flex-col xl:flex-row gap-x-8 py-10 px-8 w-full justify-between h-full">
      <div className="flex flex-col md:gap-2 items-center md:items-start">
        <div className="text-center flex xl:w-[15vw] flex-col lg:text-left mb-4 xl:mb-0">
          <ProjectsTitle
            normal={proj.titleNormal}
            accented={proj.titleAccented}
          />
          <ProjectsDescription text={proj.description} />
        </div>
        <div className="flex text-center md:text-left mb-4 md:mb-0 md:justify-between w-full">
          <p className="font-bold text-white hidden md:block">Tech Stack:</p>
          {proj.stack}
        </div>
      </div>
      <div className="h-auto w-full md:w-[70vw] rounded-xl">
        <Image
          src={proj.src}
          alt="project screenshot"
          width={500}
          height={300}
          priority={true}
          className="rounded-xl"
          quality={100}
        />
      </div>
    </div>
  );
};
export default ProjectCard;
