import { Image } from "@chakra-ui/image";
import {
  Center,
  Container,
  Heading,
  Link,
  Text,
  Stack,
} from "@chakra-ui/layout";
import { chakra, useColorModeValue } from "@chakra-ui/system";
import React from "react";
import './Hero.css'
import TextTransition, { presets } from "react-text-transition";


function Hero() {
  const bgColor = useColorModeValue("green.100", "green.100");
  const color = useColorModeValue("black", "black");
  const [index, setIndex] = React.useState(0);

  

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
     
    >
      <Container maxW="6xl" mb={10}>
        <Center mt={20} w="auto" mb={5}>
        <Heading
            as="h1"
            fontSize={["4xl", "5xl", "6xl", "7xl"]}
            letterSpacing={2}
            lineHeight={1.2}
             
          >
            
    
            Hello <span className="wave-emoji">👋</span><br/>
            I'm Abdirahman <br/>
            I build user friendly {" "}
            <Text bg={bgColor} color={color} w="auto" display="inline">
              applications
            </Text>
          </Heading>
        </Center>
        <chakra.div>
          <Text fontSize="2xl"> <TextTransition
        text={ TASKS[index % TASKS.length] }
        springConfig={ presets.wobbly }
      /></Text>
          <Link href="https://instagram.com/abdirahmancodes" target="_blank">
           <Text fontSize="2xl"> @abdirahmancodes</Text>
          </Link>
        </chakra.div>
      </Container>
    </Stack>
  );
}

export default Hero;
