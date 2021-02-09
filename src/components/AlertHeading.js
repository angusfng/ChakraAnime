import React from "react";
import { Alert, Heading } from "@chakra-ui/react";

function AlertHeading(props) {
  return (
    <Alert
      colorScheme="blue"
      variant="left-accent"
      d="flex"
      justifyContent="space-between"
      color="blue.600"
    >
      <Heading as="h3" size="md">
        {props.children}
      </Heading>
    </Alert>
  );
}

export default AlertHeading;
