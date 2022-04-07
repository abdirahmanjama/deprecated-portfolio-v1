import React from "react";
import { Stack, IconButton, Link, Flex, Text, Box } from "@chakra-ui/react";

import data from "../config/data/data";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

export default function Footer(props) {
  const year = new Date().getFullYear() || "2021";
  return (
    <Flex
      as="footer"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        as="footer"
        isInline
        spacing={[1, 2]}
        p={4}
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        {data.author.accounts.map((sc, i) => (
          <IconButton
            key={i}
            flexDirection="row"
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            size="lg"
            colorScheme={sc.type}
            icon={sc.icon}
            {...iconProps}
          />
        ))}
      </Stack>
      <Box mb={5}>
        <Text>© {year} • Abdirahman Jama</Text>
      </Box>
    </Flex>
  );
}
