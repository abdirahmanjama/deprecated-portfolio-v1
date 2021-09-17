import Icon from '@chakra-ui/icon'
import { HStack, Stack } from '@chakra-ui/layout'
import React from 'react'

import { FaInstagram, FaLinkedin, FaMedium, FaGithub} from 'react-icons/fa'

function Socials() {
    return (
        <HStack spacing="24">
            <Icon as={FaInstagram} boxSize="50"/>
            <Icon as={FaLinkedin} boxSize="50"/>
            <Icon as={FaGithub} boxSize="50"/>
            <Icon as={FaMedium} boxSize="50"/>

        </HStack>
    )
}

export default Socials
