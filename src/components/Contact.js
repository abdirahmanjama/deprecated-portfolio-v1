import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React from "react";

function Contact() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex
    //   backgroundColor={`mode.${colorMode}.background`}
    marginLeft="auto"
    marginRight="auto"
    maxWidth="72rem"
    
    mr="0"
    w='100%' 
    mb={10}
    flexDirection="column"

  >
    <Text fontSize="4xl" mb="10px" fontWeight="extrabold">
      Contact me
    </Text>
    <form>

    <FormControl id="subject">
      <FormLabel>Subject</FormLabel>
      <Input placeholder="" />
    </FormControl>
    <br/>
    <FormControl id="first-name">
      <FormLabel>First name</FormLabel>
      <Input placeholder="" />
    </FormControl>
    <br/>
    <FormControl id="email-address" isRequired>
      <FormLabel>Email address</FormLabel>
      <Input placeholder="" />
    </FormControl>
    <br/>
    <FormControl id="message">
    <FormLabel>Message</FormLabel>

    <Textarea
              id='message'
              type='textarea'
              name='message'
              h={300}
              resize='none'
            />    
    </FormControl>
    <br/>
    
    <FormControl>
            <Button type='submit'  width='100%' h={55} mt={5}>
              Submit
            </Button>
          </FormControl>
    </form>
</Flex>
  );
}

export default Contact;
