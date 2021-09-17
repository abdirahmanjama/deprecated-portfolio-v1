import { useColorMode } from '@chakra-ui/color-mode'
import { Button, Image } from '@chakra-ui/react'
import { Circle, Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import profile from './avatars.png';

function Header() {

    const {colorMode} = useColorMode(); 
    const isDark = colorMode === 'dark';

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");
    
    return (
       <Stack>
           <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end">           
             
            </Circle>  
           <Flex direction={!isNotSmallScreen ? "row" : "column"} 
                        spacing="200px" p={isNotSmallScreen ? "32" : "0"}
                        alignSelf="flex-start">


                <Box mt={isNotSmallScreen ? "0" : "16"} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi 👋, I am</Text>
                    <Text fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)">Abdirahman Jama</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"} >Software Engineer who enjoys building applications using React, Java, Python and AWS. Ex-YouTuber</Text>
                <Button mt={8} colorScheme="blue" onClick={() => window.open("https://google.com")} >Contact me</Button>
                <Button mt={8}>Resume</Button>

             </Box>
             <Image
                    alignSelf="center" mt={isNotSmallScreen ? "0" : "12"}
                    mb = {isNotSmallScreen ? "0" : "12"} borderRadius="full"
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src={profile}
                /> 
                        
            </Flex>


       
       </Stack>
    )
}

export default Header
