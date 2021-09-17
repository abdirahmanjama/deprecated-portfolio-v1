import { Box, Flex, Heading } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import Skills from './Skill';


function Profile() {

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

    return (
       <Flex  w="100%" maxWidth={ { base: "100vh", md: "130vh", lg: "130vh", xl: "130vh"}}>
           <Box alignSelf="center" px="32" py="16">
               <Heading fontWeight="extrabold" color="cyan.500" size="4.x">
                   
               </Heading>
               <Flex>
              

               </Flex>
           </Box>
       </Flex>
    )
}

export default Profile
