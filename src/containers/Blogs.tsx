import { useColorModeValue } from "@chakra-ui/color-mode";
import { Stack, Text } from "@chakra-ui/layout";
import React from "react";
import Blog from "../components/Blog";
import data from "../config/data/data";

export default function Blogs() {
  return (
    <>
      <Stack
        as="main"
        color={useColorModeValue("white, black", "inherit")}
        mb="100"
        w="100%"
      >
        <Text
          fontSize={"3xl"}
          fontWeight="extrabold"
          textAlign="left"
          align="start"
          id="blogs"
          w="100%"
        >
          Featured Blogs
        </Text>
        <br />
        <Stack>
          {data.blogs.map((blog) => {
            return (
              <>
                <Blog
                  key={blog.id}
                  title={blog.title}
                  tags={blog.tags}
                  description={blog.description}
                  article_url={blog.articleUrl}
                />
                <br />
              </>
            );
          })}
        </Stack>
      </Stack>
    </>
  );
}
