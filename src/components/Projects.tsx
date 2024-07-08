import { ProjectsSectionTitle } from "./projectsComponents/ProjectsText";
import ProjectsCarousel from "./projectsComponents/ProjectsCarousel";

const Projects = () => {
  return (
    <section
      id="projects"
      className="h-screen bg-primary/30 py-36 flex items-center relative"
    >
      <div className="container mx-auto z-10 h-full">
        <div className="text-center flex xl:w-[50vw] flex-col lg:text-left mb-4 xl:mb-0">
          <ProjectsSectionTitle />
        </div>
        <ProjectsCarousel />
      </div>
    </section>
  );
};
export default Projects;
