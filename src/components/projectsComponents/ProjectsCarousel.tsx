"use client";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ProjectCard from "./ProjectCard";

const ProjectsCarousel = () => {
  return (
    <Carousel swipeable={true} showThumbs={false}>
      <ProjectCard id={0} />
      <ProjectCard id={1} />
      <ProjectCard id={2} />
    </Carousel>
  );
};
export default ProjectsCarousel;
