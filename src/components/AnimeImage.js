import React from "react";
import { LinkBox, Box, Image, LinkOverlay, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function AnimeImage({image_url, title, idx}) {
  return (
    <LinkBox>
      <Box
        color="gray.500"
        _hover={{
          color: "orange.600",
        }}
      >
        <Image
          h="16rem"
          w="12rem"
          src={image_url}
          alt={`Airing anime ${idx}`}
          borderRadius="5px"
          boxShadow="md"
        />
        <LinkOverlay as={RouterLink} to="/anime">
          <Text fontWeight="semibold" mt={1}>{title}</Text>
        </LinkOverlay>
      </Box>
    </LinkBox>
  );
}

export default AnimeImage;
