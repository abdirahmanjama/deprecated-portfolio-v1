import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { Tag } from "@chakra-ui/tag";
import React from "react";

function Blog({ title, description, tags, article_url }) {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={5}
      _hover={{ shadow: "md", textDecoration: "none" }}
      href={article_url}
      cursor="pointer"
      borderWidth="1px"
      borderRadius="8px"
    >
      <Heading fontSize="xl" color={`mode.${colorMode}.text`}>
        {title}
        
      </Heading>
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
