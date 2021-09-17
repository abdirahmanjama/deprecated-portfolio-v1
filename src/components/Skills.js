import { useColorModeValue } from '@chakra-ui/color-mode'
import Icon from '@chakra-ui/icon'
import { Flex, HStack, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import { FaAws, FaDatabase, FaJava, FaReact } from 'react-icons/fa'
import Skill from './Skill'

function Skills() {
    return (

<Stack
      as="main"
  padding="1.5rem"
      color={useColorModeValue("white")}
    //   backgroundColor={`mode.${colorMode}.background`}
      marginLeft="auto"
      marginRight="auto"
      maxWidth="60rem"
    
    >
             <Text fontSize="4xl" mb ="10px" fontWeight="extrabold">Skills</Text>
            <HStack>
            <Skill icon={<Icon  color ="red" p="4" as={ FaJava }  w="16" h="16" />} name="Front-end" description= "React, JavaScript, UI/UX, HTML/CSS, Chakra UI, Material UI"/>
            <Skill icon={<Icon className="fa-spin" color="cyan.300" p="4" as={ FaReact }  w="16" h="16" />} name="Back-end" description= "Java, Spring boot, Python, Elastic, APM, Mongo, Microservices"/>
            <Skill icon={<Icon className="fa-spin" color="yellow.300" p="4" as={ FaAws }  w="16" h="16" />} name="Infrastructure" description= "Linux, AWS, Kubernetes, Helm, CI/CD, DevOps"/>
            </HStack>
           
        </Stack>
    )
}

export default Skills
