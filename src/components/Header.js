import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import React, { useState } from "react";
import { Button, Flex, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [toggle, setToggle] = useState("none");

  return (
    <>
      <Flex
        width="100vw"
        borderBottomColor={useColorModeValue("white", "blue.900")}
        boxShadow={"md"}
      >
        <Flex
          bg={useColorModeValue("white")}
          width="100%"
          top="1rem"
          alignItems="center"
          justify="flex-end"
        >
          <Flex display={["none", "none", "flex", "flex"]} alignItems="center">
            <Link to="/">
              <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
                Home
              </Button>
            </Link>

            <HashLink smooth to="/#blogs">
              <Button as="a" variant="ghost" aria-label="Blogs" my={5} w="100%">
                Blogs
              </Button>
            </HashLink>

            <HashLink smooth to="/#contact">
              <Button as="a" variant="ghost" aria-label="Blogs" my={5} w="100%">
                Contact
              </Button>
            </HashLink>
          </Flex>

          <IconButton
            icon={isDark ? <FaSun /> : <FaMoon />}
            isRound="true"
            outline="none !important"
            border="none !important"
            boxShadow="none !important"
            background="none"
            onClick={toggleColorMode}
          ></IconButton>

          {/* <Switch onClick={colorMode==="light"}/> */}

          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            background="none"
            icon={<HamburgerIcon />}
            display={["flex", "flex", "none", "none"]}
            onClick={() => {
              setToggle("flex");
            }}
          />
        </Flex>

        <Flex
          w="100%"
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
          display={toggle}
        >
          <Flex mt={2} size="lg" justify="flex-end">
            <Flex width="100" direction="column">
              <Flex
                direction="column"
                alignItems="center"
                display={["flex", "flex", "flex", "flex"]}
              >
                <IconButton
                  display={["flex", "flex", "none", "none"]}
                  onClick={() => {
                    setToggle("none");
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Flex>
              <Link to="/">
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Home"
                  my={5}
                  w="100%"
                  onClick={() => {
                    setToggle("none");
                  }}
                >
                  Home
                </Button>
              </Link>

              <HashLink to="/#blogs">
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Blogs"
                  my={5}
                  w="100%"
                  onClick={() => {
                    setToggle("none");
                  }}
                >
                  Blogs
                </Button>
              </HashLink>

              <HashLink to="/#contact">
                <Button
                  as="a"
                  variant="ghost"
                  aria-label="Contact"
                  my={5}
                  w="100%"
                  onClick={() => {
                    setToggle("none");
                  }}
                >
                  Contact
                </Button>
              </HashLink>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
