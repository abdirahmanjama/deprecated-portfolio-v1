import { useColorMode } from '@chakra-ui/color-mode'
import { Button, Image } from '@chakra-ui/react'
import { Circle, Stack, Flex, Box, Text, HStack } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import Typist from 'react-typist';
import TextTransition, { presets } from "react-text-transition";
import profile from '../config/img/avatars.png'
import {FaReact, FaAws, FaDatabase} from 'react-icons/fa'
import AiFillDatabase from 'react-icons/ai'
import Skills from './Skills';
import Typing from 'react-typing-animation';
import Typewriter from 'typewriter-effect'

const TEXTS = [
    " Hi 👋",
    "My name is",
    "Abdirahman Jama",
  ];

function Header() {

    const [index, setIndex] = React.useState(0);

    const {colorMode} = useColorMode(); 
    const isDark = colorMode === 'dark';

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");
    
    React.useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => index + 1),
          3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
      }, []);

    return (
      //  <Stack>
          
      //      <Flex direction={!isNotSmallScreen ? "row" : "column"} 
      //                   spacing="200px" p={isNotSmallScreen ? "32" : "0"}
      //                   alignSelf="flex-start">


      //           <Box mt={isNotSmallScreen ? "0" : "16"} align='flex-start'>
                   
      //               <Flex>


      //               <Circle  bg="blue.100" opacity="0." w="300px" h="300px" alignSelf="flex-end">           
      //                    <Image
      //               alignSelf="center" mt={isNotSmallScreen ? "0" : "12"}
      //               mb = {isNotSmallScreen ? "0" : "12"} borderRadius="full"
      //               backgroundColor="transparent" boxShadow="lg"
      //               boxSize="300px" src={profile}
      //           />  
      //       </Circle>  

      //       <Text fontSize="5xl" fontWeight="semibold">  
      //       <TextTransition
      //               text={ TEXTS[index % TEXTS.length] }
      //               springConfig={ presets.wobbly }
      //           />                   
      //       </Text>
                    
      //               <Text color={isDark ? "gray.200" : "gray.500"} >I am a software Engineer who enjoys building applications using React, Java, Python and AWS.</Text>
      //               </Flex>
    
                   
      //           <Button mt={8} colorScheme="blue" onClick={() => window.open("https://google.com")} >Contact me</Button>
      //           <Button mt={8}>Resume</Button>

      //        </Box>
  
                        
      //       </Flex>


       
      //  </Stack>

      <Stack>
        <HStack>
          <Text font Size="5xl" fontWeight="semibold">  
            {/* <Typing speed="30" loop="false">
             <p>lol new</p>
            </Typing>       */}

            <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString("Hi 👋").pauseFor(100).deleteAll().typeString("I'm Abdirahman").start();

            }}
            
            />
                     
          </Text>        
          <Text color={isDark ? "gray.200" : "gray.500"} >I am a software Engineer who enjoys building applications using React, Java, Python and AWS.</Text>
      </HStack>
      </Stack>
       
    )
}

export default Header
