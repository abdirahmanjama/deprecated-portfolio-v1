import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, HStack, Text, VStack } from '@chakra-ui/layout'
import React from 'react'

function Skills({ name, icon, description }) {
    return (
        <Box>
            <HStack
            p={4}
            bg={useColorModeValue("white", "gray.800")}
            rounded="xl"
            borderWidth="1px"
            borderColor={useColorModeValue("gray.100", "gray.700")}
            w="100%"
            textAlign="left"
            align="start"
            spacing={4}
            _hover={{ shadow: "md" }}
          >
            <Box
              rounded="lg"
              p={2}
              position="relative"
              overflow="hidden"
              lineHeight={0}
              boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
            >
              <Box
                
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                opacity={0.25}
              ></Box>
               
               {icon}
                
                
              
            </Box>
            <VStack
              align="start"
              justify="flex-start"
              spacing={1}
              maxW="lg"
              h="100%"
            >
              <VStack spacing={0} align="start" flexGrow="1">
                <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                  {name}
                </Text>
                <Text
                  fontSize="sm"
                  color={useColorModeValue("gray.500", "gray.200")}
                >
                  {description}
                </Text>
              </VStack>
            </VStack>
          </HStack>
        </Box>
    )
}

export default Skills
