import { Grid, Stack, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import Project from './Project.js'
import linkedin from "../config/img/linkedin.png";
import gmailclone from "../config/img/gmail.png";
import imageuploader from "../config/img/javas3.png";
import jamadesigns from "../config/img/jamadesigns.png";

function Projects() {
    const projects = [
        {
          title: "LinkedIn Clone",
          desc: `Developed a fully fledged LinkedIn clone that provides user authentication, posting capabilities and messaging.`,
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
        <Stack
        >
          <Text fontSize={"3xl"}  fontWeight="extrabold" mb="5">
            Projects
          </Text>
    
          <Grid
            templateColumns={isNotMobile ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
            gap={2} w='100%' 
          >
            {/* {projects.map((project) => (
              <Project
         
                title={project.title}
                desc={project.desc}
                tech={project.tech}
                image_url={project.image_url}
              />
            ))} */}
    
            <Project
                
                title={projects[0].title}
                desc={projects[0].desc}
                tech={projects[0].tech}
                image_url={projects[0].image_url}
              />
               <Project
                
                title={projects[1].title}
                desc={projects[1].desc}
                tech={projects[1].tech}
                image_url={projects[1].image_url}
              />
               <Project
                
                title={projects[2].title}
                desc={projects[2].desc}
                tech={projects[2].tech}
                image_url={projects[2].image_url}
              />
               <Project
                
                title={projects[3].title}
                desc={projects[3].desc}
                tech={projects[3].tech}
                image_url={projects[3].image_url}
              />
          </Grid>
        </Stack>
    )
}

export default Projects


