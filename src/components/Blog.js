import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import { Tag } from "@chakra-ui/tag";
import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

function Blog({ title, description, tags, article_url }) {
  const { colorMode } = useColorMode();
  const [isNotMobile] = useMediaQuery("(min-width:760px)");

  return (
    <Box
      p={5}
      _hover={{ shadow: "md", textDecoration: "none" }}
      borderWidth="1px"
      borderRadius="8px"
    >
      <Flex>
        <Heading fontSize="xl" color={`mode.${colorMode}.text`}>
          {title}
        </Heading>
        <Spacer />

        <IconButton
          as={FaExternalLinkSquareAlt}
          size="25px"
          width="1.5rem"
          height="1.5rem"
          cursor="pointer"
          onClick={() => {
            window.open(article_url, "_blank");
          }}
        />
      </Flex>

      <Text mt={3} color={`mode.${colorMode}.subtext`}>
        {description}
      </Text>

      <Stack spacing={2} mt={1} isInline alignItems="center">
        {tags.split(",").map((tag) => (
          <Tag
            size="sm"
            padding="0 3px"
            key={tag}
            color="#4299E1"
            bgColor={`mode.${colorMode}.tagBG`}
          >
            {tag}
          </Tag>
        ))}
      </Stack>
    </Box>
  );
}

export default Blog;
