import { useColorModeValue } from "@chakra-ui/color-mode";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";

function Contact() {
  return (
    <Flex
    //   backgroundColor={`mode.${colorMode}.background`}
    marginLeft="auto"
    marginRight="auto"
    maxWidth="72rem"
    paddingTop="3rem"
    mr="0"

  >
    <Text fontSize="4xl" mb="10px" fontWeight="extrabold">
      Contact
    </Text>
</Flex>
  );
}

export default Contact;
