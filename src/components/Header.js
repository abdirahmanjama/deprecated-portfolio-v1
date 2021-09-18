import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import React from 'react'
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,


} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';



export default function Header() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} width="100%" position="sticky">
        <Flex h={16} alignItems={'center'} justify='flex-end'>
          
         
      <IconButton icon = { isDark ? <FaSun/> : <FaMoon/> } isRound="true"  onClick={toggleColorMode}></IconButton>
        </Flex>

      </Box>

     
    </>
  );
}
    
