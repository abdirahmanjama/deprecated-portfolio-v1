import { Grid, Text } from "@chakra-ui/layout";
import React from "react";

function Error() {
  return (
    <>
      <br />
      <br />
      <Grid
        flexDirection="column"
        marginTop={10}
        justifyContent="center"
        gap={2}
      >
        <Text fontSize="5xl">Page not found</Text>
        <Text fontSize="2xl" marginTop={30}>
          Sorry, we couldn&apos;t find the page you were looking for. This is
          either because:
        </Text>

        <ul>
          <Text marginStart="2em" fontSize="2xl">
            1. There is an error in the URL entered into your web browser.
            Please check the URL and try again.
          </Text>
          <Text fontSize="2xl" marginStart="2em">
            2. The page you are looking for has been moved or deleted.
          </Text>
        </ul>

        <Text fontSize="2xl">
          {" "}
          You can return to my homepage by clicking{" "}
          <a href="/">
            <strong>here</strong>
          </a>
          .
        </Text>
      </Grid>
    </>
  );
}

export default Error;
