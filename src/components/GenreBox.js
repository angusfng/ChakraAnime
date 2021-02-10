import React from "react";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";

function GenreBox(props) {
  const color = () => {
    if (props.color % 2 === 0) {
      return "blue.400";
    }
    return "blue.200";
  };

  return (
    <LinkBox>
      <Box bg={color} borderRadius="5px" mr="7px" my="7px" px="10px" py="7px" boxShadow="md">
        <LinkOverlay href="#">
          <Text fontSize="1.1em" color="white" fontWeight="semibold">
            {props.children}
          </Text>
        </LinkOverlay>
      </Box>
    </LinkBox>
  );
}

export default GenreBox;
