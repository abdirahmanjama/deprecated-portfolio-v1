import React from 'react';
import { Stack, IconButton, Link, Flex, useColorModeValue, Spacer, Text } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'
import siteConfig from '../config/site-config';
import { NavLink } from 'react-router-dom';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const Footer = props => {
  const footColor = useColorModeValue('gray.200', 'gray.800')
  const year = new Date().getFullYear() || '2021'
  return (
    <Flex
    as='footer'
    // h={24}
    // justifyContent='center'
    borderTop='1px'
    // alignItems='center'
    // flexDirection='column'
    
    >
  
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      p={4}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      <Text marginRight="24px">
      Built by Abdirahman Jama ©{year}
      </Text>
      {siteConfig.author.accounts.map(sc => (
        <IconButton
          
          as={Link}
          isExternal
          href={sc.url}
          aria-label={sc.label}
          size="lg"
          colorScheme={sc.type}
          icon={sc.icon}
          {...iconProps}
        />
      ))}
    </Stack>
 
  </Flex>
  );
};

export default Footer;