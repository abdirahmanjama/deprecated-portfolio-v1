import React from "react";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Hero from "../components/Hero";
import Projects from "./Projects";
import Skills from "./Skills";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <br />
      <Projects />
      <Blogs />
      <br />
      <Contact />
    </>
  );
}

export default Home;
