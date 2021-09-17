import { Center, Container, Heading, Link, Text, Stack } from '@chakra-ui/layout'
import { chakra, useColorModeValue } from '@chakra-ui/system'
import React from 'react'


function Hero() {
      const bgColor = useColorModeValue('green.100', 'green.100')
  const color = useColorModeValue('black', 'black')
    return (

        <Stack
        as="main"
        padding="1.5rem"
        color={useColorModeValue("white")}
      //   backgroundColor={`mode.${colorMode}.background`}
        marginLeft="auto"
        marginRight="auto"
        maxWidth="60rem"
        paddingTop="3rem"
      >
        <Container h={{ sm: '70vh', md: '70vh', lg: '50vh' }} maxW='6xl'>
      <Center my={20} w='auto'>
        <Heading as='h1' fontSize={['4xl', '5xl', '6xl', '8xl']} letterSpacing={2} lineHeight={1.2}>
          I design & build beautiful web{' '}
          <Text bg={bgColor} color={color} w='auto' display='inline'>
            experiences
          </Text>
        </Heading>
      </Center>

      
  
    </Container>
    </Stack>
    )
}

export default Hero
