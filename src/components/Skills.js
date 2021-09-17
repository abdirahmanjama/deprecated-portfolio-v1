import { useColorModeValue } from "@chakra-ui/color-mode";
import Icon from "@chakra-ui/icon";
import { Flex, Grid, HStack, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import { FaAws, FaDatabase, FaJava, FaReact } from "react-icons/fa";
import Skill from "./Skill";

function Skills() {
  const [isNotMobile] = useMediaQuery("(min-width:720px)");

  return (
    <Stack
      as="main"
      color={useColorModeValue("white, black")}
      //   backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="72rem"
    >
      <Text fontSize="4xl" mb="10px" fontWeight="extrabold">
        Skills
      </Text>
      <Grid templateColumns={isNotMobile ? "repeat(3,1fr)" : "repeat(1, 1fr)"} gap={2} w='100%'>
        <Skill
          icon={<Icon color="red" p="4" as={FaJava} w="16" h="16" />}
          name="Front-end"
          description="React, JavaScript, UI/UX, HTML/CSS, Chakra UI, Material UI"
        />
        <Skill
          icon={
            <Icon
              className="fa-spin"
              color="cyan.300"
              p="4"
              as={FaReact}
              w="16"
              h="16"
            />
          }
          name="Back-end"
          description="Java, Spring boot, Python, Elastic, APM, Mongo, Microservices"
        />
        <Skill
          icon={
            <Icon
              className="fa-spin"
              color="yellow.300"
              p="4"
              as={FaAws}
              w="16"
              h="16"
            />
          }
          name="Infrastructure"
          description="Linux, AWS, Kubernetes, Helm, CI/CD, DevOps"
        />
      </Grid>
    </Stack>
  );
}

export default Skills;
