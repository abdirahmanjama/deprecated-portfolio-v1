import { Flex } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'


function Profile() {

    const [isNotSmallScreen] = useMediaQuery("(min-width:600px)");

    return (
       <Flex direction={isNotSmallScreen ? "row" : "column"} w="100%" maxWidth={ { base: "100vh", md: "130vh", lg: "130vh", xl: "130vh"}}>

       </Flex>
    )
}

export default Profile
