import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="bg-site text-white bg-cover bg-no-repeat relative overflow-x-hidden scroll-smooth">
      <Header />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}
