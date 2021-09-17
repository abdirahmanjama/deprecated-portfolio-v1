import React from 'react';
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
  useColorModeValue
} from '@chakra-ui/react';
import peterpitch_img from '../config/img/linkedin.png';
import workof_img from '../config/img/gmail.png';
import notch_img from '../config/img/javas3.png';
import souq_img from '../config/img/jamadesigns.png';


function Project({ title, desc, tech, colorMode, image_url }) {
  return (
    <Stack marginBottom={5}>
      <Heading as="h4" size="md" color={useColorModeValue('black')}>
        <Flex alignItems="center">
          <Text as="span" color={useColorModeValue('black')}>
            {title}
          </Text>
        </Flex>
      </Heading>
      <Grid
        // templateColumns="repeat(2, 1fr)"
        gridTemplateColumns={['1fr', '1fr 1fr', '1fr 1fr', '1fr 1fr']}
        gap={2}
        p={5}
        _hover={{ shadow: 'md' }}
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
              src={image_url ? image_url : 'https://bit.ly/2k1H1t6'}
              fallback={<Skeleton />}
              objectFit="cover"
            />
          </AspectRatio>
        </Flex>
        <Box w="100%">
          <Stack mt={2} pl={[0, 4, 4, 4]}>
            <Text
              fontSize="lg"
              fontWeight="semibold"
              lineHeight="short"
              color={useColorModeValue("black")}
            >
              {desc}
            </Text>
            <Stack isInline>
              {tech.split(',').map(tag => (
                <Tag
                  size="sm"
                  padding="0 3px"
                  key={tag}
                  color="#4299E1"
                  fontWeight="bold"
                  color={'grey'}
                  bgColor={'grey'}
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
      title: 'LinkedIn Clone',
      desc: `I spent a few weekends this year working on this beast. I developed a LinkedIn clone that uses a firebase backend. This clone allows users to login, post statuses and message each other via the app!`,
      tech: 'react, redux, styled components, javascript',
      image_url: peterpitch_img,
      color: 'blue'
    },
    {
      title: 'Gmail Clone',
      desc: `This is a gmail clone that allows users to send, view and delete messages.`,
      tech: 'react, redux, javascript',
      image_url: notch_img,
      color: 'yellow'
    },
    {
      title: 'Image Uploader',
      desc: `I developed a reusable web component that enables users to upload images directly to S3 via the web`,
      tech: 'react, aws, java, spring boot',
      image_url: workof_img,
      color: 'green'
    },
    {
      title: 'JamaDesigns',
      desc: `In early 2021, I have launched a digital marketing agency that provides tech services to local businesses around east London. I've helped businesses increase their customer retention by 45%!`,
      tech: 'react, axios, redux',
      image_url: souq_img,
      color: 'black'
    }
  ];
  return (
    <Stack
      as="main"
      padding="1.5rem"
      color={useColorModeValue("white")}
    //   backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="60rem"
      paddingTop="3rem"
    >
    <Text fontSize="4xl" mb ="10px" fontWeight="extrabold">Projects</Text>
      <Stack spacing={2} >
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
            image_url={project.image_url}
            colorMode={colorMode}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;