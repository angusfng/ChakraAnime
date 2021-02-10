import React from "react";
import { Alert, Heading } from "@chakra-ui/react";

function AlertHeading(props) {
  return (
    <Alert
      colorScheme="blue"
      variant="left-accent"
      color="blue.700"
      my="1rem"
      borderRadius="5px"
      boxShadow="md"
    >
      <Heading as="h3" size="md">
        {props.children}
      </Heading>
    </Alert>
  );
}

export default AlertHeading;
