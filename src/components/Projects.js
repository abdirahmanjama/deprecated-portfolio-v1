import React from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  Grid,
  Skeleton,
  AspectRatio,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import linkedin from "../config/img/linkedin.png";
import gmailclone from "../config/img/gmail.png";
import imageuploader from "../config/img/javas3.png";
import jamadesigns from "../config/img/jamadesigns.png";

function setTagColour(tag){
  switch(tag){
    case 'react':
      return 'cyan.100'
    case 'java':
      return 'red.100'
    case 'spring boot': 
      return 'green.100'
    case 'aws':
      return 'yellow.100'
    case 'javascript':
      return 'white.900'
    case 'firebase':
      return 'orange.100'
  }
}

  function setBgColour(tag){
    switch(tag){
      case 'react':
        return 'cyan.700'
      case 'java':
        return 'red.700'
      case 'spring boot': 
        return 'green.700'
      case 'aws':
        return 'yellow.500'
      case 'javascript':
        return 'yellow.400'
        case 'firebase':
          return 'orange.500'
    }
    
  }


function Project({ title, desc, tech, colorMode, image_url }) {
  return (
    <Stack marginBottom={5}>
      <Heading as="h4" size="md" color={useColorModeValue("grey.100, grey.700")}>
        <Flex alignItems="center">
          <Text
            as="span"
            color={useColorModeValue("black, white")}
            paddingBottom="10px"
            fontWeight="300px"
          >
            {title}
          </Text>
        </Flex>
      </Heading>
      <Grid
        templateColumns="repeat(2, 1fr)"
        //gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
        gap={2}
        p={5}
        _hover={{ shadow: "md" }}
        borderWidth="1px"
        borderColor={`mode.${colorMode}.border`}
        backgroundColor={useColorModeValue("white")}
        position="relative"
        rounded="md"
      >
        <Flex w="100%" h="100%" alignItems="center">
          <AspectRatio ratio={1.85 / 1} w="100%" borderBottomWidth="1px">
            <Image
              rounded="md"
              src={image_url ? image_url : "https://bit.ly/2k1H1t6"}
              fallback={<Skeleton />}
              objectFit="cover"
            />
          </AspectRatio>
        </Flex>
        <Box w="100%">
          <Stack mt={2} pl={[0, 4, 4, 4]}>
            <Text
              fontSize="md"
              fontWeight="semibold"
              lineHeight="short"
              color={useColorModeValue("black")}
              borderColor={useColorModeValue("gray.700", "gray.700")}
            >
              {desc}
            </Text>
            <Stack isInline>
              
              {tech.split(",").map((tag) => (
                <Tag

                  size="sm"
                  padding="0 3px"
                  key={tag}
                  color="#4299E1"
                  fontWeight="bold"
                  color={setTagColour(tag.toLowerCase())}
                  bgColor={setBgColour(tag.toLowerCase())}
                  xs
                >
                  {tag}
                </Tag>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
}

const Projects = () => {
  const { colorMode } = useColorMode();
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
      desc: `Developed web application that enables users to upload images directly to S3 via the web`,
      tech: "react,aws,java,spring boot",
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
  const [isNotMobile] = useMediaQuery("(min-width:720px)");

  return (
    <Box
      //   backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="72rem"
      paddingTop="3rem"

    >
      <Text fontSize="4xl" mb="10px" fontWeight="extrabold">
        Projects
      </Text>

      <Grid
        templateColumns={isNotMobile ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
        gap={2} 
      >
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            image_url={project.image_url}
            borderColor='red'

          />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
