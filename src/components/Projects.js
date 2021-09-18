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

function setTagColour(tag) {
  switch (tag) {
    case "react":
      return "cyan.100";
    case "java":
      return "red.100";
    case "spring boot":
      return "green.100";
    case "aws":
      return "yellow.100";
    case "javascript":
      return "white.900";
    case "firebase":
      return "orange.100";
  }
}

function setBgColour(tag) {
  switch (tag) {
    case "react":
      return "cyan.700";
    case "java":
      return "red.700";
    case "springboot":
      return "green.700";
    case "aws":
      return "yellow.500";
    case "javascript":
      return "yellow.400";
    case "firebase":
      return "orange.500";
  }
}

function Project({ title, desc, tech, colorMode, image_url }) {
  const [isNotMobile] = useMediaQuery("(min-width:760px)");

  return (
    <Stack marginBottom={isNotMobile && 5}>
      <Heading
        as="h4"
        size="md"
        color={useColorModeValue("grey.100, grey.700")}
      ></Heading>
      <Grid
        templateColumns= {isNotMobile ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
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
         {!isNotMobile &&  <Text
              as="span"
              fontWeight="300px"
              fontWeight="bold"
              fontSize="md"
              mb="0"
            >
              {title}
            </Text>}
        <Flex w="100%" h="100%" alignItems="center"      mb={!isNotMobile && "0"}
>

         
          <AspectRatio ratio={1.85 / 1} w="100%" borderBottomWidth="1px">
            <Image
              rounded="md"
              src={image_url ? image_url : "https://bit.ly/2k1H1t6"}
              fallback={<Skeleton />}
              objectFit="cover"
              mb={!isNotMobile && "0"}

            />
          </AspectRatio>
        </Flex>
        <Box w="100%">
          
          <Stack  pl={[0, 4, 4, 4]}>
            { isNotMobile &&
            <Text
              as="span"
              fontWeight="300px"
              fontWeight="bold"
              fontSize="md"
            >
              {title}
            </Text>}
            <Text
              fontSize="sm"
              color={useColorModeValue("black")}
              lineHeight="short"
              color={useColorModeValue("black")}
              borderColor={useColorModeValue("gray.700", "gray.700")}
              mb={!isNotMobile && "0"}

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
    <Box
    //   backgroundColor={`mode.${colorMode}.background`}
    margin ="0"
    padding="0"
    >
      <Text fontSize={"3xl"} mb="10px" fontWeight="extrabold" mb="5">
        Projects
      </Text>

      <Grid
        templateColumns={isNotMobile ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
        gap={isNotMobile ? 2 : 0}
        margin={!isNotMobile && "0"}
        padding={!isNotMobile && "0"}
      >
        {projects.map((project) => (
          <Project
     
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            image_url={project.image_url}
            borderColor="red"
          />
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
