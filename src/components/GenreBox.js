import React from "react";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function GenreBox(props) {
  const color = () => {
    if (props.color % 2 === 0) {
      return "blue.400";
    }
    return "blue.200";
  };

  return (
    <LinkBox>
      <Box
        bg={color}
        borderRadius="5px"
        mr="7px"
        my="7px"
        px="10px"
        py="7px"
        boxShadow="md"
      >
        <Text fontSize="1.1em" color="white" fontWeight="semibold">
          <LinkOverlay as={RouterLink} to={`/search/genre/${props.id}`}>
            {props.children}
          </LinkOverlay>
        </Text>
      </Box>
    </LinkBox>
  );
}

export default GenreBox;
