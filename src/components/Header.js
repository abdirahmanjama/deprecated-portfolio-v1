import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import React from 'react'
import {
  Box,
  Button,
  Flex,
  IconButton,
  Switch,
  Text,
  useDisclosure,


} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';


export default function Header() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark';
  const [toggle, setToggle] = useState('none')
  return (
    <>
      {/* <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} width="100%" position="sticky">

        <Flex h={16} alignItems={'center'} justify='space-between'>
          
        <Text m={0} p={0} textAlign="center" fontSize="2xl" >Abdirahman Jama</Text>

      <IconButton icon = { isDark ? <FaSun/> : <FaMoon/> } isRound="true"  onClick={toggleColorMode}></IconButton>
        </Flex>

      </Box> */}

      <Flex>
        <Flex
        bg={useColorModeValue('gray.100', 'gray.900')} width="100vw"
          top="1rem"
          right="1rem"
          alignItems="center"
          justify="flex-end"
          pr="10"
        
        >
          <Flex 
                display={['none', 'none', 'flex', 'flex']}   
                 
              >
            <NavLink to="/">
              <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              >
                Home
              </Button>
            </NavLink>

            <NavLink to="/about">
              <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
              >
                About

              </Button>
            </NavLink>    
            <NavLink to="/blogs">
              <Button
              as="a"
              variant="ghost"
              aria-label="Blogs"
              my={5}
              w="100%"
              >
                Blogs
              </Button>
            </NavLink>
          </Flex>

          <IconButton icon = { isDark ? <FaSun/> : <FaMoon/> } isRound="true"  onClick={toggleColorMode}></IconButton>

          <IconButton 
            aria-label="Open Menu"
            size="lg"
            mr={2}
            icon={<HamburgerIcon/>}
            display={['flex', 'flex', 'none', 'none']}
            onClick={() => {
              setToggle('flex')
            }}
          />


        </Flex>

      <Flex
        w="100vw"
        h="100vh"
        bgColor={isDark ? "black" : "white"}
        zIndex="200"
        opacity="0.95"
        top="0"
        left="0"
        overflow="auto"
        position="fixed"
        flexDirection="column"
        
        align="center"
        display = {toggle}

      >
        <Flex
        mt={2} mr={2} size="lg" justify="flex-end"
        >
        
      <Flex width="100" direction="column">

        
        <Flex 
        direction="column"
        alignItems="center"
        display={['flex', 'flex', 'flex', 'flex']}    
              >
                
                <IconButton
          display={['flex', 'flex', 'none', 'none']}
          onClick={() => {
            setToggle('none')
          }}
          ><CloseIcon/></IconButton>
        </Flex>
            <NavLink to="/">
              <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              >
                Home
              </Button>
            </NavLink>

            <NavLink to="/about">
              <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
              >
                About

              </Button>
            </NavLink>    
            <NavLink to="/blogs">
              <Button
              as="a"
              variant="ghost"
              aria-label="Blogs"
              my={5}
              w="100%"
              >
                Blogs
              </Button>
            </NavLink>
          </Flex>

        </Flex>
      </Flex>
      </Flex>
     
    </>
  );
}
    
