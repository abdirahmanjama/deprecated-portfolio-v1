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
    <Flex as="footer"
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
        {siteConfig.author.accounts.map((sc) => (
          <IconButton
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
      <Text>© {year} • Abdirahman Jama</Text>

    </Flex>
  );
};

export default Footer;
