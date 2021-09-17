import { Image } from '@chakra-ui/image'
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
        color={useColorModeValue("white, black")}
      //   backgroundColor={`mode.${colorMode}.background`}
        marginLeft="auto"
        marginRight="auto"
        maxWidth="72rem"
        paddingTop="3rem"
        
      >
    <Container  maxW='6xl'>
      <Center mt={20} w='auto'>
        <Heading as='h1' fontSize={['4xl', '5xl', '6xl', '8xl']} letterSpacing={2} lineHeight={1.2}>
          I design & develop beautiful user {' '}
          <Text bg={bgColor} color={color} w='auto' display='inline'>
            experiences
          </Text>
        </Heading>

      </Center>  
      <chakra.div>
        <Text fontSize='lg'>Software Engineer</Text>
        <Link href="https://instagram.com/abdirahmanjama" target="_blank">
          @abdirahmancodes
        </Link>
      </chakra.div>
    </Container>
    </Stack>
    )
}

export default Hero
