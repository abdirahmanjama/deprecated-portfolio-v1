import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Flex, Stack, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@chakra-ui/toast";

function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const toast = useToast();
  const form = useRef();
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "contact_service",
        "template_tnsxy27",
        form.current,
        "user_hI0deGE84gQse29pqrE4t"
      )
      .then(
        (result) => {
          toast({
            title: `Success 🚀`,
            duration: 5000,
            status: "success",
            isClosable: true,
          });
        },

        (error) => {
          toast({
            title: `Error 🥴`,
            status: "error",
            isClosable: true,
          });
        }
      );

    clearState();
  };

  function clearState() {
    setEmail(" ");
    setMessage(" ");
    setSubject(" ");
    setName(" ");
  }

  return (
    <Flex
      marginLeft="auto"
      marginRight="auto"
      maxWidth="72rem"
      mr="0"
      w="100%"
      mb={10}
      flexDirection="column"
    >
      <Text fontSize="4xl" mb="10px" fontWeight="extrabold">
        Contact me
      </Text>
      <form ref={form} onSubmit={sendEmail}>
        <FormControl id="subject">
          <FormLabel>Subject</FormLabel>
          <Input
            id="subject"
            placeholder=""
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
        </FormControl>
        <br />
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input
            id="name"
            placeholder=""
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </FormControl>
        <br />
        <FormControl id="email" isRequired >
          <FormLabel>Email address</FormLabel>
          <Input
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder=""
            name="email"
            value={email}
          />
        </FormControl>
        <br />
        <FormControl id="message">
          <FormLabel>Message</FormLabel>

          <Textarea
            id="message"
            type="textarea"
            value={message}
            name="message"
            h={300}
            resize="none"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </FormControl>
        <br />

        <FormControl>
          <Button type="submit" width="100%" h={55} mt={5} value="Send">
            Submit
          </Button>
        </FormControl>
      </form>
    </Flex>
  );
}

export default Contact;
