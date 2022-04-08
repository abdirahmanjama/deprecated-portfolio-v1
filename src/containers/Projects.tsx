import { Grid, Stack, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

export default function Projects() {
  const [isNotMobile] = useMediaQuery("(min-width:760px)");

  return (
    <Stack id="projects">
      <Text fontSize={"3xl"} mb="10px" fontWeight="extrabold">
        Projects
      </Text>

      <Grid
        templateColumns={isNotMobile ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
        gap={2}
        w="100%"
        mb={10}
      ></Grid>
    </Stack>
  );
}
