import React from "react";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Hero from "../components/Hero";
import { Box } from "@chakra-ui/react";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      <Blogs />
      <br />
      <Contact />
    </>
  );
}
