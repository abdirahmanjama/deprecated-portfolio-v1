import React from "react";
import { Stack, IconButton, Link, Flex, Text, Box } from "@chakra-ui/react";
import data from "../config/data/data";

export default function Footer() {
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
      >
        {data.author.accounts.map((sc, i) => (
          <IconButton
            key={i}
            flexDirection="row"
            as={Link}
            isExternal
            href={sc.url}
            aria-label={sc.label}
            colorScheme={sc.type}
            icon={sc.icon}
            variant="ghost"
            size="lg"
            isRound={true}
          />
        ))}
      </Stack>
      <Box mb={5}>
        <Text>
          © {year} • {data.author.name}
        </Text>
      </Box>
    </Flex>
  );
}
