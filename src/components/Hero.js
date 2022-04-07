import {
  Center,
  Container,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { chakra, useColorMode, useColorModeValue } from "@chakra-ui/system";
import React, { useState } from "react";
import Particles from "react-particles-js";
import TextTransition, { presets } from "react-text-transition";
import "./Hero.css";
import data from "../config/data/data";
import { Button } from "@chakra-ui/button";
export default function Hero() {
  const bgColor = useColorModeValue("yellow.300", "yellow.300");
  const color = useColorModeValue("black", "black");
  const [index, setIndex] = useState(0);
  const colorMode = useColorMode();

  const isDark = colorMode === "dark";

  const [isNotMobile] = useMediaQuery("(min-width:760px)");

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <Stack
      as="main"
      color={useColorModeValue("white, black")}
      ml="0"
      paddingTop={isNotMobile ? 10 : 0}
    >
      <Container maxW="6xl" mb={10} className="container">
        <Flex position="absolute" zIndex="-100">
          <Particles
            params={{
              particles: {
                number: {
                  value: 40,
                  density: {
                    enable: true,
                    value_area: 600,
                  },
                },
              },
            }}
          />
        </Flex>
        <Center mt={isNotMobile ? 20 : 7} w="auto" mb={5}>
          <Heading
            fontSize={["2xl", "3xl", "4xl", "5xl"]}
            letterSpacing={2}
            lineHeight={1.2}
            fontWeight="normal"
          >
            Hello{" "}
            <span role="img" className="wave-emoji" aria-label="wave-emoji">
              👋
            </span>
            <br />
            <br />
            I&apos;m <strong>Abdirahman Jama</strong>, a design-minded software
            engineer focused on building scalable applications with great user{" "}
            <Text bg={bgColor} color={color} w="auto" display="inline">
              experiences.
            </Text>
          </Heading>
        </Center>

        <br />
        <chakra.div>
          <Text fontSize="lg">
            {" "}
            <TextTransition
              text={data.roles[index % data.roles.length]}
              springConfig={presets.wobbly}
            />
          </Text>
          <Link href="https://instagram.com/abdirahmancodes" target="_blank">
            <Text fontSize="lg"> @abdirahmancodes</Text>
          </Link>

          {isDark ? (
            <style>
              {`
         
      ::selection {
            background: #F6E05E; /* WebKit/Blink Browsers */
            color: black;
          }
        `}
            </style>
          ) : (
            <style>
              {`
         
      ::selection {
            background: #F6E05E; /* WebKit/Blink Browsers */
          }
        `}
            </style>
          )}
        </chakra.div>
      </Container>
    </Stack>
  );
}
