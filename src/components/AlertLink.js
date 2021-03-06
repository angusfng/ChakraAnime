import React from "react";
import { Alert, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

function AlertLink(props) {
  return (
    <LinkBox>
      <Alert
        _hover={{
          color: "orange.600",
        }}
        colorScheme="orange"
        variant="left-accent"
        d="flex"
        justifyContent="space-between"
        color="orange.400"
        my="1rem"
        borderRadius="5px"
        boxShadow="md"
      >
        <Heading as="h3" size="md">
          <LinkOverlay as={RouterLink} to={`/search/${props.type}/None`}>
            {props.children}
          </LinkOverlay>
        </Heading>
        <ChevronRightIcon boxSize={7} />
      </Alert>
    </LinkBox>
  );
}

export default AlertLink;
