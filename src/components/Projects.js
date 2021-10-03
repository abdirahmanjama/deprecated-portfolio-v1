import { Grid, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import Project from "./Project.js";
import linkedin from "../config/img/linkedin.png";
import gmailclone from "../config/img/gmail.png";
import imageuploader from "../config/img/javas3.png";
import jamadesigns from "../config/img/jamadesigns.png";

function Projects() {
  const projects = [
    {
      title: "LinkedIn Clone",
      desc: `Developed a fully fledged LinkedIn clone that provides authentication and real time messaging.`,
      tech: "java,redux,firebase,javascript",
      image_url: linkedin,
      color: "blue",
    },
    {
      title: "Gmail Clone",
      desc: `Built a Gmail replica which allows users to view, delete and send e-mails.`,
      tech: "react,redux,javascript,java",
      image_url: gmailclone,
      color: "yellow",
    },
    {
      title: "Image Uploader",
      desc: `Developed an application that enables users to upload images directly to the UI via S3`,
      tech: "react,aws,java,springboot",
      image_url: imageuploader,
      color: "green",
    },
    {
      title: "JamaDesigns",
      desc: `Launched a digital marketing agency that provides tech services to local businesses around east London.`,
      tech: "react,axios,redux,aws",
      image_url: jamadesigns,
      color: "black",
    },
  ];
  const [isNotMobile] = useMediaQuery("(min-width:760px)");

  return (
    <Stack id="projects">
      <Text fontSize={"3xl"} mb="10px" fontWeight="extrabold">
        Projects
      </Text>

      <Grid
        templateColumns={isNotMobile ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
        gap={2}
        w="100%"
        mb={10}
      >
        {projects.map((project) => (
          <Project
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            image_url={project.image_url}
          />
        ))}
      </Grid>
    </Stack>
  );
}

export default Projects;
