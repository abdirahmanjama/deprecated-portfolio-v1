import React from "react";
import {
  Stack,
  IconButton,
  Link,
  Flex,
  Text,
} from "@chakra-ui/react";

import siteConfig from "../config/site-config";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true,
};

const Footer = (props) => {
  const year = new Date().getFullYear() || "2021";
  return (
    <Flex as="footer">
      <Stack
        as="footer"
        isInline
        spacing={[1, 2]}
        p={4}
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        <Text marginRight="24px">Abdirahman Jama © {year}</Text>
        {siteConfig.author.accounts.map((sc) => (
          <IconButton
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
    </Flex>
  );
};

export default Footer;
