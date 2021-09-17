import { useColorMode } from '@chakra-ui/color-mode'
import { Circle, Stack, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'

function Header() {

    const {colorMode} = useColorMode(); 
    const isDark = colorMode === 'dark';

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");
    
    return (
       <Stack>
           <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/>
           <Flex direction={!isNotSmallScreen ? "row" : "column"} 
                        spacing="200px" p={isNotSmallScreen ? "32" : "0"}
                        alignSelf="flex-start">


                <Box mt={isNotSmallScreen ? "0" : "16"} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi 👋, I am</Text>
                    <Text fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)">Abdirahman Jama</Text>
   
             </Box>
            </Flex>


       
       </Stack>
    )
}

export default Header
