import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Heading, Spacer, Stack, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React from "react";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import PropTypes from "prop-types";

function Blog({ title, description, tags, article_url }) {
  const { colorMode } = useColorMode();

  return (
    <Box p={5} borderWidth="1px" borderRadius="8px">
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

Blog.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  article_url: PropTypes.string,
  tags: PropTypes.string,
};

export default Blog;
