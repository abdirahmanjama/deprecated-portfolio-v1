import {
  Center,
  Container,
  Heading,
  Link,

  Stack, Text
} from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { chakra, useColorMode, useColorModeValue } from "@chakra-ui/system";
import React from "react";
import TextTransition, { presets } from "react-text-transition";
import './Hero.css';


function Hero() {
  const bgColor = useColorModeValue("yellow.300", "yellow.300");
  const color = useColorModeValue("black", "black");
  const [index, setIndex] = React.useState(0);
  const {colorMode, toggleColorMode} = useColorMode();

  const isDark = colorMode === 'dark';

  const [isNotMobile] = useMediaQuery("(min-width:760px)");

  const TASKS = [
    "Software Engineer",
    "Content Creator",
    "Writer",
   
  ];
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
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
        <Center mt={isNotMobile ? 20 : 7} w="auto" mb={5}>
        <Heading
            as="h1"
            fontSize={["4xl", "5xl", "6xl", "7xl"]}
            letterSpacing={2}
            lineHeight={1.2}
             
          >
            
    
            Hello <span className="wave-emoji">👋</span><br/>
            I build user friendly {" "}
            <Text bg={bgColor} color={color} w="auto" display="inline">
              applications
            </Text>
          </Heading>
        </Center>

        <br/>
        <chakra.div>
          <Text fontSize="1xl"> <TextTransition
        text={ TASKS[index % TASKS.length] }
        springConfig={ presets.wobbly }
      />
      </Text>
      
          <Link href="https://instagram.com/abdirahmancodes" target="_blank">
           <Text fontSize="1xl"> @abdirahmancodes</Text>
          </Link>

{  isDark ? 

          <style>
        {`
         
      ::selection {
            background: #687a96; /* WebKit/Blink Browsers */
          }
        `}

      </style> : 
        <style>
        {`
         
      ::selection {
            background: #b2d3b2; /* WebKit/Blink Browsers */
          }
        `}

      </style>
}
        </chakra.div>
      </Container>
    </Stack>
  );
}

export default Hero;
