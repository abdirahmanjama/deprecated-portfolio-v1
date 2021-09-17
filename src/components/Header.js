import { useColorMode, useColorModeValue } from '@chakra-ui/color-mode'
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import { Spacer } from "@chakra-ui/layout";
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Image,

} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import avatar from '../config/img/avatars.png'
import { FaMoon, FaSun } from 'react-icons/fa';

const NavLink = () => (
  
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
  </Link>
);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = ['Dashboard', 'Projects', 'Team'];
  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} width="100%" position="fixed">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box><Image src ={avatar} height="50px" ></Image></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Spacer></Spacer>
      <IconButton icon = { isDark ? <FaSun/> : <FaMoon/> } isRound="true"  onClick={toggleColorMode}></IconButton>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>

     
    </>
  );
}
    
