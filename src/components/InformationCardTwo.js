import React from "react";
import { Box, Heading, Divider } from "@chakra-ui/react";

function InformationCardTwo(props) {
  return (
    <Box bg="white" boxShadow="lg" borderRadius="10px">
      <Box p="2rem">
        <Heading as="h3" fontSize="1.5em">
          {props.title}
        </Heading>
        <Divider my="1rem" />
        {props.children}
      </Box>
    </Box>
  );
}

export default InformationCardTwo;
